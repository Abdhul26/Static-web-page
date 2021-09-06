import React from 'react'
import styled from 'styled-components'
import computer from '../img/computer.jpg'

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  width: 50%;
`

const Image = styled.img`
  width: 80%;
  height: 76%;
  object-fit: fill;
  border-radius: 15px;
  object-fit: cover;
`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

const Title = styled.h1`
  font-size: 30px;
  width: 90%;
`

const SubTitle = styled.h3`
  margin-top: 20px;
`

const Desc = styled.p`
  width: 60%;
  margin-top: 20px;
`

const Button = styled.button`
  width: 20%;
  margin-top: 20px;
  border: 2px solid grey;
  background-color: #084a69;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  border: none;
`

const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={computer} />
      </Left>

      <Right>
        <Title>
          Our Cloud ERP is designed with a diverse set of tools and features
          which help boost
        </Title>
        <SubTitle>Process Collaboration</SubTitle>
        <Desc>
          Employee communications is a core aspect of the ‘efficiency, growth
          and process collaboration parameters’. Our Cloud ERP provides smooth
          process collaboration with efficient Employee Communication in
          accordance with next-generation business processes.
        </Desc>
        <Button>More Products</Button>
      </Right>
    </Container>
  )
}

export default Features
