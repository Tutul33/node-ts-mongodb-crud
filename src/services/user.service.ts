import { injectable } from 'tsyringe';
import UserModel, { IUser } from '../models/user.model';

@injectable()
export class UserService {
  async createUser(data: Partial<IUser>): Promise<IUser> {
    return UserModel.create(data);
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }
  
  async getUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async updateUser(id: string, userData: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, userData, { new: true });
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
