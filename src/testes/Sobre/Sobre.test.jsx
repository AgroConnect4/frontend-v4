import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sobre from '../components/Sobre';  // ajuste o caminho conforme necessário

const mockInformacoes = {
  nome: 'Desenvolvedor 1',
  bio: 'Bio do desenvolvedor 1',
};

describe('Sobre Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Sobre informacoes={mockInformacoes} />);
    expect(getByText(/Desenvolvedor 1/i)).toBeInTheDocument();
    expect(getByText(/Bio do desenvolvedor 1/i)).toBeInTheDocument();
  });
});
