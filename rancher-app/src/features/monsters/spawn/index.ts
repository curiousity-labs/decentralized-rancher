import { monsterSpeciesMapping } from './../species/index';
import { NonFungibleToken } from './../../../types/nft';
import { NFTMonster } from './../../../types/monsters';
import { utils } from 'ethers';
import nftMonsterTypesBonusStats, { monsterTypesMapping } from '../bonuses/types';
import { nftMonsterSpeciesBaseStats } from '../species';


export const spawnCreate = (nft: NonFungibleToken): NFTMonster => {
  const { contractAddress, tokenID } = nft;
  const salt = process.env.REACT_APP_SECRET_SALT
  
  const s = utils.toUtf8Bytes(`${contractAddress}:${tokenID}:${salt}`).reduce((acc, cur) => cur + acc, 0)
  const [a, b, c, d, e] = Array.from(String(s), num => Number(num))

  // choose monster species
  const monsterSpecies = monsterSpeciesMapping[e ? b : c]
  // choose monster type
  const monsterType = monsterTypesMapping[e ? c : b]

  // choose starting passive (if any)

  // choose starting ability (if any)

  // stats
  // get base states
  const { baseStats, image } = nftMonsterSpeciesBaseStats[monsterSpecies]
  // get bonus states
  const bonusStats = nftMonsterTypesBonusStats[monsterType]
  // @todo allocate spawn stats



  // add all stats
  const stats = Object.entries(baseStats).map(([key, value]) => {
    return { [key]: value + bonusStats[key] }
  }).reduce((prev, cur) => ({ ...prev, ...cur }), {})

  return {
    image,
    species: monsterSpecies,
    type: monsterType,
    stats
  } as NFTMonster;
}