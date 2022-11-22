export const BASE_ROUTES = {
  home: {
    path: '/',
    relative: () => '/'
  },
  register: {
    path: 'register',
    relative: () => '/register'
  },
  players: {
    path: 'players/*',
    relative: () => ''
  }
}