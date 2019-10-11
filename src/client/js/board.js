import {initialPiecePosition} from './constants'
import {createPiece} from './pieceFactory'
import {getPieceDetails, getPositionString} from './util'

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"]

const board = {

  isWhitesTurn : true,
  state: {},
  cellMap: {},
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
  handleCellClick : function(event) {
    var clickedCell = event.target
    const {rank, file} = clickedCell.dataset
    const position = getPositionString(file, rank)
    const clickedPiece = this.getPieceAt(position)

    this.removeMoveMarkers()
    if (this.selectedPiece && this.selectedPiece.getPosition() !== position) {
      //Check if clicked cell is valid for the piece
      if (this.isValidMove(this.selectedPiece.getPossibleMoves(), {rank, file})) {
        this.selectedPiece.markAsMoved()
        if (clickedPiece && clickedPiece.getColour() !== this.selectedPiece.getColour()) {
          //TODO: remove oponents piece from board
          this.removePieceFromBoard(clickedPiece)
        }

        //Remove piece from old position
        this.setPieceAt(this.selectedPiece.getPosition(), null)
        this.selectedPiece.setPosition(getPositionString(file, rank))
        this.setPieceAt(this.selectedPiece.getPosition(), this.selectedPiece)
        this.selectedPiece.render(this.id)
        this.selectedPiece = null
      } else {
        this.selectedPiece = null
      }

    } else {
      if (clickedPiece) {
        this.selectedPiece = clickedPiece
        const possibleNextPositions = clickedPiece.getPossibleMoves()
        this.markPossibleMoves(possibleNextPositions)
      }
    }
  },
  
  removePieceFromBoard : function(piece) {
    debugger
    this.setPieceAt(piece.getPosition(), null)
    this.removePieceElement(piece.getPieceStyleClass())
  },
  removePieceElement : function(pieceClassName) {
    var pieceElement = document.getElementsByClassName(pieceClassName)[0]
    pieceElement.remove()
    // if (pieceElement) {
    //   pieceElement.parentNode.removeChild(pieceElement)
    // }
  },
  isValidMove: function(possibleNextPositions, selectedPosition) {
    let isValid = false
    for (var i = 0; i < possibleNextPositions.length; i++) {
      if (possibleNextPositions[i].file === selectedPosition.file && parseInt(possibleNextPositions[i].rank) === parseInt(selectedPosition.rank)) {
        isValid = true
        break
      }
    }
    return isValid
  },
  markPossibleMoves : function(positions) {
    positions.forEach(position => {
      this.getCellAt(getPositionString(position.file, position.rank)).classList.add('move-marker')
    })
  },
  removeMoveMarkers : function() {
    var markedCells = document.getElementsByClassName('move-marker')
    while(markedCells.length > 0) {
      markedCells[0].classList.remove('move-marker')
    }
  },
  getCellAt : function(position) {
    return this.cellMap[position]
  },
  setCellAt : function(position, cellElement) {
    this.cellMap[position] = cellElement
  },
  getPieceAt : function(positionString) {
    return this.state[positionString]
  },
  setPieceAt : function(positionString, piece) {
    this.state[positionString] = piece
  },
  renderBoard : function(containerId) {
    var divElement = document.createElement("div")

    var chessBoard = divElement.cloneNode()
    chessBoard.id = this.id
    chessBoard.classList.add("chess-board")
    var chessBoardContainer = document.getElementById(containerId)
    chessBoardContainer.appendChild(chessBoard)

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
        this.setCellAt(getPositionString(cell.dataset.file, cell.dataset.rank), cell)
        rank.appendChild(cell)

        isBlackCell = !isBlackCell
      }
      isBlackCell = !isBlackCell
    }

    //Add event listeners. find a different place to do this
    chessBoard.addEventListener('click', this.handleCellClick.bind(this))
    //return chessBoard
  },
  renderAllPieces : function(containerId) {
    var chessBoard = document.getElementById(this.id)
    var positionsWithPiece = Object.keys(this.state)
    var position
    var piece
    var pieceElement
    for (var i = 0; i < positionsWithPiece.length; i++) {
      position = positionsWithPiece[i]
      piece = this.state[position]
      piece.render(containerId)
      //pieceElement =  piece.render()
      // //TODO: Change this
      // chessBoard.appendChild(pieceElement) 
    }
  },
  render : function(containerId) {
    this.renderBoard(containerId)
    this.renderAllPieces(this.id)
  }
}
export function getBoard(id) {
  const instance =  Object.create(board)
  instance.setId(id)
  return instance
}