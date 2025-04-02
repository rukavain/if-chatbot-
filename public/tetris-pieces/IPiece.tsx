import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

type IPieceProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.div>;

const IPiece = forwardRef<HTMLDivElement, IPieceProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={`jPiece ${className}`} {...props}>
        <div />
        <div />
      </motion.div>
    );
  }
);

export default IPiece;
