export default function CreateDeckForm({deck, onSubmit, cancel}) {
    return (
        <div>
            <h1>{deck}: Add Card</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea className="form-control" id="front" rows="3" placeholder="Front side of card"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea className="form-control" id="back" rows="3" placeholder="Back side of card"></textarea>
                </div>
                <button type="submit" value="submit" className="btn btn-primary">Save</button>
                <a href="/" onClick={cancel} className="btn btn-secondary" type="button">Done</a>
            </form>
        </div>
    );
}