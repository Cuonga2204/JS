
import { useState } from 'react'

const courses = [
  {
    id:1,
    name:'Cuong'
  },
  {
    id:2,
    name:'Vinh'
  },
  {
    id:3,
    name:'Dat'
  }
]


function App() {
    const [checked, setChecked] = useState();

    console.log(checked);
    
    const handleCheck = (id)=>{
      setChecked(prev => [...prev, id])
    }


    const handleSubmit = () => {
      console.log({id:checked});
    }
  
  return (
    <div className="App" style = {{padding : 20}}>
      {courses.map(course =>(
        <div key ={course.id}>
          <input
          checked={checked.includes(course.id)}
          onChange={() => handleCheck(course.id)}
           type ="checkbox" />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}> Register</button>
    </div>
  );
}
export default App;