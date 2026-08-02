import "./styles.css";
import { useState, useEffect } from "react";
import DisplayFlag from "./DisplayFlag";

export default function App() {
  const [flags, setFlags] = useState("");
  const fetchData = async () => {
    try {
      const raw_data = await fetch(
        " https://xcountries-backend.labs.crio.do/all"
      );
      const final_data = await raw_data.json();
      setFlags(final_data);
    } catch (err) {
      console.error("the error: ", err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Flag Display</h1>
      <div className="flag-container">
        {flags.length > 0 &&
          flags.map((flag, key) => {
            return <DisplayFlag key={flag.abbr} flagData={flag} />;
          })}
      </div>
    </div>
  );
}
