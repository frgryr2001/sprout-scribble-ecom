'use server';

import { eq } from 'drizzle-orm';
import { db } from '..';
import { emailTokens } from '../schema';

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.query.emailTokens.findFirst({
      where: eq(emailTokens.token, email),
    });
  } catch (error) {}
};
export const generateEmailVerificationToken = async (email: string) => {
  const token = crypto.randomUUID();

  const expires = new Date(new Date().getTime() + 1000 * 60 * 60);
};
