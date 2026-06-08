function Teams() {
  const teams = [
    "Sunrisers Hyderabad",
    "Chennai Super Kings",
    "Mumbai Indians",
    "Royal Challengers Bengaluru",
    "Kolkata Knight Riders",
    "Delhi Capitals",
    "Rajasthan Royals",
    "Punjab Kings",
    "Lucknow Super Giants",
    "Gujarat Titans",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL Teams</h2>

      {teams.map((team, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <h3>{team}</h3>
        </div>
      ))}
    </div>
  );
}

export default Teams;