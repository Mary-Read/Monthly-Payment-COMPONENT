/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import styled from 'styled-components';
import Banner from './components/Banner.jsx';
import Shipping from './components/Shipping.jsx';
import Page from './styled/Page.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
      stores: [],
    };
    navigator.geolocation.getCurrentPosition((position) => {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/shipping/closestStores',
        contentType: 'application/json',
        data: JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
        success: (data) => {
          console.log(`Succesful data return ${data.length} `);
          this.setState({
            store: data[0],
            stores: data,
          });
        },
        error: (error) => {
          console.log('Error:');
          console.log(error);
        },
      });
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <Page />
        <Banner />
        <Shipping closestStore={this.state.store} closestStores={this.state.stores} />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
