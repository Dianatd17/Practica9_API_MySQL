const PostModel = require('../models/post.model');
const AutorModel = require('../models/autor.model');

const getAllPosts = async (req, res) => {
    try {
        const [posts] = await PostModel.selectAllPosts();

        for (let post of posts) {
            const [autor] = await AutorModel.selectAutorById(post.autores_id);
            post.autor = autor;
        }
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        const [post] = await PostModel.selectPostById(postId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

//const products = await productModel.find().populate('creator');


const createPost = async (req, res) => {
    try {

        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}



module.exports = {
    getAllPosts, getPostById, createPost
};