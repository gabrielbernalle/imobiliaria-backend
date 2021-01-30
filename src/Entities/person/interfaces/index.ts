export interface PersonInterface {
    id?: string;
    name: string;
    email: string;
    password?: string;
}

export interface QueryUserInterface {
    id?: string;
    email?: string;
    name?: string;
}

export interface CreateUserInterface {
    name: string;
    email: string;
    password?: string;
}

export interface UpdateUserInterface {
    email?: string;
    name?: string;
    password?: string;
}

export type UserReturnColumns = 'name' | 'email' | 'id';
