"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";



export const HeroParallax = ({
  products,
  header,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  header?: React.ReactNode;
}) => {
  // Create pairs of products for 2-per-row layout
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, Math.min(i + 2, products.length)));
  }
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-[200vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header || <Header />}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="container mx-auto px-4"
      >
        {rows.map((row, rowIndex) => (
          <motion.div 
            key={rowIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            style={{
              x: rowIndex % 2 === 0 ? translateX : translateXReverse,
            }}
          >
            {row.map((product) => (
              <ProductCard
                product={product}
                key={product.title}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      key={product.title}
      className="group/product relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-lg"
    >
      <a
        href={product.link}
        className="block w-full h-full"
      >
        <img
          src={product.thumbnail}
          className="object-cover w-full h-full transition-transform duration-300 group-hover/product:scale-110"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover/product:translate-y-0 transition-transform duration-300">
        <h2 className="text-white text-xl font-bold mb-2">
          {product.title}
        </h2>
        <p className="text-white/80 text-sm">
          View Project Details →
        </p>
      </div>
    </motion.div>
  );
};
