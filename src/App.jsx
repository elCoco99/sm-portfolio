import './App.css'
import { Header } from './components/Header'
import { Cover } from './components/Cover'
import { Display } from './components/Display'


// el resto de links de las imagenes se encuentran en ./images/links.txt
const CoverUrl = 'https://i.ibb.co/kX3fQzS/cover-pic.png'

function App() {
  return (
    <>
      <Header />
      <Cover url = {CoverUrl}/>
      <Display />
    </>
  )
}

export default App
