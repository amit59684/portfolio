import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCard3DProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full max-w-md mx-auto cursor-pointer"
    >
      <motion.div
        style={{
          transform: isHovered ? "translateZ(75px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full w-full rounded-xl bg-gradient-to-br from-bg-card to-bg-secondary border border-border-color shadow-2xl overflow-hidden"
      >
        {/* Image */}
        <div className="h-48 overflow-hidden rounded-t-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <motion.h3
            style={{
              transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
            }}
            className="text-xl font-bold text-text-primary"
          >
            {title}
          </motion.h3>

          <motion.p
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
            }}
            className="text-text-secondary text-sm"
          >
            {description}
          </motion.p>

          <motion.div
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            }}
            className="flex flex-wrap gap-2"
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          style={{
            transform: isHovered ? "translateZ(60px)" : "translateZ(0px)",
          }}
          className="absolute bottom-4 left-4 right-4 flex gap-2"
        >
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-center text-sm font-medium"
            >
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg text-center text-sm font-medium"
            >
              GitHub
            </motion.a>
          )}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard3D; 