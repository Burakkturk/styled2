import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Container>
      <Nav/>
    <Header/>
    </Container>
     
    </>
  );
};

export default App;
