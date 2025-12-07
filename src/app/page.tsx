import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import React from "react";

const page = async () => {
  await requireAuth();
  const data = await caller.getUsers()
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(data,null,5)}
      
    
    </div>
  );
};

export default page;
