import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
	const { data: session, status } = useSession();

	session;

	return session ? (
		<button
			type="button"
			className={styles.signInButton}>
			<FaGithub color="#eba417" />
			{session.user.name}
			<FiX
				color="#737380"
				className={styles.closeIcon}
				onClick={() => signOut()}
			/>
		</button>
	) : (
		<button
			type="button"
			className={styles.signInButton}
			onClick={() => signIn("github")}>
			<FaGithub color="#17eb22" />
			Sign in with Github
		</button>
	);
}
