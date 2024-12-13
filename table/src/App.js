import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Table from "./components/Table";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={data} rowsPerPage={5} />
      </div>
    </main>
  );
}

export default App;
