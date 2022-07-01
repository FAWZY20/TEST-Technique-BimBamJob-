import './board.css'


function Board() {
    const horizontal = [0,1,2,3,4];
    const vertical = [0,1,2,3,4];

    let board = []
    horizontal.forEach((i) => {
        vertical.forEach((j) => {
            board.push(<div className='tile' ></div>)
        });
    });
    
    return(
        <div>
             <div id='board'>{board}</div>
        </div>
    );
}

export default Board;