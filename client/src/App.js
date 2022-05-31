
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import KanBan from './components/KanBan';
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
      <Switch>
        <Route path="/">
          <div className="App">
             <KanBan/>
          </div>
        </Route>
      </Switch>
    </main>
    </>

  );
}

export default App;
