/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import Banner from './components/Banner.jsx';
import Shipping from './components/Shipping.jsx';
import Page from './styled/Page.jsx';
import initData from './utils/initData';
import editZipData from './utils/editZipData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: 0,
      // store: {},
      // stores: [],
      // zip: 11111,
      isLoaded: false,
    };
    initData()
      .then((data) => {
        // eslint-disable-next-line no-param-reassign
        data.isLoaded = true;
        this.setState(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  resetLocation = () => {
    this.setState({ isLoaded: false });
    initData()
      .then((data) => {
        // eslint-disable-next-line no-param-reassign
        data.isLoaded = true;
        this.setState(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  editZip = (zip) => {
    this.setState({ isLoaded: false });
    editZipData(zip)
      .then((data) => {
      // eslint-disable-next-line no-param-reassign
        data.isLoaded = true;
        this.setState(data);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Page />
        {/* <Banner /> */}
        { this.state.isLoaded ? (
          <Shipping
            resetLocation={this.resetLocation.bind(this)}
            zipSubmitProp={this.editZip.bind(this)}
            {...this.state}
          />
        ) : <></>}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('shipping'));
