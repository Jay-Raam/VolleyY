import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-4 flex-col">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="outline" size="lg">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
