"use client";

import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export default function HomePage() {
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  // Adjusted scroll-based Y-axis movement to bring mountains and brush in sooner
  const mountainsY = useTransform(scrollYProgress, [0, 0.1], ['100vh', '0vh']);
  const brushY = useTransform(scrollYProgress, [0.1, 0.25], ['100vh', '0vh']);
  const blackBgY = useTransform(scrollYProgress, [0.5, 1], ['100vh', '0vh']);
  
  // Firefly opacity fade-in as black background appears
  const fireflyOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  // Variants for scroll-based movement
  const sectionVariants: Variants = {
    hidden: { y: '100vh' },  // Start offscreen
    visible: { y: '0vh', transition: { duration: 0.5, ease: 'easeOut' } },  // Scroll into view
  };

  return (
    <div className="relative h-[400vh] overflow-hidden">
      {/* Fixed Sunset Background */}
      <div className="fixed top-0 w-full h-screen bg-no-repeat bg-cover bg-[url('/images/sunset-bg.png')] bg-center z-0"></div>

      {/* Blank Section */}
      <section className="relative w-full h-[100vh] z-10 flex items-center justify-center">
        <h1 className="text-4xl text-white">Scroll Down to Explore</h1>
      </section>

      {/* Mountains Section */}
      <motion.div
        className="fixed bottom-0 w-full h-[60vh] z-20"
        style={{ y: mountainsY }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <img src="/images/mountain-range.png" alt="Mountains" className="w-full h-full object-cover" />
      </motion.div>

      {/* Brush Section */}
      <motion.div
        className="fixed bottom-0 w-full h-[60vh] z-30"
        style={{ y: brushY }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <img src="/images/brush.png" alt="Brush" className="w-full h-full object-cover" />
      </motion.div>

      {/* Black Background Section with Fireflies */}
      <motion.div
        className="fixed bottom-0 w-full h-screen z-40 bg-black"
        style={{ y: blackBgY }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Firefly fade-in */}
        <motion.div
          className="relative w-full h-full"
          style={{ opacity: fireflyOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full firefly" />
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full firefly" />
          <div className="absolute top-40 left-40 w-2 h-2 bg-yellow-400 rounded-full firefly" />
        </motion.div>
      </motion.div>
    </div>
  );
}