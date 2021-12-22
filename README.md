# Design Patterns in Typescript

- Design patterns are: generalized, reusable solutions to common design issues in software engineering
- Reusability
- Don't reinvent the wheel
- Language agnostic

## Groups of Design Patterns

- Creational
- Structural
- Behavioral

## SOLID Principles

- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Single Responsibility Principle

- A class, module, or function should be responsible for a single part of the functionality
- The principle is violated when:
  - there is error handling code in the class
  - there is presentation logic
  - there is model logic / persistence layer

### Open/Closed Principle

- Open to extension - add functionality by extending
- Closed to modification - you should not add stuff to completed classes
- It is better to extend a class thru inheritance or composition instead of modifying to add more methods or functions

### Liskov Substitution Principle

- Substitutability
- You should be able to use a subclass in place of its parent class

### Interface Segregation Principle

- A class should not depend on methods that it does not need to implement
- Distribute an interface into smaller interfaces
- Only implement the interfaces that suits you best

### Dependency Inversion Principle

- Classes and modules should depend on abstractions instead of concrete implementations

## Creational Design Patterns

- The Singleton
- The Factory

### The Singleton

- Only a single instance of a specific class throughout the entire application
- Not using the NEW keyword

#### Benefits

- Shared state
- Avoid long initializations
- Cross-class communication
- Perfectly represents unique items

## Dependency Injection

- **new** is not allowed
- allowed to create instances of value objects (factories)
- do not use **new** with dependencies

```typescript
// without dependency injection
export class ProfileService {
  private _usersService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  public constructor() {
    this._usersService = new UsersService();
    this._httpClient = new HttpClient();
    this._endpoints = new Endpoints();
  }
}
```

```typescript
// with dependency injection
export class ProfileService {
  private _usersService: UsersService;
  private _httpClient: HttpClient;
  private _endpoints: Endpoints;

  // the dependencies are already passed and initialized in the constructor
  public constructor(
    usersService: UsersService,
    httpClient: HttpClient,
    endpoints: Endpoints
  ) {
    this._usersService = usersService;
    this._httpClient = httpClient;
    this._endpoints = endpoints;
  }
}
```

### DI container

- it knows how each component is initialized
- it provides an interface to retrieve an instance of each component with all its dependencies met
- the DI container has 2 operations:
  - register: new types
  - resolve: dependency resolution

### Reflection

- the ability to make use of code metadata to provide **runtime** information and inspection data about classes, interfaces and types
- operations:
  - get name of a method
  - know types of a method's args list
  - retrieve assembly information
  - allow DI to work
