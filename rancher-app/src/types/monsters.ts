export type NFTMonsterType = 'rock' | 'neutral'
export type NFTMonsterSpecies = 'golem' | 'wolf'
export type Stats = 'health' | 'strength' | 'defense' | 'speed' | 'special_attack' | 'special_defense'
export type NFTMonsterStats = { [key in Stats | string]: number }

export interface NFTMonster {
  image: string,
  type: NFTMonsterType,
  species: NFTMonsterSpecies,
  stats: NFTMonsterStats,
  abilities: []
  passives: []
}

