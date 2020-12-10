const express = require('express')

const router = express.Router()

const Post = require('../models/post')

// GET all
router.get('/', async (req, res) => {
    try {
        const post = await Post.find()

        return res.send(post)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET by ID
router.get('/:id', getPost, async (req, res) => {

    res.json(res.post)
})

// POST create
router.post('/', async (req, res) => {

    const post = new Post({
        id: req.body.id,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        idEscritor: req.body.idEscritor,
        foto: req.body.foto,
    })

    try {
        const created = await post.save()

        res.status(201).json(created)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// PATCH update
router.patch('/:id', getPost, async (req, res) => {
    if (req.body. titulo != null) {
        res.getPost.titulo = req.body.titulo
    }
    if (req.body. descricao != null) {
        res.getPost.descricao = req.body.descricao
    }
    if (req.body. idEscritor != null) {
        res.getPost.idEscritor = req.body.idEscritor
    }

    if (req.body. foto != null) {
        res.getPost.foto = req.body.foto
    }
 
    try {
        const updated = await res.post.save()

        res.json(updated)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE remove
router.delete('/:id', getPost, async (req, res) => {

    try {
        await res.post.remove()

        res.json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware
async function getPost(req, res, next) {
    try {
        post = await Post.findById(req.params.id)

        if (post == null) {
            return res.status(404).json({ message: 'post not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.post = post

    next()
}

// export
module.exports = router