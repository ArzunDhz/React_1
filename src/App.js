import React from 'react';
import './index.css';
import { MyContext } from './context';
import Todo_list from './components/todo_list';
import Time from './components/time';

import Weather from './components/weather';
import Footer from './components/footer';

class App extends React.Component  {
static contextType = MyContext;

  render(){
    return (
  <>


  <Time/>
  <Todo_list/>

  </>
    )
  }
}

export default App;
