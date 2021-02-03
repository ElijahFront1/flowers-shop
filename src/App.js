import React from 'react';
import Home from './components/home/Home'
import Header from './components/header/Header'

function App() {
  return (
    <div className="general-wrapper">
      <React.StrictMode>
        <Header />
        <Home />
      </React.StrictMode>
    </div>
  );
}

export default App;
