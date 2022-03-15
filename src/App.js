import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import HomePage from "./components/homePage";
import ContactView from "./pages/contactView";
import LoginView from "./pages/loginView";
import RegisterView from "./pages/registerView";
function App () {  
    return (<div>
      <AppBar/>
      <hr/>
<Routes>
<Route path="/" element={<HomePage/>}></Route>
<Route path="/register" element={<RegisterView/>}></Route>
<Route path="/login" element={<LoginView/>}></Route>
<Route path="/contacts" element={<ContactView/>}></Route>


</Routes>
</div>
  );
}

export default App;  