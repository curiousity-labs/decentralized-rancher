import { SpeciesData } from './../../../types/monsters';
import { APE_BASE_STATS } from './apes/stats/base';
import { CONDOR_BASE_STATS } from './condors/stats/base';
import { BEHOLDER_BASE_STATS } from './beholders/stats/base';
import { JACK_RABBIT_BASE_STATS } from './jackRabbits/stats/base';
import { GOAT_BASE_STATS } from './goats/stats/base';
import { TURTLE_BASE_STATS } from './turtles/stats/base';
import { WOLF_BASE_STATS } from './wolves/stats/base';
import { GOLEM_BASE_STATS } from './golems/stats/base';
import { NAGA_BASE_STATS } from './nagas/stats/base';
import { DRAGON_BASE_STATS } from './dragons/stats/base';
import baseNaga from '../../../assets/images/monsters/nagas/naga.jpg'
import baseTurtle from '../../../assets/images/monsters/turtles/turtle.jpg'
import baseGolem from '../../../assets/images/monsters/golems/golem.jpg'
import baseWolf from '../../../assets/images/monsters/wolves/wolf.jpg'
import baseBeholder from '../../../assets/images/monsters/beholders/beholder.jpg'
import baseDragon from '../../../assets/images/monsters/dragons/dragon.jpg'
import baseGoats from '../../../assets/images/monsters/goats/goat.jpg'
import baseJackRabbit from '../../../assets/images/monsters/jackRabbits/jackRabbit.jpg'
import baseCondor from '../../../assets/images/monsters/condors/condor.jpg'
import baseApe from '../../../assets/images/monsters/apes/ape.jpg'

export const nftMonsterSpeciesBaseStats: SpeciesData = {
  'naga': {
    baseStats: NAGA_BASE_STATS,
    image: baseNaga
  },
  'turtle': {
    baseStats: TURTLE_BASE_STATS,
    image: baseTurtle
  },
  'golem': {
    baseStats: GOLEM_BASE_STATS,
    image: baseGolem
  },
  'wolf': {
    baseStats: WOLF_BASE_STATS,
    image: baseWolf
  },
  'beholder': {
    baseStats: BEHOLDER_BASE_STATS,
    image: baseBeholder
  },
  'dragon': {
    baseStats: DRAGON_BASE_STATS,
    image: baseDragon
  },
  'goat': {
    baseStats: GOAT_BASE_STATS,
    image: baseGoats
  },
  'jackRabbit': {
    baseStats: JACK_RABBIT_BASE_STATS,
    image: baseJackRabbit
  },
  'condor': {
    baseStats: CONDOR_BASE_STATS,
    image: baseCondor
  },
  'ape': {
    baseStats: APE_BASE_STATS,
    image: baseApe
  }
}

export const monsterSpeciesMapping = Object.keys(nftMonsterSpeciesBaseStats)