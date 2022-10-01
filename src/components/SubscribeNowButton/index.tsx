import styles from "./styles.module.scss";

interface SubscribeNowButtonProps {
	priceId: string;
}

export function SubscribeNowButton({ priceId }: SubscribeNowButtonProps) {
	return (
		<button
			type="button"
			className={styles.subscribeNowButton}>
			Subscribe Now
		</button>
	);
}
