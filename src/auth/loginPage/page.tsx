import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
// import { useState } from "react";

export default function LoginPage() {
  // const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailUser = event.target.email.value;
    const passwordUser = event.target.password.value;

    if (
      emailUser === "adamJobs123@gmail.com" &&
      passwordUser === "adamjob123"
    ) {
      toast("Login Success", {
        description: "Welcome to dashboard edit portfolio",
      });
      navigate("/dashboard/editPortfolio");
    } else {
      toast("Login Failed", {
        description: "Wrong Email and Password, input again !",
      });
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-md shadow-lg shadow-slate-600">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Log in to edit your portfolio</CardDescription>
        </CardHeader>
        <form onSubmit={(e) => handleLogin(e)}>
          <CardContent>
            <div className="flex flex-col gap-5 mb-3">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jhon@gmail.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*********"
                  required
                />
              </div>
            </div>
            <Link
              to="#"
              className="hover:underline hover:text-blue-600 underline-offset-4 mb-3 inline-block"
            >
              Forgot your password ?
            </Link>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
