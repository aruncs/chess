import {TypeOfPieces} from './constants'
import {pawn} from './pawn'
import {rook} from './rook'
import {knight} from './knight'
import {bishop} from './bishop'
import {king} from './king'
import {queen} from './queen'

const BasePieceObject = {
  pawn: pawn,
  rook: rook,
  knight: knight,
  bishop: bishop,
  king: king,
  queen: queen
}

//export {BasePieceObject}

export function createPiece(type, colour, position) {
  const instance = Object.create(BasePieceObject[type])
  instance.setColour(colour)
  instance.setPosition(position)
  instance.setType(type)
  return instance
}