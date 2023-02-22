import { Router } from 'express';

import { check } from 'express-validator';

import { login } from '../controllers/auth.js';

import { validarCampos } from '../middlewares/validar-campos.js';

const router = Router();

router.post(
    '/login', 
    [   
        check('correo', 'El correo es obligatorio' ).notEmpty(),
        check('correo', 'Formato de correo incorrecto').isEmail(),
        check('password', 'La contraseña es obligatoria').notEmpty(),
        validarCampos
    ],
    login
);



export { router as router_auth };