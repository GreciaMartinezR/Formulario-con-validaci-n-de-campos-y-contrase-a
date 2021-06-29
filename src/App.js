import { useState } from "react";
import Formulario from "./componentes/Formulario";
/*import Lista from "./componentes/Lista";*/

const App=() => {
  const [myForm, setMyForm] = useState({
    name:"",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:"",
  })

  return (
    <div className="App">
      <Formulario myForm={myForm} setMyForm={setMyForm}/>
      {/*<Lista myForm={myForm}/>*/}
    </div>
  );
}

export default App;
