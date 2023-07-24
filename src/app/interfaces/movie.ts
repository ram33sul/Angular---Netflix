export interface Movie {
    id: string;
    title: string;
    overview: string;
    media_type: string;
    backdrop_path: string;
    poster_path: string;
    name: string;
}

export interface Genre {
    id: number;
    name: string;
}