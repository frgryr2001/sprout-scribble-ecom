import * as dotenv from 'dotenv';
import 'dotenv/config';
import { defineConfig, type Config } from 'drizzle-kit';

dotenv.config({
  path: '.env.local',
});

export default defineConfig({
  schema: './server/schema.ts',
  out: './server/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
} satisfies Config);
