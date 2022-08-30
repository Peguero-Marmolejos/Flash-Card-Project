import {useEffect, useState} from'react';
import { useParams } from 'react-router-dom';
import {readDeck} from '../utils/api/index';


function Study(){
    const {deckId} = useParams();

    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState([]);

    useEffect(() => {
      async function loadDeck() {
        const response = await readDeck(deckId);
        setDeck(response); 
        setCards(response.cards); 
        setCurrentCard(response.cards[0]); 
      }
      loadDeck(); 
    }, [deckId]);

      console.log(deck)
    
      if (cards.length > 2){
      return  (
      <div>
        <nav style="--bs-breadcrumb-divider: '\';" aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page"></li>
          </ul>
        </nav>
        <h1>Study</h1>
      </div>
      );
      }
      return <p>"Not Enough Cpm testards!"</p>
}
export default Study;