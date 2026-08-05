import React, { useState } from 'react';
import { FiVolume2, FiVolumeX, FiSun, FiMoon, FiRotateCcw, FiCompass } from 'react-icons/fi';
import { soundFx } from '../../utils/audioEffects';

export const GamingControls = ({ onSelectBuilding, onResetCamera, isNightMode, onToggleNightMode }) => {
  const [muted, setMuted] = useState(soundFx.muted);

  const handleMuteToggle = () => {
    const isMuted = soundFx.toggleMute();
    setMuted(isMuted);
  };

  const buildingsList = [
    { id: 'main-house', name: 'About', icon: '🏠' },
    { id: 'tea-stall', name: 'Skills', icon: '☕' },
    { id: 'academy', name: 'Education', icon: '🎓' },
    { id: 'workshop', name: 'Projects', icon: '🚀' },
    { id: 'guild', name: 'Experience', icon: '⚔️' },
    { id: 'post-box', name: 'Contact', icon: '📮' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-6">
      {/* Top Gaming Controls Bar */}
      <div className="flex items-center justify-between w-full pointer-events-auto">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-cyan-500/30 shadow-lg text-xs font-mono text-cyan-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>🎮 3D ISLAND WORLD</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute Audio */}
          <button
            onClick={handleMuteToggle}
            className="p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-all shadow-lg hover:scale-105"
            title={muted ? "Unmute Audio" : "Mute Audio"}
          >
            {muted ? <FiVolumeX className="w-4 h-4 text-rose-400" /> : <FiVolume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Day / Night Toggle */}
          <button
            onClick={onToggleNightMode}
            className="p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-all shadow-lg hover:scale-105"
            title="Toggle Day/Night View"
          >
            {isNightMode ? <FiMoon className="w-4 h-4 text-indigo-400" /> : <FiSun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Reset Camera */}
          <button
            onClick={onResetCamera}
            className="p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition-all shadow-lg hover:scale-105 flex items-center gap-1 text-xs"
            title="Reset Camera View"
          >
            <FiRotateCcw className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Bottom Fast-Travel Building Selector */}
      <div className="pointer-events-auto self-center max-w-full overflow-x-auto py-2 px-1">
        <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-lg p-2 rounded-2xl border border-white/15 shadow-2xl">
          <span className="text-xs text-slate-400 px-2 font-mono flex items-center gap-1 hidden sm:flex">
            <FiCompass className="text-cyan-400 animate-spin" /> Locations:
          </span>
          {buildingsList.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelectBuilding(b.id)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 hover:border-cyan-400 border border-white/10 text-white text-xs flex items-center gap-1.5 transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>{b.icon}</span>
              <span className="font-semibold">{b.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingControls;
