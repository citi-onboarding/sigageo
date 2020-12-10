import {
  Depoimentos,
  Contato,
  Footer
} from './components';

function App() {
  return (
    <div className="site">
      {/*navbar*/} 
      {/*banner*/} 
      {/*sobre nos*/} 
      {/*servicos*/} 
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
