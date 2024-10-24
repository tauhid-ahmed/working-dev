import { FcGoogle as GoogleIcon } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignInCard() {
  return (
    <Card className="size-full border-none shadow-none max-w-lg py-10">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <Input placeholder="Enter email address" />
          <Input placeholder="Enter password" />
          <div className="space-y-2">
            <Button className="w-full" size={"lg"}>
              Login
            </Button>
            <span className="block text-center">or</span>
            <Button variant="secondary" size="lg" className="w-full">
              <GoogleIcon />
              Login with Google
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
