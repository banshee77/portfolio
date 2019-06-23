import React from 'react';
import './App.css';
import Section from './containers/Section/Section';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import ExampleWork from './components/ExampleWork/ExampleWork';


function App() {
  return (
    <div className="App">
      <Header />
      <Section text="Portfolio" />
      <ExampleWork />
      <Section text="About" />
      <Footer />
    </div>
  );
}

export default App;
