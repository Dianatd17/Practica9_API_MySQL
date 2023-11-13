const selectAllPosts = () => {
    return db.query('select * from posts');
}

const selectPostById = (postId) => {
    return db.query('select * from posts where id = ?', [postId]);
}


const selectPostByAutorId = (autorId) => {
    return db.query('select * from posts where autores_id = ?', [autorId]);
}

const insertPost = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    return db.query('insert into posts(titulo,descripcion,fecha_creacion,categoria,autores_id) value(?,?,?,?,?)',
        [titulo, descripcion, fecha_creacion, categoria, autores_id]);
}


const updatePostById = (postId, { titulo, descripcion, fecha_creacion, categoria }) => {
    return db.query('update posts set titulo = ?, descripcion = ?, fecha_creacion = ? , categoria = ?  where id = ?',
        [titulo, descripcion, fecha_creacion, categoria, postId]
    );

}


const deletePostById = (postId) => {
    return db.query('delete from posts where id = ?', [postId]);
}

const deletePostByAutorId = (autorId) => {
    return db.query('delete from posts where autores_id = ?', [autorId]);
}

module.exports = { selectAllPosts, selectPostById, selectPostByAutorId, insertPost, updatePostById, deletePostById, deletePostByAutorId };