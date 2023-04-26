

function choice(items) {
    const rand = Math.floor(Math.random() * items.length)
    return (items[rand])
}

function removeItem(items, item) {
    const idx = items.findIndex(i => i === item)
    if (idx) {
        items.splice(idx, 1)
        return item
    }
}

export { choice, removeItem };


