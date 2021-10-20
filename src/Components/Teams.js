import React from 'react';
// import PropTypes from 'prop-types';
import getPlayers from '../api/data/playerData';

export default function Teams(userId) {
  console.warn(userId);
  getPlayers(userId).then(console.warn);
  return (
    <div>
      <div>
        <h1>Teams</h1>
        <div>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTjvFHoG1VuV3C7tUKj4Pfc2hMI5YYgp3N89Py1YA=s900-c-k-c0x00ffffff-no-rj"
            alt="basketball jones"
          />
          <h4>Basketball Jones</h4>
        </div>
      </div>
    </div>
  );
}

// Teams.propTypes = {
//   userId: PropTypes.string.isRequired,
// };
