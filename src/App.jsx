import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return <>
  <BrowserRouter basename="/ems-frontend">
    <HeaderComponent/>
    <Routes>
        {/* // http://localhost:3000 */}
        <Route path="/" element={<ListEmployeeComponent/>}></Route>
        {/* // http://localhost:3000/employees */}
        <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
        {/* // http://localhost:3000/add-employee */}
        <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
        {/* // http://localhost:3000/add-employee/1  */}
        <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  </>;
}

export default App;
