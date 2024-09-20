import { render, screen } from '@testing-library/react';
// import HomePage from '../../pages/index';
import Home from '../../pages/index';

describe('Home Page', () => {
  it('renders the Home page content', () => {
    render(<Home/>);
    expect(screen.getByText('Welcome to Next.js with GraphQL')).toBeInTheDocument(); // Example text
  });
});
