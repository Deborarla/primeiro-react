import Header from './componentes/Header'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Encrementar from './componentes/Encrementador';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Sobrenos from './componentes/pages/Sobrenos'
import Portifolio from './componentes/pages/Portifolio'
import Endereco from './componentes/pages/Endereco'
import Contatos from './componentes/pages/Contatos'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Sobrenos/>}/>
        <Route path='/portifolio' element={<Portifolio/>}/>
        <Route path='/endereco' element={<Endereco/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
      </Routes>
    </Router>
    <Encrementar/>
    <Footer>Débora Lima</Footer>
    </>
  );
}

export default App;
