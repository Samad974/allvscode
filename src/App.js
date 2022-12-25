import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Landing } from "./Assignment/Landing";
import { Details } from "./Components/Details";
import { Todolist } from "./Components/Todolist";
import { Task } from "./Components/Task";
import { Tasks } from "./Components/Tasks";
import { Practice } from "./Components/Practice";
import { Counter } from "./Components/Counter";
import { UndoRedu } from "./Components/UndoRedu";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { Api } from "./Components/Api";
import { Turnary } from "./Components/Turnary";
import Classcomponent from "./Components/Classcomponent";
import Classtodo from "./Components/Classtodo";
import { Bulb } from "./Components/Bulb";
import { Studentslist } from "./Components/Studentslist";
import { Stafflist } from "./Components/Stafflist";
import { AddStaff } from "./Components/AddStaff";
import { AddStudent } from "./Components/AddStudent";
import { EditStaff } from "./Components/EditStaff";


function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Nav/>
      <Routes>
      
         <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todolist />} />
        <Route path="/undoredu" element={<UndoRedu />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/api" element={<Api />} />
        <Route path="/turnary" element={<Turnary />} />
        <Route path="/classcomponent" element={<Classcomponent />} />
        <Route path="/classtodo" element={<Classtodo />} />
        <Route path="/bulb" element={<Bulb />} />
        <Route path="/details" element={<Details />} />
        <Route path="/studentslist" element={<Studentslist/>} />
        <Route path="/stafflist" element={<Stafflist/>} />
        <Route path="/addStaff" element={<AddStaff/>} />
        <Route path="/addStudent" element={<AddStudent/>} />
        <Route path="/editStaff" element={<EditStaff/>} /> 
       
       </Routes> 
      </BrowserRouter> *
      {/* <Landing/> */}
    </div>
  );
}
export default App;
