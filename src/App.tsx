import { useState } from "react";
import styles from "./App.module.css";

interface AppProps {
  lang: string;
}

function App({ lang }: AppProps) {
  const [flag, setFlag] = useState(false);

  const onClick = () => {
    setFlag(true);
  };
  if (!flag) return;

  return (
    <div aria-label="Hello" className={styles.body} onClick={onClick}>
      Hello {lang}
    </div>
  );
}

export default App;
