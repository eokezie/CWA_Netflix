import { PrismaClient } from "@prisma/client";

/**
 * This is done to prevent multiple Prisma instance due to Next JS hot reloading.
 * 
 * Since global files are not affected by hot reloading
 */
const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;