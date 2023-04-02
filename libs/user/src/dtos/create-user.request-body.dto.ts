import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class CreateUserRequestBodyDto {
  @IsString()
  @Length(3, 100)
  @Expose({ name: 'first_name' })
  firstName: string;

  @IsString()
  @Length(3, 100)
  @Expose({ name: 'last_name' })
  lastName: string;

  @IsString()
  @Length(3, 255)
  @Expose({ name: 'bio' })
  bio: string;
}
