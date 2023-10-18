import axios from "axios";
import Manga from "@/types/Manga/Manga";
import PaginationDto from "@/types/PaginationDto";

export const MangaService = {
    /**
    * Recupera uma lista de mangás com base em opções de filtro.
    * @param {number} [pageNumber] - Número da página.
    * @param {number} [pageSize] - Tamanho da página.
    * @param {string} [search] - Termo de pesquisa.
    * @returns {Promise<PaginationDto<Manga>>} - Retorna uma lista de mangas.
    * @throws {Error} - Lança um erro se ocorrer um erro na solicitação.
    */
    getAll: async (
        pageNumber?: number,
        pageSize?: number,
        search?: string
    ): Promise<PaginationDto<Manga[]>> => {
        try {
            // Construa a URL com base nos parâmetros fornecidos
            const url = new URL(process.env.API_URL + "/api/v1/manga");
            if (pageNumber) url.searchParams.set("pageNumber", pageNumber.toString());
            if (pageSize) url.searchParams.set("pageSize", pageSize.toString());
            if (search) url.searchParams.set("search", search);

            const response = await axios.get<PaginationDto<Manga[]>>(url.toString());
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(`Status: ${error.response.status} - ${error.response.data}`);
            }
            throw error;
        }
    },
    getById: async (id: number): Promise<Manga> => {
        try {
            const response = await axios.get<Manga>(process.env.API_URL + `/api/v1/manga/${id}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(`Status: ${error.response.status} - ${error.response.data}`);
            }
            throw error;
        }
    },
    create: (manga: Partial<Manga>) => {

    },
    delete: (id: number) => {},
}