import SignInButton from "@/components/SignInButton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Landing from "@/components/landing/Landing";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return <Landing />;
}
