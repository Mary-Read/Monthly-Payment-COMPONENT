/* eslint-disable global-require */
/* eslint-disable import/extensions */
import React from 'react';
import {
  Mainbar, HeaderBox, ArrowSpan, Search, Logo,
} from '../styled/BannerStyled.jsx';
import TargetLogo from '../svg/target-logo.svg';
import Arrow from '../svg/arrow.svg';
// import UserCircle from '../svg/user-circle.svg';

const Banner = () => (
  <>
    <Mainbar>
      <Logo>
        <TargetLogo width={65} height={65} />
      </Logo>
      <HeaderBox>
        <span>Categories</span>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox>
      <HeaderBox>
        <span>Deals</span>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox>
      <HeaderBox>
        <span>What&apos;s New</span>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox>
      <HeaderBox>
        <span>Pickup &amp; Delivery</span>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox>
      <HeaderBox>
        <span>Categories</span>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox>
      <HeaderBox>
        <div>
          <form>
            <Search type="search" placeholder="Search" />
          </form>
        </div>
      </HeaderBox>
      {/* <HeaderBox>
        <LoginBox>
          <div>
            <UserCircle width={10} height={10}  />
          </div>
          <div>
            Sign In
          </div>
        </LoginBox>
        <ArrowSpan>
          <Arrow width={10} height={24} />
        </ArrowSpan>
      </HeaderBox> */}
    </Mainbar>
    <nav />
  </>
);

export default Banner;
