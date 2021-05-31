export interface IReqRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Usuario[];
    support: Support;
}

interface Support {
    url: string;
    text: string;
}

export interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
