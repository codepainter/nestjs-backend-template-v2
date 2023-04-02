import { UserVM } from '../vms/user.vm';

export interface IUserReadRepository {
  findById(id: string): Promise<UserVM | undefined>;
}
