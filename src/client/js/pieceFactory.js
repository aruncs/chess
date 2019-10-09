import {TypeOfPieces} from './constants'
import {BasePieceObject} from './piece'

export function createPiece(type, colour, position) {
  const instance = Object.create(BasePieceObject[type])
  instance.setColour(colour)
  instance.setPosition(position)
  instance.setType(type)
  return instance
}