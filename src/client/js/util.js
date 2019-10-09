export function getPieceDetails(name) {
  var nameParts = name.split('-')
  return {
    colour: nameParts[0],
    type: nameParts[1]
  }
}

export function getPieceName(details) {
  return `${details.colour}-${details.type}`
}