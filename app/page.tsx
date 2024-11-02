"use client"
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const textTest = "shbds";
  const goExamplePage = () => {
    console.log("goExamplePage");
    router.push('/examples/music')
  };
  return (
    <div className="w-ful h-screen">
      <div className="flex">
        <ModeToggle />
        <Button variant="link" onClick={goExamplePage}>Link</Button>
      </div>
    </div>
  );
}
