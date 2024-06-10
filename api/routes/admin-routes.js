import express from 'express';
import { adminLogin, dashboard, viewmore, deleteUser, updateUser } from '../controllers/admin-controller.js';

const router = express.Router();

router.post('/admin-login', adminLogin);
router.get('/dashboard', dashboard);
router.get('/viewmore/:id', viewmore);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

export default router;
