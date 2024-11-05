import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Publicações from '../components/Publicações'; 
import { measureperformance } from 'jest-performance'

const mockPublicacoes = [
  { id: 1, titulo: 'Publicação 1', conteudo: 'Conteúdo da publicação 1' },
  { id: 2, titulo: 'Publicação 2', conteudo: 'Conteúdo da publicação 2' },
];

describe('Publicacao Component', () => {
  const samplePost=[
    {title:'Post 1', content:'Content 1'}
    {title:'Post 2', content:'Content 2'}
  ]

  it('renders correctly with given posts', ()=>{
    const { getByText } =render(<Publicacoes posts={samplePosts} />)
    expect(getByText('Post 1')).toBeInTheDocument();
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Post 2')).toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();
  })

  it('measures render performance with sample posts', async()=>{
    const renderTime =await measureperformance(()=>{
      render(<Publicacoes />)
    })
  })

  console.log(`Render Time :${renderTime}ms`)



  it('renders correctly', () => {
    const { getByText } = render(<Publicações publicacoes={mockPublicacoes} />);
    expect(getByText(/Publicação 1/i)).toBeInTheDocument();
    expect(getByText(/Publicação 2/i)).toBeInTheDocument();
  });

  it('displays the correct content', () => {
    const { getByText } = render(<Publicações publicacoes={mockPublicacoes} />);
    expect(getByText(/Conteúdo da publicação 1/i)).toBeInTheDocument();
    expect(getByText(/Conteúdo da publicação 2/i)).toBeInTheDocument();
  });
});
