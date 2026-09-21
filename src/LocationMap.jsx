import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const LAHORE_DOSSIER = {
  id: 'lahore',
  name: 'LAHORE',
  year: '1982',
  subtitle: 'SECURITY BUREAU',
  quote:
    'A key setting in the story surrounding Mrityunjay and the political tensions of the alternate 1982.',
  description:
    'In the alternate 1982 timeline of The Missing Nation, Lahore serves as the central administrative and intelligence nerve center. Within its perimeter lies the high-security Lahore Security Bureau—a clandestine facility where state secrets, intelligence archives, and critical interrogations converge.',
  character: {
    name: 'MRITYUNJAY',
    role: 'Lead Intelligence Operative',
    note: 'Subject of the high-security Lahore interrogation dossier.',
  },
  event: {
    title: 'SECURITY BUREAU INTERROGATION',
    subtitle: 'Lahore Security Bureau • 1982',
    description: 'Direct interactive scene access to the 360° interrogation experience.',
    experienceType: 'visualtexts',
  },
  // Story Node Coordinates in Atlas Canvas (1100 x 700)
  nodeX: 550,
  nodeY: 370,
};

const NARRATIVE_SUB_NODES = [
  {
    id: 'mrityunjay_node',
    label: 'MRITYUNJAY',
    sublabel: 'Connected Character',
    type: 'character',
    x: 330,
    y: 250,
    icon: '🕵️‍♂️',
  },
  {
    id: 'bureau_node',
    label: 'SECURITY BUREAU',
    sublabel: 'Intelligence Facility',
    type: 'facility',
    x: 770,
    y: 250,
    icon: '🏛️',
  },
  {
    id: 'moment_node',
    label: 'INTERROGATION ROOM',
    sublabel: '1982 Key Event',
    type: 'event',
    x: 550,
    y: 550,
    icon: '✦',
  },
];

export function LocationMap({ onBack, onNavigateToExperience }) {
  const [selectedNode, setSelectedNode] = useState(LAHORE_DOSSIER);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Subtle Pan / Zoom
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const atlasContainerRef = useRef(null);

  const handleSelectNode = (node) => {
    setSelectedNode(LAHORE_DOSSIER);
  };

  const handleResetAtlas = () => {
    setSelectedNode(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Subtle Drag to Pan
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Subtle Scroll Wheel Zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.08 : 0.92;
    setZoom((prev) => Math.min(Math.max(prev * factor, 0.85), 2.2));
  };

  return (
    <div className="relative w-full h-[calc(100vh-140px)] min-h-[660px] bg-[#120e0b] rounded-2xl border border-[#d4a359]/30 overflow-hidden select-none flex flex-col font-sans shadow-2xl">
      
      {/* ARCHIVAL HEADER */}
      <div className="relative z-30 flex items-center justify-between px-8 py-4 bg-[#18120d]/95 backdrop-blur-md border-b border-[#d4a359]/25">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-cinzel font-bold text-[#f4ead5] bg-[#2b1e17]/90 border border-[#d4a359]/40 hover:bg-[#d4a359]/20 hover:border-[#d4a359] transition-all shadow-lg cursor-pointer group"
        >
          <span className="text-[#d4a359] group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Experiences</span>
        </button>

        <div className="text-center">
          <div className="inline-block px-2.5 py-0.5 rounded bg-[#d4a359]/15 border border-[#d4a359]/30 text-[9px] font-mono text-[#d4a359] uppercase tracking-widest mb-0.5">
            CLASSIFIED STORY RECORD
          </div>
          <h2 className="font-cinzel text-xl md:text-2xl font-extrabold tracking-widest text-[#f4ead5] glow-gold">
            THE STORY ATLAS
          </h2>
          <p className="text-[11px] text-[#d4a359]/90 font-serif-vintage italic tracking-wide">
            THE MISSING NATION • 1982
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <span className="text-[10px] font-mono text-[#d4a359]/80 uppercase tracking-widest border-b border-[#d4a359]/30 pb-0.5">
            ARCHIVE 08 • 1982
          </span>
          <span className="text-[9px] font-mono text-[#f4ead5]/50 mt-0.5">
            REF: 1982-LHR-DOSSIER
          </span>
        </div>
      </div>

      {/* STORY ATLAS VISUAL CANVAS */}
      <div
        ref={atlasContainerRef}
        className="relative flex-1 w-full h-full overflow-hidden bg-[#e6d7bc] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {/* PARCHMENT VIGNETTE & SUBTLE TEXTURE OVERLAY */}
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_90px_rgba(43,30,23,0.55)] border border-[#b8860b]/20" />

        {/* FAINT ARCHIVAL STAMPS & WATERMARKS */}
        <div className="absolute top-6 left-8 pointer-events-none z-10 opacity-30 flex flex-col font-mono text-[10px] text-[#3d2b1f] tracking-widest uppercase">
          <span>CLASSIFIED STORY RECORD</span>
          <span>1982 ALTERNATE TIMELINE</span>
          <span>LOCATION NETWORK DIAGRAM</span>
        </div>

        <div className="absolute bottom-6 left-8 pointer-events-none z-10 opacity-25 font-cinzel text-xs text-[#3d2b1f] font-bold tracking-widest uppercase">
          THE MISSING NATION • STORY ATLAS
        </div>

        {/* SUBTLE INTEGRATED RESET / ZOOM FOOTER */}
        <div className="absolute bottom-6 right-8 z-20 flex items-center space-x-3 pointer-events-auto">
          <button
            onClick={handleResetAtlas}
            className="px-3.5 py-1.5 rounded-lg bg-[#2b1e17]/85 text-[#d4a359] border border-[#d4a359]/40 text-[10px] font-cinzel font-bold hover:bg-[#d4a359]/20 hover:text-[#f4ead5] transition-all shadow-lg cursor-pointer"
          >
            Reset Atlas
          </button>
        </div>

        {/* MAIN INTERACTIVE SVG STORY DIAGRAM */}
        <svg
          viewBox="0 0 1100 700"
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: '550px 350px',
          }}
          onClick={() => setSelectedNode(null)}
        >
          <defs>
            {/* Archival Parchment Texture Gradient */}
            <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f2e6d0" />
              <stop offset="50%" stopColor="#e6d7bc" />
              <stop offset="100%" stopColor="#d9c7a6" />
            </linearGradient>

            {/* Subtle Archival Grid lines */}
            <pattern id="archivalLines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="#5c4533" strokeWidth="0.4" strokeOpacity="0.12" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="#5c4533" strokeWidth="0.4" strokeOpacity="0.12" />
            </pattern>

            {/* Gold Thread Glow Filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* PARCHMENT BASE */}
          <rect width="1100" height="700" fill="url(#parchmentGrad)" />
          <rect width="1100" height="700" fill="url(#archivalLines)" />

          {/* ELEGANT ARCHIVAL BORDER FRAMING */}
          <rect x="24" y="24" width="1052" height="652" fill="none" stroke="#3d2b1f" strokeWidth="1.5" strokeOpacity="0.5" />
          <rect x="30" y="30" width="1040" height="640" fill="none" stroke="#b8860b" strokeWidth="0.8" strokeOpacity="0.4" />
          
          {/* Corner Flourish Accents */}
          <g stroke="#3d2b1f" strokeWidth="1.2" strokeOpacity="0.6" fill="none">
            <path d="M 24 45 L 45 45 L 45 24" />
            <path d="M 1076 45 L 1055 45 L 1055 24" />
            <path d="M 24 655 L 45 655 L 45 676" />
            <path d="M 1076 655 L 1055 655 L 1055 676" />
          </g>

          {/* SUBTLE FAINT GEOGRAPHIC SILHOUETTE (Extremely subtle background context) */}
          <g fill="none" stroke="#5c4533" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="6 4">
            {/* Faint regional land contours */}
            <path d="M 150 180 Q 300 240 450 190 T 700 280 T 950 210" />
            <path d="M 200 480 Q 400 380 550 490 T 850 440 T 1000 560" />
            <path d="M 400 120 Q 550 250 550 370 T 550 620" strokeWidth="1.5" strokeOpacity="0.15" />
          </g>

          {/* ELEGANT NARRATIVE CONNECTION LINES (Gold Story Threads) */}
          {NARRATIVE_SUB_NODES.map((subNode) => (
            <g key={subNode.id}>
              {/* Outer Subtle Thread Glow */}
              <line
                x1={LAHORE_DOSSIER.nodeX}
                y1={LAHORE_DOSSIER.nodeY}
                x2={subNode.x}
                y2={subNode.y}
                stroke="#d4a359"
                strokeWidth={selectedNode?.id === 'lahore' ? '2.5' : '1.5'}
                strokeOpacity={selectedNode?.id === 'lahore' ? '0.75' : '0.4'}
                strokeDasharray="5 5"
              />

              {/* Animated Thread Pulses */}
              <circle
                cx={(LAHORE_DOSSIER.nodeX + subNode.x) / 2}
                cy={(LAHORE_DOSSIER.nodeY + subNode.y) / 2}
                r="3"
                fill="#b8860b"
                fillOpacity="0.8"
              >
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* SUB-NODES (MRITYUNJAY, SECURITY BUREAU, INTERROGATION ROOM) */}
          {NARRATIVE_SUB_NODES.map((subNode) => (
            <g
              key={subNode.id}
              transform={`translate(${subNode.x}, ${subNode.y})`}
              className="cursor-pointer group"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectNode(subNode);
              }}
              onMouseEnter={() => setHoveredNode(subNode)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Node Outer Halo */}
              <circle
                cx="0"
                cy="0"
                r="18"
                fill="#2b1e17"
                fillOpacity="0.85"
                stroke="#d4a359"
                strokeWidth="1.2"
                className="group-hover:scale-110 transition-transform"
              />
              
              {/* Node Icon */}
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fontSize="11"
                fill="#f4ead5"
              >
                {subNode.icon}
              </text>

              {/* Label below Sub-Node */}
              <g transform="translate(0, 28)">
                <rect
                  x="-55"
                  y="-10"
                  width="110"
                  height="20"
                  rx="4"
                  fill="#1c1612"
                  fillOpacity="0.9"
                  stroke="#d4a359"
                  strokeWidth="0.6"
                />
                <text
                  x="0"
                  y="3"
                  textAnchor="middle"
                  fill="#f4ead5"
                  fontSize="9"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  letterSpacing="0.8"
                >
                  {subNode.label}
                </text>
              </g>
            </g>
          ))}

          {/* PRIMARY STORY NODE — LAHORE */}
          <g
            transform={`translate(${LAHORE_DOSSIER.nodeX}, ${LAHORE_DOSSIER.nodeY})`}
            className="cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
              handleSelectNode(LAHORE_DOSSIER);
            }}
            onMouseEnter={() => setHoveredNode(LAHORE_DOSSIER)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Outer Pulsing Golden Ring */}
            <circle
              cx="0"
              cy="0"
              r={selectedNode?.id === 'lahore' ? '36' : '26'}
              fill="none"
              stroke="#d4a359"
              strokeWidth="1.8"
              strokeOpacity={selectedNode?.id === 'lahore' ? '0.9' : '0.5'}
              className="animate-ping"
              style={{ animationDuration: '3.5s' }}
            />

            {/* Middle Halo Circle */}
            <circle
              cx="0"
              cy="0"
              r={selectedNode?.id === 'lahore' ? '28' : '20'}
              fill={selectedNode?.id === 'lahore' ? 'rgba(212, 163, 89, 0.4)' : 'rgba(43, 30, 23, 0.7)'}
              stroke="#d4a359"
              strokeWidth={selectedNode?.id === 'lahore' ? '2.5' : '1.5'}
              filter="url(#goldGlow)"
              className="transition-all duration-300"
            />

            {/* Inner Refined Core Symbol */}
            <circle cx="0" cy="0" r="8" fill="#f4ead5" stroke="#2b1e17" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="#2b1e17" />

            {/* Primary Node Badge Label */}
            <g transform="translate(0, 36)">
              <rect
                x="-50"
                y="-12"
                width="100"
                height="24"
                rx="6"
                fill="#1c1612"
                fillOpacity="0.95"
                stroke="#d4a359"
                strokeWidth="1"
              />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fill="#f4ead5"
                fontSize="11"
                fontFamily="Cinzel, serif"
                fontWeight="800"
                letterSpacing="1.5"
              >
                LAHORE
              </text>
            </g>
          </g>
        </svg>

        {/* HOVER TOOLTIP */}
        {hoveredNode && !selectedNode && (
          <div
            className="absolute z-40 pointer-events-none transition-all duration-200"
            style={{
              left: `${((hoveredNode.nodeX || hoveredNode.x) - 550) * zoom + pan.x + (atlasContainerRef.current?.clientWidth || 0) / 2}px`,
              top: `${((hoveredNode.nodeY || hoveredNode.y) - 350) * zoom + pan.y + (atlasContainerRef.current?.clientHeight || 0) / 2 - 75}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="bg-[#1c1612]/95 border border-[#d4a359]/60 px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md text-center">
              <div className="font-cinzel text-xs font-bold text-[#f4ead5]">
                ✦ {hoveredNode.name || hoveredNode.label}
              </div>
              <div className="text-[10px] text-[#d4a359] font-mono mt-0.5">
                {hoveredNode.subtitle || hoveredNode.sublabel || '1982 Story Node'}
              </div>
              <div className="text-[9px] text-[#f4ead5]/70 italic mt-1">
                Click to inspect story dossier
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SELECTED LOCATION CINEMATIC ARCHIVAL DOSSIER PANEL */}
      {selectedNode && (
        <div className="absolute top-20 right-8 z-40 w-96 max-w-[calc(100vw-3rem)] bg-[#1c1612]/95 border border-[#d4a359]/50 rounded-2xl p-6 shadow-2xl backdrop-blur-xl text-[#f4ead5] font-sans transition-all duration-500 animate-fadeIn">
          {/* Panel Close Button */}
          <button
            onClick={() => setSelectedNode(null)}
            className="absolute top-4 right-4 text-[#d4a359]/70 hover:text-[#f4ead5] text-sm font-bold w-7 h-7 rounded-full bg-[#2b1e17] border border-[#d4a359]/30 flex items-center justify-center cursor-pointer transition-colors"
          >
            ✕
          </button>

          {/* Classified Header Stamp */}
          <div className="flex items-center justify-between border-b border-[#d4a359]/20 pb-3 mb-4">
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#d4a359] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#d4a359] animate-pulse" />
              <span>CLASSIFIED STORY RECORD</span>
            </div>
            <span className="text-[9px] font-mono text-[#d4a359]/60 bg-[#d4a359]/10 px-2 py-0.5 rounded border border-[#d4a359]/20">
              1982
            </span>
          </div>

          {/* Location Title & Year */}
          <div className="mb-4">
            <h3 className="font-cinzel text-2xl font-extrabold text-[#f4ead5] tracking-widest">
              {selectedNode.name}
            </h3>
            <div className="text-xs font-cinzel font-bold text-[#d4a359] mt-1">
              1982 • {selectedNode.subtitle}
            </div>
          </div>

          {/* Narrative Story Quote */}
          <div className="mb-5 bg-[#2b1e17]/80 p-4 rounded-xl border border-[#d4a359]/25 text-xs text-[#f4ead5]/90 leading-relaxed font-serif-vintage italic shadow-inner">
            "{selectedNode.quote}"
          </div>

          {/* Connected Character Section */}
          <div className="mb-5">
            <div className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#d4a359] mb-2">
              CONNECTED CHARACTER
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#241912] border border-[#d4a359]/30">
              <div className="w-9 h-9 rounded-lg bg-[#d4a359]/20 border border-[#d4a359]/40 flex items-center justify-center text-lg flex-shrink-0">
                🕵️‍♂️
              </div>
              <div>
                <div className="font-cinzel text-xs font-bold text-[#f4ead5] tracking-wide">
                  {selectedNode.character.name}
                </div>
                <div className="text-[10px] text-[#d4a359] font-mono mt-0.5">
                  {selectedNode.character.role}
                </div>
              </div>
            </div>
          </div>

          {/* Connected Story Event Section */}
          <div className="mb-6">
            <div className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#d4a359] mb-2">
              STORY CONNECTION
            </div>
            <div className="p-3.5 rounded-xl bg-[#241912] border border-[#d4a359]/30">
              <div className="font-cinzel text-xs font-bold text-[#f4ead5] tracking-wide">
                {selectedNode.event.title}
              </div>
              <div className="text-[10px] text-[#d4a359]/80 font-mono mt-0.5">
                {selectedNode.event.subtitle}
              </div>
            </div>
          </div>

          {/* ACTION BUTTON: EXPLORE THIS MOMENT */}
          <button
            onClick={() => onNavigateToExperience(selectedNode.event.experienceType)}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#b8860b] via-[#d4a359] to-[#b8860b] hover:brightness-110 text-[#1a120b] font-cinzel text-xs font-extrabold tracking-widest uppercase transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center space-x-2 cursor-pointer border border-[#f4ead5]/40"
          >
            <span>EXPLORE THIS MOMENT</span>
            <span className="text-sm">➔</span>
          </button>
        </div>
      )}
    </div>
  );
}

// Function to render the React component into container element
export function mountLocationMap(containerElement, onBackHandler, onNavigateHandler) {
  if (!containerElement) return null;
  
  const root = ReactDOM.createRoot(containerElement);
  root.render(
    <React.StrictMode>
      <LocationMap
        onBack={onBackHandler}
        onNavigateToExperience={onNavigateHandler}
      />
    </React.StrictMode>
  );

  return root;
}
