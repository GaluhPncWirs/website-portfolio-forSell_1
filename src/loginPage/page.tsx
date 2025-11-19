import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-md shadow-lg shadow-slate-600">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Masuk akun untuk mengedit portfolio anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 mb-3">
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
          </form>
          <Link
            to="#"
            className="hover:underline hover:text-blue-600 underline-offset-4"
          >
            Forgot your password ?
          </Link>
        </CardContent>
        <CardFooter>
          <Button className="w-full" size="lg">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
