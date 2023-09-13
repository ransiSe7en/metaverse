'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText 
        title="| People on the world"
        textStyles="text-center"
      />
      <TitleText 
        title={
        <>
          Track friends around you and invite them to play together in the same world
        </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-72 left-[18%] w-[200px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          
          <img
            src="/mask-group-01.png"
            alt="people"
            className="w-full h-full"
          />
          
          <div className="absolute bottom-10 left-[8%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-01.png"
              alt="Profile 1"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-10 left-[18%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-02.png"
              alt="Profile 2"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-10 left-[28%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-03.png"
              alt="Profile 3"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-11 left-[42%] text-xs font-medium text-white">
            <p>+264 has joined</p>
          </div>

          <div className="absolute bottom-3 left-[10%] text-lg font-semibold text-white">
            <p>The Upside Down</p>
          </div>
        </div>


        <div className="absolute top-20 right-[19%] w-[200px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680]">
          
          <img
            src="/mask-group-02.png"
            alt="people"
            className="w-full h-full"
          />
          
          <div className="absolute bottom-10 left-[8%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-01.png"
              alt="Profile 1"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-10 left-[18%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-02.png"
              alt="Profile 2"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-10 left-[28%] w-[28px] h-[28px] rounded-full bg-white border-2 border-[#5d6680]">
            <img
              src="pfp-03.png"
              alt="Profile 3"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="absolute bottom-11 left-[42%] text-xs font-medium text-white">
            <p>+182 has joined</p>
          </div>

          <div className="absolute bottom-3 left-[10%] text-lg font-semibold text-white">
            <p>Hawkins Labs</p>
          </div>
        </div>




      </motion.div>

    </motion.div>
  </section>
);

export default World;
