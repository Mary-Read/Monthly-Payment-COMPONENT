import React from 'react';
import {
  Container, B1, B2, B3, B1S1U, B1S1, B1S2, B1S3, B1S4, B1S1B1, B1S1B2, TextGreenBold, ButtonBlack, ButtonUnderlined, ButtonRed, 
  B2S1U, B2S1, B2S1B1, B2S1B2, B2S2, TextBlackBold, B2S3, B2S3B1, B2S3B2, TextGreen,
  B3S1U, B3S1, B3S1B1, B3S1B2, B3S2, B3S3, B3S4
} from '../styled/ShippingStyled.jsx';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <Container>
        <B1>
            <B1S1U>
              <B1S1>
                  <B1S1B1>
                    <TextGreenBold>Pick up today</TextGreenBold> at 
                    <div>
                      <ButtonBlack>Ballston</ButtonBlack>
                    </div>
                  </B1S1B1>
                  <B1S1B2>
                    <ButtonUnderlined>Edit Store</ButtonUnderlined>
                  </B1S1B2>
              </B1S1>
              <B1S2>
                <ButtonRed>Pick it up</ButtonRed>
              </B1S2>
            </B1S1U>
          <B1S3>
            Ready tomorrow for pickup inside the store.
          </B1S3>
          <B1S4>
            Aisle B21
          </B1S4>
        </B1>
        <B2>
          <B2S1U>
              <B2S1>
                  <B2S1B1>
                    <TextGreenBold>Same Day <br />Delivery</TextGreenBold>
                    &nbsp;to&nbsp; 
                    <TextBlackBold>22204</TextBlackBold>
                  </B2S1B1>
                  <B2S1B2>
                    <ButtonUnderlined>Enter Zip Code</ButtonUnderlined>
                  </B2S1B2>
              </B2S1>
              <B2S2>
                <ButtonRed>Deliver it</ButtonRed>
              </B2S2>
            </B2S1U>
            <B2S3>
              <B2S3B1>
                <TextGreen>Get it as soon as 9am tomorrow</TextGreen> with Shipt
              </B2S3B1>
              <B2S3B2>
                Free with membership or $9.99/order
                <br />
                <ButtonUnderlined>Learn more</ButtonUnderlined>
              </B2S3B2>
            </B2S3>
        </B2>
        <B3>
          <B3S1U>
            <B3S1>
              <B3S1B1>
                <TextGreenBold>Deliver</TextGreenBold>
                &nbsp;to&nbsp; 
                <TextBlackBold>22204</TextBlackBold>
              </B3S1B1>
              <B3S1B2>
                <ButtonUnderlined>Enter Zip Code</ButtonUnderlined>
              </B3S1B2>
            </B3S1>
            <B3S2>
              <ButtonRed>Ship it</ButtonRed>
            </B3S2>
          </B3S1U>
          <B3S3>
            Order by 12:00pm tomorrow
          </B3S3>
          <B3S4>
            <TextGreen>Get it by Sat, May 22</TextGreen> with free 2-day shipping on $35 orders
          </B3S4>
        </B3>
      </Container>
    );
  }
}

export default Shipping;