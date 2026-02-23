"use client";

import styles from "./HeroOverlay.module.css";

export default function HeroOverlay() {
    return (
        <div className={styles.overlayContainer}>
            <div className={styles.clouds} />
        </div>);
}
