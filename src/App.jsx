import styled from 'styled-components'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Introclip = styled.div`
  clip-path: polygon(100% 0%, 100% 52%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  background-color: #fff1ff;
`
const Introclip2 = styled.div`
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;
  position: absolute;
  background-color: #fff1ff;
`

const Introclip3 = styled.div`
  clip-path: polygon(100% 0%, 100% 100%, 51% 100%, 5% 83%, 0 20%, 75% 0);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;
  position: absolute;
  background-color: #fff1ff;
`

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <Introclip />
      </Container>
      <Container>
        <Features />
        <Introclip2 />
      </Container>
      <Container>
        <About />
        <Introclip3 />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

export default App
