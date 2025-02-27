import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FOcusScreen } from './04-useRef/FOcusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom';
// import './08-useReducer/intro-reducer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <HooksApp /> */}
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHook/> */}
      {/* <SimpleForm/> */}
      {/* <FormWithCustomHook/> */}
      <MultipleCustomHooks/>
      {/* <FOcusScreen/> */}
      {/* <Layout/> */}
      {/* <Memorize/> */}
      {/* <MemoHook/> */}
      {/* <CallbackHook/> */}
      {/* <Padre/> */}
      {/* <TodoApp/> */}
      {/* <MainApp/> */}
    </BrowserRouter>
  </StrictMode>  
)
