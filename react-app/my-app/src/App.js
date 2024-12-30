import './App.css';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Button color={"red"} message={"Click me"}/>
      <Button color={"blue"} message={"Contact Us"} />
      <Button color={"pink"} message={"About"}/>
      <Button color={"orange"} message={"Book a Consultation"}/>
      <Button color={"green"} message={"Submit"}/>
    </div>
  );
}

export default App;
