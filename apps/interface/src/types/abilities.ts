import { NFTMonsterSpecies, NFTMonsterStats, NFTMonsterType } from './monsters';
export interface NFTMonsterAbilities {
  excludedSpecies: NFTMonsterSpecies[],
  excludedTypes: NFTMonsterType[],
  statBonuses: NFTMonsterStats,
  description: string,
  action: () => void,
}

export interface NFTMonsterPassiveAbility extends NFTMonsterAbilities {}

export interface NFTMonsterActiveAbility extends NFTMonsterAbilities {}