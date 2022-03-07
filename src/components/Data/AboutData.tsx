import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  width: 40%;
  margin-top: 50px;
  background: #eeeeee;
  //text-align: center;
  //height: 64px;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  //padding: 0 16px;
  //box-sizing: border-box;
  //position: static;
  img {
    alignment: left;
    width: 256px;
    float: left;
  }

  .flex-wrapper {
    display: flex;
    //background-color: #ffff00;
    flex-direction: column;
  }

  .flex-wrapper > div {
    //background-color: green;
    height: 20px;
    width: 400px;
    margin: 10px;
    flex-grow: 1;
  }

  #name {
    font-size: 30px;
    flex-grow: 10;
  }

  #bg {
    font-size: 20px;
    //flex-grow: 10;
  }
`;

const AboutData: React.FC = () => {
  const age = (moment().diff(moment('2002-01-15')) / 1000 / 31622400).toFixed();

  return (
    <Container>
      <div className="flex-wrapper">
        <div id="name">About</div>
        <p>awdawdawdawd</p>
        <div id="age">{age} y.o.</div>
        <div id="bg">Software Engineer</div>
        <div id="bg">Web Back-end Developer</div>
      </div>
    </Container>
  );
};

export default AboutData;
