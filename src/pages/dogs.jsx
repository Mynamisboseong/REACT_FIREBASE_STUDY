import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

function Dogs() {
  const [dog, setDogs] = useState()

  const fetchTest2 = async () => {
    const animals = doc(db, 'animals', 'dog2')

    const a = await getDoc(animals)

    if (a.exists()) {
      setDogs(a.data())
    }
  }

  useEffect(() => {
    fetchTest2()
  }, [])

  if (!dog) {
    return <>로딩</>
  }

  return (
    <>
      <h1>강아지정보</h1>
      <ul>
        <li>{dog.name}</li>
        <li>{dog.나이}</li>
        <li>{dog.favorite}</li>
      </ul>
    </>
  )
}

export default Dogs
