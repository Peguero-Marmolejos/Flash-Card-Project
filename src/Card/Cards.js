import React from "react";
import{Router, Route, Switch} from 'react-router-dom';

function Cards(){
    return(
        <Router>
            <Switch>
                <Route path = '/decks/:deckId/cards/:cardId/edit'></Route>           
                <Route path = '/decks/:deckId/cards/new'></Route>
                <Route path = '/decks/:deckId/cards/:cardId/edit'>
                </Route>
            </Switch>
        </Router>
    )
}
export default Cards;