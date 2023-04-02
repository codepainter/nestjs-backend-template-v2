import { IsString, IsUUID } from 'class-validator';

export class UserDetailsRequestBodyDto {
  @IsUUID()
  @IsString()
  id: string;
}
