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
