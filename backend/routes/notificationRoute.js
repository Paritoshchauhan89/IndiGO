import express from 'express';
import { createNotification, getAllNotifications, updateNotification } from '../controller/notificationController.js';

const router = express.Router();

router.post('/notifications', createNotification);
router.get('/notifications', getAllNotifications);
router.put('/notifications/:id', updateNotification);

export default router;
