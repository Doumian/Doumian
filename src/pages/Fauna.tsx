
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import DropdownInfo from '../components/DropdownInfo';
import AudioPlayer from '../components/AudioPlayer';

const faunaImages = [
  {
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Fauna de Fortaleny - Ciervos'
  },
  {
    src: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Fauna de Fortaleny - Reptiles'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Fauna de Fortaleny - Paisaje'
  }
];

const faunaItems = [
  {
    id: 'aves',
    label: 'Aves',
    content: 'Fortaleny es hogar de numerosas especies de aves, tanto residentes como migratorias. Entre las más comunes se encuentran el gorrión común, la golondrina y el jilguero. En las zonas de humedal cercanas, se pueden observar garzas, anátidas y hasta incluso el colorido abejaruco. Los aficionados a la ornitología encontrarán en nuestro municipio un lugar excepcional para la observación de aves.'
  },
  {
    id: 'mamiferos',
    label: 'Mamíferos',
    content: 'Los campos y bosques alrededor de Fortaleny albergan una variedad de mamíferos adaptados a la vida cerca de asentamientos humanos. Es común encontrar conejos, liebres y erizos. En las zonas más apartadas habitan jabalíes y zorros. Aunque más discretos, los murciélagos juegan un papel crucial en el control de insectos durante las noches de verano.'
  },
  {
    id: 'reptiles',
    label: 'Reptiles y Anfibios',
    content: 'La herpetofauna de Fortaleny incluye especies como la lagartija ibérica y el lagarto ocelado, fáciles de ver tomando el sol en muros de piedra. Entre los anfibios destacan la rana común y el sapo corredor, especialmente activos después de las lluvias. También se pueden encontrar culebras inofensivas como la culebra de escalera y la culebra bastarda.'
  },
  {
    id: 'insectos',
    label: 'Insectos',
    content: 'El mundo de los insectos en Fortaleny es particularmente diverso. Durante la primavera y el verano, mariposas como la macaón y la vanesa de los cardos colorean los campos. Las libélulas son comunes cerca de zonas húmedas, mientras que numerosas especies de abejas, incluida la abeja melífera, polinizan cultivos y plantas silvestres, siendo esenciales para la agricultura local.'
  }
];

const Fauna = () => {
  // This would be replaced with actual audio file in a real project
  const audioSrc = "#";

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          {/* Image carousel with added top padding */}
          <div className="mb-8 animate-fade-in pt-8 sm:pt-12">
            <ImageCarousel images={faunaImages} />
          </div>
          
          {/* Content */}
          <div className="animate-slide-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-fortaleny-green mb-6">
              Fauna de Fortaleny
            </h1>
            
            <p className="text-lg mb-6">
              La diversidad animal de Fortaleny refleja la riqueza de ecosistemas presentes en la región. 
              Desde las aves que pueblan nuestros cielos hasta los pequeños insectos que mantienen 
              el equilibrio ecológico, descubre las diferentes especies que habitan en nuestro municipio 
              y sus alrededores.
            </p>
            
            {/* Interactive dropdown */}
            <DropdownInfo items={faunaItems} title="Tipos de Fauna" />
          </div>
        </div>
      </div>
      
      {/* Audio player footer */}
      <footer className="footer-fixed bg-white shadow-lg">
        <AudioPlayer audioSrc={audioSrc} title="Audioguía - Fauna de Fortaleny" />
      </footer>
    </div>
  );
};

export default Fauna;

