import { Column, Entity } from 'typeorm';

import { TypeOrmEntityBase } from './typeorm-entity.base';

@Entity({ name: 'user_profile' })
export class UserProfileTypeOrmEntity extends TypeOrmEntityBase {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'bio', nullable: true })
  bio: string;
}
