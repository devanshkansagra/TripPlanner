import { AUTH_URI, REDIRECT_URI } from "../constants/constants";

export function getAuthorizationURL() {
    const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID

    const baseURL = AUTH_URI;
    const redirectURL = REDIRECT_URI;
    const responseType = "code";

    const scope = [
        "email",
        "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" ");
    const encodedScope = encodeURIComponent(scope);
    const accessType = "offline";
    const prompt = "consent";

    const url =
        `${baseURL}?` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectURL}&` +
        `response_type=${responseType}&` +
        `scope=${encodedScope}&` +
        `access_type=${accessType}&` +
        `prompt=${prompt}`;

    return url;
}