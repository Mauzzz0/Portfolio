import styled from 'styled-components';
import Header from '../Header';
import React from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

const Layout = styled.div`
  max-width: 100%;
  width: 100vw;
  //min-height: 100vh;
  //display: flex;
  //flex-direction: column;
  background: #f7f9fc;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  flex-grow: 1;
`;

const MainLayout: React.FC<IMainLayout> = ({ children }: IMainLayout) => {
  return (
    <Layout>
      <Header />
      <Body>{children}</Body>
    </Layout>
  );
};

export default MainLayout;
