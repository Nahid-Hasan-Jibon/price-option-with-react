
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import NavBar from './NavBar/NavBar'

function App() {
  

  return (
    <>
     {/* <DaisyNav></DaisyNav> */}
     <NavBar></NavBar>
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      
      
    </>
  )
}

export default App
