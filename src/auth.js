import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
      strategy: 'jwt',
    },
    pages: {
        signIn: "/admin",
      },
    providers: [
        CredentialsProvider({
            credentials: {        
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log(credentials)
                if (credentials === null) return null;
                const user = { id: 1, name: "admin" };

                try {
                    if (
                        credentials.username === "admin" &&
                        credentials.password === "admin@9680"
                      ) {
                        return user;
                      } else {
                        return null;
                      }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),

    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
          }
          return token;
        },
        async session({ session, token }) {
          session.user.id = token.id;
          return session;
        },
      },
});