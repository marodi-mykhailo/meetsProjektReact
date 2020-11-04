import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Auth from "./components/Auth/Auth";
import {useDispatch} from "react-redux";
import {getList} from "./redux/authReducer";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import {Container} from 'react-bootstrap';
import Slider from "./components/Slider/Slider";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
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
            <Container>
                <Categories/>
            </Container>
            <Slider/>

        </div>
    );
}

export default App;
