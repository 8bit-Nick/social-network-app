import styles from "./Preloader.module.css";
import preloader from "../../../img/preloader.svg";

export const Preloader = () => {
	return (
		<div className={styles.preloader}>
			<img src={preloader} alt="preloader" />
		</div>
	);
};
