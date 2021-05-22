/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import Banner from './components/Banner.jsx';
import Shipping from './components/Shipping.jsx';
import Page from './styled/Page.jsx';
import initData from './utils/initData';

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

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Page />
        {/* <Banner /> */}
        { this.state.isLoaded ? <Shipping {...this.state} /> : <></>}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
