import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import MangaCard from '.';

const mockManga = {
    id: 1,
    title: "One Piece",
    posterUrl: "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",

};

describe('MangaCard', () => {
    it('should be rendered', () => {
        render(<MangaCard id={mockManga.id} title={mockManga.title} posterUrl={mockManga.posterUrl} />);
        expect(screen.getByText(mockManga.title)).toBeInTheDocument();
    });
});
