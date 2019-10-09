import {initialPiecePosition} from './constants'
import {createPiece} from './pieceFactory'
import {getPieceDetails} from './util'

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"]

const board = {

  isWhitesTurn : true,
  state: {},
  initializeBoard : function() {
    let pieceName
    let pieceDetails
    for (let position in initialPiecePosition) {
      if (initialPiecePosition.hasOwnProperty(position)) {
        pieceName = initialPiecePosition[position]
        pieceDetails = getPieceDetails(pieceName)
        this.state[position] = createPiece(pieceDetails.type, pieceDetails.colour, position)
      }
    }
  },
  setId : function(id) {
    this.id = id
  },
  renderBoard : function() {
    var divElement = document.createElement("div")

    var chessBoard = divElement.cloneNode()
    chessBoard.id = this.id
    chessBoard.classList.add("chess-board")
    app.appendChild(chessBoard)

    var isBlackCell = false

    for (var i = 8; i >= 1; i--) {
      var rank = divElement.cloneNode()
      rank.classList.add("rank")
      chessBoard.appendChild(rank)

      for (var j = 1; j <= 8; j++) {
        var cell = divElement.cloneNode()

        cell.dataset.file = FILES[j - 1]
        cell.dataset.rank = i

        cell.classList.add("cell")
        if (isBlackCell) {
          cell.classList.add("black-cell")
        }

        rank.appendChild(cell)

        isBlackCell = !isBlackCell
      }
      isBlackCell = !isBlackCell
    }
    return chessBoard
  },
  renderAllPieces : function() {
    var chessBoard = document.getElementById(this.id)
    var positionsWithPiece = Object.keys(this.state)
    var position
    var piece
    var pieceElement
    for (var i = 0; i < positionsWithPiece.length; i++) {
      position = positionsWithPiece[i]
      piece = this.state[position]
      pieceElement =  piece.render()
      //TODO: Change this
      chessBoard.appendChild(pieceElement) 
    }
  },
  render : function() {
    const chessBoard = this.renderBoard()
    this.renderAllPieces()
  }
}
export function getBoard(id) {
  const instance =  Object.create(board)
  instance.setId(id)
  return instance
}