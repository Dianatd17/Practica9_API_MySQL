// 
function PostValidationData(data) {
    const { titulo, descripcion, fecha_creacion, categoria } = data;

    if (!typeof titulo === 'string') {
        throw new Error('El titulo debe ser string');
    }

    if (titulo === null || titulo.trim().length === 0) {
        throw new Error('El titulo esta vacio');
    }

    //descripción
    if (!typeof descripcion === 'string') {
        throw new Error('La descripción debe ser string');
    }

    if (descripcion === null || descripcion.trim().length === 0) {
        throw new Error('La descripción esta vacia');
    }

    //fecha
    if (!typeof fecha_creacion === 'string') {
        throw new Error('La fecha debe ser string');
    }

    if (fecha_creacion === null || fecha_creacion.trim().length === 0) {
        throw new Error('La fecha esta vacia');
    }
    if (isNaN(Date.parse(fecha_creacion))) {
        throw new Error('La fecha es incorrecta');
    }

    //categoria
    if (!typeof categoria === 'string') {
        throw new Error('la categoria debe ser string');
    }
    if (categoria === null || categoria.trim().length === 0) {
        throw new Error('La categoria esta vacia');
    }
}

module.exports = { PostValidationData };