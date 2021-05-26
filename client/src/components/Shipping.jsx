/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as SS from '../styled/ShippingStyled.jsx';
import BoxTwo from './BoxTwo.jsx';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { location } = this.props.store.products[this.props.productId];
    return (
      <SS.Container>
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
        <BoxTwo {...this.props} />
        <SS.B3>
          <SS.B3S1U>
            <SS.B3S1>
              <SS.B3S1B1>
                <SS.TextGreenBold>Deliver</SS.TextGreenBold>
                &nbsp;to&nbsp;
                <SS.TextBlackBold>{this.props.zip}</SS.TextBlackBold>
              </SS.B3S1B1>
              <SS.B3S1B2>
                <SS.ButtonUnderlined>Enter Zip Code</SS.ButtonUnderlined>
              </SS.B3S1B2>
            </SS.B3S1>
            <SS.B3S2>
              <SS.ButtonRed>Ship it</SS.ButtonRed>
            </SS.B3S2>
          </SS.B3S1U>
          <SS.B3S3>
            Order by 12:00pm tomorrow
          </SS.B3S3>
          <SS.B3S4>
            <SS.TextGreen>Get it by Sat, May 22</SS.TextGreen>
            {' '}
            with free 2-day shipping on $35 orders
          </SS.B3S4>
        </SS.B3>
      </SS.Container>
    );
  }
}

export default Shipping;
