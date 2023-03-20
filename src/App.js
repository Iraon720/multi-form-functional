import './App.css';
import {ContextProvider} from "./Context"
import { Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';


function App (){

return (
    <div id='cardHolder'>
      <div>
        <SideNav />
      </div>
      <ContextProvider/>
      <div>
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/plan' element={<Step2 />} />
          <Route path='/add-ons' element={<Step3 />} />
          <Route path='/summary' element={<Step4 />} />
        </Routes>
      </div>
      <ContextProvider/>
    </div>
  );
  }
  


  
export default App;
