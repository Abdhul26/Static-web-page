import React from 'react'
import styled from 'styled-components'
import aboutus from '../img/aboutus.jpg'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`
const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-top: 20px;
`
const SubTitle = styled.h3`
  margin-top: 20px;
`
const Desc = styled.p`
  width: 80%;
  margin-top: 20px;
`

const Right = styled.div`
  width: 30%;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`

const About = () => {
  return (
    <Container>
      <Left>
        <Title>The Power of Technology</Title>
        <SubTitle>Digitally Empower Enterprises!</SubTitle>
        <Desc>
          Tapsoft Technologies’ specific and deep focus on Enterprise Digital
          Transformation, coupled with a mature technology team and a unique
          collaborative approach to solving customer problems, gives us the edge
          as a Full Spectrum Digital Transformation Agency. We help Enterprises,
          leverage the power of technology; from Next Gen ERP & Mobile App
          Development to Complete Digital Transformation & Marketing/Media
          Solutions,
          <br />
          Tapsoft is The Digital Partner of Choice for forward thinking
          enterprises At Tapsoft, we firmly believe that technology adoption
          without a laser sharp focus on business challenges, cannot yield it’s
          true value. Our mature Digital Transformation team thus believes in a
          holistic approach to business transformation, where we establish
          collaborative synergies, among ourselves, with clients, the enterprise
          and some of he world’s most Digitally mature companies.
          <br />
          From infusing Digital at the heart of your business and reinventing
          how work gets done by reinventing business/back office processes to
          delivering Mobile & Web apps that act as your sales engines, Tapsoft
          adopts a unique collaborative approach to helping clients realize
          better ROI on technology investments.
        </Desc>
      </Left>
      <Right>
        <Image src={aboutus} />
      </Right>
    </Container>
  )
}

export default About
