import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import operations from "./auth/authOperations";
import AppBar from "./components/appBar";
import HomePage from "./components/homePage";
import ContactView from "./pages/contactView";
import LoginView from "./pages/loginView";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";
import RegisterView from "./pages/registerView";

function App() {  
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(operations.fetchCurrentUser())
}, [dispatch]);

    return (<div>
      <AppBar/>
      <hr/>
<Routes>
      <Route path="/" element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>}>
      </Route>
      <Route path="/register" element={
          <PublicRoute restricted>
            <RegisterView />
          </PublicRoute>}>
      </Route>
        <Route path="/login" element={
          <PublicRoute restricted>
            <LoginView />
          </PublicRoute>}>
        </Route>
        <Route path="/contacts" element={
          <PrivateRoute>
          <ContactView />
          </PrivateRoute>}>
        </Route>
        

</Routes>
</div>
  );
}

export default App;  