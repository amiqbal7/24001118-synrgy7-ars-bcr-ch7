import { render, screen } from '@testing-library/react';
import { SearchCars } from '../src/pages/SearchCars';
import '@testing-library/jest-dom'

// Konfigurasi matchMedia (jika diperlukan)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test('renders correct heading', () => {
  render(<SearchCars />);
  // Ganti dengan teks yang sebenarnya muncul di dalam komponen SearchCars
  const linkElement = screen.getByText(/Mulai Sewa Mobil/i);
  expect(linkElement).toBeInTheDocument();
});
