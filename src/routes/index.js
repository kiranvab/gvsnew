import React from 'react';
import { Switch,Route } from "react-router-dom";
import RentForm from '../components/RentForm';
import Home from '../components/Home';
import SearchResult from '../components/SearchResult';
import Search from '../components/Search';

export default function Routes(){
    return <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/search-result/:zip" component={Search}></Route>
        <Route path="/facility-result/:id"  component={SearchResult}></Route>
        <Route path="/rent-now/:siteId" component={RentForm}></Route>

        <Route component={SearchResult} />
    </Switch>
}