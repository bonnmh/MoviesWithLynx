export type HeaderFilterType = 'All' | 'Action' | 'Comedy' | 'Drama';

export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}