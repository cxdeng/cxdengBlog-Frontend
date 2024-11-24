import {BrowserRouter} from "react-router-dom";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import store from './redux/store.ts'
import 'normalize.css';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
           <Provider store={store}>
               <App/>
           </Provider>
        </BrowserRouter>
    </StrictMode>,
)
