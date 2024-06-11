//type
type Juice = {
    name:string
    kcal:number

}

type Carbonated = {
    gas: number
    color: string
}

type SoftDrink = Juice & Carbonated

const coke : SoftDrink = {
    name:'콜라',
    kcal: 10,
    gas: 20,
    color: 'black'
}


//interface
interface Fruit {
    name:string
    kcal:number
}

interface TropicalFruit extends Fruit{
    sugarLevel: number
}

const tomato: Fruit = {
    name: 'tomato',
    kcal: 10
}

const Mango:TropicalFruit ={
    name:'망고',
    kcal: 100,
    sugarLevel:5
}