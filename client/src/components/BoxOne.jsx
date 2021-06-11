/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as SS from '../styled/ShippingStyled.jsx';

class BoxOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props.store.products[this.props.productId];
    return (
      <SS.B1>
        <SS.B1S1U>
          <SS.B1S1>
            <SS.B1S1B1>
              <SS.TextGreenBold>Pick up today</SS.TextGreenBold>
              {' '}
              at
              <div>
                <SS.ButtonBlack>{ this.props.store.storeName }</SS.ButtonBlack>
              </div>
            </SS.B1S1B1>
            <SS.B1S1B2>
              <SS.ButtonUnderlined>Edit Store</SS.ButtonUnderlined>
            </SS.B1S1B2>
          </SS.B1S1>
          <SS.B1S2>
            <SS.ButtonRed>Pick it up</SS.ButtonRed>
          </SS.B1S2>
        </SS.B1S1U>
        <SS.B1S3>
          Ready tomorrow for pickup inside the store.
        </SS.B1S3>
        <SS.B1S4>
          { location}
        </SS.B1S4>
      </SS.B1>
    );
  }
}

export default BoxOne;
