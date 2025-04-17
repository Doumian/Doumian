
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container-page">
        <div className="max-w-3xl mx-auto">
          {/* Main image with added top padding */}
          <div className="mb-8 animate-fade-in pt-8 sm:pt-12">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3"
              alt="Paisaje de Fortaleny"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Town description */}
          <div className="animate-slide-in space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-fortaleny-green">Bienvenidos a Fortaleny</h1>
            
            <p className="text-lg">
              Descubre el encanto de un pequeño municipio situado en el corazón de la Comunidad Valenciana. 
              Fortaleny, con su rica historia y belleza natural, te invita a explorar sus paisajes, 
              conocer su biodiversidad y sumergirte en sus tradiciones.
            </p>
            
            <p className="text-lg">
              Este rincón valenciano es hogar de una variada flora y fauna que refleja la riqueza 
              medioambiental de la región. Te invitamos a descubrir más sobre nuestro patrimonio natural.
            </p>
            
            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link to="/flora" className="btn btn-primary">
                Descubrir Flora
              </Link>
              <Link to="/fauna" className="btn btn-secondary">
                Explorar Fauna
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

