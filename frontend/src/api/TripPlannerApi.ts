import { ServerURL } from "../constants/constants";
export async function login(username: string, password: string) {
    try {
        const response = await fetch(`${ServerURL}/users/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
            method: "POST"
        })

        return await response.json();
    }
    catch(error) {
        console.log(error);
    }
}
export async function signup(params: object) {
    try {
        const response = await fetch(`${ServerURL}/users/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
            method: "POST"
        })

        return await response.json();
    }
    catch(error) {
        console.log(error);
    }
}