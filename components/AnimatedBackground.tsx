"use client";

import React from "react";
import styles from "./AnimatedBackground.module.css";

const AnimatedBackground = () => {
    return (
        <div className={styles.backgroundContainer} aria-hidden="true">
            <div className={styles.stars} />
            <div className={styles.clouds} />
            <div className={styles.cloudsSecondary} />
        </div>
    );
};

export default React.memo(AnimatedBackground);
