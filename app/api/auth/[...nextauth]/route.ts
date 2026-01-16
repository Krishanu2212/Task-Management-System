import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/app/lib/db";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
            username: { label: "Username", type: "text", placeholder: "harkirat@gmail.com" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                // Add logic here to look up the user from the credentials supplied
                const existingUser = await prisma.user.findFirst({
                    where: {
                        username: username,
                        password: password
                    }
                })

                if (existingUser) {
                    return {
                        id: existingUser.id,
                        name: existingUser.name,
                        username: existingUser.username
                    }
                } else {
                    return null
                }
            },
        }),

        // GoogleProvider({
        //     clientId: "asd",
        //     clientSecret: "asd"
        // }),

        // GitHubProvider({
        //     clientId: "asd",
        //     clientSecret: "asd"
        // })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        jwt: async ({ token, account, profile }) => {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                // token.accessToken = account.access_token
                // token.id = profile.id
            }
            return token
        },

        session: async ({ session, token, user }) => {
            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            session.user.id = token.sub
            
            return session
        },

        redirect: async ({ url, baseUrl }) => {
            // Allows relative callback URLs
            console.log(url);
            console.log(baseUrl);
            if (url.startsWith(baseUrl)) return `${baseUrl}/todos`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}