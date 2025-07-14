import { useEffect, useState } from "react";
import LoginRoute from "./routes/login";
import { Main } from "./routes/main";

export default function Router() {
    // determine if user is logged in
    const [user, setUser] = useState("");
    const loggedIn = isLoggedIn(user);

    useEffect(() => {
        setUser(loadUserState());
    }, []);

    useEffect(() => {
        console.log("user state", user);
        console.log("logged in", loggedIn);
    }, [user]);

    return loggedIn ? <Main></Main> : <LoginRoute></LoginRoute>;
}

function isLoggedIn(user: string) {
    return user != null && user != "" && user != undefined;
}

function loadUserState(): string {
    const localStorageKey = "weight-tracker";
    try {
        const raw = localStorage.getItem(localStorageKey);
        return raw as string;
    } catch (e) {
        console.error("failed to parse user object");
        return "";
    }
}
