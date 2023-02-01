const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2=numbers.slice(0,2)
console.log(numbers2)

const numbers3=numbers.slice(4)
console.log(numbers3)

const randomStuff=colors.splice(0,3)
console.log(randomStuff)

newCars = cars.splice(2,4)

cars.splice(2,0,'test')
console.log(cars)
console.log(newCars)

