import React, { useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { createDeck, readDeck } from '../../utils/api';
import Breadcrumb from '../../components/Breadcrumb';
import StudyDeck from '../../components/StudyDeck';

export default function DeckDetails() {
    const params = useParams();
    const [deck, setDeck] = useState();
    const [showing, setShowing] = useState();
    const [iterator, setIterator] = useState(0);

    useEffect(() => {
        readDeck(params.deckId).then(i => {
            setDeck(i);
            setShowing(i.cards[0]?.front);
        })
    }, [params.deckId])

    if(!deck) return <div>Loading...</div>;
    else if(!deck.cards || deck.cards.length < 3){ 
        return(
            <div key={deck.id} className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">Not enough cards.</h5>
                    <p className="card-text">You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
                    <a href="cards/new" className="btn btn-secondary" type="button">+ Add Cards</a>
                </div>
            </div>
        );
    }
    const cards = deck.cards;
    const study = cards.map((card, index, cards) =>{
        const{id, front, back} = card;
        return (<StudyDeck 
            id={id}
            length={cards.length}
            index={index} 
            showing={showing} 
            flip = {
                async (e) =>{
                    showing===front? setShowing(back):setShowing(front);
                    console.log(showing);
                }
            }
            next={
                async (e) =>{
                    if(index === cards.length-1){
                            // window confirm if user wants to resart
                        if (window.confirm('Restart cards? Click `cancel` to return to the homepage.')) {
                            setIterator(0);
                        }else{
                            return <Redirect to='/' />;
                        }
                    }else{
                        setShowing(cards[index+1].front);
                        setIterator(index+1);
                    }
                }
            }
            
        />);
    });

    return (
        <div>
            <Breadcrumb items={['Home',deck.name, 'Study']} />
            <h1>Study: {deck.name}</h1>
            <p>Deck ID: {params.deckId}</p>
            {study[iterator]}
        </div>
            );
}