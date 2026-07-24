import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    title: "Email",
    value: "sohanachmm@gmail.com",
    icon: <FaEnvelope className="text-3xl text-blue-400" />,
  },
  {
    title: "Location",
    value: "Nepal",
    icon: <FaMapMarkerAlt className="text-3xl text-green-400" />,
  },
  {
    title: "GitHub",
    value: "github.com/SohanAchhami54",
    icon: <FaGithub className="text-3xl text-white" />,
  },
];

const Contact = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Get In Touch
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
          I'm always interested in new opportunities, collaborations,
          and learning from other developers. Feel free to contact me
          through any of the methods below.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {contactInfo.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-gray-700 bg-gray-800/40 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="flex justify-center">
              {item.icon}
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              {item.title}
            </h2>

            <p className="mt-3 break-all text-gray-400">
              {item.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;