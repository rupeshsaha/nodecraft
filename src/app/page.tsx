
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import Logout from "./Logout";

const page = async () => {
  await requireAuth();
  const data = await caller.getUsers()
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(data,null,5)}
      <Logout/>
    
    </div>
  );
};

export default page;
