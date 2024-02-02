import "./App.css";
import SignIn from "./pages/Sign";
import { Sidebar } from "./component/Sidebar";
import { useState } from "react";


function App() {
  const [value, setValue] = useState("");
    
  return (
    <main className="container">
      {value ? <Sidebar /> : <SignIn value={value} setValue={setValue} />}
     
      
    </main>
  );
}

export default App;
