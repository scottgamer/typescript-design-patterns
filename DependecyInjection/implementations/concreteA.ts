import { IDepA } from "../interfaces/IDepA";
import { injectable } from "inversify";

@injectable()
export class ConcreteA implements IDepA {
  doA(): void {
    console.log("Doing A");
  }
}
