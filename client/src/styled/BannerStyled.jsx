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

const Arrow = styled.img`
  /* Size */
  height: 24px;
  width: 10px;

  /* Box */
  margin-left: 2px;

  /* Positioning */
  vertical-align: middle 
  display: inline;
`;

const Logo = styled.a`
  /* Size */
  height: 100%;
  width: 68px;

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

export {
  Mainbar,
  HeaderBox,
  Arrow,
  Search,
  Logo,
};
