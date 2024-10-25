import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './assets/Pages/Home'
import Navbar from './Component/Navbar/Navbar'
import Notfound from './assets/Pages/Notfound'
import Vlog from './assets/Pages/Vlog'

function App() {
 const reactRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home/>} />
    <Route path='/vlog' element={<Vlog/>} />
    <Route path='*' element={<Notfound/>} />

  </Route>
 ))
  return (
    <>
    <Navbar/>
    <RouterProvider router={reactRoute}/>
    </>
  )
}

export default App
