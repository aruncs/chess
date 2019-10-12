import { piece } from "./piece"
import { numberToFileNameMap, fileNameToNumberMap, isValidPosition } from "./util"

const movements = [
  { deltaFile: 1, deltaRank: 1 },
  { deltaFile: 1, deltaRank: 0 },
  { deltaFile: -1, deltaRank: 1 },
  { deltaFile: 0, deltaRank: -1 },
  { deltaFile: -1, deltaRank: -1 },
  { deltaFile: -1, deltaRank: 0 },
  { deltaFile: 0, deltaRank: 1 },
  { deltaFile: 1, deltaRank: -1 }
]
const king = Object.create(piece)
king.getPossibleMoves = function() {
  var currentRank = parseInt(this.getRank())
  var currentFileNumber = fileNameToNumberMap[this.getFile()]

  var possibleMoves = []

  movements.forEach(movement => {
    let rank = currentRank + movement.deltaRank
    let fileNumber = currentFileNumber + movement.deltaFile
    let file = numberToFileNameMap[fileNumber]
    if (isValidPosition(file, rank)) {
      possibleMoves.push({
        rank: rank,
        file: file
      })
    }
  })
  return possibleMoves
}

export { king }
