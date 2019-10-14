import React from 'react';
import PropTypes from 'prop-types';
import './timezone.sass';


class Timezone extends React.Component {
  render() {
    const input = ['NEW YORK', 'LONDON', 'BANGKOK', 'TAIWAN', 'SYDNEY'];
    return (
      <div>
        <div className="container">
          <div className="title_box">
            WORLD CLOCK
          </div>
          <div>
            {input.map((value) => (
              <div className="timebox">
                <div className="place">{value}</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default Timezone;
