import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @AfterInsert()
  async logInsert() {
    console.log(`Inserted User with id ${this.id}`);
  }

  @AfterRemove()
  async logRemove() {
    console.log(`Removed User with id ${this.id}`);
  }

  @AfterUpdate()
  async logUpdate() {
    console.log(`Updated User with id ${this.id}`);
  }
}
