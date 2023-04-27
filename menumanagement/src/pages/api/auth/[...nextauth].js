import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      let isAllowedToSignIn = false;
      const allowedUser = ['YOURGITHUBACCID'];
      console.log('user', user);
      if (allowedUser.includes(String(user.id))) {
        isAllowedToSignIn = true;
      } else {
        isAllowedToSignIn = false;
      }
      return isAllowedToSignIn;
    },
  },
};

export default NextAuth(authOptions);
