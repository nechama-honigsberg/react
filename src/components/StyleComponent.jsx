import React, { useState } from 'react'
// import style from './StyleComponent.css';
import './StyleComponent.css';
import styled from "styled-components";
import Layout from './Layout';

export default function StyleComponent() {

    const [isRed, setIsRed] = useState(true);
    const [activeButton, setActiveButton] = useState(2);

    const handleButtonClick = (index) => {
        setActiveButton(index)
    }

    const names = [`sara`, 'rivka', 'rachel', 'lea'];
    const packetsDataList = names.map((item, index) => (
        <button
            key={index}
            className={`buttons ${activeButton === index ? 'activeButton' : ''}`}
            onClick={() => handleButtonClick(index, item)}
        >
            {item}
        </button>
    ));
    const pStyle = {
        fontSize: '16px',
        color: 'blue'
    }

    const Wrapper = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

    const Title = styled.h1`
  color: #333;
`;

    const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
    const dynamicColor = '#ff0000';

    const DynamicButton = styled.button`
  background-color: ${dynamicColor};
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

    return (
        <div className='container'>
            <Layout>
                <div className='myHeader'>Style Component</div>
                <p className={isRed ? 'class1' : 'class2'}>Condition & class</p>
                <h1 style={{ color: "green", backgroundColor: "pink" }}>Inline style</h1>
                <p style={pStyle}> style in object</p>
                <label for="numberInput">Enter number:</label>
                <input id="numberInput" type='number' />
                {packetsDataList}
                <br></br>
                <Wrapper>
                    <Title>Hello, styled-components!</Title>
                    <Button>Click me</Button>
                    <DynamicButton>Click me DynamicButton</DynamicButton>
                </Wrapper>
            </Layout>
        </div>
    )
}
