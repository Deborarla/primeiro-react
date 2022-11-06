import Header from './componentes/Header'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer';

import { useState } from 'react';

function App() {
  const name = useState('Débora');
  
  return (
    <div>
    <Navbar />
    <Header> Body </Header>
    <Footer>Débora Lima</Footer>
    </div>
  );
}

export default App;
