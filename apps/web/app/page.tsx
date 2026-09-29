
import { prismaClient } from  "db/client"
import { connection } from "next/server";

//to generate page dynamically instead of static
// export const dynamic = "force-dynamic";

export default async function Home() {
  await connection();
  const users = await prismaClient.user.findMany();

  return (
    <div>
    {JSON.stringify(users)}
    </div>
  );
}