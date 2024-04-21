class Animal
	{
  constructor(species : string)
		{this._species = species;}

  get species()
		{return this._species;}

  makeSound()
		{//console.log("Animal sound");
		console.log (`The ${this.animal} makes a soun`)}
	}


class Cat extends Animal
{
	purr() 
	{console.log("purr");}
}

class Dog extends Animal
{
  bark()
	{console.log("woof");}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: Animal sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: Animal sound
myDog.bark(); // Output: woof

