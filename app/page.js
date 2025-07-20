import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-8 space-y-20 bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Ogunniyi Anuoluwapo</h1>
        <p className="text-lg">Welcome to my personal portfolio website!</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I&apos;m a passionate individual with interests in web development, blockchain, and digital creativity.
          This portfolio highlights my projects and personal growth in the tech space.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Web Development (HTML, CSS, JavaScript, React)</li>
          <li>Next.js & Tailwind CSS</li>
          <li>Blockchain & Web3 Integration</li>
          <li>Creative Design & Photography</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/gallery1.jpg.jpg" alt="Gallery 1" width={300} height={200} className="rounded shadow" />
          <Image src="/gallery2.jpg.jpg" alt="Gallery 2" width={300} height={200} className="rounded shadow" />
          <Image src="/gallery3.jpg.jpg" alt="Gallery 3" width={300} height={200} className="rounded shadow" />
          <Image src="/gallery4.jpg.jpg" alt="Gallery 4" width={300} height={200} className="rounded shadow" />
          <Image src="/gallery5.jpg.jpg" alt="Gallery 5" width={300} height={200} className="rounded shadow" />
          <Image src="/gallery6.jpg.jpg" alt="Gallery 6" width={300} height={200} className="rounded shadow" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p>A personal website built with Next.js and Tailwind to showcase my works.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Web3 Wallet Integration</h3>
            <p>A blockchain project that lets users connect their crypto wallets to interact with dApps.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>You can reach me via:</p>
        <ul className="list-disc ml-6">
          <li>Email: adelexy8510@gmail.com</li>
          <li>Twitter: @yourhandle</li>
          <li>LinkedIn: your-linkedin-url</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-10">
        &copy; 2025 Ogunniyi Anuoluwapo. All rights reserved.
      </footer>
    </main>
  )
}
