import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("otp")
export class Otp {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Column()
  otp: string;

  @Column()
  email: string;

  @Column({ name: "expired_at", nullable: true })
  expiredAt: Date;
}
