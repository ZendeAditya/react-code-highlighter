"use client";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <main>
      <h2 className="text-center text-lg p-3">React Code Editor!</h2>
      <div className="flex items-center justify-center min-h-screen">
        <CodeEditor />
      </div>
    </main>
  );
}
