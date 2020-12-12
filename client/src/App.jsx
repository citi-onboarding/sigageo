import {
  Depoimentos,
  Contato,
  Footer,
  Servicos,
  SobreNos
} from './components';

function App() {
  return (
    <div className="site">
      {/*navbar*/} 
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
