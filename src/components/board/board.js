import './board.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Board() {
    const horizontal = [0, 1, 2, 3, 4];
    const vertical = [0, 1, 2, 3, 4];

    let board = []
    horizontal.forEach((i) => {
        vertical.forEach((j) => {
            board.push(<div className='tile' ></div>)
        });
    });

    return (
        <div>
            <div id='board'>
                {board}
            </div>
            <div className='form' >
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Programme de la tondeuse (format .txt) : </Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Board;