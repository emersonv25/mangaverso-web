import Chapter from "./Chapter";
import Genre from "./Genre";

type Manga = {
    id: number;
    createdAt: string;
    modifiedAt: string;
    title: string;
    description: string;
    posterUrl: string;
    releaseDate: string;
    genres: Genre[];
    type: string;
    viewsCount: number;
    chapters: Chapter[];
}


export default Manga