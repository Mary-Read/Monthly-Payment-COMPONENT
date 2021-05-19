/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import styled from 'styled-components';
import Banner from './components/Banner.jsx';
import Shipping from './components/Shipping.jsx';
import Page from './styled/Page.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }

  render() {
    return (
      <>
        <Page />
        <Banner />
        <Shipping />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
