import './App.css';
import Github from './components/Github';
import Contactinfo from './components/Contactinfo';
import Skills from './components/Skills';
import Aboutme from './components/Aboutme'; 



// const fullname= "Anthony Garcia"; 
// const firstName= "Anthony"; 

function App() {
  return (
    <div id="body">
    <div>
    <div id="aboutme"><Aboutme/></div>
    <div id="skills"><Skills/></div>
    <div id= "contactinfo"><Contactinfo/></div>
    <div id="github"><Github/></div>
    
    
    
    
    
    
    
    </div>
    </div>
  );
}

export default App;
