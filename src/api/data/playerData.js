import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const newPlayer = (playerObj, userId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, playerObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, { firebaseKey });
    })
    .then(() => {
      getPlayers(userId).then(resolve);
    })
    .catch(reject);
});

const deletePlayers = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => {
      getPlayers(userId).then(resolve);
    })
    .catch(reject);
});

const updatePlayers = (playerObj, userId) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/players/${playerObj.firebaseKey}.json`, playerObj)
    .then(() => {
      getPlayers(userId).then(resolve);
    })
    .catch(reject);
});

export {
  getPlayers,
  newPlayer,
  deletePlayers,
  updatePlayers,
};
