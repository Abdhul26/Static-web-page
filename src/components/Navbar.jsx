import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
  background: linear-gradient(to right, #08fbff 0%, #ebf7b0 50%, #fff1ff 100%);
`

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  text-decoration: underline purple;
  color: blue;
  font-weight: bold;
  /* font-family: cursive; */
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
`
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  color: grey;
  font-weight: bold;
`

const Button = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #f15050;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>TapSoft</Logo>
          <Menu>
            <MenuItem>Solutions</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Contacts</MenuItem>
          </Menu>
        </Left>
        <Button>Reach us</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
