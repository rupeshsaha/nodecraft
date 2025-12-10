"use client"
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import Logout from "./Logout";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const page = () => {
  // await requireAuth();
  const trpc = useTRPC();
  const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())
  
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
      toast.success("Job queued")
    }
  }))

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center gap-4 justify-center">
      {JSON.stringify(data,null,2)}
      <Button disabled={create.isPending} onClick={()=> create.mutate()}>Create Workflow</Button>
      <Logout/>
    
    </div>
  );
};

export default page;
