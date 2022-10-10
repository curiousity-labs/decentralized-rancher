import { ethers } from "ethers";
import { Dialect, Sequelize } from "sequelize/types";

export interface Config {
  port: string;
  isDev: boolean;
  database: DatabaseInitOptions;
  web3: WebOptions;
  infuraURL: string;
}

export interface DatabaseInitOptions {
  host: string;
  user: string;
  password?: string;
  name: string;
  port: string;
  dialect: Dialect;
}

export interface WebOptions {
  chainId: string;
  network: string;
  providerKeys: ProviderKeys;
}

export interface ProviderKeys {
  infura?: string;
  alchemy?: string;
  etherscan?: string;
}

// for reference; unless I find where to put it.
export interface LocalsOptions {
  database: Sequelize;
  web3Provider: ethers.providers.Provider;
  currentBlock: string;
}
