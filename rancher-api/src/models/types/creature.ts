
export interface Creature {
  level: string,
  image: string,
  type: string,
  species: string,
  status: string,
  abilityOne: string | null,
  abilityTwo: string | null
  passive: string | null,
  learnedSkills: string
  playerId: string,
}