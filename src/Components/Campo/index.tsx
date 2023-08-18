import './Campo.css'

interface CampoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor?: string
    obrigatorio?: boolean
    type?: string
}

const Campo = ({ type = 'text',label, placeholder, valor, aoAlterado, obrigatorio = false }: CampoProps) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default Campo