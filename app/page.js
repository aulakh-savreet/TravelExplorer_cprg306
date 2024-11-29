// app/page.js

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">
          Discover Countries Around the World
        </h1>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}
