//import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="App">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: "20px" }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>

        {isOpen && (
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              dolore sit quam dicta? Cupiditate, ut labore, deleniti quo nemo
              qui delectus cumque voluptate voluptatibus ullam exercitationem
              asperiores, vero laudantium quasi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              maxime itaque, pariatur nostrum natus sequi molestiae hic saepe
              laboriosam odio mollitia quisquam aspernatur, eos omnis
              perspiciatis. Molestias totam voluptatibus earum.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
