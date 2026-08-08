export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Abhay Kumar. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Abhay82K"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhaykr21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-orange-500 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}