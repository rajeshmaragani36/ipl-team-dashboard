function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "#0d47a1" }}>
        🏏 IPL Team Dashboard
      </h1>

      <h2>Welcome to IPL 2026 Dashboard</h2>

      <p>
        Explore IPL Teams, Players, and Points Table.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h3>Project Features</h3>

        <p>✅ IPL Teams</p>
        <p>✅ Players Information</p>
        <p>✅ Points Table</p>
        <p>✅ Navigation Menu</p>
        <p>✅ React Router</p>
      </div>
    </div>
  );
}

export default Home;