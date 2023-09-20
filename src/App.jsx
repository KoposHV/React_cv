import { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { CV } from './cv/Cv';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
 const { hero, education, experience, languages, habilities } = CV;


const App = () => {
 
  const [showEducation, setShowEducation] = useState(true);

  return (
  <div className="App">
   <Hero hero={hero} />
   <About hero={hero}/>


<div className="botones">
<button
className="custom-btn btn-4"
onClick={() => setShowEducation(true)}
>
Education
</button>
<button
className="custom-btn btn-4"
onClick={() => setShowEducation(false)}
>
Experience
</button>
</div>
<div>
{showEducation ? (
<Education education={education} />
) : (
<Experience experience={experience} />
)}
</div>


</div>
  


  )
}
export default App
