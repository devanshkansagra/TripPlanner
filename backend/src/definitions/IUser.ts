export interface IUser extends Document {
    fullname: string,
    email: string,
    username: string,
    password?: string,
    authProvider?: string,
    accessToken: string,
    refreshToken: string,
    id_token: string,
    generateAccessToken(): string,
    generateRefreshToken(): string,
    generateIdToken(): string,
    save(params: any): Promise<Document>
}