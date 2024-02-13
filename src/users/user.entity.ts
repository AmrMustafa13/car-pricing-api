import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

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
