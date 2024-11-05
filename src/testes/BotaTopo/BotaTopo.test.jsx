import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { measurePerformance } from 'jest-performance'
import BotaoTopo from '../components/BotaoTopo';  





describe('BotaoTopo Component', () => {
  beforeEach(() => {
    // Configurações iniciais antes de cada teste
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    // Limpa as configurações após cada teste
    window.scrollTo.mockClear();
  });

  it('renders correctly when scrolled down', async () => {
    const renderTime= await measurePerformance(()=>{
      // Simula a rolagem da página
      const { queryByText } = render(<BotaoTopo />);
      fireEvent.scroll(window, { target: { scrollY: 1000 } });
      expect(queryByText('↑')).toBeInTheDocument();
    })
    console.log(`Render time:${renderTime}ms`)
    
  });

  it('does not render when not scrolled down', async () => {
    // Renderiza o componente sem rolar a página
    const renderTime= await measurePerformance(()=>{
      const { queryByText } = render(<BotaoTopo />);
      expect(queryByText('↑')).toBeNull();
    })
    
  });

  it('scrolls to top when clicked', async () => {
    // Simula a rolagem da página e o clique no botão
    const { getByText } = render(<BotaoTopo />);
    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    const button = getByText('↑');

    const clickTime = await measurePerformance(()=>{
      fireEvent.click(button)
    })
    
    expect(window.scrollTo).toHaveBeenCalledWith({top:0, behavior:'smooth'});
    console.log(`Scroll to Top Time: ${clickTime}ms`)
  });
});
