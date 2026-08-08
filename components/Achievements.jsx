export default function Achievements() {
    return (
        <section id="achievements" className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold">Achievements</h2>

                <p className="mt-4 text-gray-300">A few milestones that reflect my learning journey and hands-on experience.</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <h3 className="text-2xl font-bold">1st Place – HyperVerge Academy Launchpad Hackathon 2026</h3>
                        <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full">
                            Hackathon Winner
                        </span>
                        <p className="mt-4 text-gray-300 leading-7">
                            Worked on the AI-powered farming platform <strong>KrishiGyaan</strong> and
                            contributed to testing, debugging, and project coordination. Our
                            team secured <strong>1st place</strong> in the hackathon.
                        </p>
                    </div>

                    <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition duration-300">
                        <h3 className="text-2xl font-bold">200+ Python Problems Solved</h3>

                        <p className="mt-4 text-gray-300 leading-7">
                            Practiced Python programming and problem-solving consistently,
                            strengthening my understanding of core programming concepts and
                            logical thinking.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}