import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import NotFound from "./NotFound";
import Home from "../routes/Home";
// import CreateDeck from "../Deck/CreateDeck";
import NewDeck from "../routes/decks/NewDeck";
import DeckDetails from "../routes/decks/DeckDetails";
import NewCard from "../routes/decks/NewCards";


function Layout() {
  
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here 
                    </Route>
            <Route exact path='/decks/new'>
              <CreateDeck />
            */
        <div>
          <Switch>
            <Route exact path='/'>
             <Home />
            </Route>
            <Route path='/decks/new'>
              <NewDeck />
            </Route>
            <Route exact path='/decks/:deckId/study'>
              <DeckDetails />
            </Route>
            <Route exact path='/decks/:deckId/cards/new'>
              <NewCard />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        }
 
      </div>
    </div>
  );
      }
      


export default Layout;
