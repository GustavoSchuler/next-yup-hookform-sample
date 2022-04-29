import Home from '@pages/index';
import { render, screen } from '@testing-library/react';
describe('# Index (home) Page', () => {
    beforeAll(() => {
        render(<Home />);
    });
  
    it('should render correctly', () => {
        expect(screen.getByText('Testing App')).toBeInTheDocument();
    });
});