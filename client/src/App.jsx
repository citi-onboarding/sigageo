import {
  Depoimentos,
  Contato,
  Footer,
  Servicos,
  SobreNos,
  NavBar,
  Banner,
} from './components';

function App() {
  return (
    <div className="site">
      <NavBar />
      <Banner />  
      <SobreNos />
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
