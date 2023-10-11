export interface Genre {
    id: number;
    name: string;
}

export interface IManga {
    id: number;
    createdAt: string;
    modifiedAt: string;
    releaseDate: string;
    title: string;
    description: string;
    type: string;
    posterUrl: string;
    viewsCount: number;
    genres: Genre[];
}