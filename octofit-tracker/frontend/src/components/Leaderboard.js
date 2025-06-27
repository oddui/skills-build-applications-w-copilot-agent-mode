import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://fictional-space-broccoli-qr6v96qgphr5v-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map(entry => (
          <li key={entry.id}>{entry.name}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
