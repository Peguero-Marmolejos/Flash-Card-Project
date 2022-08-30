import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb.js";
import DeckSummary from "../components/DeckSummary.js";
// import CreateDeck from "../Deck/CreateDeck";
// import {Link, useRouteMatch, useParams} from "react-router-dom";
import { listDecks, deleteDeck } from '../utils/api/index.js'


function Home() {
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    listDecks().then(i => setDeck(i));
  }, [])

  return (
    <div>
      <Breadcrumb items={['Home']} />
      <a href="/decks/new" className="btn btn-primary" type="button">+ Create Deck</a>
      {deck && deck.map(i => <DeckSummary
              key={i.id} 
              id={i.id} 
              name={i.name}
              description={i.description}
              onDelete={async () => { 
                 // window confirm if user wants to delete
                  if (window.confirm('Are you sure you want to delete this deck?')) {
                    await deleteDeck(i.id);
                    const newDecks = await listDecks();
                    setDeck(newDecks);
                  }
               }}
              studyLink={`/decks/${i.id}/study`}
              count={i.cards.length} />)}
    </div>

  );

}

export default Home;