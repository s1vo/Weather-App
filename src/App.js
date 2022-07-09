import React from 'react';
import LeftBar from './components/leftBar/LeftBar';
import WrapperBar from './components/wrapperBar/WrapperBar';

import './App.css'; 
function App() {
  return (
    <div className="App">
      <LeftBar></LeftBar>
      <WrapperBar></WrapperBar>
    </div>
  );
}

export default App;
