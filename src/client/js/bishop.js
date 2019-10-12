import { piece } from "./piece"
import { numberToFileNameMap, fileNameToNumberMap, isValidPosition } from "./util"

const movements = [
  { deltaFile: 1, deltaRank: 1 },
  { deltaFile: 1, deltaRank: -1 },
  { deltaFile: -1, deltaRank: 1 },
  { deltaFile: -1, deltaRank: -1 }
]

const bishop = Object.create(piece)
bishop.getPossibleMoves = function() {
  const currentFileNumber = fileNameToNumberMap[this.getFile()]
  const currentRank = parseInt(this.getRank())
  const possibleMoves = []

  movements.forEach(movement => {
    let rank = currentRank + movement.deltaRank
    let fileNumber = currentFileNumber + movement.deltaFile
    let file = numberToFileNameMap[fileNumber]
    while (isValidPosition(file, rank)) {
      possibleMoves.push({
        file: file,
        rank: rank
      })
      rank = rank + movement.deltaRank
      fileNumber = fileNumber + movement.deltaFile
      file = numberToFileNameMap[fileNumber]
    }
  })
  return possibleMoves
}

export { bishop }
