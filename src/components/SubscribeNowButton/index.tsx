import styles from "./styles.module.scss";
import { signIn, useSession } from "next-auth/react";
import { stripe } from "../../services/stripe";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

interface SubscribeNowButtonProps {
	priceId: string;
}

export function SubscribeNowButton({ priceId }: SubscribeNowButtonProps) {
	const session = useSession();

	async function handleSubscribe() {
		if (!session) {
			signIn("github");
			return;
		}
		try {
			const response = await api.post("/subscribe");
			const { sessionId } = response.data;
			const stripe = await getStripeJs();

			await stripe.redirectToCheckout({ sessionId });
		} catch (err) {
			alert(err.message);
		}
	}
	return (
		<button
			type="button"
			className={styles.subscribeNowButton}
			onClick={handleSubscribe}>
			Subscribe Now
		</button>
	);
}
