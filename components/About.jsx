export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="mt-6 text-lg text-gray-300 leading-8">
          I'm Abhay Kumar, I have completed my Diploma in Computer Science and Engineering
          with a strong interest in web development. I enjoy building responsive and
          user-friendly applications using React, Next.js, JavaScript, and modern web
          technologies. I'm continuously improving my problem-solving skills and working
          on real-world projects to become a professional full-stack developer.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-orange-500 hover:-translate-y-1 transition duration-300">
            Diploma Student
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-orange-500 hover:-translate-y-1 transition duration-300">
            Hackathon Winner
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-orange-500 hover:-translate-y-1 transition duration-300">
            100+ JavaScript Challenges Solved
          </span>

          <span className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:border-orange-500 hover:-translate-y-1 transition duration-300">
            200+ Python Problems Solved
          </span>
        </div>
      </div>
    </section>
  );
}