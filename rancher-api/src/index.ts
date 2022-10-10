import Application from "./init/Application";
import AppRouter from "./init/AppRouter";
// import DatabaseProvider from "./src/startup/DatabaseProvider";

(async () => {
  const application = new Application();
  const app = application.core;

  new AppRouter(app).useRouter();
  application.initilizeServer();
  
})();
