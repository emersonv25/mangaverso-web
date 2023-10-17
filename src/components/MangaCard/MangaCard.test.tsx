import "@testing-library/jest-dom"
import React from 'react';
import { render, screen } from '@testing-library/react';
import MangaCard from '.';

const mockManga = {
    id: 1,
    createdAt: '2023-01-01',
    modifiedAt: '2023-01-02',
    releaseDate: '2023-01-03',
    title: 'Example Manga',
    description: 'This is an example manga description.',
    type: 'Manga',
    posterUrl: 'https://cdn.discordapp.com/attachments/347182996782055435/1163953620266532864/image.png?ex=65417348&is=652efe48&hm=4475662ecfbc8049ebb031110357b2669fb9635910ae93614fc270a37498b4fa&',
    viewsCount: 1000,
    genres: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Adventure' },
    ],
};

describe('MangaCard', () => {
    it('renders the manga title and image', () => {
        render(<MangaCard manga={mockManga} />);

        const titleElement = screen.getByText('Example Manga');
        const imageElement = screen.getByAltText('Example Manga');

        expect(titleElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    });

    it('links to the correct URL', () => {
        render(<MangaCard manga={mockManga} />);

        const linkElement = screen.getByRole('link');

        expect(linkElement).toHaveAttribute('href', '/mangas/1');
    });
});
