import messageController from '../controllers/message-controller';
import express from 'express';

const router = express.Router();


router.get('/', messageController.allChat);
router.get('/:id/:id2', messageController.getChat);
router.post('/', messageController.newMessage);


export default router;