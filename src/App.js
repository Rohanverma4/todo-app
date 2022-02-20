import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { SingleTodo } from './components/SingleTodo';
import { Routes,Route } from 'react-router-dom';
import { EditTodo } from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element = {<Todo />}></Route>
        <Route path={'/todos/:id'} element = {<SingleTodo />}></Route>
        <Route path={'/todos/:id/edit'} element = {<EditTodo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
