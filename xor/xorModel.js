
function xorNewGame(canvasColor) {
  let state = {
    board: createBoard(numberOfColumns = 2, numberOfRows = 1),
    winner: 0
  }
  xorDrawBoard(state.board,canvasColor)
  return state
}

function xorPlayOnlineGame(column, state,canvasColor) {
  state = xorChangeBrick(column, state)
  xorDrawBoard(state.board,canvasColor)
}

function xorChangeBrick(column, state) {
  if(state.board[column][0] == 0){
    state.board = updateBoard(state.board, column, row = 0, value = 1)
  } else {
    state.board = updateBoard(state.board, column, row = 0, value = 0)
  }
  return state
}

function isXor(state) {
  isNot = state.board[0][0] == 0 && state.board[1][0] == 0
  isBoth = state.board[0][0] == 1 && state.board[1][0] == 1
  if( isNot || isBoth){
    return 1
  }
  return 0
}
