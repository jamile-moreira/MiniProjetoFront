import './styles.css'
import Counter from '../../componentes/contador'

function Main() {
  return (
    <div className="container-main">
      <Counter title="Contador 1" />
      <Counter title="Contador 2" initialValue={10} />
    </div>
  )
}

export default Main
