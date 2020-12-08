import {
  CardDepoimento,
} from './components';

function App() {
  return (
    <CardDepoimento
      imagem = 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
      nome = 'Cristiana Duarte'
      cargo = 'Tutora Siga'
      texto = 'A empresa Júnior SigaGeo surgiu para implantar o espírito empreendedor nos alunos de bacharelado e licenciatura em Geografia da UFPE, além de proporcionar experiências e treinamentos, em busca de desenvolvimento pessoal e profissional com inovação nas áreas de ensino de geografia, meio ambiente e geotecnologias. Essas experiências visam ainda facilitar o ingresso desses alunos no mercado de trabalho. Como professora do curso de Geografia e tutora da empresa, sinto muito orgulho dos alunos que fazem parte da Siga e do trabalho desenvolvido por eles.'
    />
  );
}

export default App;
