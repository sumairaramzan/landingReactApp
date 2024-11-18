import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hello from "./component/Hello/Hello";
import Carousel from "./component/Carousel/Carousel";
import Header from "./component/Header/Header";
import img1 from "./Images/bell.svg";
import AComponent from "./component/CustomCard/AComponent";
import { ProviderTheme } from "./context/ThemeContext";
import React, { Suspense, useState } from "react";
import BComponent from "./component/CustomCard/BComponent";

function App() {
  const dataShow = [
    {
      cardImg: { img1 },
      cardTitle: "heading",
      cardText: "lorem ipsum",
      cardButton: "next",
    },
    {
      cardImg: { img1 },
      cardTitle: "heading",
      cardText: "lorem ipsum",
      cardButton: "next",
    },
    {
      cardImg: { img1 },
      cardTitle: "heading",
      cardText: "lorem ipsum",
      cardButton: "next",
    },
    {
      cardImg: { img1 },
      cardTitle: "heading",
      cardText: "lorem ipsum",
      cardButton: "next",
    },
  ];
  const [name, setName] = useState("sana");
  const LazyComponent = React.lazy(() => import("./component/Header/Header"));

  const changeName = () => {
    setName("saira");
  };

  return (
    <>
      <div className="App">
        {/* <ProviderTheme>
        <AComponent />
      </ProviderTheme> */}
        {/* <h1>hello : {name}</h1>
      <button onClick={changeName}>name change</button> */}
        {/* <BComponent /> */}
        <AComponent />
      </div>
    </>
  );
}

export default App;
