import Image from 'next/image';
import style from '../styles/components/Model.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

interface ModelProps {
  model: string;
  img_url: string;
  text?: string;
  handleScroll?: VoidFunction;
}

const Model = ({ model, img_url, text, handleScroll }: ModelProps) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      });
    } else {
      animation.start({
        x: 0,
        y: 0,
        opacity: 0,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      });
    }
  }, [inView, animation]);
  return (
    <section className={style.model_container}>
      <figure className={style.model_img}>
        <Image
          src={`/image/${img_url}.jpg`}
          alt={model}
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
      </figure>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animation}
        className={style.model_text}
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: 'tween', delay: 1, duration: 0.5 },
          }}
        >
          {model}
        </motion.h1>
        {text ? (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
          >
            {text}
          </motion.p>
        ) : model === 'Accessories' ? (
          ''
        ) : (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
          >
            Order Online for <a href="">Touchless Delivery</a>
          </motion.p>
        )}
      </motion.div>
      {model.startsWith('Model') ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation}
          className={style.btns_container}
          ref={ref}
        >
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
            className={style.custom_btn}
          >
            CUSTOM ORDER
          </motion.button>
          <motion.button
            initial={{ x: 30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
            className={style.existing_btn}
          >
            EXISITING INVENTORY
          </motion.button>
        </motion.div>
      ) : model === 'Accessories' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation}
          className={style.btns_container}
          ref={ref}
        >
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
            className={style.accessories_btn}
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation}
          className={style.btns_container}
          ref={ref}
        >
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
            className={style.custom_btn}
          >
            ORDER NOW
          </motion.button>
          <motion.button
            initial={{ x: 30, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: 'tween', delay: 1.5, duration: 0.5 },
            }}
            className={style.existing_btn}
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      )}
      {model === 'Model 3' && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: 'tween', delay: 2, duration: 0.5 },
          }}
          className={style.chevron}
          onClick={handleScroll}
        >
          <HiOutlineChevronDown className={style.down_chevron} />
        </motion.div>
      )}
    </section>
  );
};

export default Model;
