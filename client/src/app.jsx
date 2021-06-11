/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import Banner from './components/Banner.jsx';
import ClipLoader from 'react-spinners/ClipLoader';
import Shipping from './components/Shipping.jsx';
import Page from './styled/Page.jsx';
import initData from './utils/initData';
import editZipData from './utils/editZipData';
import currentLocation from './utils/currentLocation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 0,
      store: {
        storeName: '',
        products: [
          {
            id: 0,
            location: 'Aisle',
            stock: 1,
          },
        ],
      },
      zip: '22202',
      isLoaded: true,
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
    currentLocation()
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
        { this.state.isLoaded ? (
          <Shipping
            resetLocation={this.resetLocation.bind(this)}
            zipSubmitProp={this.editZip.bind(this)}
            {...this.state}
          />
        ) : <></>}
        <ClipLoader color="#aa0000" loading={!this.state.isLoaded} size={100} css="margin: 120px 60px" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('shipping'));
