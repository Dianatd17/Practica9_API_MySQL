const selectAllPosts = () => {
    return db.query('select * from posts');
}

const selectPostById = (postId) => {
    return db.query('select * from posts where id = ?', [postId]);
}


const insertPost = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    //entiendo que el Id del autor se ha obtenido en la parte del front y se envia los datos compeltos al Back
    return db.query('insert into posts(titulo,descripcion,fecha_creacion,categoria,autores_id) value(?,?,?,?,?)',
        [titulo, descripcion, fecha_creacion, categoria, autores_id]);
}


module.exports = { selectAllPosts, selectPostById, insertPost };