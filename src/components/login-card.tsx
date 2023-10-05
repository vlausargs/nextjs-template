"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/shared/service/auth";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const router = useRouter();
  const mutation = useMutation(login, {
    onSuccess: (result, variables, context) => {
      localStorage.setItem("token", result?.data?.token || "");
      router.push("/dashboard/home");
    },
    onError: (error, variables, context) => {
      // console.log(error);
    },
  });
  const handleSubmit = async () => {
    mutation.mutate();
  };
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome to APP please login first!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSubmit}>Sign In</Button>
        </CardFooter>
      </Card>
    </>
  );
}
