import { Config } from "../types";
require("dotenv").config();

export const config: Config = {
  port: process.env.PORT!,
  isDev: process.env.NODE_ENV === 'development',
  infuraURL: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
  database: {
    host: process.env.POSTGRES_HOST || "localhost",
    user: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB || "mimir",
    port: process.env.POSTGRES_PORT || "5432",
    dialect: "postgres",
  },
  web3: {
    providerKeys: {
      infura: process.env.INFURA_API_KEY,
      alchemy: process.env.ALCHEMY_API_KEY,
      etherscan: process.env.ETHERSCAN_API_KEY,
    },
    local: {
      url: process.env.LOCAL_PROVIDER_URL,
      chainID: process.env.LOCAL_CHAIN_ID
    }
  },
};

console.info(`[${process.env.NODE_ENV}] environment`);

