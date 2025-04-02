import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";
type PieceProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.div>;
const ZPiece = forwardRef<HTMLDivElement, PieceProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={`zPiece ${className}`} {...props}>
        <div />
        <div />
      </motion.div>
    );
  }
);

export default motion(ZPiece);
