
import './App.css';
import Search from './violations/search';
import BarChart from './violations/BarChart';
import TopViolators from './violations/topviolators';
import NavBar from './navbar/NavBar';
import MyStory from './mystory/mystory';
import { useLocation } from 'react-router-dom';
import backgroundImage from './images/free/food-safety-veg.jpg';
import DineSafe from './dinesafe/DineSafe';
import Mobile from './mobile/mobile';
import Api from './apis/Apis';
import TechStack from './techused/TechStack';
import Title from './Title';
import Footr from './footer';


function App() {
  const location = useLocation();  
    if (location.pathname === '/violations') {
        return (
        <div  
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '500px'}}>
            <Search/>
          </div>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', maxWidth: '1155px'}}>
            <BarChart />
            <TopViolators />
          </div>
          <br/>
          <br/>

          <Footr/> 
        </div> 
        ) 
      }   
      else if ( location.pathname === '/') {
        return (
        <div  
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '500px', paddingBottom:700}}>
            <MyStory/>
          </div>
          <Footr/> 
        </div> 
        ) 
      }
      else if ( location.pathname === '/title') {
        return (
        <div  
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '500px', paddingBottom:700}}>
            <Title/>
          </div>
          <Footr/> 
        </div> 
        ) 
      }
      else if (location.pathname === '/alerts') {
        return (
        <div>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '700px'}}>
            <Mobile/>
          </div>
          <br/>
          <br/>
          <Footr/> 
        </div> 
        ) 
      }   
      else if (location.pathname === '/apis') {
        return (
        <div  
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '500px', paddingBottom:200}}>
            <Api/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Footr/> 
        </div> 
        ) 
      }   
      else if (location.pathname === '/techstack') {
        return (
        <div  
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <NavBar/>
          <br/>
          <br/>
          <div className="card-container" style={{margin:'auto',display: 'flex', height: '500px'}}>
            <TechStack/>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Footr/> 
        </div> 
        ) 
      }   
      
  return (
    <>
    <div 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <NavBar/>
        <br/>
        <br/>
        <div className="card-container">
          <DineSafe/>
        </div>
        <br/>
        <br/>
        <Footr/> 
    </div>
  </>
  );
}

export default App;
