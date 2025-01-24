import { registerSchema } from "@/schema/auth.schema";
import { z } from "zod";

/**
 * login action
 * @param body
 */
export const RegisterAction = async (body: z.infer<typeof registerSchema>) => {
  // validate body
  const payload = registerSchema.safeParse(body);

  // check if body is valid
  if (!payload.success) {
    return {
      error: payload.error,
    };
  }

  return {
    success: true,
  };
};
