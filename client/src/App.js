import './App.css';
import KanBan from './components/KanBan';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkBhX35Yc3JQQmBUWEw=');


function App() {
  return (
    <div className="App">
      <KanBan/>
    </div>
  );
}

export default App;
