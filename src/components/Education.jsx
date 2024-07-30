import { motion } from 'framer-motion';

const EDUCATION = [
  {
    title: "Master of Science, Management of Information Systems",
    institution: "University Of Illinois Springfield",
    location: "Springfield, IL, USA",
    dates: "May 2023 - Dec 2024",
    gpa: "3.96/4.0",
  },
  {
    title: "Bachelor of Technology, Computer Science and Engineering",
    institution: "PES University",
    location: "Bengaluru, Karnataka, India",
    dates: "Aug 2019 - May 2023",
    gpa: "3.14/4.0",
  }
];

const educationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const EducationSection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h1>
      {EDUCATION.map((edu, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={educationVariants}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{edu.title}</h3>
            <span className="text-gray-400">{edu.dates}</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">{edu.institution} - {edu.location}</p>
            <span className="text-gray-400">GPA: {edu.gpa}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationSection;
