import React from 'react'
import styled from 'styled-components'
import Comp from '../img/new.jpg'

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  width: 80%;
  font-size: 30px;
`

const Desc = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Button = styled.button`
  border: 2px solid grey;
  background-color: #084a69;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  border: none;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`

const Mobile = styled.span`
  font-size: bold;
`

const Text = styled.span`
  color: #084a69;
  margin-top: 5px;
`

const Right = styled.div`
  width: 40%;
`

const Image = styled.img`
  width: 100%;
  height: 96%;
  object-fit: cover;
  border-radius: 15px;
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>
          We create amazing experiences Seamless Development to ease your
          performance
        </Title>
        <Desc>
          User/ Customer should be able to use the software seamlessly UI/UX
          wise. The Backend development should be supportive for UI/UX.
        </Desc>
        <Info>
          <Button>Enquiry</Button>
          <Contact>
            <Mobile>Call Us : +918220365174</Mobile>
            <Text>For any Queries</Text>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Comp} />
      </Right>
    </Container>
  )
}

export default Intro
