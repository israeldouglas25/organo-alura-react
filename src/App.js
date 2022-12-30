import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Rodape from './Components/Rodape';
import Time from './Components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Designer',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const inicial = [
    {
      nome: 'Israel Douglas',
      cargo: 'Desenvolvedor Back-End',
      imagem: 'https://github.com/israeldouglas25.png',
      time: times[0].nome
    },
    {
      nome: 'Stephanie Souza',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://github.com/tesouzas.png',
      time: times[1].nome
    },
    {
      nome: 'Amanda Soares',
      cargo: 'Analista de Dados',
      imagem: 'https://github.com/MandaSoares.png',
      time: times[2].nome
    },
    {
      nome: 'Ana Fontes',
      cargo: 'Banco de Dados',
      imagem: 'https://github.com/anafontessp.png',
      time: times[3].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
      />
      <section className='times'>
        <h1>RECODE PRO</h1>
        <h2>SQUAD 25</h2>
        {times.map((time, indice) =>
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
