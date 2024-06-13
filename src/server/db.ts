import { PrismaClient } from "@prisma/client";

import { env } from "@/env";
import { createClient } from "@/lib/utils/supabase/server";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

export const supabase = createClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
