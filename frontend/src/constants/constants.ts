export const ServerURL = `${import.meta.env.VITE_SERVER_ORIGIN}/api`
export const ACCESSS_TOKEN_URI = "https://oauth2.googleapis.com/token";
export const AUTH_URI = "https://accounts.google.com/o/oauth2/auth";
export const REDIRECT_URI = `${ServerURL}/users/google-oauth-callback`
export const REFRESH_TOKEN_URI = "https://oauth2.googleapis.com/token";
export const REVOKE_TOKEN_URI = "https://oauth2.googleapis.com/revoke";
