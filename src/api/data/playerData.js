import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const newPlayer = (playerObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, playerObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, { firebaseKey });
    })
    .then(() => {
      getPlayers().then(resolve);
    })
    .catch(reject);
});

const deletePlayers = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => {
      getPlayers().then(resolve);
    })
    .catch(reject);
});

export { getPlayers, newPlayer, deletePlayers };
