export default function Projects() {
    return (
        <section id="projects" className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold">Projects</h2>
                <p className="mt-4 text-gray-300">A few projects that I've built while learning web development.</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <div className='mb-4 rounded-xl overflow-hidden border border-gray-700 bg-[#111827]'>
                            <img
                                src='/krishigyan.png'
                                alt='KrishiGyaan – AI-powered farming assistant'
                                className='w-full h-auto object-contain'
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-2xl font-bold">KrishiGyaan</h3>

                        <p className="mt-4 text-gray-300 leading-7">An AI-powered farming assistant that helps farmers with crop guidance,
                            disease detection, weather-based recommendations, and multilingual support.
                            Built as a team project during the HyperVerge Academy Launchpad Hackathon,
                            where our team secured 1st place.
                        </p>

                        <p className="mt-4 text-sm text-orange-400">Tech: React • Next.js • JavaScript • Node.js • Express.js • OpenWeather API</p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com/Abhay82K/KrishiGyaan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                View Code
                            </a>

                            <a
                                href="https://krishi-gyaan.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                Live Preview
                            </a>
                        </div>
                    </div>

                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <div className='mb-4 rounded-xl overflow-hidden border border-gray-700 bg-[#111827]'>
                            <img
                                src='/Trivia Battle Game.png'
                                alt='Trivia Battle Game – two-player browser quiz'
                                className='w-full h-auto object-contain'
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-2xl font-bold">Trivia Battle Game</h3>

                        <p className="mt-4 text-gray-300 leading-7">A browser-based trivia game where two players compete across multiple difficulty levels with real-time scoring and API-based questions.</p>

                        <p className="mt-4 text-sm text-orange-400">Tech: HTML • CSS • JavaScript • Trivia API</p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com/Abhay82K/Trivia-Battle-Game"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                View Code
                            </a>

                            <a
                                href="https://abhay82k.github.io/Trivia-Battle-Game/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                Live Preview
                            </a>
                        </div>
                    </div>

                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <div className='mb-4 rounded-xl overflow-hidden border border-gray-700 bg-[#111827]'>
                            <img
                                src='/tic tac toe.png'
                                alt='Tic-Tac-Toe – responsive two-player game'
                                className='w-full h-auto object-contain'
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-2xl font-bold">Tic-Tac-Toe</h3>

                        <p className="mt-4 text-gray-300 leading-7">A responsive Tic-Tac-Toe game with turn-based gameplay, winner detection, and a clean user interface.</p>

                        <p className="mt-4 text-sm text-orange-400">Tech: HTML • CSS • JavaScript</p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com/Abhay82K/Tic-Tac-Toe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                View Code
                            </a>

                            <a
                                href="https://abhay82k.github.io/Tic-Tac-Toe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                Live Preview
                            </a>
                        </div>
                    </div>

                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <div className='mb-4 rounded-xl overflow-hidden border border-gray-700 bg-[#111827]'>
                            {/* TODO: Replace with an actual screenshot of the Task Management System */}
                            <img
                                src='/Task-Management-System.png'
                                alt='Task Management System – Flask and MySQL CRUD app'
                                className='w-full h-auto object-contain'
                                loading="lazy"
                            />
                        </div>

                        <h3 className="text-2xl font-bold">Task Management System</h3>

                        <p className="mt-4 text-gray-300 leading-7">A task management web app built with Flask and MySQL that lets users create, read, update, and delete daily tasks through a simple and responsive interface.</p>

                        <p className="mt-4 text-sm text-orange-400">Tech: Python • Flask • MySQL • HTML • CSS</p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com/Abhay82K/Task-Management-System"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                View Code
                            </a>

                            <a
                                href="https://task-management-system-production-a179.up.railway.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                            >
                                Live Preview
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}