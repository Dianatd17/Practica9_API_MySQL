function autorValidation(data) {
    const { nombre, email, imagen } = data;

    if (!typeof nombre === 'string') {
        throw new Error('El nombre debe ser string');
    }

    if (nombre === null || nombre.trim().length === 0) {
        throw new Error('El nombre esta vacio');
    }

    //email
    let emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!typeof email === 'string') {
        throw new Error('El email debe ser string');
    }

    if (email === null || email.trim().length === 0) {
        throw new Error('El email esta vacio');
    }
    if (!emailRegex.test(email)) {
        throw new Error('Email incorrecto');
    }


    //imagen
    if (!typeof imagen === 'string') {
        throw new Error('la imagen debe ser string');
    }
    if (imagen === null || imagen.trim().length === 0) {
        throw new Error('La imagen esta vacia');
    }
}

module.exports = { autorValidation };