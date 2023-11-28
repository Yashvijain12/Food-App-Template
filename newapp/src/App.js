import Navbar from "./Template/Navbar.js";
import Container from "./Template/Container.js";
import Footer from "./Template/Footer.js";
import "./Template/Navbar.css";

function App() {
return(
<>
  {/* <title>Teplt</title> */}
  {/* <link rel="stylesheet" href="index.css" /> */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />

  <Navbar></Navbar>
  <Container></Container>
  <Footer></Footer>
</>
);
}

export default App;
