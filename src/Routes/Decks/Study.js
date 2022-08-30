import React, {useEffect, useState} from'react';
import { Switch, Router, Route, useParams, useRouteMatch } from 'react-router-dom';
import DeckDetails from '../../Components/DeckDetails';
import{listDecks, readDeck} from '../../utils/api'


function Study(){
  const {deckId} = useParams();
  const [deck,setDeck] = useState([]);

  useEffect(() => {
    listDecks().then(i => setDeck(i));
  }, []);

  useEffect(() => {
    readDeck(deckId).then(i => setDeck([i]));
  }, [deck]);

  console.log(deck)
    
    return(
      <div>
        <DeckDetails />
      </div>);
  
}
export default Study;