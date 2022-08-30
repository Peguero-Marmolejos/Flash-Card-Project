import AddCardForm from "../../components/AddCardForm";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { createCard, readDeck, updateDeck } from '../../utils/api';

export default function NewCard() {
    const history = useHistory();
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState();

    useEffect(() => {
        readDeck(deckId).then(i => {
            setDeck(i);
        })
    }, [deckId]);
    const name = deck?.name;
    return (
        <div>
            <Breadcrumb items={['Home',name, 'Add Card']} />
            <AddCardForm deck={name} onSubmit={async (e) => {
                e.preventDefault();
                const card ={
                    front:e.target.front.value,
                    back:e.target.back.value,
                };
                createCard({deckId, card}).then(crd =>{
                    console.log(deck);
                    setDeck(deck.cards.push(crd));
                    console.log(deck)
                    console.log(crd);
                    updateDeck(deck);
                });

                }
            }
            cancel={async (e) =>{
                e.preventDefault();
                history.push("/");
            }} />
        </div>);
}