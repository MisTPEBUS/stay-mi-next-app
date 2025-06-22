// components/MotionImage.tsx
import { motion, HTMLMotionProps } from "framer-motion";
import Image, { ImageProps } from "next/image";

type MotionImageProps = Omit<ImageProps, "className"> & {
  wrapperClassName?: string;
  imgClassName?: string;
} & HTMLMotionProps<"div">;

export const MotionImage = ({
  src,
  alt,
  sizes,
  priority = false,
  wrapperClassName = "",
  imgClassName = "",
  initial = { opacity: 0, scale: 0.9 },
  animate = { opacity: 1, scale: 1 },
  whileHover = { scale: 1.02 },
  transition = { type: "spring", stiffness: 300 },
  ...motionProps
}: MotionImageProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      className={`relative h-full w-full overflow-hidden ${wrapperClassName}`}
      {...motionProps}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};
