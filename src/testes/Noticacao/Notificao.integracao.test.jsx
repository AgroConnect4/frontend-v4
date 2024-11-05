import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notificacao from './Notificacao';

describe('Testes de Integração para o Componente Notificacao', () => {
  it('renderiza corretamente com tipo "sucesso"', () => {
    const { getByText, container } = render(<Notificacao tipo="sucesso" mensagem="Notificação de sucesso" />);
    expect(container.firstChild).toHaveClass('alert-success');
    expect(getByText('Notificação de sucesso')).toBeInTheDocument();
  });

  it('renderiza corretamente com tipo "erro"', () => {
    const { getByText, container } = render(<Notificacao tipo="erro" mensagem="Notificação de erro" />);
    expect(container.firstChild).toHaveClass('alert-danger');
    expect(getByText('Notificação de erro')).toBeInTheDocument();
  });

  it('renderiza corretamente com tipo "aviso" (padrão)', () => {
    const { getByText, container } = render(<Notificacao mensagem="Notificação de aviso" />);
    expect(container.firstChild).toHaveClass('alert-warning');
    expect(getByText('Notificação de aviso')).toBeInTheDocument();
  });
});
