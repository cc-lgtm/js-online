import { useState, useEffect } from 'react'

export default function Home() {
  const [conut, setCount] = useState<number>(0)
  function onClick() {
    setCount(conut + 1)
  }
  useEffect(() => {
    console.log('我变化了', conut)
  }, [conut])
  return (
    <div onClick={onClick}>{conut}</div>
  )
}
