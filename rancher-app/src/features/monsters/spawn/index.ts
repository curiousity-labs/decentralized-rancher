import { nftMonsterImageGolem } from './../species/golems/images/index';
import { NonFungibleToken } from './../../../types/nft';
import { NFTMonster } from './../../../types/monsters';
import { utils } from 'ethers';
import nftMonsterTypesBonusStats from '../bonuses/types';
import { nftMonsterSpeciesBaseStats } from '../species';
import { nftMonsterImageWolf } from '../species/wolves/image';


export const spawnCreate = (nft: NonFungibleToken): NFTMonster => {
  const { contractAddress, tokenID } = nft;
  const salt = process.env.REACT_APP_SECRET_SALT

  const s = utils.toUtf8Bytes(contractAddress + tokenID + salt ).reduce((acc, cur) => cur + acc, 0)
  const [a, b, c] = Array.from(String(s), num => Number(num))

  // choose monster type
  // @todo come up with a more scaleable solution
  const monsterType = a - b > 0 ? 'rock' : 'neutral'

  // choose monster species
  const monsterSpecies = b - c > 0 ? 'wolf' : 'golem'

  // get monster images
  const monsterImage = monsterSpecies === 'golem' ? nftMonsterImageGolem.base : nftMonsterImageWolf.base
  // choose starting passive (if any)

  // choose starting ability (if any)

  // stats
  // get base states
  const baseStats = nftMonsterSpeciesBaseStats[monsterSpecies]
  // get bonus states
  const bonusStats = nftMonsterTypesBonusStats[monsterType]
  // allocate spawn stats
  
  // add all stats
  const stats = Object.entries(baseStats).map(([key, value]) => {
    return { [key]: value + bonusStats[key]} 
  }).reduce((prev, cur) => ({...prev, ...cur}), {})

  return {
    image: monsterImage,
    species: monsterSpecies,
    type: monsterType,
    stats
  } as NFTMonster;
}