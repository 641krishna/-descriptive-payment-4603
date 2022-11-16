import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { RoutesPage } from './Routes/Routing';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <RoutesPage />
      <Footer/>
    </div>
  );
}

export default App;
