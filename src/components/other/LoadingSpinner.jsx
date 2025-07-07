import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        border: "5px solid #8884d8",
        borderTop: "5px solid transparent",
        borderRadius: "50%",
        margin: "auto",
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  );
};

export default LoadingSpinner;
