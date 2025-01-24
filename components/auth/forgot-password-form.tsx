"use client";

import React, { startTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthError from "./auth-error";
import AuthSuccess from "./auth-success.";
import { forgotPasswordAction } from "@/actions/forgot-password.action";

const ForgotPasswordForm = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [isPending, setPending] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {
    setError("");
    setSuccess("");
    setPending(true);
    startTransition(async () => {
      const response = await forgotPasswordAction(form.getValues());
      if (response.error) {
        setError(response.error);
        setPending(false);
        return;
      }
      if (response.success) {
        setSuccess(response.success);
        setPending(false);
        form.reset();
        return;
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <AuthError message={error} />
        <AuthSuccess message={success} />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          Forgot password
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
