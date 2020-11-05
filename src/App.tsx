import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Auth from "./components/Auth/Auth";
import {useDispatch} from "react-redux";
import {getList} from "./redux/authReducer";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import {Container} from 'react-bootstrap';
import Slider from "./components/Slider/Slider";
import MeetingList from "./components/MeetingList/MeetingList";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList())
    })
    return (
        <div>
            <Switch>
                <Route exact path={'/register'}
                       render={() =>
                           <Auth isRegister={false}/>
                       }
                />
                <Route exact path={'/login'}
                       render={() =>
                           <Auth isRegister={true}/>
                       }
                />
                <Route exact path={'/'}
                       render={() => <div>
                           <Header/>
                           <Container>
                               <Categories/>
                           </Container>
                           <Slider/>
                           <MeetingList/>
                       </div>}
                />
                <Route exact path={'/404'} render={() => <h1>404 Not found</h1>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    );
}

export default App;
