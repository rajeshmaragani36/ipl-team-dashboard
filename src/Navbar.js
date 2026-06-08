import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0d47a1",
        padding: "15px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>

      <Link
        to="/teams"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Teams
      </Link>

      <Link
        to="/players"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Players
      </Link>

      <Link
        to="/points"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Points Table
      </Link>

      <Link
        to="/about"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
    </nav>
  );
}

export default Navbar;