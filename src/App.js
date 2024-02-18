import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import { Form } from './components/Form/Form';
function App() {
  return (
    <div className="App">
    <div className='container'>
      <h1>It's work</h1>
    
      <Switch>
        
        <Route path = {'/form'}><Form/></Route>
          </Switch>
          <button   className="btn">Закрыть</button>
          </div>
          </div>
     

   
    
  );
}

export default App;
//   <Header/>  onClick = {closeEvent}  <Route index element = {<ProductList/>}/>