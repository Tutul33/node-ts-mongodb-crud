import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import { UserService } from '../services/user.service';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
@injectable()
export class UserController {  
  constructor(
    private userService: UserService  // tsyringe will inject this service automatically
  ) {}
  
   // User registration
   async register(req: Request, res: Response): Promise<Response> {
    try {
      const { firstName, lastName, email,address,phone,birthDate,age, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userService.createUser({ firstName, lastName, email,address,phone,birthDate,age, password: hashedPassword });
      return res.status(201).json(user);
    } catch (error:any) {
      return res.status(400).json({ message: error.message });
    }
  }

  // User login
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const user = await this.userService.findUserByEmail(email);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } catch (error:any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error:any) {
      return res.status(400).json({ message: error.message });
    }
  }
  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.getUsers();
      return res.json(users);
    } catch (error:any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.json(user);
    } catch (error:any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const updatedUser = await this.userService.updateUser(req.params.id, req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      return res.json(updatedUser);
    } catch (error:any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const deletedUser = await this.userService.deleteUser(req.params.id);
      if (!deletedUser) return res.status(404).json({ message: 'User not found' });
      return res.json({ message: 'User deleted successfully' });
    } catch (error:any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
