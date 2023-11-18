import { Routes } from 'react-router-dom'
import './App.scss'
import routes from './routes'
import { RenderRoutes } from './routes/renderRoutes'

function App() {

  return (
    <div className='app'>
      <Routes>
        {RenderRoutes(routes)}
      </Routes>
    </div>
  )
}

export default App
