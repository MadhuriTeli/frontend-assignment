import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>S.No.</th>
            <th className={styles.tableHeader}>Percentage funded</th>
            <th className={styles.tableHeader}>Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((item) => (
            <tr className={styles.tableRowItems} key={item["s.no"]}>
              <td className={styles.tableCell}>{item["s.no"]}</td>
              <td className={styles.tableCell}>{item["percentage.funded"]}</td>
              <td className={styles.tableCell}>{item["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
