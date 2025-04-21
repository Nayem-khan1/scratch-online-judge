import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login action
    navigate("/problems");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="flex flex-col justify-center p-8 md:p-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
          Scratch Judge
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Solve coding challenges visually. Learn, Practice, and Master with blocks!
        </p>
        <div className="mt-6">
          <Button onClick={() => navigate("/problems")}>Explore Problems</Button>
        </div>
      </div>

      {/* Login Section */}
      <div className="flex justify-center items-center p-6 md:p-12 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
