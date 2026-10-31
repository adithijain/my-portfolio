import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: {
    default: 'Adithi Jain | Portfolio',
    template: '%s | Adithi Jain',
  },
  description: 'Portfolio website for Adithi Jain',
};

/* Runs before the page paints, so the saved theme shows with no flash. */
const themeScript = `(function(){var root=document.documentElement;try{var t=localStorage.getItem('theme');root.dataset.theme=(t==='light'||t==='dark')?t:'dark';}catch(e){root.dataset.theme='dark';}root.classList.add('js');})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main className="portfolio">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
