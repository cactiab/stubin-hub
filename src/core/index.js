'use strict'

exports = module.exports = HUB

function HUB() {
    if (!(this instanceof HUB)) {
        throw new Error('Must be instantiated with new')
    }
}
