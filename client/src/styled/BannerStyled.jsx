import styled from 'styled-components';

const Mainbar = styled.nav`
  /* Color & Background */
  background-color: rgb(204, 0, 0);

  /* Box */
  height: 75px;
  padding: 0px 16px 0px 12px;

  /* Positioning */
  display : flex;
  align-items : center;
`;

const HeaderBox = styled.a`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;

  /* Font & Text */
  font-size: 18px;
  font-weight: 700;
  line-height: 25.713px;

  /* Color & Background */
  color: rgb(255, 255, 255);

  /* Box */
  margin-left: 20px;

  /* Miscellaneous */
  cursor: pointer;


`;

const ArrowSpan = styled.span`
  /* Box */
  margin-left: 5px;

  /* Positioning */
  vertical-align: middle 
  
`;

const Logo = styled.a`
  /* Positioning */
  display: flex;
  vertical-align: middle 

  /* Box */
  margin-left: 20px;
`;

const Search = styled.input`
  /* Color & Background */
  background-color: #FFFFFF;


  /* Box */
  height: 41px;
  width: 389.328px;
  border: 0px none rgb(51, 51, 51);
  border-top: 0px none rgb(51, 51, 51);
  border-right: 0px none rgb(51, 51, 51);
  border-bottom: 0px none rgb(51, 51, 51);
  border-left: 0px none rgb(51, 51, 51);
  margin: 0px;
  padding: 10px 72px 10px 16px;

`;

const LoginBox = styled.div`
  /* Positioning */
  vertical-align: middle; 
  position: relative;

`

export {
  Mainbar,
  HeaderBox,
  ArrowSpan,
  Search,
  Logo,
  LoginBox
};
