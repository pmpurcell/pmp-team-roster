import { React, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
// import { newPlayer } from '../api/data/playerData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

export default function New(userId, obj = {}) {
  const [formInput, setFormInput] = useState(initialState);
  //   const history = useHistory();
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        imageUrl: obj.imageUrl,
        position: obj.position,
        userId,
      });
      console.warn(formInput);
    }
  }, [obj]);
  const handleClick = (e) => {
    e.preventDefault();
    console.warn('Click');
  };
  return (
    <div>
      <FormGroup>
        <Label for="playerName" />
        <Input type="text" id="playerName" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="playerPosition" />
        <Input type="text" id="playerPosition" placeholder="Position" />
      </FormGroup>
      <FormGroup>
        <Label for="playerImage" />
        <Input type="text" id="playerImage" placeholder="Image" />
      </FormGroup>
      <Button onClick={(e) => handleClick(e)}>Submit</Button>
    </div>
  );
}

New.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};
