import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// const domain = process.env.NEXT_PUBLIC_APP_URL;
const domain = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
console.log("🚀 ~ domain:", domain);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  console.log("🚀 ~ inside sendTwoFactorTokenEmail");
  await resend.emails.send({
    from: "mail@auth-masterclass-tutorial.com",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  console.log("🚀 ~ inside sendPasswordResetEmail ~ email:", email)
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Slty@slty.shop",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  console.log("🚀 ~ inside sendVerificationEmail");
  const confirmLink = `${domain}/new-verification?token=${token}`;
  const res = await resend.emails.send({
    from: "Slty@slty.shop",
    to: email,
    subject: "Slty.shop Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });

  console.log("[sendVerificationEmail] res: ", res);
};
