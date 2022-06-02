
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import KanBan from './components/KanBan';
import Create from './pages/Create';
import NewProject from './pages/NewProject';
import { registerLicense } from '@syncfusion/ej2-base';
import './App.css';
import DeleteProject from './pages/DeleteProjectPage';
import DeleteTask from './pages/DeleteTaskPage';


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

    <div className="app">
    <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" exact element={<KanBan/>}/>
        <Route path="/create" element={<Create user={user}/>}/>
        <Route path="/create-project" element={<NewProject user={user}/>}/>
        <Route path="/delete-project" element={<DeleteProject user={user}/>}/>
        <Route path="/delete-task" element={<DeleteTask user={user}/>}/>
      </Routes>
    </main>
    </div>

  );
}

export default App;
