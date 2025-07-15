import { LoginForm } from "@/components/login-form";
export default function LoginRoute() {
    return (
        <div className="w-full flex flex-col items-center justify-center text-3xl font-bold gap-3 p-3">
            <h1 className="w-full text-center">Login</h1>
            <LoginForm className="" />
        </div>
    );
}
