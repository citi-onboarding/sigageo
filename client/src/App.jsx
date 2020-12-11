import {
  Depoimentos,
  Contato,
  Footer,
  Servicos
} from './components';

function App() {
  return (
    <div className="site">
      {/*navbar*/} 
      {/*banner*/} 
      {/*sobre nos*/} 
      <Servicos />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
