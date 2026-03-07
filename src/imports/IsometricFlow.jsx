import { useEffect, useRef } from "react";
import ACSLogo from "./Group5";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');

  .iso-scene {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    perspective: 2000px;
  }

  .iso-layer {
    position: relative;
    width: 800px;
    height: 800px;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(-45deg);
    flex-shrink: 0;
  }

  .board-grid {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image:
      linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    background-position: center;
    -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
    mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }

  .flow-svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
  }

  .circuit-path {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .fade-short { stroke: url(#fade-short); }
  .fade-mid   { stroke: url(#fade-mid); }
  .fade-long  { stroke: url(#fade-long); }
  .fade-muted { stroke: url(#fade-muted); stroke-width: 2; }

  .data-dot {
    fill: #ff6a00;
    filter: drop-shadow(0 0 6px rgba(255,106,0,0.8));
  }

  .data-streak {
    fill: none;
    stroke: #ff6a00;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 6px rgba(255,106,0,0.8));
  }

  .wave-center {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 180px; height: 180px;
    z-index: 1;
  }

  .wave {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border: 2px solid rgba(255,106,0,0.3);
    border-radius: 28px;
    box-shadow: 0 0 15px rgba(255,106,0,0.2), inset 0 0 8px rgba(255,106,0,0.1);
    opacity: 0;
    animation: radial-pulse 9s infinite linear;
  }
  .wave:nth-child(2) { animation-delay: 3s; }
  .wave:nth-child(3) { animation-delay: 6s; }

  @keyframes radial-pulse {
    0%   { transform: scale(0.6); opacity: 0; border-width: 3px; }
    15%  { opacity: 0.6; }
    100% { transform: scale(4.5); opacity: 0; border-width: 1px; }
  }

  .chip {
    position: absolute;
    top: 50%; left: 50%;
    width: 120px; height: 120px;
    transform: translate(-50%, -50%);
    transform-style: preserve-3d;
    z-index: 10;
  }

  .chip-shadow {
    position: absolute;
    width: 100%; height: 100%;
    background: rgba(255,106,0,0.2);
    filter: blur(15px);
    transform: translateZ(0px);
    border-radius: 26px;
    animation: shadow-pulse 3s infinite linear;
  }

  .chip-layer {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #cc5500;
    border-radius: 26px;
    animation: side-glow 3s infinite linear;
  }

  @keyframes side-glow {
    0%   { background: #cc5500; box-shadow: -1px 1px 2px rgba(255,106,0,0.1); }
    45%  { background: #ff8833; box-shadow: -1px 1px 4px rgba(255,106,0,0.3); }
    100% { background: #cc5500; box-shadow: -1px 1px 2px rgba(255,106,0,0.1); }
  }

  @keyframes shadow-pulse {
    0%   { background: rgba(255,106,0,0.2); filter: blur(15px); transform: translateZ(0px) scale(1); }
    45%  { background: rgba(255,106,0,0.6); filter: blur(24px); transform: translateZ(0px) scale(1.08); }
    100% { background: rgba(255,106,0,0.2); filter: blur(15px); transform: translateZ(0px) scale(1); }
  }

  .chip-top {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #ffffff;
    transform: translateZ(21px);
    border: 2px solid #ff6a00;
    border-radius: 26px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 20px rgba(255,106,0,0.1);
    overflow: hidden;
  }

  .chip-grid {
    position: absolute;
    width: 100%; height: 100%;
    background-image:
      linear-gradient(rgba(255,106,0,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,106,0,0.15) 1px, transparent 1px);
    background-size: 12px 12px;
    background-position: center;
  }

  .chip-core-ring {
    position: absolute;
    width: 76px; height: 76px;
    border: 2px dashed rgba(255,106,0,0.4);
    border-radius: 50%;
    animation: spin-slow 12s linear infinite;
  }

  .chip-logo {
    position: relative;
    z-index: 5;
    width: 44px; height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff6a00;
    animation: pulse-logo 2s ease-in-out infinite alternate;
    filter: drop-shadow(0 0 6px rgba(255,106,0,0.5));
  }

  @keyframes spin-slow {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse-logo {
    0%   { transform: scale(0.95); opacity: 0.85; filter: drop-shadow(0 0 4px rgba(255,106,0,0.4)); }
    100% { transform: scale(1.05); opacity: 1;    filter: drop-shadow(0 0 12px rgba(255,106,0,0.8)); }
  }

  .iso-label {
    position: absolute;
    padding: 12px 28px;
    border-radius: 99px;
    font-weight: 600;
    font-size: 18px;
    transform: translateZ(8px);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.2);
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25,0.8,0.25,1);
  }
  .iso-label:hover {
    transform: translateZ(24px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.6);
  }
`;

const LABELS = [
  { top: 240, left: 160, label: "Design",       color: "#333",    bg: "rgba(255,255,255,0.5)",    bgHover: "rgba(255,255,255,0.8)" },
  { top: 120, left: 330, label: "Cyber Security",color: "#ff6a00", bg: "rgba(255,106,0,0.1)",     bgHover: "rgba(255,106,0,0.25)" },
  { top: 290, left: 540, label: "Analytics",    color: "#333",    bg: "rgba(255,255,255,0.5)",    bgHover: "rgba(255,255,255,0.8)" },
  { top: 570, left: 500, label: "Robotics",       color: "#ff6a00", bg: "rgba(255,106,0,0.1)",     bgHover: "rgba(255,106,0,0.25)" },
  { top: 550, left: 100, label: "Management",   color: "#333",    bg: "rgba(255,255,255,0.5)",    bgHover: "rgba(255,255,255,0.8)" },
];

const ACTIVE_PATHS = [
  "M480,330 L515,330 Q530,330 530,315 L530,150",
  "M480,370 L595,370 Q610,370 610,385 L610,600",
  "M480,410 L525,410 Q540,410 540,425 L540,650",
  "M480,450 L575,450 Q590,450 590,435 L590,200",
  "M320,330 L285,330 Q270,330 270,315 L270,100",
  "M320,370 L235,370 Q220,370 220,385 L220,650",
  "M320,410 L265,410 Q250,410 250,425 L250,700",
  "M320,450 L245,450 Q230,450 230,435 L230,250",
  "M330,480 L330,505 Q330,520 315,520 L100,520",
  "M370,480 L370,535 Q370,550 355,550 L200,550",
  "M410,480 L410,515 Q410,530 425,530 L650,530",
  "M450,480 L450,565 Q450,580 435,580 L250,580",
  "M330,320 L330,295 Q330,280 315,280 L150,280",
  "M370,320 L370,235 Q370,220 355,220 L250,220",
  "M410,320 L410,265 Q410,250 425,250 L600,250",
  "M450,320 L450,195 Q450,180 435,180 L300,180",
];

const INACTIVE_PATHS = [
  "M480,350 L555,350 Q570,350 570,365 L570,500",
  "M480,390 L680,390 Q695,390 695,375 L695,200",
  "M480,430 L645,430 Q660,430 660,445 L660,700",
  "M480,470 L700,470 Q715,470 715,485 L715,650",
  "M320,350 L165,350 Q150,350 150,365 L150,500",
  "M320,390 L115,390 Q100,390 100,375 L100,150",
  "M320,430 L195,430 Q180,430 180,445 L180,600",
  "M320,470 L135,470 Q120,470 120,485 L120,650",
  "M350,480 L350,585 Q350,600 365,600 L550,600",
  "M390,480 L390,700 Q390,715 405,715 L600,715",
  "M430,480 L430,635 Q430,650 445,650 L700,650",
  "M470,480 L470,705 Q470,720 485,720 L650,720",
  "M350,320 L350,165 Q350,150 365,150 L500,150",
  "M390,320 L390,115 Q390,100 405,100 L600,100",
  "M430,320 L430,135 Q430,120 445,120 L750,120",
  "M470,320 L470,215 Q470,200 485,200 L650,200",
];

function getFadeClass(index) {
  const classes = ["fade-long", "fade-mid", "fade-short", "fade-mid"];
  return classes[index % 4];
}

export default function IsometricFlow() {
  const dotsGroupRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const dotsGroup = dotsGroupRef.current;
    if (!svg || !dotsGroup) return;

    const baseDuration = 4;
    const activePaths = svg.querySelectorAll(".active-path");

    activePaths.forEach((pathEl, index) => {
      const pathLength = pathEl.getTotalLength();
      const duration = baseDuration * (pathLength / 400);

      // Dot
      const delay = 0;
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("r", "5");
      circle.setAttribute("class", "data-dot");
      circle.setAttribute("filter", "url(#glow)");

      const animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
      animateMotion.setAttribute("dur", `${duration}s`);
      animateMotion.setAttribute("repeatCount", "indefinite");
      animateMotion.setAttribute("begin", `${delay}s`);

      const animateOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animateOpacity.setAttribute("attributeName", "opacity");
      animateOpacity.setAttribute("values", "0; 1; 1; 0");
      animateOpacity.setAttribute("keyTimes", "0; 0.1; 0.9; 1");
      animateOpacity.setAttribute("dur", `${duration}s`);
      animateOpacity.setAttribute("begin", `${delay}s`);
      animateOpacity.setAttribute("repeatCount", "indefinite");

      const mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
      mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#active-path-${index}`);

      animateMotion.appendChild(mpath);
      circle.appendChild(animateMotion);
      circle.appendChild(animateOpacity);
      dotsGroup.appendChild(circle);

      // Streak
      const streakDelay = duration / 2;
      const streakLength = 50;

      const streak = document.createElementNS("http://www.w3.org/2000/svg", "path");
      streak.setAttribute("d", pathEl.getAttribute("d"));
      streak.setAttribute("class", "data-streak");
      streak.setAttribute("filter", "url(#glow)");
      streak.setAttribute("stroke-dasharray", `${streakLength} ${pathLength + streakLength}`);

      const animateDash = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animateDash.setAttribute("attributeName", "stroke-dashoffset");
      animateDash.setAttribute("values", `${streakLength}; -${pathLength}`);
      animateDash.setAttribute("dur", `${duration}s`);
      animateDash.setAttribute("begin", `${streakDelay}s`);
      animateDash.setAttribute("repeatCount", "indefinite");

      const streakOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      streakOpacity.setAttribute("attributeName", "opacity");
      streakOpacity.setAttribute("values", "0; 1; 1; 0");
      streakOpacity.setAttribute("keyTimes", "0; 0.1; 0.9; 1");
      streakOpacity.setAttribute("dur", `${duration}s`);
      streakOpacity.setAttribute("begin", `${streakDelay}s`);
      streakOpacity.setAttribute("repeatCount", "indefinite");

      streak.appendChild(animateDash);
      streak.appendChild(streakOpacity);
      dotsGroup.appendChild(streak);
    });

    return () => {
      while (dotsGroup.firstChild) dotsGroup.removeChild(dotsGroup.firstChild);
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="iso-scene">
        <div className="iso-layer">
          <div className="board-grid" />

          {LABELS.map(({ top, left, label, color, bg, bgHover }) => (
            <div
              key={label}
              className="iso-label"
              style={{
                top, left,
                border: `1px solid ${color}`,
                color,
                background: bg,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = bgHover; }}
              onMouseLeave={e => { e.currentTarget.style.background = bg; }}
            >
              {label}
            </div>
          ))}

          <div className="wave-center">
            <div className="wave" />
            <div className="wave" />
            <div className="wave" />
          </div>

          <div className="chip">
            <div className="chip-shadow" />
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="chip-layer"
                style={{ transform: `translateZ(${i + 1}px)` }}
              />
            ))}
            <div className="chip-top">
              <div className="chip-grid" />
              <div className="chip-core-ring" />
              <div className="chip-logo">
                <ACSLogo />
              </div>
            </div>
          </div>

          <svg ref={svgRef} className="flow-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="fade-short" cx="400" cy="400" r="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="rgba(255,106,0,0.6)" />
                <stop offset="60%"  stopColor="rgba(255,106,0,0.15)" />
                <stop offset="100%" stopColor="rgba(255,106,0,0)" />
              </radialGradient>
              <radialGradient id="fade-mid" cx="400" cy="400" r="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="rgba(255,106,0,0.6)" />
                <stop offset="70%"  stopColor="rgba(255,106,0,0.15)" />
                <stop offset="100%" stopColor="rgba(255,106,0,0)" />
              </radialGradient>
              <radialGradient id="fade-long" cx="400" cy="400" r="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="rgba(255,106,0,0.6)" />
                <stop offset="80%"  stopColor="rgba(255,106,0,0.15)" />
                <stop offset="100%" stopColor="rgba(255,106,0,0)" />
              </radialGradient>
              <radialGradient id="fade-muted" cx="400" cy="400" r="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="rgba(255,106,0,0.15)" />
                <stop offset="50%"  stopColor="rgba(255,106,0,0.05)" />
                <stop offset="100%" stopColor="rgba(255,106,0,0)" />
              </radialGradient>
            </defs>

            <g id="paths-group">
              {ACTIVE_PATHS.map((d, i) => (
                <path
                  key={`active-${i}`}
                  id={`active-path-${i}`}
                  className={`circuit-path active-path ${getFadeClass(i)}`}
                  d={d}
                />
              ))}
              {INACTIVE_PATHS.map((d, i) => (
                <path
                  key={`inactive-${i}`}
                  className="circuit-path inactive-path fade-muted"
                  d={d}
                />
              ))}
            </g>

            <g id="dots-group" ref={dotsGroupRef} />
          </svg>
        </div>
      </div>
    </>
  );
}