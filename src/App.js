import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Rodape from './Components/Rodape';
import Time from './Components/Time';
import { v4 as uuidv4 } from 'uuid'; 

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data-Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Designer',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Israel Douglas',
      cargo: 'Desenvolvedor Back-End',
      imagem: 'https://github.com/israeldouglas25.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Stephanie Souza',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://github.com/tesouzas.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Amanda Soares',
      cargo: 'Analista de Dados',
      imagem: 'https://github.com/MandaSoares.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Ana Fontes',
      cargo: 'Banco de Dados',
      imagem: 'https://github.com/anafontessp.png',
      time: times[3].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }))
  }

  return (
    <div>
      <Banner enderecoImagem='/imagens/banner.png' textoAlternativo='Logo do Organo'/>
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
            mudarCor={mudarCorTime}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
