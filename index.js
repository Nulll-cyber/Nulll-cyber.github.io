import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Rushikesh</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20" id="hero">
        <h2 className="text-4xl font-bold mb-4">Hey, I'm Rushikesh 👋</h2>
        <p className="text-lg">Frontend Developer | Mobile App Developer | Tech Enthusiast</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-4 py-16" id="about">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700">
          I'm a passionate developer with experience in building mobile apps and responsive websites.
          I enjoy solving real-world problems through code and constantly learning new technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">Projects</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">MyApp</h4>
              <p>A cross-platform mobile app built using React Native.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
              <p>This personal portfolio you're viewing, built with Tailwind.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">WeatherApp</h4>
              <p>Live weather app using OpenWeatherMap API and React Native.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-16" id="contact">
        <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
        <p>Email me at <a href="mailto:Rushikesh86051.com" className="text-blue-600 underline">Rushikesh86051@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center">
        <p>© 2025 Rushikesh. All rights reserved.</p>
      </footer>

    </div>
  );
}
