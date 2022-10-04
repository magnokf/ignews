import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	// A database is optional, but required to persist accounts in a database
	callbacks: {
		async signIn({ user, account, profile, credentials }) {
			const { email } = user;

			try {
				await fauna.query(
					q.If(
						q.Not(
							q.Exists(
								q.Match(q.Index("user_by_email"), q.Casefold(user.email))
							)
						),
						q.Create(q.Collection("users"), { data: { email } }),
						q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
					)
				);
			} catch {
				console.log("error: user already exists");
				return false;
			}

			return true;
		},
	},
});
