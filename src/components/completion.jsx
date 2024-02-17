// app/completion.tsx

"use client";

import { useCompletion } from "ai/react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Completion() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });

  return (
    <div className="w-full">
      <ScrollArea className="h-64 text-white">
        <p className="text-white mono-regular-h px-3">{completion}</p>
      </ScrollArea>

      <form onSubmit={handleSubmit}>
        <Input
          className="placeholder-neutral-800 mono-regular-h bg-black border-none text-white text-lg border-0 focus:outline-0 w-full"
          placeholder="Enter a prompt here"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
