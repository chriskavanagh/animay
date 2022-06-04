import Image from "next/image";
import { motion } from "framer-motion";
import pics from "../components/images";
import style from "../styles/Slider.module.css";
import { useRef, useEffect, useState } from "react";

function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  }, []);
  return (
    <div className={style.slider}>
      <motion.div ref={carousel} className={style.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
          className={style.inner}
        >
          {pics.map((pic, index) => {
            return (
              <motion.div key={index} className={style.item}>
                <Image
                  src={pic}
                  alt="pic"
                  layout="fill"
                  sizes="40vw"
                  height={700}
                  className={style.pic}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
