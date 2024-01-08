import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';



function App() {
  let todos=[
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done."
    },
    {
      sno: 22,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done."
    },
    {
      sno: 3,
      title: "Go to the salon",
      desc: "You need to go to the salon to get this job done."
    }
  ]
  return (
    <>
    <Header title="Todo List" searchbar={true}/>
    <Todos todos={todos}/>
    {/* <TodoItem /> */} 
    {/* 
        yahan upar aapne TodoItem ko props pass nhi kiye.. toh error aa raha tha ki cannot read propertis of undefined ( reading title ) Toh maine isse comment out kar diya.  (Woh lintinf wala error nhi aaya mere mein)  
    */}
    <Footer/>   
    </>
  );
}

export default App;
