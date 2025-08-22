import  {Component} from "react";
import "./App.css"
import Calculator from "./components/calculator/index.jsx"
class App extends Component{
  render(){
    return(
      <div className="app">
        <h1>simple calculator</h1>
        <Calculator/>
      </div>
    )
  }
}
export default App;