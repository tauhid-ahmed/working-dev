import { FcGoogle as GoogleIcon } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function SignUpCard() {
  return (
    <Card className="size-full border-none shadow-none max-w-lg py-10">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <Input placeholder="Enter email address" />
          <Input placeholder="Enter password" />
          <Input placeholder="Enter confirm password" />
          <p className="flex items-center gap-1">
            <Checkbox className="border-blue-500 size-4 data-[state=checked]:bg-blue-600" />{" "}
            I agree to the terms of service and{" "}
            <Link className="font-medium text-blue-600" href="">
              privacy policy
            </Link>
          </p>
          <div className="space-y-2">
            <Button className="w-full" size={"lg"}>
              Sign up
            </Button>
            <span className="block text-center">or</span>
            <Button variant="secondary" size="lg" className="w-full">
              <GoogleIcon />
              Signup with Google
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
