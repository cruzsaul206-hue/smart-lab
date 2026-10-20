import React from 'react';

export const HoloTarget: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '440px', margin: '0 auto', aspectRatio: '1 / 1' }}>
      <svg
        viewBox="0 0 400 400"
        style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 20px rgba(138, 43, 255, 0.4))' }}
        aria-hidden="true"
      >
        {/* Outer boundary ring */}
        <circle cx="200" cy="200" r="185" fill="none" stroke="#2E1C4A" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="170" fill="rgba(16, 8, 23, 0.6)" stroke="#8A2BFF" strokeWidth="2" strokeOpacity="0.7" />

        {/* Rotating outer compass ticks */}
        <g stroke="#00F5FF" strokeWidth="1.5" opacity="0.6">
          <line x1="200" y1="12" x2="200" y2="28" />
          <line x1="200" y1="372" x2="200" y2="388" />
          <line x1="12" y1="200" x2="28" y2="200" />
          <line x1="372" y1="200" x2="388" y2="200" />
          
          <line x1="67" y1="67" x2="79" y2="79" />
          <line x1="333" y1="67" x2="321" y2="79" />
          <line x1="67" y1="333" x2="79" y2="321" />
          <line x1="333" y1="333" x2="321" y2="321" />
        </g>

        {/* Mid reticle rings */}
        <circle cx="200" cy="200" r="125" fill="none" stroke="#FF00E5" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.8" />
        <circle cx="200" cy="200" r="80" fill="rgba(23, 16, 34, 0.7)" stroke="#00F5FF" strokeWidth="2" opacity="0.85" />
        <circle cx="200" cy="200" r="40" fill="none" stroke="#8A2BFF" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Center Target Core */}
        <circle cx="200" cy="200" r="14" fill="#00F5FF" opacity="0.9" style={{ filter: 'drop-shadow(0 0 10px #00F5FF)' }} />
        <circle cx="200" cy="200" r="6" fill="#050508" />

        {/* Holographic targeting lines */}
        <line x1="40" y1="200" x2="160" y2="200" stroke="#00F5FF" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <line x1="240" y1="200" x2="360" y2="200" stroke="#00F5FF" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <line x1="200" y1="40" x2="200" y2="160" stroke="#FF00E5" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <line x1="200" y1="240" x2="200" y2="360" stroke="#FF00E5" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />

        {/* Hexagonal cyber overlay */}
        <polygon
          points="200,85 295,140 295,260 200,315 105,260 105,140"
          fill="none"
          stroke="#8A2BFF"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* HUD typography */}
        <text x="200" y="112" fill="#00F5FF" fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="3">
          TARGET LOCK // S-M-A-R-T
        </text>
        <text x="200" y="295" fill="#FF00E5" fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
          COORDINATES: [SPECIFIC//MEASURABLE]
        </text>
        <text x="75" y="204" fill="#B7B0C8" fontSize="8" fontFamily="monospace" textAnchor="middle">
          SYS.99
        </text>
        <text x="325" y="204" fill="#B7B0C8" fontSize="8" fontFamily="monospace" textAnchor="middle">
          ACC.100%
        </text>
      </svg>
    </div>
  );
};
