import { PrismaClient } from "@/prisma/generated/mongodb";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { MongoPrisma: PrismaClient };

export const MongoPrisma = globalForPrisma.MongoPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.MongoPrisma = MongoPrisma;

export default MongoPrisma;
