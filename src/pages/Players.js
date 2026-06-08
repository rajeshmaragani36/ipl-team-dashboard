function Players() {
  const players = [
    {
      name: "Pat Cummins",
      role: "Captain"
    },
    {
      name: "Travis Head",
      role: "Batsman"
    },
    {
      name: "Abhishek Sharma",
      role: "All-Rounder"
    },
    {
      name: "Heinrich Klaasen",
      role: "Wicket Keeper"
    },
    {
      name: "Ishan Kishan",
      role: "Batsman"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>SRH Players</h2>

      {players.map((player, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px 0",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
          }}
        >
          <h3>{player.name}</h3>
          <p>Role: {player.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Players;