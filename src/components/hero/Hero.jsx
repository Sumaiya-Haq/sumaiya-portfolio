import React from 'react';
import SceneContainer from '../../three/SceneContainer';
import VillageScene from '../../three/VillageScene';
import HeroUI from './HeroUI';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#050816]">
      {/* 3D WebGL Canvas Layer */}
      <SceneContainer cameraPosition={[0, 8, 22]}>
        <VillageScene />
      </SceneContainer>

      {/* Interactive Overlay UI Layer */}
      <HeroUI />
    </section>
  );
};

export default Hero;
