import { motion } from "framer-motion";
import { CERTIFICATES } from "../constants";

const Certificate = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Certificates
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {CERTIFICATES.map((certificate, index) => (
          <motion.a
            key={index}
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/4 flex-shrink-0 transition-transform transform hover:scale-105"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-900">
              <img
                src={certificate.image}
                className="mb-4 rounded w-full h-auto"
                alt={certificate.title}
              />
              <h6 className="mb-2 font-semibold text-white">{certificate.title}</h6>
              <p className="text-neutral-400">{certificate.institution}</p>
              <p className="text-neutral-400">{certificate.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
