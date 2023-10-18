import "@testing-library/jest-dom"
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MangaService } from "./MangaService";
import Manga from "@/types/Manga/Manga";

describe("MangaService", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("getAll: should fetch manga data with query parameters", async () => {
    const mockResponse = {
      currentPage: 1,
      totalPages: 1,
      totalCount: 8,
      data: [
        {
          id: 1,
          createdAt: "2023-10-02T13:02:02.735Z",
          modifiedAt: "2023-10-11T00:04:52.505Z",
          title: "One Piece",
          description: "Uma descrição bem foda que resume o manga",
          posterUrl:
            "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
          releaseDate: "2023",
          viewsCount: 0,
          type: "MANGA",
          genres: [
            {
              id: 1,
              name: "SHOUNEN",
            },
            {
              id: 2,
              name: "SEINEN",
            },
          ],
        },
        {
          // Adicione mais dados de manga, se necessário...
        },
      ],
    };
    mockAxios.onGet(process.env.API_URL + "/api/v1/manga").reply(200, mockResponse);
    const response = await MangaService.getAll();
    expect(response).toEqual(mockResponse);
  });

  it("getById: should fetch manga by id", async () => {
    const mockResponse = {
      id: 123,
      createdAt: "2023-10-02T13:02:02.735Z",
      modifiedAt: "2023-10-02T13:02:02.735Z",
      title: "Um Manga Incrivel",
      description: "Uma descrição bem foda que resume o manga",
      posterUrl: "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
      releaseDate: "2023",
      genres: [
        {
          id: 1,
          name: "SEINEN"
        }
      ],
      type: "MANGA",
      viewsCount: 123,
      chapters: [
        {
          id: 123,
          mangaId: 123,
          createdAt: "2023-10-02T13:02:02.735Z",
          modifiedAt: "2023-10-02T13:02:02.735Z",
          chapterNumber: "1",
          chapterPages: [
            {
              id: 123,
              chapterId: 123,
              createdAt: "2023-10-02T13:02:02.735Z",
              modifiedAt: "2023-10-02T13:02:02.735Z",
              imageUrl: "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
              pageNumber: 1
            }
          ]
        }
      ]
    }
    mockAxios.onGet(process.env.API_URL + "/api/v1/manga/123").reply(200, mockResponse);
    const response = await MangaService.getById(123);
    expect(response).toEqual(mockResponse);
  })

  it("createManga: should create a new manga", async () => {
    const mockRequestDTO: Partial<Manga> = {
      title: "Um Manga Incrivel",
      description: "Uma descrição bem foda que resume o manga",
      posterUrl: "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
      releaseDate: "2023",
      genres: [],
      type: "MANGA",
      chapters: []
    };
    const mockResponseDTO: Manga = {
      id: 123,
      createdAt: "2023-10-02T13:02:02.735Z",
      modifiedAt: "2023-10-02T13:02:02.735Z",
      title: "Um Manga Incrivel",
      description: "Uma descrição bem foda que resume o manga",
      posterUrl: "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
      releaseDate: "2023",
      genres: [
        {
          id: 1,
          name: "SEINEN"
        }
      ],
      type: "MANGA",
      viewsCount: 123,
      chapters: [
        {
          id: 123,
          mangaId: 123,
          createdAt: "2023-10-02T13:02:02.735Z",
          modifiedAt: "2023-10-02T13:02:02.735Z",
          chapterNumber: "1",
          chapterPages: [
            {
              id: 123,
              chapterId: 123,
              createdAt: "2023-10-02T13:02:02.735Z",
              modifiedAt: "2023-10-02T13:02:02.735Z",
              imageUrl: "https://img.lermanga.org/O/one-piece-colorido/capitulo-01/1.png",
              pageNumber: 1
            }
          ]
        }
      ]
    };

    mockAxios.onPost(process.env.API_URL + "/api/v1/manga", mockRequestDTO).reply(200, mockResponseDTO);
    const response = await MangaService.create(mockRequestDTO);
    expect(response).toEqual(mockResponseDTO);
  })

  it("deleteManga: should delete a existing manga", async () => {
    const mockId = 123;

    mockAxios.onDelete(process.env.API_URL + "/api/v1/manga/" + mockId).reply(200, Boolean(true));
    const response = await MangaService.delete(mockId);
    expect(response).toBeTruthy();
  })
  

});
