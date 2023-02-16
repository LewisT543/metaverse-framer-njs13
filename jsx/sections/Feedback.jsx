'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'

import styles from '../../styles';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import FeedbackPersonInfo from "../fragments/FeedbackPersonInfo";

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <FeedbackPersonInfo name={'Samantha'} role={'Founder Metaverus'} quote={"With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything"} />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src="/planet-09.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          fill={true}
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
            width={155}
            height={155}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;