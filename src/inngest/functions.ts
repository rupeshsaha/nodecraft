import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", retries:5 },
  { event: "test/hello.world" }, 
  async ({ event, step }) => {
    
    await step.sleep("wait-a-moment", "10s");




    await step.sleep("workingg", "10s");


    return { message: `Hello ${event.data.email}!` };
  }
);
