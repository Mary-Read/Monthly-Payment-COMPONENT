/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as SS from '../styled/ShippingStyled.jsx';
import BoxOne from './BoxOne.jsx';
import BoxTwo from './BoxTwo.jsx';
import BoxThree from './BoxThree.jsx';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SS.Container>
        <BoxOne {...this.props} />
        <BoxTwo {...this.props} />
        <BoxThree {...this.props} />
      </SS.Container>
    );
  }
}

export default Shipping;
