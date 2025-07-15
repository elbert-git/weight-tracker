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

    return loggedIn ? <Main></Main> : <LoginRoute></LoginRoute>;
}

function isLoggedIn(user: string) {
    return user != null && user != "" && user != undefined;
}

export const localStorageKey = "weight-tracker";
function loadUserState(): string {
    try {
        const raw = localStorage.getItem(localStorageKey);
        return raw as string;
    } catch (e) {
        console.error("failed to parse user object");
        return "";
    }
}
