(function initializeApp() {
  
  window.onload = function(){
    var app = document.getElementById('app')
    app.classList.add('chess')
    var divElement = document.createElement('div')
    var chessBoard = divElement.cloneNode()
    
    chessBoard.classList.add('chess-board')
    app.appendChild(chessBoard)
  }
})()