import { error } from "console";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESENT_API);

/**
 * send verification mail if not email verification valid
 * @param email
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
