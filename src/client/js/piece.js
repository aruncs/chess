// function Piece() {
  
//   Piece.prototype.getPosition = function() {
//     throw console.error('This method should be implemented in concrete piece');    
//   }

//   Piece.prototype.getColour = function() {
//     throw console.error('This method should be implemented in concrete piece');    
//   }
//   Piece.prototype.getPossibleMoves = function() {
//     throw console.error('This method should be implemented in concrete piece');    
//   }

// }

const piece = {
    getPosition : function() {
      return this.position    
    },
    setPosition : function(position) {
      this.position = position
    },
    getColour : function() {
      return this.colour
    },
    setColour : function(colour) {
      this.colour = colour
    },
    getType : function() {
      return this.type
    },
    setType : function(type) {
      this.type = type
    },   
    getPossibleMoves : function() {
      throw console.error('This method should be implemented in concrete piece');    
    },
    getRankStyleClass : function() {
      return `rank-${this.getRank()}`
    },
    getFileStyleClass : function() {
      return `file-${this.getFile()}`
    },
    getPieceStyleClass : function() {
      return `${this.colour}-${this.type}`
    },
    getRank : function() {
      return this.position.charAt(1)
    },
    getFile : function() {
      return this.position.charAt(0)
    },
    getStyleClassList : function() {
      var classList = ''
      classList = `chess-piece ${classList} ${this.getFileStyleClass()} ${this.getRankStyleClass()} ${this.getPieceStyleClass()}`
      return classList
    },
    isMoved : function() {
      return this.moved
    },
    markAsMoved : function() {
      this.moved = true 
    },
    render : function(containerId) {
      if (this.element) {
        this.element.parentNode.removeChild(this.element)
      }
      var divElement = document.createElement('div')
      this.element = divElement
      divElement.classList.value = this.getStyleClassList()
      
      var pieceContainerElement = document.getElementById(containerId)

      pieceContainerElement.appendChild(divElement)
    }
}

const pawn = Object.create(piece)
pawn.moved = false
pawn.getPossibleMoves = function() {
  var currentRank = this.getRank()
  var currentFile = this.getFile()

  var possibleMoves = []
  if (this.getColour() === 'white') {
    if(currentRank < 8) {
      possibleMoves.push({
        rank: parseInt(currentRank) + 1,
        file: currentFile
      })
    }
    if (!this.isMoved()) {
      possibleMoves.push({
        rank: parseInt(currentRank) + 2,
        file: currentFile
      })
    }
  } else if (this.getColour() === 'black') {
    if (currentRank > 0) {
      possibleMoves.push({
        rank: parseInt(currentRank) - 1,
        file: currentFile
      })
    }
    if (!this.isMoved()) {
      possibleMoves.push({
        rank: parseInt(currentRank) - 2,
        file: currentFile
      })
    }
  }
  return possibleMoves
}

const rook = Object.create(piece)
rook.getPossibleMoves = function() {

}

const knight = Object.create(piece)
knight.getPossibleMoves = function() {

}

const bishop = Object.create(piece)
bishop.getPossibleMoves = function() {

}

const king = Object.create(piece)
king.getPossibleMoves = function() {

}

const queen = Object.create(piece)
queen.getPossibleMoves = function() {

}

const BasePieceObject = {
  pawn: pawn,
  rook: rook,
  knight: knight,
  bishop: bishop,
  king: king,
  queen: queen
}

export {BasePieceObject}

// export function createPiece(type, colour, position) {
  
// }
