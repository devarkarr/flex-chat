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
import { newPasswordSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthError from "./auth-error";
import AuthSuccess from "./auth-success.";
import { newPasswordAction } from "@/actions/new-password.action";
import { useSearchParams } from "next/navigation";

const NewPasswordForm = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [isPending, setPending] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      token: token,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    setError("");
    setSuccess("");
    setPending(true);
    startTransition(async () => {
      const response = await newPasswordAction(form.getValues());
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending} className="w-full">
          new password
        </Button>
      </form>
    </Form>
  );
};

export default NewPasswordForm;
