export default class Card {
    constructor(data) {
        this.name = data.name
        this.attack = data.attack
        this.health = data.health
        this.defense = data.defense
        this.id = data.id
        this.img = data.img
        this.dead = data.dead
        this.visible = data.visible
    }
}