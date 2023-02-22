import jwt from 'jsonwebtoken';

const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };
        
        jwt.sign(
            payload, 
            process.env.SECRETORPRIVATE_KEY,
            {
                expiresIn: '4h',
            }, 
            (error, token) => {
            if (error) {
                console.log(error);
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            }}
        )
    })


}

export { generarJWT };