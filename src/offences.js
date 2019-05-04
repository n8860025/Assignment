import React, { useState } from "react";
import { useOffences } from "./api";
import "./css/offences.css";

export function OffencesTable() {
  const { loading, offences, error } = useOffences();
  const [sortOffence, setSortOffences] = useState(useOffences());
  const [sortDirection, setSortDirection] = useState("des");

  const sort = () => {
    const data = offences;

    if (sortDirection === "asc") {
      setSortOffences(data.sort());
      setSortDirection("des");
    } else {
      setSortOffences(data.reverse());
      setSortDirection("asc");
    }
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <table border="1" className="offences-table">
        <thead>
          <tr>
            <th onClick={sort} key="title">
              Offence List
            </th>
          </tr>
        </thead>
        <tbody>
          {offences.map((offence, index) => (
            <OffencesTableElement title={offence} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OffencesTableElement(props) {
  return (
    <tr>
      <td key={props.index}>{props.title}</td>
    </tr>
  );
}
