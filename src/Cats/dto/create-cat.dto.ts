import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;
  age: number;
  @IsNotEmpty()
  breed: string;
}
