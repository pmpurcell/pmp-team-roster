import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { newPlayer } from '../api/data/playerData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

export default function New({ players, setPlayerRoster }) {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);
  useEffect(() => {
    if (players.firebaseKey) {
      setFormInput({
        name: players.name,
        imageUrl: players.imageUrl,
        position: players.position,
        firebaseKey: players.firebaseKey,
      });
      console.warn(formInput);
    }
  }, [players]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    newPlayer(formInput).then((newplayers) => { setPlayerRoster(newplayers); });
    history.push('/teams');
  };
  return (
    <div>
      <form id="playerForm">
        <label htmlFor="name">
          <input name="name" id="name" value={formInput.name || ''} placeholder="Name" onChange={(e) => handleChange(e)} required />
        </label>
        <label htmlFor="position">
          <input name="position" id="position" value={formInput.position || ''} placeholder="Position" onChange={(e) => handleChange(e)} required />
        </label>
        <label htmlFor="imageUrl">
          <input name="imageUrl" id="imageUrl" value={formInput.imageUrl || ''} placeholder="Image Url" onChange={(e) => handleChange(e)} required />
        </label>
        <Button type="submit" color="success" onClick={(e) => handleClick(e)}>submit</Button>
      </form>
    </div>
  );
}

New.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  })).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
};
