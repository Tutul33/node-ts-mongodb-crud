import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';
import { authenticateToken, publicRoute } from '../middleware/auth';
const router = Router();
const userController = container.resolve(UserController);

// Public routes
router.post('/register', publicRoute, userController.register.bind(userController));
router.post('/login', publicRoute, userController.login.bind(userController));

router.post('/users', authenticateToken, userController.createUser.bind(userController));
router.get('/users', authenticateToken, userController.getUsers.bind(userController));
router.get('/users/:id', authenticateToken, userController.getUserById.bind(userController));
router.put('/users/:id', authenticateToken, userController.updateUser.bind(userController));
router.delete('/users/:id', authenticateToken, userController.deleteUser.bind(userController));

export default router;
