export const GAME_ROUTES = {
  players: {
    path: ':account',
    relative: (account: string) => `/players/${account}/dashboard`
  },
  dashboard: {
    path: 'dashboard',
    relative: (account: string) => `/players/${account}/dashboard`
  },
  game: {
    path: 'game',
    relative: (account: string) => `/players/${account}/game`
  }
}