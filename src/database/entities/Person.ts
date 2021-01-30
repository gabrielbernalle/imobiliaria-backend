import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeUpdate,
    BeforeInsert,
} from 'typeorm';

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    public async compareHash(hash: unknown): Promise<boolean> {
        return bcrypt.compare(hash, this.password);
    }

    public generateToken(): string {
        return jwt.sign({ id: this.id }, 'secret', {
            expiresIn: 86400,
        });
    }

    private async hashPassword(): Promise<void> {
        if (this.password) this.password = await bcrypt.hash(this.password, 8);
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async triggerBeforeSave(): Promise<void> {
        await this.hashPassword();
    }
}
