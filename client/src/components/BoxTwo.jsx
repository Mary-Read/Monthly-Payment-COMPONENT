/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as SS from '../styled/ShippingStyled.jsx';

class BoxTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.editZip = this.editZip.bind(this);
  }

  editZip = (e) => {
    e.preventDefault();
    console.log('Edit Zip Code');
  };

  render() {
    return (
      <SS.B2>
        <SS.B2S1U>
          <SS.B2S1>
            <SS.B2S1B1>
              <SS.TextGreenBold>
                Same Day
                <br />
                Delivery
              </SS.TextGreenBold>
                      &nbsp;to&nbsp;
              <SS.TextBlackBold>{this.props.zip}</SS.TextBlackBold>
            </SS.B2S1B1>
            <SS.B2S1B2>
              <SS.ButtonUnderlined onClick={this.editZip}>Edit Zip Code</SS.ButtonUnderlined>
            </SS.B2S1B2>
          </SS.B2S1>
          <SS.B2S2>
            <SS.ButtonRed>Deliver it</SS.ButtonRed>
          </SS.B2S2>
        </SS.B2S1U>
        <SS.B2S3>
          <SS.B2S3B1>
            <SS.TextGreen>Get it as soon as 9am tomorrow</SS.TextGreen>
            {' '}
            with Shipt
          </SS.B2S3B1>
          <SS.B2S3B2>
            Free with membership or $9.99/order
            <br />
            <SS.ButtonUnderlined>Learn more</SS.ButtonUnderlined>
          </SS.B2S3B2>
        </SS.B2S3>
      </SS.B2>
    );
  }
}

export default BoxTwo;
