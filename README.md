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

### Single Responsability Principle

- A class, module, or function should be responsible for a single part of the functionality
- The principle is violated when:
  - there is error handling code in the class
  - there is presentation logic
  - there is model logic / persistence layer

### Open/Closed Principle

- Open to extension - add functionality by extending
- Closed to midification - you should not add stuff to completed classes
- It is better to extend a class thru inheritance or composition instead of modifying to add more methods or functions

### Liskov Substitution Principle

- Substitutability
- You should be able to use a subclass in place of its parent class

### Interface Segregation Principle

- A class should not depend on methods that it does not need to implement
- Distrubute an interface into smaller interfaces
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
- Corss-class communication
- Perfectly represents unique items
