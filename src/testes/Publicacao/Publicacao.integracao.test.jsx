import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // Se estiver usando navegação, importe o MemoryRouter
import Publicacao from './Publicacao'; // Certifique-se de ajustar o caminho conforme necessário

describe('Integração do Componente Publicacao', () => {
  const samplePosts = [
    { title: 'Post 1', content: 'Content 1' },
    { title: 'Post 2', content: 'Content 2' },
  ];

  it('renderiza e interage corretamente', () => {
    const { getByText, getByAltText, getByRole } = render(
      <MemoryRouter>
        <Publicacao posts={samplePosts} />
      </MemoryRouter>
    );

    // Verifica se os elementos estão sendo renderizados corretamente
    expect(getByText('Post 1')).toBeInTheDocument();
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Post 2')).toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();

    // Simula a interação do usuário (por exemplo, clicando em um botão)
    const entrarNaPublicacaoButton = getByRole('button', { name: 'Entrar na publicação' });
    fireEvent.click(entrarNaPublicacaoButton);

    // Verifica se a navegação ocorreu corretamente após a interação do usuário
    expect(getByText('Post Completo')).toBeInTheDocument(); // Supondo que a rota "/PostCompleto" leva a uma página chamada "Post Completo"
  });
});
