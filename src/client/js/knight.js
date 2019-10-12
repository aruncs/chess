import { piece } from "./piece"
import { numberToFileNameMap, fileNameToNumberMap, isValidPosition } from "./util"

const knight = Object.create(piece)
const movements = [
  { deltaFile: 2, deltaRank: -1 },
  { deltaFile: 2, deltaRank: 1 },
  { deltaFile: -2, deltaRank: -1 },
  { deltaFile: -2, deltaRank: 1 },
  { deltaFile: 1, deltaRank: 2 },
  { deltaFile: 1, deltaRank: -2 },
  { deltaFile: -1, deltaRank: 2 },
  { deltaFile: -1, deltaRank: -2 }
]
knight.getPossibleMoves = function() {
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

export { knight }
