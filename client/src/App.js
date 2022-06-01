
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import KanBan from './components/KanBan';
import NewTask from './components/NewTask';
import Create from './pages/Create';
import { registerLicense } from '@syncfusion/ej2-base';
import './App.css';


// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkBhX35Yc3JQQmBUWEw=');


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (

    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" exact element={<KanBan/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </main>
    </>

  );
}

export default App;
