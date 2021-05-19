/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import styled from 'styled-components';
import Banner from './components/Banner.jsx';
import Page from './styled/Page.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Page />
        <Banner />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
