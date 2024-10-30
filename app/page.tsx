"use client";

import styled from 'styled-components';
import {useState} from 'react';
import Link from 'next/link';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  background-color: #0070f3;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005bb5;
  }
`

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-top: 10px;
`

export default function Home() {
  const[city, setCity] = useState("");

  return (
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <StyledInput type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}