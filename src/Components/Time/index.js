import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores, corPrimaria, corSecundaria }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            colaborador={colaborador}
                            corFundo={corPrimaria}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time;