import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">About TravelExplorer</h1>
        <p className="mb-4">
          TravelExplorer is a web application designed to help users discover and explore information about countries around the world. Whether you&apos;re planning a trip, conducting research, or simply curious about different cultures, TravelExplorer provides comprehensive data at your fingertips.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Purpose</h2>
        <p className="mb-4">
          In today&apos;s interconnected world, access to accurate and detailed information about different countries is invaluable. TravelExplorer addresses the need for a centralized platform where users can search for countries and gain insights into their capitals, populations, regions, and more.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Detailed country profiles including flags, capitals, populations, and regions.</li>
          <li>Responsive design for seamless usage across devices.</li>
          <li>Accessible user interface adhering to web accessibility standards.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Development Journey</h2>
        <p className="mb-4">
          Built using Next.js and Tailwind CSS, TravelExplorer leverages modern web development technologies to deliver a fast and efficient user experience. The application fetches data from the REST Countries API and OpenWeather API to provide up-to-date information on countries and their respective weather conditions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Future Enhancements</h2>
        <p className="mb-4">
          Moving forward, we plan to integrate user authentication to allow personalized experiences, such as bookmarking favorite countries or saving search history. Additionally, incorporating interactive maps and more detailed country statistics will further enrich the application&apos;s offerings.
        </p>
      </main>
      <Footer />
    </div>
  );
}
