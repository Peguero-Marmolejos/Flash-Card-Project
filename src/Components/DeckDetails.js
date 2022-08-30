/*import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {readDeck} from '../utils/api';
import Breadcrumb from './BreadCrumb';
import StudyDeck from './StudyDeck';

export default function DeckDetails() {
    const {deckId} = useParams()
    const [deck, setDeck] = useState([])
    const [currentCard, setCurrentCard] = useState({});

    useEffect(() => {
        readDeck(deckId).then(i => {
            setDeck([i])
            console.log(i)
        })
    }, [deckId]);

    if(deck){
        const {name, cards} = deck;
        console.log(deck);
        console.log(cards);
        if(cards && cards.length > 2){
            setCurrentCard(cards[0]);
        }
        else return(<p> Not enough cards</p>);

    /*return(
       /* <div>
            <Breadcrumb items = {['Home', name, 'Study']}> </Breadcrumb>
            <h1>Study: {name}</h1> 
            <StudyDeck card={currentCard} next ={(e) => {
                e.preventdefault;
                setCurrentCard(cards[1]);
            }} />  
        </div>  
    );
  }
  else{
    return <p>No Deck!</p>
  }
 }*/

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readDeck } from '../utils/api';

export default function DeckDetails() {
    const params = useParams()
    const [deck, setDeck] = useState()

    useEffect(() => {
        readDeck(params.deckId).then(i => {
            setDeck(i)
            console.log(i)
        })
    }, [params.deckId])
    if(!deck) return <div>Loading...</div>
    return (
        <div>
            <h1>Deck Details</h1>
            <p>Deck ID: {params.deckId}</p>
            <p>
                {JSON.stringify(deck, null, 2)}
            </p>
        </div>
    )
}