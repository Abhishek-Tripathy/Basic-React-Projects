import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact from './pages/Contact'
// import './App.css'
import Layout from './Layout'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: "/about",
  //     element: <About />
  //   },
  //   {
  //     path: "/movie",
  //     element: <Movie />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   }
  // ])  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App
