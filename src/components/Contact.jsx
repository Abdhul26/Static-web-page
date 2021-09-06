import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 90%;
  background-color: #fff1ff;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 3 0px;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  width: 50%;
`

const Title = styled.h1`
  margin: 60px;
  margin-top: 0;
`

const Form = styled.form`
  margin-left: 30px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftForm = styled.form`
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightForm = styled.form`
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled.input`
  padding: 20px;
`
const Textarea = styled.textarea`
  padding: 50px;
  height: 60%;
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

const AddressContainer = styled.div`
  width: 50%;
`

const AddressItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
`

const AddressTitle = styled.h4`
  font-size: 15px;
`

const Text = styled.span`
  font-size: 15px;
  margin-left: 10px;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Get In Touch With Us</Title>
          <Form>
            <LeftForm>
              <Input placeholder='Enter Your Name' />
              <Input placeholder='Enter Your E-mail ID' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <Textarea placeholder='Enter your Message' />
              <Button>Submit</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <AddressTitle>Head Office:</AddressTitle>
            <Text>
              A-24, Wonder Futura, Near Chandani Chowk, Kothrud, Pune – 411038
            </Text>
          </AddressItem>
          <AddressItem>
            <AddressTitle>EMAIL:</AddressTitle>
            <Text>info@tapsoft.in</Text>
          </AddressItem>
          <AddressItem>
            <AddressTitle>PHONE:</AddressTitle>
            <Text>+ (91) 992 333 2407 | 960 795 4133 | 960 795 4132</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact
