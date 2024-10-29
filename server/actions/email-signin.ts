'use server';
import { actionClient } from '@/lib/safe-action';
import { loginSchema } from '@/validations/login-schema';
import { db } from '..';
import { eq } from 'drizzle-orm';
import { users } from '../schema';

export const emailSignIn = actionClient
  .schema(loginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    if (existingUser?.email !== email) {
      return {
        error: 'Email not found',
      };
    }

    return { success: email };
  });
