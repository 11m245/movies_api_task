import { useEffect, useState } from "react";
import StickyHeadTable from "./StickyHeadTable";

function Table({ filteredData }) {
  const [rows, setRows] = useState(
    filteredData.map((user) => createData(user))
  );
  const columns = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "year", label: "Year", minWidth: 100 },
    { id: "votes", label: "Votes", minWidth: 100 },
    { id: "genreIds", label: "Genre Ids", minWidth: 100 },
    { id: "description", label: "Description", minWidth: 100 },
    //   {
    //     id: "population",
    //     label: "Population",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toLocaleString("en-US"),
    //   }
  ];
  function createData(obj) {
    return {
      title: obj.title,
      year: obj.year,
      votes: obj.votes,
      genreIds: obj.genreIds.join(","),
      description: obj.description,
    };
  }

  useEffect(() => {
    // const rowsArray = filteredData.map((user) => createData(user));
    setRows(filteredData.map((user) => createData(user)));
    // console.log("rows Arr", rowsArray);
  }, [filteredData]);

  return (
    <>
      <div className="table-container">
        <StickyHeadTable columns={columns} rows={rows} />
      </div>
    </>
  );
}

export { Table };
