import { Toaster } from "sonner";
import { Portfolio } from "./Portfolio";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Portfolio />
      </main>
      <Toaster />
    </div>
  );
}


