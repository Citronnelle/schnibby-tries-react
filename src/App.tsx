import React from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import MyContainer from "./layout/MyContainer";

function App() {
  return (
    <>
      <div className="App-content">
        <MyContainer>
          <MyForm />
        </MyContainer>
      </div>
    </>
  );
}

export default App;
