/* eslint-disable global-require */
/* eslint-disable import/extensions */
import React from 'react';
import {
  Mainbar, HeaderBox, Arrow, Search, Logo,
} from '../styled/BannerStyled.jsx';

const Banner = () => (
  <>
    <Mainbar>
      <Logo>
        <img alt="Target" src={require('../svg/target-logo.svg').default} />
      </Logo>
      <HeaderBox>
        <span>Categories</span>
        <span>
          <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
        </span>
      </HeaderBox>
      <HeaderBox>
        <span>Deals</span>
        <span>
          <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
        </span>
      </HeaderBox>
      <HeaderBox>
        <span>What&apos;s New</span>
        <span>
          <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
        </span>
      </HeaderBox>
      <HeaderBox>
        <span>Pickup &amp; Delivery</span>
        <span>
          <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
        </span>
      </HeaderBox>
      <HeaderBox>
        <span>Categories</span>
        <span>
          <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
        </span>
      </HeaderBox>
      <HeaderBox>
        <div>
          <form>
            <Search type="search" placeholder="Search" />
          </form>
        </div>
      </HeaderBox>
      <HeaderBox>
        <div>
          <img alt="Target" src={require('../svg/user-circle.svg').default} />
          <span>
            <Arrow alt="Arrow" src={require('../svg/arrow.svg').default} />
          </span>
        </div>
        <div>
          <span>Sign In</span>
        </div>
      </HeaderBox>
    </Mainbar>
    <nav />
  </>
);

export default Banner;
