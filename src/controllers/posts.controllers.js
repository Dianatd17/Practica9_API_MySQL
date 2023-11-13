const PostModel = require('../models/post.model');
const AutorModel = require('../models/autor.model');
const postValidation = require('../validations/post.validation')

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


const createPost = async (req, res) => {
    try {
        postValidation.PostValidationData(req.body);

        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updatePost = async (req, res) => {
    try {
        postValidation.PostValidationData(req.body);

        const { postId } = req.params;
        const [result] = await PostModel.updatePostById(postId, req.body);
        res.json({ succes: 'actualización correcta' });
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostModel.deletePostbyId(postId);
        res.json({ succes: 'post eliminado' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
}



module.exports = {
    getAllPosts, getPostById, createPost, updatePost, deletePost
};