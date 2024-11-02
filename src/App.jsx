import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dogs from './pages/dogs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={<Dogs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
