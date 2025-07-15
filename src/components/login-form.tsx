import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import API from "@/api";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const submit = async () => {
        const userName = (document.getElementById("user")! as HTMLInputElement)
            .value;
        const password = (
            document.getElementById("password")! as HTMLInputElement
        ).value;
        await API.login(userName, password);
        // clear field
        (document.getElementById("password")! as HTMLInputElement).value = "";
    };
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">username</Label>
                                <Input
                                    id="user"
                                    type="user"
                                    placeholder="username"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button
                                    className="w-full"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        submit();
                                    }}
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
