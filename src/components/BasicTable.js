import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { originalRows } from "../assets/data";

const BasicTable = () => {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const TableTopIcon = require("../assets/TableTopIcon.png");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const [sorting, setSorting] = useState({
    key: " price",
    ascending: false,
  });

  const applySorting = (key, ascending) => {
    setSorting({ key: key, ascending: ascending });
  };

  useEffect(() => {
    const sortedRows = rows.sort((a, b) => (a.price > b.price ? 1 : -1));
    setRows(sorting.ascending ? sortedRows : sortedRows.reverse());
  }, [rows, sorting]);

  return (
    <Box
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        boxShadow: "15px 20px #00000005",
        marginTop: 60,
      }}
    >
      <SearchBar
        placeholder="Search Product By Name"
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        style={{
          margin: "30px 10px 10px 20px",
          width: 600,
          border: "2px solid #707070",
        }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 30,
          paddingBottom: 0,
        }}
      >
        <Typography variant="h6">Listing Details</Typography>
        <img src={TableTopIcon} style={{ width: 25, height: 25 }} />
      </Box>
      <TableContainer style={{ width: 600, padding: 20 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Title</TableCell>
              <TableCell align="right">
                Price
                <TableSortLabel
                  active={true}
                  direction="asc"
                  onClick={() => applySorting(" price", !sorting.ascending)}
                />
              </TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">Reviews</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={row.img} style={{ marginRight: 20 }} />
                  <Typography variant="body2">{row.name}</Typography>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.views}</TableCell>
                <TableCell align="right">{row.reviews}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasicTable;
