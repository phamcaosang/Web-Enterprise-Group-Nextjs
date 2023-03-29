import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";




export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
        }),
        // ...add more providers here
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        maxAge: 24 * 60 * 60, // 24 days
        updateAge: 24 * 60 * 60, // 24 hours
    }

}
export default NextAuth(authOptions)