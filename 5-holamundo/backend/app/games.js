const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Game = mongoose.model('Game', { name: String })

router.get('/', async (req, res) => {
    const games = await Game.find()

    return res.send(games)
})

router.post('/', async (req, res) => {
    const { body } = req
    try {
        const game = await Game.create(req.body)
        res.send(game._id)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router