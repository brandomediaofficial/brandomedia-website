import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      isVideo: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      isVideo: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      isVideo: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      isVideo: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      isVideo: false
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      isVideo: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[black] mb-4">
            Explore Our Portfolio to Learn About Our Wide Range of Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our portfolio proves our ability to offer comprehensive, customized solutions that enable brands and promote success in the digital sphere.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              
              {/* Play Button for Videos */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-8 h-8 text-[black] ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
