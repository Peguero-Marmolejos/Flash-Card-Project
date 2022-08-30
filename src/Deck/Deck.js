import React from 'react';
import{Router, Route, Switch} from 'react-router-dom';
import Study from './Study';
import Cards from '../Card/Cards';
import Edit from './Edit';


function Deck(){
    
    return (
    <Router>
        <Switch>
            <Route exact path = "/decks/:deckId/edit">
                <Edit />
            </Route>
            <Route exact path = "/decks/:deckId/study">
                <Study />
            </Route>
            <Route exact path = '/decks/:deckId'>

            </Route>
            <Route path='/decks/:deckId/cards/:cardId/'>
                <Cards />
            </Route>
        </Switch>
    </Router>


    );
}

export default Deck;