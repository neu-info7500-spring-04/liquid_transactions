import React    from "react";
export default function Nav() {
  return (
    <nav
      style={{
        background: "#1D2127",
        padding: "10px",
        marginBottom: "20px",
        height: "40pt",
        display: "flex",
      }}
    >
      <h3 style={{ cursor:"pointer", color: "#ffffff",fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif", marginLeft: "22%" }}>Dashboard</h3>
      <h3 style={{ cursor:"pointer", color: "#ffffff",fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif", marginLeft: "3%" }}>Blocks</h3>
      <h3 style={{ cursor:"pointer", color: "#ffffff",fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif", marginLeft: "3%" }}>Transactions</h3>
      <h3 style={{ cursor:"pointer", color: "#ffffff",fontFamily:"SourceSansPro, Helvetica,Arial,sans-serif", marginLeft: "3%" }}>Assets</h3>
      <input
        type="text"
        placeholder="Search for block height, hash, transaction, or address"
        style={{
          marginLeft: "10%",
          background: "rgb(10, 9, 9)",
          textDecoration: "none",
          color: "white",
          borderRadius: "8px",
          width: "300pt",
          fontSize: "12pt",
        }}
        
      />
      &nbsp;&nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="50"
        fill="white"
        class="bi bi-search"
        viewBox="0 0 16 16"
        cursor="pointer"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </nav>
  );
}
