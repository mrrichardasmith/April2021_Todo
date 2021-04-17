import { useState, useEffect } from 'react';
import './App.css';
import { AddTodo } from './AddTodo/AddTodo'
import { TodoList } from './TodoList/TodoList';
import { FooterBar } from './FooterBar/FooterBar'
import axios from 'axios';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';
import backgroundDark from '../images/bg-desktop-dark.jpg';
import backgroundLight from '../images/bg-desktop-light.jpg';


function App() {

  const dark = {
    backgroundColor: "#282c34",
    textAlign: "center",
    backgroundImage: `url( ${backgroundDark} )`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "85%",
    height: "75rem",
    margin: "auto",
    color: "white",
    
  }

  const light = {
    backgroundColor: "white",
    textAlign: "center",
    backgroundImage: `url( ${backgroundLight} )`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "85%",
    height: "75rem",
    margin: "auto",
    color: "white"
    
  }
 
  const [ todo, setTodo ] = useState([]);
  const [ todoText, setTodoText ] = useState('');  
  const [ todoNumber, setTodoNumber ] = useState(0);
  const [ theme, setTheme ] = useState(light);
  const [ numberOfTodo, setNumberOfTodo ] = useState(0);


  //Loads the todo's data with the fetch below
 useEffect(() =>   {
  fetchJobs();  
 },[todo]);


function themeHandler(event) {
  event.preventDefault()
  theme === 'light' ? setTheme('dark') : setTheme('light');
  console.log({theme})
}

 //This is the promise and fetch that loads the data from json-server
 const fetchJobs = async () => {
   try{
    return await axios.get ('http://localhost:3000/todo')
    .then(res =>  {
      const todo = res.data;
      setTodo(todo);
      setNumberOfTodo(todo.length);
    })
   } catch (error)  {
     console.error(error)
   }
 }

 

 function idCreate () {
   const assign = todoNumber + 1;
   setTodoNumber(assign)
   return assign;
 }
  //Handles the events sent from typing the todo into the input and saves it to state.
  function addTodoText (event) {
    setTodoText(event.target.value); 
  }

  {/*Watches for the enter key number 13 to be struck so that it can construct a new todo object and send it 
  to the json-server mock api for storage triggering a re-rendering that displays the todo in the app.
  involves a keyCode check an boiler plate axios post and setter to cleasr the field text afterwards*/}

  function enterWatch (event) {
    event.preventDefault();
    if(event.keyCode === 13) {
      
    //setTodo([...todo, newTodo])
    console.log(todo)
    axios.post(`http://localhost:3000/todo`, { 
      id: idCreate(),
      description: todoText,
      completed: false 
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    setTodoText('')
    }
  }

  {/*Boiler Plate axio Delete using the id captured from the event fired when the x is clicked. deletes the object from
  the json-server mock db using the id reference */}
  
  function handleDelete (event) {
    const id = event.target.id;
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/todo/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    //Used 2 ternary and two css objects to control the styling using the icon to toggle
    <div style={theme === 'light' ?  light : dark}>
        
        <div className="card">
          <div className="container">
            <p className="title">Todo</p><img className="nightDay" src={theme === 'light' ? sun : moon} alt="sun icon" onClick={themeHandler} />
          </div>
          <AddTodo addTodoText={addTodoText} enterWatch={enterWatch} todoText={todoText} /> 
          <TodoList todo={todo} handleDelete={handleDelete}/>
          <FooterBar numberOfTodo={numberOfTodo} />
        </div>
      
    </div>
  );
}

export default App;