export type NFTMonsterType =
  | 'rock'
  | 'neutral'
  | 'fire'
  | 'wind'
  | 'dark'
  | 'light'
  | 'ice'
  | 'metal'
  | 'water'
  | 'lightning'
export type NFTMonsterSpecies =
  | 'golem'
  | 'wolf'
  | 'beholder'
  | 'ape'
  | 'dragon'
  | 'goat'
  | 'naga'
  | 'turtle'
  | 'condor'
  | 'jackRabbit'
export type Stats =
  | 'health'
  | 'strength'
  | 'defense'
  | 'speed'
  | 'special_attack'
  | 'special_defense'
export type NFTMonsterStats = { [key in Stats | string]: number }

export interface NFTMonster {
  level: number
  image: string
  type: NFTMonsterType
  species: NFTMonsterSpecies
  stats: NFTMonsterStats
  abilities: []
  passives: []
}

export type TypeStats = {
  [key: string]: NFTMonsterStats
}
export type SpeciesData = {
  [key: string]: {
    baseStats: NFTMonsterStats
    image: string
  }
}
