import CreateDeckForm from "../../components/CreateDeckForm";
import { createDeck } from '../../utils/api/index'
import { useHistory } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

export default function NewDeck(){
    const history = useHistory();
    return (
        <>
        <Breadcrumb items={['Decks', 'New Deck']} />
            <CreateDeckForm  onSubmit={async (e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const description = e.target.description.value;
                createDeck({ name, description }).then(() => {
                    history.push('/')
                })
            }}/>
        </>
    );
};