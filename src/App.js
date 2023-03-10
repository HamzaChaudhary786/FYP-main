import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { Error } from './Components/Error';
import About from './Pages/About';
import DeveloperAbout from './Pages/DeveloperAbout';
import Floods from './Pages/Floods';
import SingleFlood from './Components/SingleFlood';
import Sign_In from './Pages/Sign_In';
import Sign_Up from './Pages/Sign_Up';
import Cancer from './Pages/Cancer';
import Working from './Pages/Working';
import HowItsWork from './Pages/HowItsWork';


function App() {
  return (
    <>

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<HowItsWork />} />

        <Route path='/aboutus' element={<About />} />
        <Route path='/aboutdescription' element={<DeveloperAbout />} />
        <Route path='/floods' element={<Floods />} />
        <Route path='singleflood/:id' element={<SingleFlood />} />
        <Route path='/signin' element={<Sign_In />} />
        <Route path='/signup' element={<Sign_Up />} />
        <Route path='/cancer' element={<Cancer />} />
        <Route path='/working' element={<Working />} />



        <Route path='*' element={<Error />} />


      </Routes>



    </>

  );
}

export default App;
