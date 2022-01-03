import { Container } from "inversify";
import { ConcreteA } from "./DependecyInjection/implementations/concreteA";
import { ConcreteB } from "./DependecyInjection/implementations/concreteB";
import { ConcreteC } from "./DependecyInjection/implementations/concreteC";
import { IDepA } from "./DependecyInjection/interfaces/IDepA";
import { IDepB } from "./DependecyInjection/interfaces/IDepB";
import { IDepC } from "./DependecyInjection/interfaces/IDepC";
import { TYPES } from "./DependecyInjection/types";

let container = new Container();
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA);
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB);
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC);

export default container;
