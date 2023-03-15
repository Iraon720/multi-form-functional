import './App.css';
import SideNav from './Components/SideNav';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';


function App() {
  return (
    <div id='cardHolder'>
      <Routes>
        <Route path='/' element={<Step1 />} />
        <Route path='/' element={<Step2 />} />
        <Route path='/' element={<Step3 />} />
        <Route path='/' element={<Step4 />} />
      </Routes>
    </div>
  );
}

export default App;
