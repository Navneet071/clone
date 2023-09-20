import "./App.css";

import Header from "./components/Navbar";
import Footer from "./components/Footer"
import Greeting from "./components/Greeting";
import Name from "./components/Name"
import List from './components/List'

import Card from "./components/Card"
// import {add,sub,mul,div} from "./components/Calculator"

import * as operation from "./components/Calculator"

const currentDate = new Date();
let greeting;
const year = currentDate.getFullYear();


const img = "https://picsum.photos/200";
const customStyle = {
  color : "red",
  border:  "2px solid black",
  display: "inline"
}

customStyle.color="purple"

const currentTime = currentDate.getHours();


function App() {
  return (
    <>
      <Header />
      <Card />
      <Footer />


      {/* <p>Copyright {year} </p> */}

      <div className="images">
        <img src={img} alt="" />
        <img src={img + "?grayscale"} alt="" />

        <img src={img} alt="" />
      </div>

      {/* <Name />
      <Greeting />
      <List />
      <ul>
        <li>{operation.add(1,2)}</li>
        <li>{operation.sub(1,2)}</li>
        <li>{operation.mul(1,2)}</li>
        <li>{operation.div(1,2)}</li>
      </ul> */}

    </>
  );
}

export default App;
