import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';
import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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
