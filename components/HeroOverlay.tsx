"use client";

import styles from "./HeroOverlay.module.css";

export default function HeroOverlay() {
    return (
        <div className={styles.fogwrapper}>
            <div className={styles.foglayer_01} id="foglayer_01">
                <div className={styles.image01}></div>
                <div className={styles.image02}></div>
            </div>
            <div className={styles.foglayer_02} id="foglayer_02">
                <div className={styles.image01}></div>
                <div className={styles.image02}></div>
            </div>
            <div className={styles.foglayer_03} id="foglayer_03">
                <div className={styles.image01}></div>
                <div className={styles.image02}></div>
            </div>
        </div>
    );
}
