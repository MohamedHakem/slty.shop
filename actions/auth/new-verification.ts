"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    console.log(
      "if(!existingToken) ",
      !existingToken,
      " , existingToken: ",
      existingToken,
    );
    return { error: "كود التفعيل غير صحيح!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "انتهت الصلاحية!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "البريد الالكترني غير مسجل!" };
  }

  const verifiedUser = await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  console.log("الايميل اتفعل تمام: ", verifiedUser.emailVerified);

  return { success: "Email verified!" };
};
