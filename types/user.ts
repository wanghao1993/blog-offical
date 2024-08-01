export interface USER_DTO {
    name: string;
    image: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}


export interface USER_VO {
    name: string;
    image: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}
