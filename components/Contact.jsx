export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">Contact Me</h2>

        <p className="mt-4 text-gray-300">
          Have a project, internship, or opportunity in mind? Feel free to send me a message.
        </p>

        <form
          className="mt-8 space-y-6"
          action="https://formspree.io/f/mbgrdrnv"
          method="POST"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-transparent border border-gray-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full p-4 rounded-xl bg-transparent border border-gray-700 focus:border-orange-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-4 rounded-xl bg-transparent border border-gray-700 focus:border-orange-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}