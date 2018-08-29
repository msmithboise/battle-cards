import Card from './Card'

export default class Player {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.dead = data.dead
        this.hand = data.hand.map(c => new Card(c))
        this.deadCards = data.deadCards.map(c => new Card(c))
    }
}