import './globals.css';

export const metadata = {
  title: 'Adithi Jain | Portfolio',
  description: 'Portfolio website for Adithi Jain',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
