const fileNameToNumberMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8
}

const numberToFileNameMap = {
  "1": "a",
  "2": "b",
  "3": "c",
  "4": "d",
  "5": "e",
  "6": "f",
  "7": "g",
  "8": "h"
}

export function isValidPosition(file, rank) {
  let isValid = false
  if (fileNameToNumberMap[file] && 1 <= parseInt(rank) && parseInt(rank) <= 8) {
    isValid = true
  }
  return isValid
}

export function getPieceDetails(name) {
  var nameParts = name.split("-")
  return {
    colour: nameParts[0],
    type: nameParts[1]
  }
}

export function getPieceName(details) {
  return `${details.colour}-${details.type}`
}

export function getPositionString(file, rank) {
  return `${file}${rank}`
}

export { fileNameToNumberMap, numberToFileNameMap }
