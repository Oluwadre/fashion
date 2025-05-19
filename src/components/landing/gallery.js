import React from 'react'


 const galleryItems = [
   { id: 1, title: "Spring Collection 2023", category: "Women" },
   { id: 2, title: "Urban Elegance", category: "Men" },
   { id: 3, title: "Metallic Dreams", category: "Women" },
   { id: 4, title: "Minimalist Future", category: "Unisex" },
   { id: 5, title: "Cultural Fusion", category: "Women" },
   { id: 6, title: "Winter Luxe", category: "Men" },
 ];
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Our Collections
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest fashion collections that blend innovation with
          timeless elegance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                {item.title} Image
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery