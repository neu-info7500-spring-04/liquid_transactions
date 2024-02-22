import React, { useState, useEffect } from "react";
import "./transaction.css";
import Nav from "../nav/nav";



function Transaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blockstream.info/liquid/api/mempool/recent")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, []);

  return (
    <div style={{ background: "#111316" }}>
      <br></br>
      <br></br>
      <br></br>
      <Nav />
      <br></br>
      <br></br>
      <table
        style={{
          marginLeft: "25%",
          width: "55%",
          borderCollapse: "collapse",
          height: "1000px",
          background: "#1D2127",
          borderRadius: "8px",
          boxShadow: "0 20px 32px 0 rgba(0, 0, 0, 0.08)",
          marginTop: "-10px",
        }}
      >
        <thead style={{ marginTop: "5%" }}>
          <br></br>
          <tr>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                color: "#fff",
                fontSize: "20pt",
                fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
              }}
            >
              Latest Transactions
            </th>
          </tr>
          <br></br>
          <tr>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "20px",
                color: "#78838e",
                fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
              }}
            >
              Transaction ID
            </th>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "100px",
                color: "#78838e",
                fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
              }}
            >
              Size
            </th>
            <th
              style={{
                textAlign: "left",
                paddingLeft: "100px",
                color: "#78838e",
                fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
              }}
            >
              Fee
            </th>
          </tr>
          <tr>
            <td colSpan="4" style={{ borderBottom: "1px solid black" }}></td>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <React.Fragment key={index}>
              <tr
                style={{
                  cursor: "pointer",
                }}
              >
                <td
                  style={{
                    paddingLeft: "20px",
                    fontSize:"16px",
                    fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
                    color: "#00ccff",
                    
                  }}
                >
                  {transaction.txid}
                </td>
                <td
                  style={{
                    paddingLeft: "100px",
                    fontSize:"16px",
                    fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
                    color: "#FFF",
                    
                  }}
                >
                  {transaction.vsize} vB
                </td>
                <td
                  style={{
                    paddingLeft: "100px",
                    fontSize:"16px",
                    fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif",
                    color: "#FFF",
                    
                  }}
                >
                  {(parseInt(transaction.fee)/parseInt(transaction.vsize)).toFixed(1)} sat/vB
                </td>
              </tr>
              <tr>
                <td
                  colSpan="4"
                  style={{ borderBottom: "1px solid black" }}
                ></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <br></br>
      <br></br>
    </div>
  );
}

export default Transaction;
