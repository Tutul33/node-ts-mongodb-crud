import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: Date;
  createDate: Date;
  email: string;
  phone: string;
  address: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  birthDate: { type: Date, required: true },
  createDate: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
