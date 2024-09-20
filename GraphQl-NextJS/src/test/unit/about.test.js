import { render, screen } from '@testing-library/react';
// import HomePage from '../../pages/index';
import Home from '../../pages/index';
import About from '@/pages/about';

describe('Home Page', () => {
  it('renders the Home page content', () => {
    render(<About/>);
    expect(screen.getByText('This is the about page!')).toBeInTheDocument(); // Example text
  });
});
