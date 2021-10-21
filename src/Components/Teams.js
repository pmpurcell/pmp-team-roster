import { React, useState, useEffect } from 'react';
import getPlayers from '../api/data/playerData';

export default function Teams() {
  const [playerRoster, setPlayerRoster] = useState([]);
  useEffect(() => {
    let isMounted = true;
    getPlayers().then((response) => {
      if (isMounted) setPlayerRoster(response);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div>
        {playerRoster.map((player) => (
          <div key={player.firebaseKey}>
            <img src={player.imageUrl} alt={player.name} />
            <h4>{player.name}</h4>
            <p>Position:{player.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
