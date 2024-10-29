'use server';
import bcrypt from 'bcrypt';
import { actionClient } from '@/lib/safe-action';
import { RegisterSchema } from '@/validations/register-schema';
import { db } from '..';
import { eq } from 'drizzle-orm';
import { users } from '../schema';

export const emailRegister = actionClient
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword', hashedPassword);

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    console.log('existingUser', existingUser);

    console.log('email', email);

    if (existingUser?.email === email) {
      // if(!existingUser.emailVerified){

      // }
      return {
        error: 'Email already exists',
      };
    }

    return { success: email };
  });
