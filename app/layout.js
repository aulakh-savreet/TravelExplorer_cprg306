import './globals.css';

export const metadata = {
  title: 'TravelExplorer',
  description: 'Discover Countries Around the World',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
