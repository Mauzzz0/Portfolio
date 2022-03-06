import React from 'react';
import styled from 'styled-components';
import Photo from '../../assets/images/T0HJW8AER-U026TJW99NG-c3930c1cc5a3-512.jpeg';
import moment from 'moment';

const Container = styled.div`
  width: 70%;
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

  a {
    font-size: 30px;
    margin-left: 10px;
    text-align: center;
    //border: 1px solid #000000;
    justify-content: center;
    //font-family: Tahoma;
  }

  .yo {
    font-size: 20px;
    margin-left: 10px;
    text-align: center;
    //border: 1px solid #000000;
    justify-content: center;
    //font-family: Tahoma;
  }
`;

const PersonalData: React.FC = () => {
  const age = (moment().diff(moment('2002-01-15')) / 1000 / 31622400).toFixed();

  return (
    <Container>
      <div>
        <img src={Photo} alt="Photo" />
        <a>Semak Ruslan Dmitrievich</a>
      </div>
      <div>
        <a id="CV" className="yo">
          {age} y.o.
        </a>
      </div>
      <div>
        <a>Software Engineer</a>
      </div>
      <div>
        <a>Web Back-end Developer</a>
      </div>
    </Container>
  );
};

export default PersonalData;
