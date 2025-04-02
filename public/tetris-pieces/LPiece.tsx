import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";
type PieceProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.div>;

const LPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={`lPiece ${className}`} {...props}>
        <div />
        <div />
      </motion.div>
    );
  }
);

export default motion(LPiece);
