import { useState } from 'react'
import './styles.css'

type Props = {
  title: string
  initialValue?: number
}

function Counter({ title, initialValue }: Props) {
  const [count, setCount] = useState(initialValue || 0)

  function handleChangeValue(value: number) {
    const nextValue = count! + value

    if (nextValue < 0) {
      return
    }

    setCount(nextValue)
  }
  return (
    <div className="container-counter">
      <h1>{title}</h1>
      <div className="content-count">
        <h2>Contagem atual: {count} </h2>
        <button onClick={() => handleChangeValue(1)}>Incrementar</button>
        <button onClick={() => handleChangeValue(-1)}>Decrementar</button>
      </div>
    </div>
  )
}
export default Counter
