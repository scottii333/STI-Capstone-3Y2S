import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import {
  useGLTF,
  ScrollControls,
  useAnimations,
  useScroll,
} from "@react-three/drei";

// ✅ Preload the model for better performance
useGLTF.preload("/Robot.glb");

const FirstModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/Robot.glb");
  const { actions } = useAnimations(animations, group);
  const scroll = useScroll();
  const [isAnimating, setIsAnimating] = useState(false);

  useFrame(() => {
    const scrollProgress = scroll.offset; // Scroll offset from 0 to 1

    // ✅ Adjust animation based on scroll
    if (scrollProgress > 0.1) {
      if (!isAnimating) {
        actions?.Idle?.play(); // ✅ Replace "Idle" with your actual animation name
        actions?.Idle?.setEffectiveTimeScale(scrollProgress * 2); // ✅ Speed increases as user scrolls
        setIsAnimating(true);
      }
    } else {
      if (isAnimating) {
        actions?.Idle?.stop();
        setIsAnimating(false);
      }
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const Main3DScene = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Canvas gl={{ antialias: true }}>
        {/* ✅ Lighting for better scene visuals */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 10]} intensity={1.5} />

        <Suspense fallback={null}>
          {/* ✅ ScrollControls manage the animation */}
          <ScrollControls pages={2} damping={0.2}>
            <FirstModel />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Main3DScene;
