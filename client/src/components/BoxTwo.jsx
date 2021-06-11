/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as SS from '../styled/ShippingStyled.jsx';

class BoxTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newZip: '',
      editZipClick: false,
    };
    this.editZipClick = this.editZipClick.bind(this);
    this.zipChange = this.zipChange.bind(this);
    this.submitZip = this.submitZip.bind(this);
    this.zipEnter = this.zipEnter.bind(this);
  }

  editZipClick = (e) => {
    e.preventDefault();
    const currentClick = this.state.editZipClick;
    // eslint-disable-next-line react/no-access-state-in-setstate
    let currentVal = this.state.newZip;
    if (currentClick) {
      currentVal = '';
    }
    this.setState({
      editZipClick: !currentClick,
      newZip: currentVal,
    });
  };

  zipChange = (e) => {
    this.setState({ newZip: e.target.value });
  };

  zipEnter = (e) => {
    if (e.which === 13) {
      this.submitZip(e);
    }
  }

  submitZip = () => {
    this.props.zipSubmitProp(this.state.newZip);
  }

  render() {
    const { editZipClick } = this.state;
    return (
      <SS.B2>
        <SS.B2S1U>
          <SS.B2S1>
            <SS.B2S1B1>
              <SS.TextGreenBold>
                Same Day&nbsp;
                {!editZipClick && <br /> }
                Delivery
              </SS.TextGreenBold>
                      &nbsp;to&nbsp;
              <SS.TextBlackBold>{this.props.zip}</SS.TextBlackBold>
            </SS.B2S1B1>
            <SS.B2S1B2>
              <SS.ButtonUnderlined onClick={this.editZipClick}>
                Edit Zip Code
              </SS.ButtonUnderlined>
            </SS.B2S1B2>
          </SS.B2S1>
          {!editZipClick
            && (
            <SS.B2S2>
              <SS.ButtonRed>Deliver it</SS.ButtonRed>
            </SS.B2S2>
            )}
        </SS.B2S1U>
        {editZipClick
          && (
          <SS.E1>
            <div>
              <SS.E1B onClick={() => { this.props.resetLocation(); }}>
                <SS.E1BS1>
                  <SS.E1BS1I src="https://icon-library.net//images/geolocation-icon/geolocation-icon-19.jpg" />
                </SS.E1BS1>
                <SS.E1BS2>
                  Use my current location
                </SS.E1BS2>
              </SS.E1B>
            </div>
            <SS.E1I>
              <SS.E1II
                type="text"
                maxLength="5"
                pattern="^\d{1,5}$"
                autoComplete="on"
                placeholder="enter your zip code"
                value={this.state.newZip}
                onChange={this.zipChange}
                onSubmit={this.submitZip}
                onKeyPress={this.zipEnter}
              />
              <SS.E1IT>we&apos;ll show updated delivery options for your area</SS.E1IT>
            </SS.E1I>
            <SS.E1B2>
              <SS.E1B2B1 onClick={this.submitZip}>submit</SS.E1B2B1>
              <SS.E1B2B2 onClick={this.editZipClick}>cancel</SS.E1B2B2>
            </SS.E1B2>
          </SS.E1>
          )}
        {!editZipClick
          && (
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
          )}
      </SS.B2>
    );
  }
}

export default BoxTwo;
