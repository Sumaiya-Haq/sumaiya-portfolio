import React, { useState } from 'react';
import SceneContainer from '../../three/SceneContainer';
import HexIslandScene from '../../three/HexIslandScene';
import HeroUI from './HeroUI';
import GamingControls from '../ui/GamingControls';
import GamingHUDModal from '../ui/GamingHUDModal';
import InfoEditorModal from '../ui/InfoEditorModal';

export const Hero = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [targetCameraPos, setTargetCameraPos] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isInfoEditorOpen, setIsInfoEditorOpen] = useState(false);

  const handleSelectBuilding = (buildingId, pos) => {
    setActiveCategory(buildingId);
    if (pos) {
      setTargetCameraPos(pos);
    }
  };

  const handleResetCamera = () => {
    setActiveCategory(null);
    setTargetCameraPos(null);
  };

  const handleToggleNightMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-[#589dc9]">
      {/* 3D Floating Hexagon Island Canvas Layer */}
      <SceneContainer cameraPosition={[18, 18, 22]}>
        <HexIslandScene
          onSelectBuilding={handleSelectBuilding}
          targetCameraPos={targetCameraPos}
        />
      </SceneContainer>

      {/* Floating On-Screen Gaming Controls Overlay */}
      <GamingControls
        onSelectBuilding={handleSelectBuilding}
        onResetCamera={handleResetCamera}
        isNightMode={isNightMode}
        onToggleNightMode={handleToggleNightMode}
      />

      {/* Hero UI Headline Overlay & Actions */}
      <HeroUI onOpenInfoEditor={() => setIsInfoEditorOpen(true)} />

      {/* Interactive Gaming HUD Modal when building is clicked */}
      <GamingHUDModal
        activeCategory={activeCategory}
        onClose={() => setActiveCategory(null)}
      />

      {/* In-Browser Live Information Editor Modal */}
      <InfoEditorModal
        isOpen={isInfoEditorOpen}
        onClose={() => setIsInfoEditorOpen(false)}
      />
    </section>
  );
};

export default Hero;
