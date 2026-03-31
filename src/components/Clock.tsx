import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

export function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <p className={styles.clock}>Heure actuelle: {now.toLocaleTimeString()}</p>;
}
