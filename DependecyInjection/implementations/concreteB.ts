import { IDepB } from "../interfaces/IDepB";

import { injectable } from "inversify";

@injectable()
export class ConcreteB implements IDepB {
  doB(): void {
    console.log("Doing B");
  }
}
