import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product{
  @PrimaryGeneratedColumn()  
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  description: string

  @Column()
  is_favorite: number;
    
  @Column()
  price: number;
}