import { NFTMonsterSpecies, NFTMonsterStats, NFTMonsterType } from './monsters'
export interface NFTMonsterAbilities {
  excludedSpecies: NFTMonsterSpecies[]
  excludedTypes: NFTMonsterType[]
  statBonuses: NFTMonsterStats
  description: string
  action: () => void
}

export type NFTMonsterPassiveAbility = NFTMonsterAbilities

export type NFTMonsterActiveAbility = NFTMonsterAbilities
