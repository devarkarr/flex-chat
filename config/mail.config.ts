import { Resend } from "resend";

const resend = new Resend(
  process.env.NEXT_RESENT_API || "re_2k8nESfu_BFufHgHLjXuqd1uZfU7iVBd9"
);

/**
 * send verification mail if not email verification valid
 * @param email
 * @param token
 */
export const sendVerificationMail = async (email: string, token: string) => {
  console.log(email);
  const response = await resend.emails.send({
    from: `${process.env.NEXT_MAIL_NAME} <${process.env.NEXT_MAIL_ADDRESS}>`,
    to: "arkarlin486@gmail.com",
    subject: `Email Verification `,
    html: `<p>it works! <a href="${process.env.NEXT_PUBLIC_URL}/email-verification?token=${token}">click</a></p>`,
  });
  if (response.error) {
    return {
      error: response.error.message,
    };
  }
  return {
    success: "Check your inbox",
  };
};

/**
 * send reset password token to email
 * @param email
 * @param password
 */
export const sendResetPasswordMail = async (email: string, token: string) => {
  console.log(email);
  const response = await resend.emails.send({
    from: `${process.env.NEXT_MAIL_NAME} <${process.env.NEXT_MAIL_ADDRESS}>`,
    to: "arkarlin486@gmail.com",
    subject: `Reset Password Verification `,
    html: `<p>it works! <a href="${process.env.NEXT_PUBLIC_URL}/new-password?token=${token}">click</a></p>`,
  });
  if (response.error) {
    return {
      error: response.error.message,
    };
  }
  return {
    success: "Check your inbox",
  };
};
