import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Welcome to Competitive Gaming Platform</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
