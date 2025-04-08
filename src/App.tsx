import MRlogo from './assets/mythical-robotics.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://mythicalrobotics.org" target="_blank">
          <img src={MRlogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mythical Robotics</h1>
      <div className="card">
        <p>
          Our site is under constrction. Come back soon!
        </p>
      </div>
      <p className="read-the-docs">
        A 501(c)(3) Noprofit organization.
      </p>
    </>
  )
}

export default App
