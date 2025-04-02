import { useAnimate, AnimationSequence } from "framer-motion";
import { useEffect } from "react";

import {
  IPiece,
  JPiece,
  LPiece,
  OPiece,
  SPiece,
  TPiece,
  ZPiece,
} from "../../public/tetris-pieces";
import "./TetrisLoader.css";
import { read } from "fs";

export default function TetrisLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const sequence = [
        [".jPiece-1", { opacity: 1 }, { duration: 0.5 }],
        [".jPiece-1", { x: (1 + 6) * 15 }, { duration: 0.5 }],
        [".jPiece-1", { rotate: 0 }, { duration: 0.5 }],
        [".jPiece-1", { y: (2 + 7) * 15 }, { duration: 0.5 }],

        [".iPiece-1", { opacity: 1 }, { duration: 0.5 }],
        [".iPiece-1", { x: (4 + 0) * 15 }, { duration: 0.5 }],
        [".iPiece-1", { y: (0 + 11) * 15 }, { duration: 0.5 }],

        [".sPiece-1", { opacity: 1 }, { duration: 0.5 }],
        [".sPiece-1", { x: (0 + 5) * 15 }, { duration: 0.5 }],
        [".sPiece-1", { y: (0 + 10) * 15 }, { duration: 0.5 }],
      ] as unknown as AnimationSequence; // 👈 Explicitly cast to AnimationSequence

      await animate(sequence);
      setTimeout(animateLoader, 1000);
    };

    animateLoader();
  }, [animate]);

  return (
    <div ref={scope}>
      <div className="grid">
        <JPiece
          className="piece jPiece-1"
          initial={{
            opacity: 0,
            y: (2 + 2) * 15,
            x: (1 + 3) * 15,
            rotate: 90,
            transformOrigin: "top right",
          }}
        />
        <IPiece
          className="piece iPiece-1"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (4 + 3) * 15,
            rotate: 90,
            transformOrigin: "top left",
          }}
        />
        <SPiece
          className="piece sPiece-1"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (0 + 3) * 15,
          }}
        />
        <OPiece
          className="piece oPiece"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (0 + 4) * 15,
          }}
        />
        <TPiece
          className="piece tPiece-1"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (2 + 4) * 15,
            rotate: 90,
            transformOrigin: "top left",
          }}
        />
        <ZPiece
          className="piece zPiece"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (0 + 4) * 15,
          }}
        />
        <LPiece
          className="piece lPiece"
          initial={{
            opacity: 0,
            y: (-1 + 2) * 15,
            x: (3 + 3) * 15,
            rotate: -90,
            transformOrigin: "bottom left",
          }}
        />
        <TPiece
          className="piece tPiece-2"
          initial={{
            opacity: 0,
            y: (0 + 2) * 15,
            x: (0 + 3) * 15,
          }}
        />
        <JPiece
          className="piece jPiece-2"
          initial={{
            opacity: 0,
            y: (-1 + 2) * 15,
            x: (-2 + 3) * 15,
            rotate: 90,
            transformOrigin: "bottom right",
          }}
        />
        <IPiece
          className="piece iPiece-2"
          initial={{
            opacity: 0,
            y: (1 + 2) * 15,
            x: (3 + 3) * 15,
            rotate: 90,
            transformOrigin: "top right",
          }}
        />
      </div>
      <div className="base" />
    </div>
  );
}
