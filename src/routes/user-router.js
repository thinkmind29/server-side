//IMPORT MODULOS DE TERCEIROS
import express from 'express';
//IMPORT MODULO INTERNO
import userController from '../controllers/user-controller.js';

//VARIÁVEIS AUXILIARES
const router = express.Router();
var UserSchema = {};

router.get('/', userController.get)
router.get('/auth/:id', userController.getUserByProviderId);
router.get('/id/:id', userController.getUserById);
router.get('/:token', userController.getUser);
router.get('/:param1/:param2', userController.getSearch);

router.post('/', userController.save);
router.post('/login', userController.login);
router.post('/registerSocial', userController.registerSocial);

router.put('/', userController.forgotPassword);
router.put('/:token', userController.changePassword);
router.put('/photo/:token', userController.changePhoto);


router.delete('/:token', userController.deleteAccount);


export default router;