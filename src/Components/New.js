import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { newPlayer, updatePlayers } from '../api/data/playerData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
  uid: '',
};

export default function New({
  obj = {},
  setPlayerRoster,
  setEditItem,
  userId,
}) {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        imageUrl: obj.imageUrl,
        position: obj.position,
        firebaseKey: obj.firebaseKey,
        uid: userId,
      });
      console.warn(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
    setEditItem({});
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayers(formInput, userId).then((updatedplayers) => { setPlayerRoster(updatedplayers); });
      resetForm();
    } else {
      newPlayer({ ...formInput, uid: userId }, userId).then((newplayers) => { setPlayerRoster(newplayers); });
    }
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
  obj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayerRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
