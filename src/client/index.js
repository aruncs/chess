import styles from "./style/style.scss"
;(function initializeApp() {
  const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const initialPiecePosition = {
    a1: "white-rook",
    b1: "white-knight",
    c1: "white-bishop",
    d1: "white-queen",
    e1: "white-king",
    f1: "white-bishop",
    g1: "white-knight",
    h1: "white-rook",
    a2: "white-pawn",
    b2: "white-pawn",
    c2: "white-pawn",
    d2: "white-pawn",
    e2: "white-pawn",
    f2: "white-pawn",
    g2: "white-pawn",
    h2: "white-pawn",

    a8: "black-rook",
    b8: "black-knight",
    c8: "black-bishop",
    d8: "black-queen",
    e8: "black-king",
    f8: "black-bishop",
    g8: "black-knight",
    h8: "black-rook",
    a7: "black-pawn",
    b7: "black-pawn",
    c7: "black-pawn",
    d7: "black-pawn",
    e7: "black-pawn",
    f7: "black-pawn",
    g7: "black-pawn",
    h7: "black-pawn"
  }
  window.onload = function() {
    var boardId = "chessBoard"
    renderboard(boardId)
    renderPieces(boardId)
  }

  function renderboard(boardId) {
    var app = document.getElementById("app")
    app.classList.add("chess")
    var divElement = document.createElement("div")

    var chessBoard = divElement.cloneNode()
    chessBoard.id = boardId
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
  }
  function renderPieces(boardId) {
    var chessBoard = document.getElementById(boardId)
    var ranks = chessBoard.children
    for (var i = 7; i >= 0; i--) {
      var rank = ranks[i]
      var cells = rank.children
      for (var j = 0; j < cells.length; j++) {
        var cell = cells[j]
        var cellLabel = `${cell.dataset.file}${cell.dataset.rank}`
        var piece = initialPiecePosition[cellLabel]
        if (piece) {
          cell.classList.add(piece)
          
        }
      }
    }
  }
})()
