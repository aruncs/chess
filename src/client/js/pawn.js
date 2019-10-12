import { piece } from "./piece"

const pawn = Object.create(piece)
pawn.moved = false
pawn.getPossibleMoves = function() {
  var currentRank = this.getRank()
  var currentFile = this.getFile()

  var possibleMoves = []
  if (this.getColour() === "white") {
    if (currentRank < 8) {
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
  } else if (this.getColour() === "black") {
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

export { pawn }
