import ChapterPage from "./ChapterPage";

type Chapter = {
    id: number;
    mangaId: number;
    createdAt: string;
    modifiedAt: string;
    chapterNumber: string;
    chapterPages: ChapterPage[];
}

export default Chapter