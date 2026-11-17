import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Cpu, Eye, Code2, Workflow, Sparkles } from 'lucide-react';

export interface NeuralDomain {
  id: string;
  index: string;
  title: string;
  tag: string;
  icon: React.ReactNode;
  technologies: string[];
  projectHighlight: string;
  description: string;
  targetAngle: [number, number]; // [rotX, rotY] to orient active cluster forward
  clusterColor: string;
}

const NEURAL_DOMAINS: NeuralDomain[] = [
  {
    id: 'ai-ml',
    index: '01',
    title: 'AI & Machine Learning',
    tag: 'INTELLIGENT SYSTEMS',
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    technologies: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Scikit-learn', 'Audio Processing'],
    projectHighlight: 'MachineSense — Sound Fault Detection',
    description:
      'Predictive maintenance models and acoustic anomaly detection classifiers analyzing complex machine sound signatures.',
    targetAngle: [0.18, -0.35],
    clusterColor: '#00F0FF',
  },
  {
    id: 'computer-vision',
    index: '02',
    title: 'Computer Vision',
    tag: 'VISUAL REASONING',
    icon: <Eye className="w-4 h-4 text-cyan-400" />,
    technologies: ['Image Processing', 'CNN Architectures', 'AI Crack Detection', 'OpenCV', 'Defect Segmentation'],
    projectHighlight: 'AI Crack Detection — Structural Inspection',
    description:
      'Convolutional neural networks and vision filters engineered to localize and segment structural fissures in concrete.',
    targetAngle: [0.18, 0.35],
    clusterColor: '#38BDF8',
  },
  {
    id: 'software-dev',
    index: '03',
    title: 'Software Development',
    tag: 'SYSTEM ARCHITECTURE',
    icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    technologies: ['Java (OOP)', 'Python', 'React', 'FastAPI', 'Data Structures & Algorithms'],
    projectHighlight: 'Modular Scalable System Backends',
    description:
      'Disciplined software engineering with type safety, clean algorithmic design patterns, and high-performance APIs.',
    targetAngle: [-0.2, -0.32],
    clusterColor: '#0066FF',
  },
  {
    id: 'automation',
    index: '04',
    title: 'Intelligent Automation',
    tag: 'WORKFLOW ENGINES',
    icon: <Workflow className="w-4 h-4 text-cyan-400" />,
    technologies: ['EMBER Assistant', 'STORYPILOT Pipeline', 'Python Automation', 'APIs', 'Batch Orchestration'],
    projectHighlight: 'STORYPILOT & EMBER Personal Assistant',
    description:
      'Automated content production engines and desktop AI assistant agents eliminating repetitive operational toil.',
    targetAngle: [-0.2, 0.32],
    clusterColor: '#60A5FA',
  },
];

// Helper: Generates a radial glow texture for neural nodes
function createGlowTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.2, 'rgba(0, 240, 255, 0.85)');
  gradient.addColorStop(0.55, 'rgba(0, 102, 255, 0.35)');
  gradient.addColorStop(1.0, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const activeCategoryRef = useRef<number>(0);

  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // WebGL support verification
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 420;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Root Neural Network Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // ==========================================
    // 1. NEURAL NODES & CLUSTERS GENERATION
    // ==========================================
    interface NeuralNode {
      basePos: THREE.Vector3;
      currentPos: THREE.Vector3;
      clusterIndex: number; // 0..3 for lobes, -1 for core bridge, -2 for ambient shell
      phase: number;
      frequency: number;
      size: number;
      isLandmark: boolean;
    }

    const nodes: NeuralNode[] = [];
    const nodeTexture = createGlowTexture();

    // Centers for the 4 functional domain lobes in 3D space
    const lobeCenters = [
      new THREE.Vector3(-1.15, 0.85, 0.45), // 0: AI & Machine Learning
      new THREE.Vector3(1.15, 0.85, 0.45),  // 1: Computer Vision
      new THREE.Vector3(-1.15, -0.85, 0.45),// 2: Software Development
      new THREE.Vector3(1.15, -0.85, 0.45), // 3: Intelligent Automation
    ];

    // Generate functional lobe clusters (32 nodes per cluster)
    lobeCenters.forEach((center, clusterIdx) => {
      for (let i = 0; i < 32; i++) {
        // Landmark node at center
        const isLandmark = i === 0;
        const offset = isLandmark
          ? new THREE.Vector3(0, 0, 0)
          : new THREE.Vector3(
              (Math.random() - 0.5) * 1.1,
              (Math.random() - 0.5) * 1.1,
              (Math.random() - 0.5) * 1.1
            );

        // Normalize slightly towards spherical cluster
        const pos = center.clone().add(offset);
        nodes.push({
          basePos: pos.clone(),
          currentPos: pos.clone(),
          clusterIndex: clusterIdx,
          phase: Math.random() * Math.PI * 2,
          frequency: 0.8 + Math.random() * 0.8,
          size: isLandmark ? 0.22 : 0.08 + Math.random() * 0.08,
          isLandmark,
        });
      }
    });

    // Central Core Hub Nodes (connects all 4 lobes)
    for (let i = 0; i < 36; i++) {
      const radius = 0.35 + Math.random() * 0.55;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phi);
      const pos = new THREE.Vector3(
        radius * sinPhi * Math.cos(theta),
        radius * sinPhi * Math.sin(theta),
        radius * Math.cos(phi)
      );

      nodes.push({
        basePos: pos.clone(),
        currentPos: pos.clone(),
        clusterIndex: -1, // Core bridge
        phase: Math.random() * Math.PI * 2,
        frequency: 0.9 + Math.random() * 0.6,
        size: 0.07 + Math.random() * 0.06,
        isLandmark: i < 4,
      });
    }

    // Outer Ambient Spherical Shell Nodes (depth and atmosphere)
    for (let i = 0; i < 48; i++) {
      const radius = 1.9 + Math.random() * 0.6;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phi);
      const pos = new THREE.Vector3(
        radius * sinPhi * Math.cos(theta),
        radius * sinPhi * Math.sin(theta),
        radius * Math.cos(phi)
      );

      nodes.push({
        basePos: pos.clone(),
        currentPos: pos.clone(),
        clusterIndex: -2, // Ambient shell
        phase: Math.random() * Math.PI * 2,
        frequency: 0.6 + Math.random() * 0.5,
        size: 0.05 + Math.random() * 0.04,
        isLandmark: false,
      });
    }

    const totalNodes = nodes.length;

    // Node Points Buffer Geometry
    const nodePositions = new Float32Array(totalNodes * 3);
    const nodeColors = new Float32Array(totalNodes * 3);
    const nodeSizes = new Float32Array(totalNodes);

    nodes.forEach((node, i) => {
      nodePositions[i * 3] = node.basePos.x;
      nodePositions[i * 3 + 1] = node.basePos.y;
      nodePositions[i * 3 + 2] = node.basePos.z;

      // Default ambient silver/cyan color
      nodeColors[i * 3] = 0.5;
      nodeColors[i * 3 + 1] = 0.7;
      nodeColors[i * 3 + 2] = 0.9;
      nodeSizes[i] = node.size;
    });

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.16,
      map: nodeTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const nodePoints = new THREE.Points(nodeGeo, nodeMat);
    networkGroup.add(nodePoints);

    // ==========================================
    // 2. SYNAPTIC EDGES / CONNECTIONS
    // ==========================================
    interface Synapse {
      nodeA: number;
      nodeB: number;
      clusterIndex: number; // 0..3 if both belong, otherwise -1
      distance: number;
    }

    const synapses: Synapse[] = [];
    const maxConnectionDist = 0.92;

    // Connect nodes by proximity
    for (let i = 0; i < totalNodes; i++) {
      for (let j = i + 1; j < totalNodes; j++) {
        const dist = nodes[i].basePos.distanceTo(nodes[j].basePos);
        if (dist < maxConnectionDist) {
          const sameCluster =
            nodes[i].clusterIndex >= 0 && nodes[i].clusterIndex === nodes[j].clusterIndex;
          const clusterIdx = sameCluster ? nodes[i].clusterIndex : -1;
          synapses.push({
            nodeA: i,
            nodeB: j,
            clusterIndex: clusterIdx,
            distance: dist,
          });
        }
      }
    }

    // Connect landmark nodes to central core hub
    lobeCenters.forEach((_, cIdx) => {
      const landmarkIdx = cIdx * 32;
      // Connect to first 3 core nodes
      for (let k = 0; k < 3; k++) {
        const coreIdx = 128 + k * 4;
        synapses.push({
          nodeA: landmarkIdx,
          nodeB: coreIdx,
          clusterIndex: cIdx,
          distance: nodes[landmarkIdx].basePos.distanceTo(nodes[coreIdx].basePos),
        });
      }
    });

    const totalSynapses = synapses.length;
    const synapsePositions = new Float32Array(totalSynapses * 2 * 3);
    const synapseColors = new Float32Array(totalSynapses * 2 * 3);

    synapses.forEach((syn, idx) => {
      const pA = nodes[syn.nodeA].basePos;
      const pB = nodes[syn.nodeB].basePos;

      synapsePositions[idx * 6] = pA.x;
      synapsePositions[idx * 6 + 1] = pA.y;
      synapsePositions[idx * 6 + 2] = pA.z;
      synapsePositions[idx * 6 + 3] = pB.x;
      synapsePositions[idx * 6 + 4] = pB.y;
      synapsePositions[idx * 6 + 5] = pB.z;

      // Subtle ambient silver-slate
      synapseColors[idx * 6] = 0.15;
      synapseColors[idx * 6 + 1] = 0.22;
      synapseColors[idx * 6 + 2] = 0.32;
      synapseColors[idx * 6 + 3] = 0.15;
      synapseColors[idx * 6 + 4] = 0.22;
      synapseColors[idx * 6 + 5] = 0.32;
    });

    const synapseGeo = new THREE.BufferGeometry();
    synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePositions, 3));
    synapseGeo.setAttribute('color', new THREE.BufferAttribute(synapseColors, 3));

    const synapseMat = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.45,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
    networkGroup.add(synapseLines);

    // ==========================================
    // 3. ACTION POTENTIAL DATA PULSES
    // ==========================================
    interface DataPulse {
      synapseIndex: number;
      progress: number;
      speed: number;
      reverse: boolean;
      active: boolean;
    }

    const MAX_PULSES = 40;
    const pulses: DataPulse[] = [];

    for (let p = 0; p < MAX_PULSES; p++) {
      pulses.push({
        synapseIndex: Math.floor(Math.random() * totalSynapses),
        progress: Math.random(),
        speed: 0.6 + Math.random() * 0.9,
        reverse: Math.random() > 0.5,
        active: true,
      });
    }

    const pulsePositions = new Float32Array(MAX_PULSES * 3);
    const pulseColors = new Float32Array(MAX_PULSES * 3);

    for (let p = 0; p < MAX_PULSES; p++) {
      pulseColors[p * 3] = 0.0;
      pulseColors[p * 3 + 1] = 0.95;
      pulseColors[p * 3 + 2] = 1.0;
    }

    const pulseGeo = new THREE.BufferGeometry();
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3));
    pulseGeo.setAttribute('color', new THREE.BufferAttribute(pulseColors, 3));

    const pulseMat = new THREE.PointsMaterial({
      size: 0.18,
      map: nodeTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pulsePoints = new THREE.Points(pulseGeo, pulseMat);
    networkGroup.add(pulsePoints);

    // ==========================================
    // 4. STUDIO LIGHTING & DEPTH
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0x0a1122, 1.2);
    scene.add(ambientLight);

    const cyanKey = new THREE.DirectionalLight(0x00f0ff, 2.8);
    cyanKey.position.set(3, 4, 3);
    scene.add(cyanKey);

    const blueRim = new THREE.PointLight(0x0066ff, 4.0, 15);
    blueRim.position.set(-3.5, -2.5, 2.5);
    scene.add(blueRim);

    // ==========================================
    // 5. MOUSE PARALLAX & TILT DYNAMICS
    // ==========================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.22;
      targetMouseY = y * 0.22;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Responsive Canvas Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ==========================================
    // 6. ANIMATION LOOP: ALIVE NEURAL CONNECTOME
    // ==========================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();
      const currentActiveCategory = activeCategoryRef.current;
      const activeDomain = NEURAL_DOMAINS[currentActiveCategory];

      // Damped mouse parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Smooth camera/network orientation towards active cluster target angle
      const [tRotX, tRotY] = activeDomain.targetAngle;
      networkGroup.rotation.x += (tRotX - currentMouseY - networkGroup.rotation.x) * 0.04;
      networkGroup.rotation.y += (tRotY + currentMouseX - networkGroup.rotation.y) * 0.04;

      // Gentle organic breathing float (NOT spinning)
      networkGroup.position.y = Math.sin(elapsedTime * 0.55) * 0.04;

      // Node subtle harmonic undulation & dynamic color update
      const posAttr = nodeGeo.attributes.position as THREE.BufferAttribute;
      const colAttr = nodeGeo.attributes.color as THREE.BufferAttribute;

      nodes.forEach((node, i) => {
        // Micro-organic harmonic breathing
        const offset = Math.sin(elapsedTime * node.frequency + node.phase) * 0.035;
        node.currentPos.x = node.basePos.x * (1 + offset * 0.15);
        node.currentPos.y = node.basePos.y * (1 + offset * 0.15);
        node.currentPos.z = node.basePos.z * (1 + offset * 0.15);

        posAttr.setXYZ(i, node.currentPos.x, node.currentPos.y, node.currentPos.z);

        // Highlight active lobe cluster
        if (node.clusterIndex === currentActiveCategory) {
          // Luminous cyan / electric blue pulse
          const pulseBright = 0.85 + Math.sin(elapsedTime * 3.0 + node.phase) * 0.15;
          colAttr.setXYZ(i, 0.0 * pulseBright, 0.94 * pulseBright, 1.0 * pulseBright);
        } else if (node.clusterIndex === -1) {
          // Core bridging nexus: subtle cyan-silver
          colAttr.setXYZ(i, 0.3, 0.5, 0.7);
        } else {
          // Inactive clusters / ambient shell: deep translucent silver-slate
          colAttr.setXYZ(i, 0.16, 0.24, 0.36);
        }
      });
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Update Synapse Lines position & illumination
      const synPosAttr = synapseGeo.attributes.position as THREE.BufferAttribute;
      const synColAttr = synapseGeo.attributes.color as THREE.BufferAttribute;

      synapses.forEach((syn, sIdx) => {
        const pA = nodes[syn.nodeA].currentPos;
        const pB = nodes[syn.nodeB].currentPos;

        synPosAttr.setXYZ(sIdx * 2, pA.x, pA.y, pA.z);
        synPosAttr.setXYZ(sIdx * 2 + 1, pB.x, pB.y, pB.z);

        if (syn.clusterIndex === currentActiveCategory) {
          // Active domain pathway: high-energy cyan & electric blue
          const glow = 0.75 + Math.sin(elapsedTime * 2.5 + sIdx * 0.1) * 0.25;
          synColAttr.setXYZ(sIdx * 2, 0.0 * glow, 0.9 * glow, 1.0 * glow);
          synColAttr.setXYZ(sIdx * 2 + 1, 0.0 * glow, 0.45 * glow, 1.0 * glow);
        } else {
          // Inactive synapse: faint dark slate line
          synColAttr.setXYZ(sIdx * 2, 0.08, 0.12, 0.18);
          synColAttr.setXYZ(sIdx * 2 + 1, 0.08, 0.12, 0.18);
        }
      });
      synPosAttr.needsUpdate = true;
      synColAttr.needsUpdate = true;

      // Update Action Potential Pulses
      const pulsePosAttr = pulseGeo.attributes.position as THREE.BufferAttribute;
      const pulseColAttr = pulseGeo.attributes.color as THREE.BufferAttribute;

      pulses.forEach((pulse, pIdx) => {
        pulse.progress += pulse.speed * delta * 0.65;

        // When a pulse completes its transit, re-seed it
        if (pulse.progress >= 1.0) {
          pulse.progress = 0.0;
          pulse.reverse = Math.random() > 0.5;

          // 75% chance to route along active category subnet
          if (Math.random() < 0.75) {
            const activeSynapses = synapses.filter(
              (s) => s.clusterIndex === currentActiveCategory
            );
            if (activeSynapses.length > 0) {
              const randSyn = activeSynapses[Math.floor(Math.random() * activeSynapses.length)];
              pulse.synapseIndex = synapses.indexOf(randSyn);
            } else {
              pulse.synapseIndex = Math.floor(Math.random() * totalSynapses);
            }
          } else {
            pulse.synapseIndex = Math.floor(Math.random() * totalSynapses);
          }
        }

        const syn = synapses[pulse.synapseIndex] || synapses[0];
        const nA = nodes[pulse.reverse ? syn.nodeB : syn.nodeA];
        const nB = nodes[pulse.reverse ? syn.nodeA : syn.nodeB];

        const interpPos = new THREE.Vector3().lerpVectors(
          nA.currentPos,
          nB.currentPos,
          pulse.progress
        );

        pulsePosAttr.setXYZ(pIdx, interpPos.x, interpPos.y, interpPos.z);

        // Flash pulse brightly if on active category
        if (syn.clusterIndex === currentActiveCategory) {
          pulseColAttr.setXYZ(pIdx, 0.8, 1.0, 1.0); // Bright white-cyan
        } else {
          pulseColAttr.setXYZ(pIdx, 0.0, 0.6, 1.0); // Electric blue
        }
      });
      pulsePosAttr.needsUpdate = true;
      pulseColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      nodeGeo.dispose();
      synapseGeo.dispose();
      pulseGeo.dispose();
      nodeMat.dispose();
      synapseMat.dispose();
      pulseMat.dispose();
      nodeTexture.dispose();
      renderer.dispose();
    };
  }, []);

  const currentDomain = NEURAL_DOMAINS[activeCategory];

  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* 3D Neural Connectome Canvas */}
      <div className="relative w-full h-[320px] sm:h-[370px] md:h-[410px] flex items-center justify-center overflow-visible">
        {/* Soft Radial Atmospheric Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,102,255,0.12),rgba(5,5,5,0)_75%)] pointer-events-none" />

        {hasWebGL ? (
          <div
            ref={mountRef}
            className="w-full h-full flex items-center justify-center cursor-crosshair"
            aria-label="3D Spherical Neural Network Visualization"
          />
        ) : (
          /* Graceful Fallback */
          <div className="w-56 h-56 rounded-full border border-white/10 flex items-center justify-center relative">
            <div className="w-40 h-40 rounded-full border border-accent/40 animate-pulse" />
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#00F0FF]" />
          </div>
        )}

        {/* Realtime Scientific Metric Badge */}
        <div className="absolute top-2 right-2 flex items-center space-x-2 text-[10px] font-mono text-zinc-500 tracking-widest uppercase bg-zinc-950/70 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>NEURAL CONNECTOME // 208 NODES</span>
        </div>
      </div>

      {/* 4 Interactive Domain Category Selectors */}
      <div className="w-full grid grid-cols-2 gap-2 pt-2 pb-3">
        {NEURAL_DOMAINS.map((domain, idx) => {
          const isActive = idx === activeCategory;
          return (
            <button
              key={domain.id}
              onClick={() => setActiveCategory(idx)}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                isActive
                  ? 'bg-zinc-900/90 border-cyan-500/50 text-white shadow-[0_0_20px_rgba(0,240,255,0.18)] scale-[1.01]'
                  : 'bg-zinc-950/60 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                  {domain.index}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-400 shadow-[0_0_8px_#00F0FF] scale-125'
                      : 'bg-zinc-700 group-hover:bg-zinc-500'
                  }`}
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="shrink-0">{domain.icon}</span>
                <span className="text-xs font-semibold tracking-tight truncate text-zinc-100">
                  {domain.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Domain Detail Card */}
      <div className="w-full p-4 sm:p-5 rounded-2xl bg-zinc-950/85 border border-white/10 relative overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-medium">
              {currentDomain.tag}
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">
            {currentDomain.projectHighlight}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3.5">
          {currentDomain.description}
        </p>

        {/* Specific Focus Technologies */}
        <div>
          <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
            Key Architecture &amp; Toolset
          </span>
          <div className="flex flex-wrap gap-1.5">
            {currentDomain.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-zinc-900 border border-white/10 text-zinc-200 hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
