type Network = {
  name: string,
  color: string,
}
type Networks = {
  [key: number]: Network
}
const networks: Networks = {
  5: {
    name: 'goerli',
    color: 'yellow.300'
  }
}
const useNetwork = (chainId: number): Network | undefined  => {
  return networks[chainId];
}

export default useNetwork