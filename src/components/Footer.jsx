import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f8d4f8;
  height: 10%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 20px;
`
const ListItem = styled.li`
  list-style: none;
  margin-left: 20px;
`
const CopyRight = styled.span`
  margin-right: 20px;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Products</ListItem>
          <ListItem>Solutions</ListItem>
          <ListItem>Blogs</ListItem>
          <ListItem>Profile</ListItem>
        </List>
        <CopyRight>Tapsoft © 2021</CopyRight>
      </Wrapper>
    </Container>
  )
}

export default Footer
