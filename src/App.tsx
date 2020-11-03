import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Auth from "./components/Auth/Auth";
import {useDispatch} from "react-redux";
import {getList} from "./redux/authReducer";
import Header from "./components/Header/Header";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getList())
    })
    return (
        <div>
            <Route path={'/register'}
                   render={() =>
                       <Auth isRegister={false}/>
                   }
            />
            <Route path={'/login'}
                   render={() =>
                       <Auth isRegister={true}/>
                   }
            />
            <Header/>
        </div>
    );
}

export default App;
