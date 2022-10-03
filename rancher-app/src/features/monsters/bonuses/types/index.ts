import { TypeStats } from './../../../../types/monsters';
import { WIND_BONUS_STATS } from './wind/index';
import { WATER_BONUS_STATS } from './water/index';
import { METAL_BONUS_STATS } from './metal/index';
import { LIGHTNING_BONUS_STATS } from './lightning/index';
import { LIGHT_BONUS_STATS } from './light/index';
import { FIRE_BONUS_STATS } from './fire/index';
import { DARK_BONUS_STATS } from './dark/index';
import { NEUTRAL_BONUS_STATS } from './neutral'
import { ROCK_BONUS_STATS } from './rock'

export const nftMonsterTypesBonusStats: TypeStats = {
  'neutral': NEUTRAL_BONUS_STATS,
  'rock': ROCK_BONUS_STATS,
  'dark': DARK_BONUS_STATS,
  'fire': FIRE_BONUS_STATS,
  'light': LIGHT_BONUS_STATS,
  'lightning': LIGHTNING_BONUS_STATS,
  'metal': METAL_BONUS_STATS,
  'water': WATER_BONUS_STATS,
  'wind': WIND_BONUS_STATS
}

export const monsterTypesMapping = Object.keys(nftMonsterTypesBonusStats)

export default nftMonsterTypesBonusStats