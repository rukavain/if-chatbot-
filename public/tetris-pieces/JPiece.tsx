import { forwardRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

type JPieceProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof motion.div>;

const JPiece = forwardRef<HTMLDivElement, JPieceProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={`jPiece ${className}`} {...props}>
        <div />
        <div />
      </motion.div>
    );
  }
);

export default JPiece;
