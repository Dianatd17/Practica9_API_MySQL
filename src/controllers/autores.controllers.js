const AutorModel = require('../models/autor.model');

const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const getAutorById = async (req, res) => {
    //esta no se si me hace falta 
    try {
        const { autorId } = req.params;
        const [autor] = await AutorModel.selectAutorById(autorId);
        res.json(autor[0]);
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
    getAllAutores, createAutor, updateAutor, deleteAutor, getAutorById
};