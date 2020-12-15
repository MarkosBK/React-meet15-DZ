import React from 'react';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import img from './city.jpg'
export function Page1(props) {
    return (
        <div className="card" style={{ width: "25rem" }}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.match.params.param}</h5>
                <p className="card-text">Криво́й Рог — город в Днепропетровской области Украины. Административный центр Криворожского района. До 2020 года был городом областного подчинения, который составлял Криворожский городской совет. Город основан в 1775 году и расположен на месте слияния рек Ингулец и Саксагань.</p>
            </div>
        </div>
    )
}

export function Page2(props) {
    return (
        <h1>Самая известная достопримечательность</h1>
    )
}

export function Page3(props) {
    return (
        <h1>Все остальные достопримечательности</h1>
    )
}

export function Page4(props) {
    return (
        <img src={img} alt="city"></img>
    )
}

export function NavMenu(props) {
    return (
        <div className="d-flex justify-content-center mb-5">
            <NavLink to='/page1/Кривой Рог' className='mx-2'>Город</NavLink>
            <NavLink to='/page2/parametr2' className='mx-2'>Главная достопримечательность</NavLink>
            <NavLink to='/page3/parametr3' className='mx-2'>Достопримечательности</NavLink>
            <NavLink to='/page4/parametr4' className='mx-2'>Фото</NavLink>
        </div>
    )
}

export default function RouteExample(props) {
    return (
        <div className="container-fluid d-flex flex-column align-items-center">
            <Router>
                <NavMenu></NavMenu>
                <Switch>
                    <Route path='/page1/:param?' component={Page1}></Route>
                    <Route path='/page2/:param?' component={Page2}></Route>
                    <Route path='/page3/:param?' component={Page3}></Route>
                    <Route path='/page4/:param?' component={Page4}></Route>
                </Switch>
            </Router>
        </div>
    )
}