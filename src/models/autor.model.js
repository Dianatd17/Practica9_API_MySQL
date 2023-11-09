const selectAllAutores = () => {
    return db.query('select * from autores');
}

const selectAutorById = (autorId) => {
    return db.query('select * from autores where id = ?', [autorId]);
}


const insertAutor = ({ nombre, email, imagen }) => {
    return db.query('insert into autores(nombre,email,imagen) value(?,?,?)',
        [nombre, email, imagen]);
}

const updateAutorById = (autorId, { nombre, email, imagen }) => {
    return db.query('update autores set nombre = ?, email = ?, imagen = ?  where id = ?',
        [nombre, email, imagen, autorId]
    );

}

const deleteAutorById = (autorId) => {
    //habria que eliminar los posts del autor que se está indicando
    return db.query('delete from autores  where id = ?', autorId
    );

}



module.exports = { selectAllAutores, insertAutor, selectAutorById, updateAutorById, deleteAutorById };