import { Application } from "express";
import { playerRouter } from "../components/players/players.routes";

export default class {
  constructor(private app: Application) {
    this.useRouter()
  }

  public useRouter = () => {
    playerRouter(this.app);
  }
}
