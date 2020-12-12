import {
  Depoimentos,
  Contato,
  Footer,
  Servicos,
  SobreNos,
  NavBar
} from './components';

function App() {
  return (
    <div className="site">
      <NavBar />
      {/*banner*/} 
      <SobreNos />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
