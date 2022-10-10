import Application from "./init/Application";
import AppRouter from "./init/AppRouter";
import { Web3Provider } from "./init/Web3Provider";
// import DatabaseProvider from "./src/startup/DatabaseProvider";

(async () => {
  const application = new Application();
  const app = application.core;

  new AppRouter(app);
  const web3Provider = new Web3Provider();
  await web3Provider.connect();
  console.log("🚀 ~ file: index.ts ~ line 12 ~ web3Provider", web3Provider)
  
  application.initilizeServer();
  
})();
