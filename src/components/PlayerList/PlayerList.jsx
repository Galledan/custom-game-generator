import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { usePlayer } from "../../context/PlayerContext/PlayerContext";

function PlayerList() {
  const tableHeaderStyle = {
    bg: "bg-primary cursor-pointer",
    text: "!text-secondary",
  };

  const {initialData} = usePlayer()

  const [data, setData] = useState(initialData);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const calculateWinrate = (win, lose) => {
    const totalGames = win + lose;
    return totalGames === 0 ? 0 : (win / totalGames) * 100;
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sortedData = [...data].sort((a, b) => {
      const aValue = property === "role" ? a[property].rolename : a[property];
      const bValue = property === "role" ? b[property].rolename : b[property];

      if (property === "win" || property === "lose") {
        return isAsc ? aValue - bValue : bValue - aValue;
      } else if (property === "winrate") {
        return isAsc
          ? calculateWinrate(a.win, a.lose) - calculateWinrate(b.win, b.lose)
          : calculateWinrate(b.win, b.lose) - calculateWinrate(a.win, a.lose);
      } else {
        return isAsc
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });

    setData(sortedData);
  };

  const createSortHandler = (property) => () => {
    handleRequestSort(property);
  };
  return (
    <TableContainer component={Paper}>
      <Table className="">
        <TableHead>
          <TableRow>
            <TableCell className={tableHeaderStyle.bg} onClick={createSortHandler("name")}>
              <TableSortLabel
              className={tableHeaderStyle.text}
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
              >
                Nickname
              </TableSortLabel>
            </TableCell>
            <TableCell
              className={tableHeaderStyle.bg}
              onClick={createSortHandler("role")}
            >
              <TableSortLabel
              className={tableHeaderStyle.text}
                active={orderBy === "role"}
                direction={orderBy === "role" ? order : "asc"}
              >
                Role
              </TableSortLabel>
            </TableCell>
            <TableCell
              className={tableHeaderStyle.bg}
              onClick={createSortHandler("win")}
            >
              <TableSortLabel
              className={tableHeaderStyle.text}
                active={orderBy === "win"}
                direction={orderBy === "win" ? order : "asc"}
              >
                Win
              </TableSortLabel>
            </TableCell>
            <TableCell
             className={tableHeaderStyle.bg}
              onClick={createSortHandler("lose")}
            >
              <TableSortLabel
              className={tableHeaderStyle.text}
                active={orderBy === "lose"}
                direction={orderBy === "lose" ? order : "asc"}
              >
                Lose
              </TableSortLabel>
            </TableCell>
            <TableCell
               className={tableHeaderStyle.bg}
              onClick={createSortHandler("winrate")}
            >
              <TableSortLabel
               className={tableHeaderStyle.text}
                active={orderBy === "winrate"}
                direction={orderBy === "winrate" ? order : "asc"}
              >
                Winrate
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role.rolename}</TableCell>
              <TableCell>{row.win}</TableCell>
              <TableCell>{row.lose}</TableCell>
              <TableCell>{calculateWinrate(row.win, row.lose)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayerList;
