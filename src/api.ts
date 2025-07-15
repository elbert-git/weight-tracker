import { localStorageKey } from "./router";
const baseUrl = "https://elcloud.lol";
// const baseUrl = "http://localhost:3000";
export default class API {
    static async login(user: string, pass: string) {
        const res = await fetch(`${baseUrl}/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            }),
        });
        const resJson = await res.json();
        if (res.status === 200) {
            localStorage.setItem(localStorageKey, JSON.stringify(resJson));
            window.location.reload();
        } else {
            alert("Sign in failed");
        }
    }
    static logout() {
        localStorage.removeItem(localStorageKey);
        window.location.reload();
    }
    static async submitWeight(num: string) {
        const res = await fetch(`${baseUrl}/append-weight`, {
            method: "POST",
            headers: {
                authorization:
                    "Bearer " +
                    JSON.parse(localStorage.getItem(localStorageKey) as string)
                        .accessToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                weight: num,
            }),
        });
        const resJson = await res.json();
        console.log(resJson);
        if (res.status === 200) {
            alert("submitted");
        } else {
            alert("failed");
        }
    }
}
