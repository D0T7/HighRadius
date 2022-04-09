import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const columns = [
  { field: "student", headerName: "Student", width: 200 },
  { field: "score", headerName: "Score", width: 200 },
  { field: "age", headerName: "Age", width: 200 },
];
const rows = [
  { id: 1, student: "John", score: "A", age: "20" },
  { id: 2, student: "Mary", score: "B", age: "21" },
  { id: 3, student: "Peter", score: "C", age: "22" },
  { id: 4, student: "Paul", score: "D", age: "23" },
  { id: 5, student: "Mary", score: "B", age: "21" },
  { id: 6, student: "Peter", score: "C", age: "22" },
    { id: 7, student: "Paul", score: "D", age: "23" },
    { id: 8, student: "Mary", score: "B", age: "21" },
    { id: 9, student: "Peter", score: "C", age: "22" },
    { id: 10, student: "Paul", score: "D", age: "23" },
    { id: 11, student: "Mary", score: "B", age: "21" },
    { id: 12, student: "Peter", score: "C", age: "22" },
    { id: 13, student: "Paul", score: "D", age: "23" },
    { id: 14, student: "Mary", score: "B", age: "21" },
    { id: 15, student: "Peter", score: "C", age: "22" },
    { id: 16, student: "Paul", score: "D", age: "23" },
    { id: 17, student: "Mary", score: "B", age: "21" },
    { id: 18, student: "Peter", score: "C", age: "22" },
    { id: 19, student: "Paul", score: "D", age: "23" },
    { id: 20, student: "Mary", score: "B", age: "21" },
    { id: 21, student: "Peter", score: "C", age: "22" },
    { id: 22, student: "Paul", score: "D", age: "23" },
    { id: 23, student: "Mary", score: "B", age: "21" },
    { id: 24, student: "Peter", score: "C", age: "22" },
    { id: 25, student: "Paul", score: "D", age: "23" },
    { id: 26, student: "Mary", score: "B", age: "21" },
    { id: 27, student: "Peter", score: "C", age: "22" },
    { id: 28, student: "Paul", score: "D", age: "23" },
    { id: 29, student: "Mary", score: "B", age: "21" },
    { id: 30, student: "Peter", score: "C", age: "22" }
];
export default function App() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
