import './App.css'
import LeftPart from './components/left_part/left_part.jsx'
import RightPart from './components/right_part/right_part.jsx'

function App() {
  return (
    <>
      <div className="main_Container">
        <LeftPart />
        <RightPart />
      </div>
    </>
  )
}

export default App;