
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import DropdownInfo from '../components/DropdownInfo';
import AudioPlayer from '../components/AudioPlayer';

const floraImages = [
  {
    src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Flora de Fortaleny - Paisaje'
  },
  {
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Flora de Fortaleny - Bosque'
  },
  {
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3',
    alt: 'Flora de Fortaleny - Árboles'
  }
];

const floraItems = [
  {
    id: 'naranjales',
    label: 'Naranjales',
    content: 'Los naranjales son una parte fundamental del paisaje de Fortaleny. Estos cultivos de cítricos dominan las afueras del municipio, creando un mar verde que se transforma en blanco durante la floración y en naranja durante la cosecha. Las variedades cultivadas incluyen navelina, navel y valencia late, produciendo algunas de las mejores naranjas de la región.'
  },
  {
    id: 'pinada',
    label: 'Pinada Mediterránea',
    content: 'La pinada mediterránea de Fortaleny constituye un pulmón verde para el municipio. Dominada por el pino carrasco (Pinus halepensis), esta área boscosa alberga numerosas especies de sotobosque como romero, tomillo y lavanda que llenan el aire con sus aromas característicos, especialmente durante los meses de primavera.'
  },
  {
    id: 'ribera',
    label: 'Vegetación de Ribera',
    content: 'En las cercanías del río, Fortaleny cuenta con áreas de vegetación de ribera típica valenciana. Aquí podemos encontrar especies como chopos, sauces y álamos, que crean microhábitats húmedos donde prosperan numerosas especies vegetales como helechos, juncos y diversas plantas florales, formando corredores biológicos de gran importancia.'
  },
  {
    id: 'huerta',
    label: 'Huerta Tradicional',
    content: 'La huerta tradicional de Fortaleny representa un sistema agrícola sostenible desarrollado a lo largo de siglos. Además de verduras y hortalizas de temporada, estas áreas de cultivo están delimitadas por setos naturales donde crecen especies como la zarzamora, el lentisco y diversas herbáceas que contribuyen a la biodiversidad local.'
  }
];

const Flora = () => {
  // This would be replaced with actual audio file in a real project
  const audioSrc = "#";

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          {/* Image carousel with added top padding */}
          <div className="mb-8 animate-fade-in pt-8 sm:pt-12">
            <ImageCarousel images={floraImages} />
          </div>
          
          {/* Content */}
          <div className="animate-slide-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-fortaleny-green mb-6">
              Flora de Fortaleny
            </h1>
            
            <p className="text-lg mb-6">
              Fortaleny cuenta con una biodiversidad vegetal característica de la zona mediterránea valenciana, 
              donde se mezclan especies cultivadas y silvestres que han coexistido durante siglos. 
              Desde los tradicionales naranjales hasta la vegetación de montaña, descubre las plantas 
              que hacen único a nuestro municipio.
            </p>
            
            {/* Interactive dropdown */}
            <DropdownInfo items={floraItems} title="Tipos de Flora" />
          </div>
        </div>
      </div>
      
      {/* Audio player footer */}
      <footer className="footer-fixed bg-white shadow-lg">
        <AudioPlayer audioSrc={audioSrc} title="Audioguía - Flora de Fortaleny" />
      </footer>
    </div>
  );
};

export default Flora;

