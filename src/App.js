import './App.css';
import { About } from './components/About';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container-fluid">
        <About />
        <div className="container">
          <Form label="Enter Your Blog Here" />
        </div>
      </div>
    </>
  );
}

export default App;
