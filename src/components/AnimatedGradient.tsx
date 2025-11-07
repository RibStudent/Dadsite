import { motion } from 'framer-motion';

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full"
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        animate={{
          x: [0, -100, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-l from-accent/20 to-primary/20 blur-3xl" />
      </motion.div>
    </div>
  );
}
