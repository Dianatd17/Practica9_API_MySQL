const AutorModel = require('../models/autor.model');
const PostModel = require('../models/post.model');


const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const getAutorById = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [autor] = await AutorModel.selectAutorById(autorId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const getPostsAutorById = async (req, res) => {
    // /api/autores/posts?autorId=5
    try {

        const { autorId } = req.query;
        const [autor] = await AutorModel.selectAutorById(autorId);
        const [posts] = await PostModel.selectPostByAutorId(autorId);


        let autorPost = autor[0];
        autorPost.posts = posts;

        res.json(autorPost);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const createAutor = async (req, res) => {
    try {
        const [result] = await AutorModel.insertAutor(req.body);
        const [autor] = await AutorModel.selectAutorById(result.insertId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.updateAutorById(autorId, req.body);
        res.json({ succes: 'actualización correcta' });
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const deleteAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.deleteAutorById(autorId);
        res.json({ succes: 'autor eliminado' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = {
    getAllAutores, getAutorById, getPostsAutorById, createAutor, updateAutor, deleteAutor
};