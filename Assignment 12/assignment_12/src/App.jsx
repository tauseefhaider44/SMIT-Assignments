import './App.css'
import Navbar from './components/navbar/navbar'
import Section1 from './components/section_1/section_1'
import Section2 from './components/section_2/section_2'
import Section3 from './components/section_3/section_3'
import Section4 from './components/section_4/section_4'
import Section5 from './components/section_5/section_5'
import Section6 from './components/section_6/section_6'
function App() {
  return (
    <>
      <div className="main_Container">
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  )
}

export default App
