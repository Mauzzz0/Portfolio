import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/Mauzzz0_logo.jpeg';
import LinkedInLogo from '../../assets/images/LinkedIn-Logos/LI-In-Bug.png';
import TelegramLogo from '../../assets/images/telegram.png';

// interface IBlock {
//   width?: number;
//   height?: number;
//   background?: boolean;
// }

const Container = styled.div`
  width: 100%;
  background: #c4c4c4;
  height: 48px;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  position: static;
`;

//
// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
//
// const MenuItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 8px;
// `;
//
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  //cursor: pointer;
  padding: 0 20px;
  transition-duration: 0.5s;
  position: relative;
  margin: 10px;
  background: #7d849b;

  &:hover {
    display: flex;
    cursor: pointer;
    background-color: #b0fff5;
  }
`;

const Header: React.FC = () => {
  const iconsWidth = 24;

  return (
    <Container>
      <img src={logo} alt="logo" width={iconsWidth * 2} />
      <Button>
        <a href="https://www.linkedin.com/in/mauzzz0" target="_blank" rel="noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" width="24" />{' '}
        </a>
        <a href="https://www.hh.ru" target="_blank" rel="noreferrer">
          <img
            src="https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019"
            alt="HH"
            width={iconsWidth}
          />
        </a>
        <a href="https://tg.me/Mauzzz0" target="_blank" rel="noreferrer">
          <img src={TelegramLogo} alt="Telegram" width={iconsWidth} />
        </a>
      </Button>
      <Button>CV</Button>
      <Button>Works</Button>
      <Button>Skills</Button>
      <Button>Stack</Button>
      <Button>Graduation</Button>
      <Button>Projects</Button>
    </Container>
  );
};

export default Header;
