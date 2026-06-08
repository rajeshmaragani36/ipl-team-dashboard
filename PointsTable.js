function PointsTable() {
  const teams = [
    { team: "Sunrisers Hyderabad", points: 17 },
    { team: "Chennai Super Kings", points: 18 },
    { team: "Mumbai Indians", points: 16 },
    { team: "Royal Challengers Bengaluru", points: 15 },
    { team: "Kolkata Knight Riders", points: 14 },
    { team: "Delhi Capitals", points: 13 },
    { team: "Rajasthan Royals", points: 12 },
    { team: "Punjab Kings", points: 11 },
    { team: "Lucknow Super Giants", points: 10 },
    { team: "Gujarat Titans", points: 9 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL Points Table</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%"
        }}
      >
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.team}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PointsTable;