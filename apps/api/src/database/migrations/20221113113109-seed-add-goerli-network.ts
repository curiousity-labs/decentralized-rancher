import { QueryInterface } from 'sequelize';
import { Umzug } from '../types';

const uuid = require('uuid');

module.exports = {
  async up(queryInterfaceContext: Umzug | QueryInterface) {
    const umzugQueryInterface = (queryInterfaceContext as Umzug).context.queryInterface
    const queryInterface = umzugQueryInterface ? umzugQueryInterface : queryInterfaceContext as QueryInterface

    return await queryInterface.bulkInsert('Networks', [{
      id: uuid.v4(),
      networkName: 'GOERLI',
      chainId: 5,
      isTestNetwork: true,
      rpcURL: 'https://georli.infura.io/v3/',
      networkColor: '#FA0',
      blockExplorerURL: 'https://goerli.etherscan.io/',
    }, {
      id: uuid.v4(),
      networkName: 'SEPOLIA',
      chainId: 11155111,
      isTestNetwork: true,
      rpcURL: 'https://sepolia.infura.io/v3/',
      networkColor: '#AAA',
      blockExplorerURL: 'https://goerli.etherscan.io/',
    }, {
      id: uuid.v4(),
      networkName: 'LOCAL',
      chainId: 31337,
      isTestNetwork: true,
      rpcURL: 'localhost',
      networkColor: '#444',
      blockExplorerURL: 'https://goerli.etherscan.io/',
    }])
  },

  async down(queryInterfaceContext: Umzug | QueryInterface) {
    const umzugQueryInterface = (queryInterfaceContext as Umzug).context.queryInterface
    const queryInterface = umzugQueryInterface ? umzugQueryInterface : queryInterfaceContext as QueryInterface
    return await queryInterface.bulkDelete('Networks', [{ networkName: 'LOCAL' }, { networkName: 'GOERLI' }, { networkName: 'SEPOLIA' }])
  }
};
