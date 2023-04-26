import fruits from './foods'
import { choice, removeItem } from './helpers'

function conversation() {
    const selection = choice(fruits)
    console.log(`I'd like one ${selection}, please.`)
    console.log(`Here you go: ${selection}`)
    console.log("Delicious! May I have another?")
    removeItem(fruits, selection)
    console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)
}

conversation()