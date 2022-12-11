export const GAME_ROUTES = {
  player: {
    path: ':account',
    relative: (account: string) => `/player/${account}`,
  },
  game: {
    path: 'game',
    relative: (account: string) => `/player/${account}/game`,
  },
}
