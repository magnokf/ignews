import styles from "./home.module.scss";
import Head from "next/head";
import { SubscribeNowButton } from "../components/SubscribeNowButton";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | ig.news</title>
			</Head>
			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>👏 Hey, welcome</span>
					<h1>
						News about the <span>React</span> world.
					</h1>
					<p>
						Get access to all the publications <br />
						<span>for {`$9.90`}</span> month
					</p>
					<SubscribeNowButton />
				</section>
				<img
					src="/images/avatar.svg"
					alt="girl coding"
				/>
			</main>
		</>
	);
}
