import { motion } from "framer-motion";

export default function BackgroundArt() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen max-h-screen overflow-hidden">
      <svg className="h-full w-full">
        <motion.circle
          animate={{
            cx: ["100%", "100%", "95%", "95%", "100%", "100%"],
            cy: ["0%", "0%", "15%", "15%", "0%", "0%"],
            transition: {
              duration: 12,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
            },
          }}
          r={350}
          fill="darkgray"
        ></motion.circle>
        <motion.circle
          animate={{
            cx: ["10%", "10%", "25%", "25%", "10%", "10%"],
            cy: ["100%", "100%", "95%", "95%", "100%", "100%"],
            transition: {
              duration: 12,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
            },
          }}
          r={350}
          fill="rgba(215,215,215,0.8)"
        ></motion.circle>
        <motion.circle
          animate={{
            cx: ["-10%", "-10%", "5%", "5%", "-10%", "-10%"],
            cy: ["0%", "0%", "5%", "5%", "0%", "0%"],
            transition: {
              duration: 12,
              repeat: Infinity,
              type: "keyframes",
              ease: "easeInOut",
            },
          }}
          r={250}
          fill="darkgray"
        ></motion.circle>
      </svg>
    </div>
  );
}
