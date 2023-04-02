import { UserVM } from '../vms/user.vm';

export interface IUserService {
  getUserById(id: string): Promise<UserVM | undefined>;
}
