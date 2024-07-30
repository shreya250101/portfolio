{/*import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2> 
      <div className="text-center tracking-tighter ">
        <p className="my-3">{CONTACT.address}</p>
        <p className="my-3">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
  {CONTACT.email}
</a>
        </div>     
    </div>
  )
}

export default Contact
*/}
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="my-3"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-3"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
