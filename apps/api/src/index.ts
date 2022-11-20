import Application from "./init/Application";
import AppRouter from "./init/AppRouter";
import Database from "./init/Database";
import { Web3Provider } from "./init/Web3Provider";
// import DatabaseProvider from "./src/startup/DatabaseProvider";

(async () => {
  const application = new Application();
  const app = application.core;

  new AppRouter(app);
  
  const web3Provider = new Web3Provider(app);
  await web3Provider.connect();

  const database = new Database(app);
  await database.asyncConnect()
  
  application.initilizeServer();
  
})();
