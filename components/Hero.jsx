export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-10">
        
        <div>
            <p className="text-orange-500 font-semibold">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mt-2">
                Abhay Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4">
                Aspiring Full-Stack Developer
            </h2>
            <p className="mt-6 text-gray-300 max-w-xl leading-8">
                I build responsive web applications using React, Next.js, JavaScript,
                and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                    View Projects
                </a>

                <a href="/resume.pdf" download className="px-6 py-3 border border-gray-500 rounded-lg hover:border-orange-500 hover:text-orange-400 transition">
                    Download Resume
                </a>
            </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/Abhay.png"
            alt="Abhay Kumar"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.35)]"
          />
        </div>

      </div>
    </section>
  );
}