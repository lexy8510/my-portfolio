export default function Home() {
  return (
    <main className="p-8 space-y-20 bg-gray-100 text-gray-800">
      
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm Ogunniyi Anuoluwapo</h1>

        <p className="text-lg">Welcome to my personal portfolio website!</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a passionate individual with interests in fashion design and Cosmetics.
          This website showcases some of my favorite works and projects.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/gallery1.jpg.jpg" alt="Gallery Image 1" className="rounded shadow"/>
          <img src="/gallery2.jpg.jpg" alt="Gallery Image 2" className="rounded shadow"/>
          <img src="/gallery3.jpg.jpg" alt="Gallery Image 3" className="rounded shadow"/>
          <img src="/gallery4.jpg.jpg" alt="Gallery Image 4" className="rounded shadow"/>
          <img src="/gallery5.jpg.jpg" alt="Gallery Image 5" className="rounded shadow"/>
          <img src="/gallery6.jpg.jpg" alt="Gallery Image 6" className="rounded shadow"/>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>You can reach me via:</p>
        <ul className="list-disc ml-6">
          <li>Email: yourname@example.com</li>
          <li>Twitter: @yourhandle</li>
          <li>LinkedIn: your-linkedin-profile</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-10">
        &copy; 2025 [Your Name]. All rights reserved.
      </footer>

    </main>
  )
}
