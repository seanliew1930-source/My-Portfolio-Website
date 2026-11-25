/* =========================================================
   SEAN LIEW — DESIGN PORTFOLIO (three.js · "surreal cosmic monumentalism")
   A winding stone walkway over still water at night, under the stars. Your work floats
   beside it in tall portal frames, each with a glowing stele.
   index.html holds the page, style.css the look, and this file everything that moves.
   Run it with:  npm run dev   (or  npx vite ), then open the address it prints.
   Your images go in the  public/images/  folder, so 'images/ppp.jpg' finds them.
   ========================================================= */
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { Reflector } from 'three/addons/objects/Reflector.js';

/* =========================================================
   1. YOUR PROJECTS  ← this is the part you'll edit most
   ---------------------------------------------------------
   One { ... } block per project. Add or remove blocks and the
   corridor gets longer or shorter by itself.
   wall:   which side of the walkway it floats on, 'left' or 'right'. They come
           in this order from the start (see SETTINGS.spacing for the gap).
   image:  leave '' to use a placeholder, or put the path to
           your image, e.g. 'images/wayfinding.jpg'
   colour: (only used for the placeholder art in the viewing rooms)
   tools:  the tools you used, shown as little badges in the project's
           pop-up, e.g. ['Figma', 'Illustrator', 'Photoshop']. Use the
           names from TOOLS (further down) to get their logos; any other
           name still shows, with its first two letters as the badge.
   ========================================================= */
const PROJECTS = [
  {
    wall: 'right',
    title: 'Project One',
    category: 'UX / UI',
    year: '2026',
    course: 'DESIGN 3XX',
    tools: ['Photoshop', 'Illustrator'],
    image: 'images/ppp.jpg',
    colour: '#d94a38',
    summary: 'An educational infographic created for the University of Auckland to help student researchers uphold Pacific data sovereignty.',
    brief: 'Developed during a School of Psychology summer internship, this brief required a practical tool to help student researchers apply the CARE Principles and protect Pacific data sovereignty throughout their studies.',
    process: 'I interviewed data sovereignty professors and active student researchers, iterating on designs to reduce cognitive load. Using an upward-stepping isometric metaphor, I turned dense criteria into a clear, chronological path.',
    outcome: 'Officially adopted by the University of Auckland to teach data sovereignty to students. The poster received strong faculty praise and taught me how to balance storytelling with practical, user-centered utility.'
  },
  {
    wall: 'right',
    title: 'Project Two',
    category: 'Graphic / Visual',
    year: '2025',
    course: 'DESIGN 2XX',
    tools: ['Photoshop', 'Illustrator'],
    image: 'images/ccc.jpg',
    colour: '#2f5bd3',
    summary: 'A conceptual infographic designed for an IAEA competition to raise awareness around nuclear emergency preparedness and the stakes of nuclear escalation.',
    brief: 'Created for an International Atomic Energy Agency (IAEA) infographic competition to educate the public and information officers on nuclear emergency response.',
    process: 'I prioritized emotive visual storytelling over conventional diagrams, using custom Photoshop compositing, atmospheric lighting, and stark editorial typography to create an arresting focal point.',
    outcome: 'While not selected for overall practicality, the IAEA specifically acknowledged the posters emotional power as a cautionary statement on our nuclear trajectory—proving the impact of bold visual framing.'
  },
  {
    wall: 'left',
    title: 'Project Three',
    category: 'Design × Psychology',
    year: '2026',
    course: 'DESIGN / PSYCH',
    tools: ['Tinkercad', 'Blender', 'Canva', 'Procreate'],
    image: 'images/ppoo.png',
    colour: '#e8c547',
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?',
    process: 'How did you approach it?',
    outcome: 'What did you make, and what happened?',
    /* A viewing room for this project: a doorway next to its frame leads into a small room
       you can turn all the way round in. The images hang on the three walls without the door, in order as
       you turn right: the wall in front, the right wall, then the left wall (3 across on each).
       Up to 9 hang in one row; 10 to 18 hang in two rows, so 18 images = 6 on each wall.
       src: the image file, e.g. 'images/p3-01.jpg' ('' = placeholder)
       caption: a short line shown under it (optional). Delete a line to leave a slot empty. */
    room: [
      { src: 'images/gg (1).jpg', caption: 'Image one' },
      { src: 'images/gg (1).png', caption: 'Image two' },
      { src: 'images/gg (2).jpg', caption: 'Image three' },
      { src: 'images/gg (2).png', caption: 'Image four' },
      { src: 'images/gg (3).jpg', caption: 'Image five' },
      { src: 'images/gg (3).png', caption: 'Image six' },
      { src: 'images/gg (4).jpg', caption: 'Image seven' },
      { src: 'images/gg (4).png', caption: 'Image eight' },
      { src: 'images/gg (5).jpg', caption: 'Image nine' },
      { src: 'images/gg (5).png', caption: 'Image ten' },
      { src: 'images/gg (6).jpg', caption: 'Image eleven' },
      { src: 'images/gg (6).png', caption: 'Image twelve' },
      { src: 'images/gg (7).jpg', caption: 'Image thirteen' },
      { src: 'images/gg (7).png', caption: 'Image fourteen' },
      { src: 'images/gg (8).jpg', caption: 'Image fifteen' },
      { src: 'images/gg (8).png', caption: 'Image sixteen' },
      { src: 'images/gg (9).png', caption: 'Image seventeen' },
      { src: 'images/gg (10).png', caption: 'Image eighteen' }
    ]
  },
  {
    wall: 'right',
    title: 'Project Four',
    category: 'Product / Spatial',
    year: '2025',
    course: 'DESIGN 2XX',
    tools: ['Canva', 'Figma', 'Photoshop', 'Illustrator'],
    image: 'images/ooo.png',
    colour: '#5fa37a',
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?',
    process: 'How did you approach it?',
    outcome: 'What did you make, and what happened?',
    /* This project's viewing room (works the same as Project Three's) */
    room: [
      { src: '', caption: 'Image one' },
      { src: '', caption: 'Image two' },
      { src: '', caption: 'Image three' },
      { src: '', caption: 'Image four' },
      { src: '', caption: 'Image five' },
      { src: '', caption: 'Image six' },
      { src: '', caption: 'Image seven' },
      { src: '', caption: 'Image eight' },
      { src: '', caption: 'Image nine' },
      { src: '', caption: 'Image ten' }
    ]
  },
  {
    wall: 'right',
    title: 'Project Five',
    category: 'UX / UI',
    year: '2024',
    course: 'DESIGN 1XX',
    tools: ['Procreate', 'Photoshop', 'Canva'],
    image: 'images/gr.png',
    colour: '#c9b8a6',
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?',
    process: 'How did you approach it?',
    outcome: 'What did you make, and what happened?',
    /* This project's viewing room (works the same as Project Three's) */
    room: [
      { src: '', caption: 'Image one' },
      { src: '', caption: 'Image two' },
      { src: '', caption: 'Image three' },
      { src: '', caption: 'Image four' },
      { src: '', caption: 'Image five' },
      { src: '', caption: 'Image six' },
      { src: '', caption: 'Image seven' },
      { src: '', caption: 'Image eight' },
      { src: '', caption: 'Image nine' },
      { src: '', caption: 'Image ten' }
    ]
  },
  {
    wall: 'left',
    title: 'Project Six',
    category: 'Graphic / Visual',
    year: '2024',
    course: 'Personal',
    tools: ['Premiere Pro', 'After Effects', 'Procreate'],
    image: 'images/og.png',
    colour: '#8e6bd1',
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?',
    process: 'How did you approach it?',
    outcome: 'What did you make, and what happened?',
    /* TVs beside the frame that play this project's videos (like a museum video wall).
       src: the video file, e.g. 'videos/p6-reel.mp4' (put videos in public/videos/; '' = test card)
       caption: a short line shown when you walk up to it. One TV per line (add a line for a second TV; they stack two high). */
    videos: [
      { src: 'videos/ogr.mp4', caption: 'Video one' }
    ]
  },
  {
    wall: 'left',
    title: 'Project Seven', category: 'Product / Spatial', year: '2025', course: '', image: 'images/grgr.png', colour: '#e07b39',
    tools: ['Premiere Pro', 'After Effects', 'Procreate'],
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?', process: 'How did you approach it?', outcome: 'What did you make, and what happened?',
    /* This project's TVs (works the same as Project Six's) */
    videos: [
      { src: 'videos/obliv.mp4', caption: 'Video one' }
    ]
  },
  {
    wall: 'right',
    title: 'Project Eight', category: 'Design × Psychology', year: '2025', course: '', image: 'images/GH.png', colour: '#3a9fb0',
    tools: ['Photoshop', 'Procreate', 'Illustrator'],
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?', process: 'How did you approach it?', outcome: 'What did you make, and what happened?',
    /* Smaller frames stacked beside the main one (up to 3). Click one to look closer.
       src: the image file ('' = placeholder), caption: a short line shown when you look closer */
    extras: [
      { src: 'images/pp1.jpg', caption: 'Extra image one' },
      { src: 'images/pp2.jpg', caption: 'Extra image two' },
      { src: 'images/pp3.jpg', caption: 'Extra image three' }
    ]
  },
  {
    wall: 'right',
    title: 'Project Nine', category: 'UX / UI', year: '2025', course: '', image: 'images/BEER.jpg', colour: '#d8a3b4',
    tools: ['Procreate', 'Photoshop', 'Illustrator'],
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?', process: 'How did you approach it?', outcome: 'What did you make, and what happened?',
    /* This project's viewing room (works the same as Project Three's) */
    room: [
      { src: '', caption: 'Image one' },
      { src: '', caption: 'Image two' },
      { src: '', caption: 'Image three' },
      { src: '', caption: 'Image four' },
      { src: '', caption: 'Image five' },
      { src: '', caption: 'Image six' },
      { src: '', caption: 'Image seven' },
      { src: '', caption: 'Image eight' },
      { src: '', caption: 'Image nine' },
      { src: '', caption: 'Image ten' }
    ]
  },
  {
    wall: 'right',
    title: 'Project Ten', category: 'Graphic / Visual', year: '2024', course: '', image: 'images/IKMJ.jpg', colour: '#a4b83c',
    tools: ['Photoshop'],
    summary: 'One or two sentences on what this project is and why it matters.',
    brief: 'What was the problem or the brief?', process: 'How did you approach it?', outcome: 'What did you make, and what happened?'
  }
];

/* Stone benches on the walkway, running along it.
   Each entry is the project the bench sits beside (1 = first project).
   Use { at: 9, x: -100 } to shift one sideways (negative = towards the left). */
const BENCHES = [2, 6, 9];

/* The tools strip under the header.
   logo: leave '' for a placeholder badge, or the path to the tool's logo, e.g. 'images/figma.svg'
   badge: the short letters shown on the placeholder */
const TOOLS = [
  { name: 'Photoshop',      badge: 'Ps', logo: '' },
  { name: 'Illustrator',    badge: 'Ai', logo: '' },
  { name: 'After Effects',  badge: 'Ae', logo: '' },
  { name: 'Premiere Pro',   badge: 'Pr', logo: '' },
  { name: 'Figma',          badge: 'Fi', logo: '' },
  { name: 'Procreate',      badge: 'Pc', logo: '' },
  { name: 'Canva',          badge: 'Ca', logo: '' },
  { name: 'Tinkercad',      badge: 'Tc', logo: '' },
  { name: 'Blender',        badge: 'Bl', logo: '' }
];
const TOOLS_SPEED = 32;   // seconds for one full loop (bigger = slower)

/* Your logo, shown at the top left of the header.
   Leave '' to show your initials, or put the path to your logo, e.g. 'images/logo.svg'.
   A white or light-coloured version will look best on the dark glass header. */
const LOGO = '';

/* About Me — shown on the monolith at the start of the walk, and in its pop-up.
   photo: leave '' for a placeholder, or the path to your photo, e.g. 'images/me.jpg'
   sections: extra paragraphs for the pop-up, as ['Heading', 'Text'] pairs (add or remove freely) */
const ABOUT = {
  name: 'Sean Liew',
  photo: 'images/me.jpg',
  intro: 'One or two sentences introducing yourself: who you are and what you love designing.',
  sections: [
    ['What I do', 'The kind of design work you do, and how psychology shapes the way you approach it.'],
    ['Background', 'What and where you study, and anything you’re proud of so far.'],
    ['Outside the studio', 'A bit about you as a person: interests, hobbies, what inspires you.']
  ]
};

/* Contact details — shown on the great monolith at the end of the walk and in the list view.
   Leave any of them as '' to hide it. */
const CONTACT = {
  email: 'you@example.com',
  phone: '+64 21 000 0000',
  instagram: '@yourhandle',                              // what's shown
  instagramUrl: 'https://www.instagram.com/yourhandle',   // where it links to
  linkedin: 'Your Name',
  linkedinUrl: 'https://www.linkedin.com/in/yourname'
};

/* The visitors in the gallery (quiet dark-robed figures). Click one and their quote slides in on a card.
   outfit:      (not used in this style)
   quote:       the testimony itself
   from:        who actually said it, e.g. 'Jane Smith, Course Coordinator, DESIGN 301'
   project:     number of the project it's about (1 = first project), or null for none
   standsAt:    which artwork they stand in front of (1 = first project)
   Seated visitors use these instead of standsAt:
   pose: 'seated', sitsAt: the project whose bench they sit on (it must be in BENCHES),
   scale: size compared to an adult (e.g. 0.62 for a child) */
const PEOPLE = [
  {
    name: 'Freddie', standsAt: 2, outfit: 'suit', colour: '#2f5bd3',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 1
  },
  {
    name: 'Mercury', standsAt: 5, outfit: 'suit', colour: '#c8372d',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 2
  },
  {
    name: 'Ripley', standsAt: 8, outfit: 'dress', colour: '#8a4fc9',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 3
  },
  {
    name: 'Sofia', standsAt: 5, outfit: 'dress', colour: '#2e8b57',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 5
  },
  {
    name: 'Alyssa', pose: 'seated', sitsAt: 9, outfit: 'dress', colour: '#e3b21c',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 9
  },
  {
    name: 'MaoMao', pose: 'seated', sitsAt: 9, scale: 0.62, outfit: 'dress', colour: '#ec7fb0',
    quote: 'Testimony goes here. A sentence or two about working with you or about one of your projects.',
    from: 'Name, Role, Organisation',
    project: 9
  }
];
/* =========================================================
   2. SETTINGS  ← tweak how the gallery feels
   ========================================================= */
const small = window.innerWidth < 700;
const SETTINGS = {
  spacing:       720,                  // distance along the walkway from one piece to the next
  sideOffset:    small ? 430 : 560,    // how far to the side of the walkway the frames float
  walkSpeed:     1.0,                  // bigger = each scroll moves you further
  smoothing:     0.06,                 // 0.02 = floaty, 0.2 = snappy
  viewDistance:  420,                  // where you stop on the walkway when you jump to a piece
  zoomDuration:  1500,                 // how long (ms) the glide up to a piece takes when you click it
  zoomFill:      0.66,                 // how much of the screen height a piece fills when you look closer
  lookAmount:    5,                    // how far (degrees) you "look around" when moving the mouse (0 = off)
  lookSmoothing: 0.04,                 // how lazily the view follows the mouse
  entranceDoors: true,                 // the glass doors part when the site first loads (false = skip them)
  flyover:       6000,                 // ms for the opening glide from the far end back to the start (0 = no flyover)
  bob:           9,                    // how far (px) the floating frames drift up and down
  bloom:         0.9,                  // strength of the glow on the light strips and stars (0 = off)
  stars:         small ? 1600 : 2800,  // how many stars
  dust:          small ? 250 : 520,    // floating dust motes catching the light
  fog:           0.0001,               // how quickly things fade into the sky colour with distance (bigger = thicker haze)
  texMax:        1600                  // the biggest an artwork texture gets (px); the pop-up still shows the full image
};

/* ---------- The palette: deep indigo night, warm sandstone, cyan and coral light ---------- */
const PALETTE = {
  // the sky: a deep twilight blue overhead, softening to rose and peach at the horizon (stars still out)
  zenith: '#141a44', mid: '#4b4f8a', horizon: '#e8b4a4', night: '#05040c', fog: 0xb9a3b6,
  sand: '#c8956c', sandDark: '#8f5f46', stone: '#2a2433', stoneLight: '#433a4f',
  water: '#1d5f6b',
  cyan: '#45f0e0', coral: '#ff8a6a', violet: '#7a5cff',
  // painted light: warm where the low sun catches a surface, cool teal-blue in shadow
  lit: '#ffd9b4', shade: '#5b7fa0', moss: '#86b99a',
  key: 0xffb48c,       // warm low light from one side, like a desert evening
  rim: 0xb8d4dc,       // a soft, cool light from behind (only a hint of blue)
  sky: 0x4a4256, ground: 0x1e1622
};
// a few helpers keep the old names working for the rest of the file (pop-ups, viewing rooms, etc.)
const C = { blue: '#1b1838', sky: PALETTE.horizon, yellow: PALETTE.coral, pink: PALETTE.coral, cyan: PALETTE.cyan,
            lime: PALETTE.cyan, wall: PALETTE.sand, navy: '#0b0916', cream: '#efe6da' };
const INK = 0x0b0916;
const root = document.documentElement;
[['--ink', '#e9e4f5'], ['--cyan', PALETTE.cyan], ['--coral', PALETTE.coral], ['--violet', PALETTE.violet]]
  .forEach(([k, v]) => root.style.setProperty(k, v));
document.body.classList.add('theme-cosmic');

/* =========================================================
   3. THE 3D WORLD (three.js)
   Units are roughly screen pixels. y is up; the walkway is at y = 0 and winds away from you.
   ========================================================= */
const DEG = Math.PI / 180;
const EYE = 800;                                        // (the viewing rooms use this for their field of view)
const H = 720;                                          // (the viewing rooms' "wall height")
const EYE_H = 250;                                      // how high your eyes are above the walkway
const PIXEL_RATIO = Math.min(window.devicePixelRatio || 1, 2);
const pixelRatio = PIXEL_RATIO;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const lerp = THREE.MathUtils.lerp;
function seeded(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
const rnd = seeded(42);

const DISPLAY = '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
      MONO = '"JetBrains Mono", ui-monospace, Menlo, monospace',
      PIXEL = MONO;

// Placeholder "posters" for the pop-up and list (the 3D frames draw their own)
function placeholderArt(p, i) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b1838"/><stop offset="1" stop-color="#4a2e3c"/></linearGradient></defs>
    <rect width="300" height="400" fill="url(#g)"/>
    <circle cx="150" cy="${150 + (i % 3) * 20}" r="${60 + (i % 4) * 10}" fill="${PALETTE.coral}" opacity=".85"/>
    <rect x="0" y="300" width="300" height="100" fill="#0b0916" opacity=".6"/>
    <text x="24" y="368" font-family="Helvetica, Arial" font-size="13" letter-spacing="3" fill="#e9e4f5">${String(i + 1).padStart(2, '0')} — PLACEHOLDER</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
const imageFor = (p, i) => p.image || placeholderArt(p, i);
function placeholderPhoto() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 190">
    <rect width="150" height="190" fill="#1b1838"/>
    <circle cx="75" cy="72" r="32" fill="#433a4f"/>
    <path d="M18 190 q4-62 57-62 q53 0 57 62z" fill="#433a4f"/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
const aboutPhoto = () => ABOUT.photo || placeholderPhoto();
function contactItems() {
  return [
    ['Email', CONTACT.email, 'mailto:' + CONTACT.email],
    ['Phone', CONTACT.phone, 'tel:' + CONTACT.phone.replace(/[^\d+]/g, '')],
    ['Instagram', CONTACT.instagram, CONTACT.instagramUrl],
    ['LinkedIn', CONTACT.linkedin, CONTACT.linkedinUrl]
  ].filter(([, shown]) => shown);
}
const linkAttrs = url => url.startsWith('http') ? 'target="_blank" rel="noopener"' : '';

/* ---------- Renderer, scene, camera, and the glow ---------- */
const sceneEl = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(PIXEL_RATIO);
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
sceneEl.appendChild(renderer.domElement);
const world3 = new THREE.Scene();
world3.background = new THREE.Color(PALETTE.zenith);
world3.fog = new THREE.FogExp2(PALETTE.fog, SETTINGS.fog);
const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 5, 40000);
camera.rotation.order = 'YXZ';
const maxAniso = renderer.capabilities.getMaxAnisotropy();

// Film grain and a soft vignette, last of all (very light)
const FINISH_SHADER = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, grain: { value: .035 }, vignette: { value: .55 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, grain, vignette; varying vec2 vUv;
    void main() {
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      float n = fract(sin(dot(vUv * 1000.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * grain;
      vec2 c = vUv - 0.5;
      col *= 1.0 - vignette * dot(c, c) * 1.4;
      gl_FragColor = vec4(col, 1.0);
    }`
};
// A safety step straight after drawing: any pixel that came out as an invalid number (which the glow
// would otherwise smear across the whole screen as a black flash) is replaced, and very bright values are capped.
const SAFE_SHADER = {
  uniforms: { tDiffuse: { value: null } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
      gl_FragColor = vec4(clamp(c.rgb, 0.0, 4.0), 1.0);
    }`
};
// The chain of effects for one view: draw the scene, let only the brightest things glow (at half
// resolution, which is cheap), then finish. Anything brighter than "white" glows; artworks never do.
function makeFX(rend, scn, cam) {
  const composer = new EffectComposer(rend);
  composer.setPixelRatio(PIXEL_RATIO);
  composer.addPass(new RenderPass(scn, cam));
  composer.addPass(new ShaderPass(SAFE_SHADER));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), SETTINGS.bloom, .55, .96);
  const full = bloom.setSize.bind(bloom);
  bloom.setSize = (w, h) => full(Math.round(w / 2), Math.round(h / 2));   // the glow is worked out at half size (much cheaper)
  if (SETTINGS.bloom > 0) composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const finish = new ShaderPass(FINISH_SHADER);
  composer.addPass(finish);
  return { composer, bloom, finish, retro: finish };
}
function fitFX(fx) { fx.composer.setSize(innerWidth, innerHeight); }
const mainFX = makeFX(renderer, world3, camera);
function fitCamera() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  fitFX(mainFX);
}
fitCamera();
window.addEventListener('resize', fitCamera);

// Tidy-up helper: frees the memory a group of 3D things uses (geometry, materials, pictures)
function disposeObject(obj) {
  obj.traverse(o => {
    if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    mats.forEach(m => {
      if (m.userData && m.userData.shared) return;
      Object.values(m).forEach(v => { if (v && v.isTexture && !v.userData.shared) v.dispose(); });
      m.dispose();
    });
  });
  obj.removeFromParent();
}

// Draw a texture with the 2D canvas. Textures with writing are drawn again once the fonts have loaded.
const textTextures = [];
function canvasTex(w, h, draw, repeat, hasText = false) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  if (hasText) textTextures.push({ t, c, draw });
  return t;
}
Promise.all(['700 40px "Space Grotesk"', '500 20px "JetBrains Mono"', '400 20px Inter'].map(f => document.fonts.load(f).catch(() => {})))
  .then(() => textTextures.forEach(({ t, c, draw }) => {
    const g = c.getContext('2d'); g.reset ? g.reset() : g.clearRect(0, 0, c.width, c.height);
    draw(g, c.width, c.height); t.needsUpdate = true;
  }));
function roundRect(g, x, y, w, h, r) { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); }

// Loading pictures without stutter: each one is decoded in the background, shrunk to no bigger than it
// needs to be, and sent to the graphics card one per frame, never all at once.
const texJobs = [], bgJobs = [];                        // gallery pictures first; viewing-room pictures only while you're standing still
let lastMoveTime = performance.now();                    // when the camera last moved (set in tick)
const settled = () => performance.now() - lastMoveTime > 900;
const loading = { started: 0, done: 0 };
(function pumpTextures() {
  const job = texJobs.length ? texJobs.shift() : settled() ? bgJobs.shift() : null;
  if (job) job();
  requestAnimationFrame(pumpTextures);
})();
function loadTex(src, done, max = SETTINGS.texMax, rend = renderer) {
  loading.started++;
  const img = new Image(); img.decoding = 'async'; img.src = src;
  img.decode().then(() => (rend === renderer ? texJobs : bgJobs).push(() => {
    const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    let t;
    if (k < 1) {
      const c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      t = new THREE.CanvasTexture(c);
    } else { t = new THREE.Texture(img); t.needsUpdate = true; }
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso;
    rend.initTexture(t);
    loading.done++;
    done(t);
  })).catch(() => { loading.done++; console.warn('Could not load ' + src + ' (check it is in public/images/)'); });
}

/* ---------- Shared building blocks (one copy each, reused everywhere) ---------- */
const plane = new THREE.PlaneGeometry(1, 1); plane.userData.shared = true;
const unitBox = new THREE.BoxGeometry(1, 1, 1); unitBox.userData.shared = true;
const flat = opts => new THREE.MeshBasicMaterial(opts);
const shared = m => { m.userData.shared = true; return m; };
/* ---------- The painted look ----------
   Every structure uses this one material, after your references: a soft gradient from bottom to top,
   warm light on the side facing the low sun and cool teal-blue in shadow (in soft bands, like brushwork),
   a little brushy colour variation, moss gathering on top, and distance fading everything into the sky. */
const SUN_DIR = new THREE.Vector3(-.8, .32, -.6).normalize();        // where the low evening light comes from
const PAINT = {                                          // shared by every painted material (change once, changes all)
  keyDir: { value: SUN_DIR }, lit: { value: new THREE.Color(PALETTE.lit) }, shade: { value: new THREE.Color(PALETTE.shade) },
  fogColor: { value: new THREE.Color(PALETTE.fog) }, fogDensity: { value: SETTINGS.fog }, mossCol: { value: new THREE.Color(PALETTE.moss) }
};
const PAINT_VERT = `
  varying vec3 vN, vW, vIC;
  void main() {
    mat4 m = modelMatrix;
    #ifdef USE_INSTANCING
      m = modelMatrix * instanceMatrix;
    #endif
    vec4 w = m * vec4(position, 1.0);
    vW = w.xyz; vN = mat3(m) * normal;
    vIC = vec3(1.0);
    #ifdef USE_INSTANCING_COLOR
      vIC = instanceColor;
    #endif
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;
const PAINT_FRAG = `
  uniform vec3 base, topCol, lit, shade, fogColor, mossCol, keyDir;
  uniform float y0, y1, moss, brush, fogDensity;
  varying vec3 vN, vW, vIC;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float noise(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  void main() {
    vec3 N = dot(vN, vN) > 1e-8 ? normalize(vN) : vec3(0.0, 1.0, 0.0);   // (guards against a flat sliver with no direction)
    if (!gl_FrontFacing) N = -N;
    // a soft gradient up the height of the thing
    vec3 col = mix(base, topCol, smoothstep(y0, y1, vW.y)) * vIC;
    // brushwork: long vertical streaks and smaller dabs of slightly different colour
    float streak = noise(vec3(vW.x * 0.006, vW.y * 0.0009, vW.z * 0.006));
    float dab = noise(vW * 0.018);
    col *= 1.0 + (streak - 0.5) * brush + (dab - 0.5) * brush * 0.5;
    // light in soft bands: shadow, half-light, full light
    float d = dot(N, normalize(keyDir));
    float band = smoothstep(-0.08, 0.18, d) * 0.6 + smoothstep(0.42, 0.58, d) * 0.4;
    vec3 light = mix(shade, lit, band);
    light = mix(light, mix(lit, vec3(1.0), 0.3), smoothstep(0.7, 0.98, N.y) * 0.35);   // tops catch the sky
    col *= light;
    // moss on the tops of things and in patches
    float m = smoothstep(0.62, 0.78, noise(vW * 0.007) * 0.8 + N.y * 0.45 + dab * 0.15) * moss;
    col = mix(col, mossCol * mix(0.75, 1.1, band), m);
    // a gentle glow round the edges facing away from you
    vec3 toCam = cameraPosition - vW;
    vec3 V = toCam / max(length(toCam), 1e-3);
    col += lit * pow(1.0 - max(dot(N, V), 0.0), 3.0) * 0.1;
    // far things melt into the sky colour
    float dist = length(cameraPosition - vW);
    float f = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
    col = min(col, vec3(0.93));                          // painted surfaces never get bright enough to glow
    gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
  }`;
function painted({ base, top, y0 = -50, y1 = 1600, moss = 0, brush = .22 }) {
  return shared(new THREE.ShaderMaterial({
    uniforms: { ...PAINT, base: { value: new THREE.Color(base) }, topCol: { value: new THREE.Color(top || base) },
                y0: { value: y0 }, y1: { value: y1 }, moss: { value: moss }, brush: { value: brush } },
    vertexShader: PAINT_VERT, fragmentShader: PAINT_FRAG, side: THREE.DoubleSide
  }));
}
const MAT = {
  sand: painted({ base: '#d9d0c6', top: '#f6f0e8', y0: -60, y1: 400, moss: .38 }),           // paths, platforms, pads
  arch: painted({ base: '#cfd3dc', top: '#f7f2ec', y0: 0, y1: 1900, moss: .3, brush: .28 }), // the great arches
  sandDark: painted({ base: '#b9c0cc', top: '#f2eef0', y0: 0, y1: 2400, moss: .25, brush: .3 }),   // tall slabs and plinths
  stone: painted({ base: '#3b5d69', top: '#8aabab', y0: 0, y1: 1000, brush: .16 }),            // frames, screens, monoliths
  stoneLight: painted({ base: '#5d7480', top: '#9fb5b5', y0: 0, y1: 900 }),
  // glows: colours above 1 so they (and only they) bloom
  cyanGlow: shared(flat({ color: new THREE.Color(PALETTE.cyan).multiplyScalar(1.25) })),
  edgeGlow: shared(flat({ color: new THREE.Color(PALETTE.cyan).multiplyScalar(.55) })),   // the faint lines along the walkway
  coralGlow: shared(flat({ color: new THREE.Color(PALETTE.coral).multiplyScalar(2.0) })),
  ink: shared(flat({ color: INK }))
};
const box = (w, h, d, mat) => { const m = new THREE.Mesh(unitBox, mat); m.scale.set(w, h, d); return m; };

/* ---------- Sky: a deep dome with a faint glow at the horizon, and stars ---------- */
{
  const dome = new THREE.Mesh(new THREE.SphereGeometry(30000, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { zenith: { value: new THREE.Color(PALETTE.zenith) }, mid: { value: new THREE.Color(PALETTE.mid) }, horizon: { value: new THREE.Color(PALETTE.horizon) },
                fogColor: { value: new THREE.Color(PALETTE.fog) }, coral: { value: new THREE.Color(PALETTE.coral) }, sun: { value: SUN_DIR } },
    vertexShader: `varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }`,
    fragmentShader: `
      uniform vec3 zenith, mid, horizon, fogColor, coral, sun; varying vec3 vDir;
      void main() {
        float y = vDir.y;
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.22, y));                          // rose at the horizon, violet higher up,
        col = mix(col, zenith, smoothstep(0.18, 0.75, y));                               // deep blue overhead
        col = mix(fogColor, col, smoothstep(-0.05, 0.03, y));                            // below the horizon: the haze
        float s = max(dot(normalize(vec3(vDir.x, 0.0, vDir.z)), normalize(vec3(sun.x, 0.0, sun.z))), 0.0);
        col += coral * pow(s, 5.0) * (1.0 - smoothstep(0.0, 0.3, y)) * 0.5;            // the glow where the sun has just set
        gl_FragColor = vec4(col, 1.0);
      }`
  }));
  dome.renderOrder = -10;
  world3.add(dome);
}
// stars: points on a big sphere, sized by how bright they are, twinkling gently
function makeStars(n, radius, seed) {
  const r = seeded(seed), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n), ph = new Float32Array(n);
  for (let k = 0; k < n; k++) {
    const a = r() * Math.PI * 2, y = .02 + Math.pow(r(), .8) * .98, s = Math.sqrt(1 - y * y);
    pos.set([Math.cos(a) * s * radius, y * radius, Math.sin(a) * s * radius], k * 3);
    const b = r(), warm = r();
    const c = warm < .2 ? [1, .78, .62] : warm > .85 ? [.65, .95, 1] : [1, .97, .92];
    const glow = b > .97 ? 2.6 : b > .85 ? 1.4 : .75;          // a few bright ones glow
    col.set(c.map(v => v * glow), k * 3);
    size[k] = b > .97 ? 3.2 : b > .85 ? 2.2 : 1.3;
    ph[k] = r() * 6.28;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, pr: { value: PIXEL_RATIO } }, transparent: true, depthWrite: false, fog: false,
    vertexShader: `
      attribute float size, phase; attribute vec3 color; uniform float time, pr; varying vec3 vCol; varying float vTw;
      void main() {
        vCol = color; vTw = (0.7 + 0.3 * sin(time * (0.6 + fract(phase) * 1.4) + phase)) * smoothstep(0.12, 0.5, normalize(position).y);   // fainter towards the bright horizon
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * pr * clamp(30000.0 / -mv.z, 0.6, 1.6);   // gentle size attenuation
        gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w * 0.9999;
      }`,
    fragmentShader: `
      varying vec3 vCol; varying float vTw;
      void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vCol * vTw, a); }`
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
  return pts;
}
const stars = makeStars(SETTINGS.stars, 28000, 7);
world3.add(stars);

/* ---------- Light: soft indigo fill, a warm low key light, a cool rim from behind ---------- */
world3.add(new THREE.HemisphereLight(PALETTE.sky, PALETTE.ground, 1.35));
{
  const key = new THREE.DirectionalLight(PALETTE.key, 2.4); key.position.copy(SUN_DIR).multiplyScalar(1000).setY(500); world3.add(key);
  const rim = new THREE.DirectionalLight(PALETTE.rim, .55); rim.position.set(700, 400, 900); world3.add(rim);
}

/* ---------- The walkway: a gently winding line of stone slabs ---------- */
// where each piece goes along the walkway (its distance from the start)
const ROOM_GAP = 420, ANNEX_GAP = 60;
const TV = { w: 300, h: 210, d: 40, gap: 30 };
const EXTRA = { w: 200, h: 140, gap: 34 };
const annexWidth = p => p.videos && p.videos.length ? Math.ceil(p.videos.length / 2) * (TV.w + TV.gap) :
                        p.extras && p.extras.length ? EXTRA.w + 60 : 0;
const FRAME_B = 34;                                     // the stone border around a picture
const MAX_W = small ? 360 : 520, MAX_H = small ? 360 : 440;
// how far each piece's platform reaches to its left (where a viewing-room doorway goes) and to its right (screens, side frames)
const pieceLeft = p => p.room ? MAX_W / 2 + FRAME_B + 700 : MAX_W / 2 + FRAME_B + 200;
const pieceRight = p => MAX_W / 2 + FRAME_B + (annexWidth(p) ? ANNEX_GAP + annexWidth(p) + 70 : 60);
const pieceAhead = (p, side) => side === 'right' ? pieceLeft(p) : pieceRight(p);
const pieceBehind = (p, side) => side === 'right' ? pieceRight(p) : pieceLeft(p);
const PIECE_CLEAR = 250;                                // the least gap between two neighbouring platforms on the same side
const projS = [], projSide = [];
{
  let s = 1100;                                         // the first piece, a little way in
  PROJECTS.forEach((p, i) => {
    const side = p.wall === 'left' ? 'left' : 'right';
    if (i > 0) {
      const q = PROJECTS[i - 1], qSide = projSide[i - 1];
      // facing a piece on your right, its left end is further along the walk; on your left, its right end is.
      // So work out how far the last piece reaches forward and this one reaches back, and keep them apart.
      const qAhead = pieceAhead(q, qSide), pBehind = pieceBehind(p, side);
      const need = qSide === side ? qAhead + pBehind + PIECE_CLEAR : Math.max(qAhead, pBehind) + 200;
      s += Math.max(SETTINGS.spacing, need);
    }
    projS.push(s); projSide.push(side);
  });
}
const START_S = 1300;                                   // (the curve starts a little behind where you begin)
const PATH_LEN = projS[projS.length - 1] + 1500;      // the end, with room for the closing monolith
// the winding line itself: a smooth curve through points that sway left and right
const path = (() => {
  const pts = [], step = 700, n = Math.ceil((PATH_LEN + START_S + 900) / step) + 2;
  for (let k = 0; k < n; k++) {
    const z = 600 - k * step;
    pts.push(new THREE.Vector3(Math.sin(k * .55) * 380 + Math.sin(k * .21) * 220, 0, z));
  }
  const c = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  c.arcLengthDivisions = 2000;
  return c;
})();
const CURVE_LEN = path.getLength();
const sToU = s => clamp((s + START_S) / CURVE_LEN, 0, 1);
const _p = new THREE.Vector3(), _t = new THREE.Vector3();
const pathPoint = (s, out = new THREE.Vector3()) => path.getPointAt(sToU(s), out);
const pathTangent = (s, out = new THREE.Vector3()) => path.getTangentAt(sToU(s), out);
const pathNormal = (s, out = new THREE.Vector3()) => { pathTangent(s, out); return out.set(-out.z, 0, out.x).normalize(); };   // to the right

{ // the slabs, all one instanced mesh
  const SLAB = 120, n = Math.ceil((PATH_LEN + START_S) / SLAB);
  const slabs = new THREE.InstancedMesh(unitBox, MAT.sand, n);
  const d = new THREE.Object3D(), r = seeded(3), col = new THREE.Color();
  for (let k = 0; k < n; k++) {
    const s = -START_S + k * SLAB + SLAB / 2;
    pathPoint(s, d.position); pathTangent(s, _t);
    d.position.y = -14 + (r() - .5) * 3;
    d.rotation.set((r() - .5) * .01, Math.atan2(_t.x, _t.z), (r() - .5) * .012);
    d.scale.set(small ? 300 : 380, 26, SLAB - 8);
    d.updateMatrix(); slabs.setMatrixAt(k, d.matrix);
    slabs.setColorAt(k, col.setRGB(1, 1, 1).multiplyScalar(.9 + r() * .12));   // each slab a touch lighter or darker
  }
  world3.add(slabs);
  // a thin cyan light line along each edge of the walkway
  const edges = new THREE.InstancedMesh(unitBox, MAT.edgeGlow, n * 2);
  for (let k = 0; k < n; k++) {
    const s = -START_S + k * SLAB + SLAB / 2;
    pathTangent(s, _t); const yaw = Math.atan2(_t.x, _t.z);
    [-1, 1].forEach((side, j) => {
      pathPoint(s, d.position); pathNormal(s, _p);
      d.position.addScaledVector(_p, side * ((small ? 300 : 380) / 2 + 3)); d.position.y = -2;
      d.rotation.set(0, yaw, 0); d.scale.set(3, 3, SLAB - 8); d.updateMatrix();
      edges.setMatrixAt(k * 2 + j, d.matrix);
    });
  }
  world3.add(edges);
}

/* ---------- The water: a still, mirror-like teal sea that reflects everything in it ----------
   A real reflection (rendered at reduced resolution so it stays quick), gently rippled, tinted teal,
   with little pale ripple dashes on the surface like brush marks. */
const WATER = {
  flow: 1,          // how fast the water moves (0 = still, 2 = twice as fast)
  ripple: 1,        // how much the waves bend the reflection (0 = perfect mirror)
  waveSize: 1       // bigger number = smaller, busier waves
};
let REFLECT_SCALE = .4;                                  // the reflection's resolution (1 = full, smaller = quicker)
const reflSize = () => [Math.round(innerWidth * renderer.getPixelRatio() * REFLECT_SCALE), Math.round(innerHeight * renderer.getPixelRatio() * REFLECT_SCALE)];
const water = new Reflector(new THREE.PlaneGeometry(60000, 60000), {
  textureWidth: reflSize()[0], textureHeight: reflSize()[1], clipBias: .003,
  shader: {
    uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null },
                time: { value: 0 }, deep: { value: new THREE.Color(PALETTE.water) }, shallow: { value: new THREE.Color('#3f9a9a') },
                fogColor: { value: new THREE.Color(PALETTE.fog) }, fogDensity: { value: SETTINGS.fog },
                flow: { value: WATER.flow }, ripple: { value: WATER.ripple }, waveSize: { value: WATER.waveSize } },
    vertexShader: `
      uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vWorld;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: `
      uniform sampler2D tDiffuse; uniform vec3 color, deep, shallow, fogColor; uniform float time, fogDensity, flow, ripple, waveSize;
      varying vec4 vUv; varying vec3 vWorld;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        vec2 p = vWorld.xz;
        vec3 V = normalize(cameraPosition - vWorld);
        // moving waves: two layers of soft bumps sliding in different directions, so the surface never sits still
        float distW = length(cameraPosition - vWorld);
        float near = 1.0 - smoothstep(3000.0, 14000.0, distW);                 // (calmer far away, so it doesn't shimmer)
        vec2 q = p * 0.0035 * waveSize;
        vec2 f1 = vec2(time * 0.09, time * 0.05) * flow, f2 = vec2(-time * 0.06, time * 0.08) * flow;
        float h  = noise(q + f1) * 0.6 + noise(q * 2.3 + f2) * 0.3 + noise(q * 5.1 - f1 * 1.7) * 0.1;
        float hx = noise(q + vec2(0.02, 0.0) + f1) * 0.6 + noise((q + vec2(0.02, 0.0)) * 2.3 + f2) * 0.3 + noise((q + vec2(0.02, 0.0)) * 5.1 - f1 * 1.7) * 0.1;
        float hz = noise(q + vec2(0.0, 0.02) + f1) * 0.6 + noise((q + vec2(0.0, 0.02)) * 2.3 + f2) * 0.3 + noise((q + vec2(0.0, 0.02)) * 5.1 - f1 * 1.7) * 0.1;
        vec2 slope = vec2(hx - h, hz - h) / 0.02 * near;
        // the reflection wobbles with the waves
        vec2 uv = vUv.xy / max(abs(vUv.w), 1e-4) * sign(vUv.w) + slope * 0.012 * ripple;
        vec3 refl = clamp(texture2D(tDiffuse, uv).rgb, 0.0, 2.0);
        if (any(isnan(refl))) refl = shallow;
        // more mirror the flatter you look across it, more teal looking down into it
        float fres = 0.35 + 0.6 * pow(1.0 - max(V.y, 0.0), 3.0);
        vec3 body = mix(shallow, deep, smoothstep(0.2, 0.9, V.y));
        vec3 col = mix(body, refl * vec3(0.82, 0.95, 0.97), fres);
        // wave faces turned towards the low sun catch a little warm light; the troughs go a touch deeper teal
        vec3 n = normalize(vec3(-slope.x * 0.35 * ripple, 1.0, -slope.y * 0.35 * ripple));
        float lit = dot(n, normalize(vec3(-0.8, 0.32, -0.6)));
        col *= 0.93 + smoothstep(0.25, 0.45, lit) * 0.12;
        col = mix(col, deep, smoothstep(0.55, 0.3, h) * 0.18 * near);
        // pale ripple dashes, long and thin, drifting along with the water
        float dash = noise(vec2(p.x * 0.004 + time * 0.22 * flow, p.y * 0.035 + h * 1.5));
        float dash2 = noise(vec2(p.x * 0.006 - time * 0.16 * flow, p.y * 0.05 - h) + 17.0);
        float d = smoothstep(0.76, 0.86, dash) + smoothstep(0.79, 0.88, dash2) * 0.7;
        col = mix(col, vec3(0.92, 0.97, 0.96), clamp(d, 0.0, 1.0) * 0.38);
        // little glints that twinkle on the wave tops
        vec2 cell = floor(p / 40.0);
        float g = step(0.985, hash(cell)) * smoothstep(0.6, 0.75, h) * (0.5 + 0.5 * sin(time * 3.0 + hash(cell + 7.0) * 6.28)) * near;
        col += vec3(1.0, 0.92, 0.82) * g * 0.35;
        float dist = length(cameraPosition - vWorld);
        float f = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
        gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
      }`
  }
});
water.rotation.x = -Math.PI / 2; water.position.y = -48;
world3.add(water);
window.addEventListener('resize', () => water.getRenderTarget().setSize(...reflSize()));


/* ---------- Keeping things off the walkway ----------
   The walkway winds, so anything placed beside it is checked against the whole path and nudged
   further out until it's clear (so nothing clips the path or stands in your way). */
const pathSamples = [];
for (let s = -START_S; s <= PATH_LEN + 600; s += 50) pathSamples.push(pathPoint(s));
function distToPath(x, z) {
  let best = Infinity;
  for (const p of pathSamples) { const d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < best) best = d; }
  return Math.sqrt(best);
}
// push group g outwards (away from the walkway) until all its corner points are at least minDist from it
const _w = new THREE.Vector3();
function keepClear(g, corners, minDist) {
  for (let k = 0; k < 30; k++) {
    g.updateMatrixWorld(true);
    let worst = Infinity;
    for (const c of corners) { _w.copy(c).applyMatrix4(g.matrixWorld); worst = Math.min(worst, distToPath(_w.x, _w.z)); }
    if (worst >= minDist) return;
    g.position.addScaledVector(g.userData.out, 30);
  }
}
const WALK_HALF = (small ? 300 : 380) / 2;
// the footprints of everything standing in the water (as circles), so plants can find a clear spot
const obstacles = [];
const _o = new THREE.Vector3();
function addObstacle(g, x, z, r) { g.updateMatrixWorld(true); _o.set(x, 0, z).applyMatrix4(g.matrixWorld); obstacles.push({ x: _o.x, z: _o.z, r }); }
const isClear = (x, z, r) => obstacles.every(o => (o.x - x) ** 2 + (o.z - z) ** 2 >= (o.r + r) ** 2);
// an arch as one outline: outer edge, then up the inside of the opening, over the curve and down again
function archOutline(AW, AH, OW, OH) {
  const s = new THREE.Shape();
  s.moveTo(-AW / 2, 0); s.lineTo(-AW / 2, AH); s.lineTo(AW / 2, AH); s.lineTo(AW / 2, 0); s.lineTo(OW / 2, 0);
  s.lineTo(OW / 2, OH - OW / 2); s.absarc(0, OH - OW / 2, OW / 2, 0, Math.PI, false); s.lineTo(-OW / 2, 0); s.closePath();
  return s;
}

/* ---------- Monumental arches over the walkway, and brutalist walls further out ---------- */
{
  // a thick wall with a round-topped opening (like the arcade in the first reference)
  const AW = 2300, AH = 1950, OW = 1700, OH = 1550, AD = 180;
  const shape = archOutline(AW, AH, OW, OH);
  const archGeo = new THREE.ExtrudeGeometry(shape, { depth: AD, bevelEnabled: false, curveSegments: 24 }).translate(0, -48, -AD / 2);
  // between the pieces, every so often (never right beside one)
  const spots = [];
  for (let k = 0; k < projS.length - 1; k++) {
    const a = PROJECTS[k], b = PROJECTS[k + 1];
    const from = projS[k] + pieceAhead(a, projSide[k]), to = projS[k + 1] - pieceBehind(b, projSide[k + 1]);
    if (to - from > 220) spots.push((from + to) / 2);                            // only where there's a real gap between the pieces
  }
  spots.unshift(380); spots.push(PATH_LEN - 700);
  const arches = new THREE.InstancedMesh(archGeo, MAT.arch, spots.length);
  const d = new THREE.Object3D();
  spots.forEach((s, k) => {
    pathPoint(s, d.position); pathTangent(s, _t);
    d.rotation.set(0, Math.atan2(_t.x, _t.z), 0); d.scale.set(1, 1, 1); d.updateMatrix();
    arches.setMatrixAt(k, d.matrix);
    [-1, 1].forEach(side => { _o.set(side * (AW + OW) / 4, 0, 0).applyMatrix4(d.matrix); obstacles.push({ x: _o.x, z: _o.z, r: (AW - OW) / 4 + 120 }); });
  });
  world3.add(arches);
  // a glowing coral line along the inside of each arch's curve, for a bit of retro-future
  const ring = new THREE.TorusGeometry(OW / 2 - 4, 3, 6, 48, Math.PI);
  const rings = new THREE.InstancedMesh(ring, MAT.coralGlow, spots.length);
  spots.forEach((s, k) => {
    pathPoint(s, d.position); pathTangent(s, _t); d.position.y = OH - OW / 2 - 48;
    d.rotation.set(0, Math.atan2(_t.x, _t.z), 0); d.translateZ(AD / 2 + 2); d.updateMatrix();
    rings.setMatrixAt(k, d.matrix);
  });
  world3.add(rings);

  // brutalist slabs: tall, plain walls standing in the water further out, at different heights
  const walls = [], r = seeded(21);
  for (let s = -200; s < PATH_LEN + 400; s += 600 + r() * 700) {
    const side = r() < .5 ? -1 : 1;
    walls.push({ s, side, off: 1400 + r() * 900, w: 400 + r() * 900, h: 900 + r() * 1700, t: 90 + r() * 140, turn: (r() - .5) * .5 });
  }
  const okWalls = [];
  walls.forEach(w => {                                   // leave out any wall that would come near the walk
    pathPoint(w.s, d.position); pathNormal(w.s, _p); pathTangent(w.s, _t);
    d.position.addScaledVector(_p, w.side * w.off);
    d.rotation.set(0, Math.atan2(_t.x, _t.z) + w.turn, 0); d.updateMatrix();
    const near = [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0]].some(([a, b]) => {
      _w.set(a * w.t / 2, 0, b * w.w / 2).applyMatrix4(d.matrix);
      return distToPath(_w.x, _w.z) < 1100;
    });
    if (!near) okWalls.push(w);
  });
  walls.length = 0; walls.push(...okWalls);
  const wallMesh = new THREE.InstancedMesh(unitBox, MAT.sandDark, walls.length);
  const WALL_TINTS = ['#ffffff', '#f2b48c', '#a9bcd6', '#ffffff', '#e89a78', '#c4cfe0'], _wc = new THREE.Color();
  walls.forEach((w, k) => {
    pathPoint(w.s, d.position); pathNormal(w.s, _p); pathTangent(w.s, _t);
    d.position.addScaledVector(_p, w.side * w.off); d.position.y = w.h / 2 - 48;
    d.rotation.set(0, Math.atan2(_t.x, _t.z) + w.turn, 0);
    d.scale.set(w.t, w.h, w.w); d.updateMatrix();
    wallMesh.setMatrixAt(k, d.matrix);
    wallMesh.setColorAt(k, _wc.set(WALL_TINTS[k % WALL_TINTS.length]));      // pale, warm terracotta, or cool blue-grey
  });
  world3.add(wallMesh);
}

/* ---------- Floating dust motes, drifting in the light ---------- */
const dust = (() => {
  const n = SETTINGS.dust, pos = new Float32Array(n * 3), ph = new Float32Array(n), r = seeded(9);
  for (let k = 0; k < n; k++) {
    const s = r() * PATH_LEN;
    pathPoint(s, _p); pathNormal(s, _t);
    _p.addScaledVector(_t, (r() - .5) * 1800); _p.y = 20 + r() * 900;
    pos.set([_p.x, _p.y, _p.z], k * 3); ph[k] = r() * 6.28;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('phase', new THREE.BufferAttribute(ph, 1));
  const m = new THREE.Points(geo, new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, pr: { value: PIXEL_RATIO } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute float phase; uniform float time, pr; varying float vA;
      void main() {
        vec3 p = position + vec3(sin(time * 0.2 + phase) * 30.0, sin(time * 0.3 + phase * 2.0) * 40.0, cos(time * 0.17 + phase) * 30.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = pr * clamp(2400.0 / -mv.z, 1.0, 5.0);                  // nearer motes look bigger
        vA = (0.35 + 0.35 * sin(time + phase * 3.0)) * clamp(1.0 - (-mv.z - 2500.0) / 2500.0, 0.0, 1.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `varying float vA; void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(1.0, 0.82, 0.68, vA * smoothstep(0.5, 0.1, d)); }`
  }));
  m.frustumCulled = false;
  world3.add(m);
  return m;
})();

/* ---------- Pointing at things ---------- */
const clickables = [];
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
function pick(x, y) {
  ndc.set(x / innerWidth * 2 - 1, -(y / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects(clickables, false)[0];
  return hit ? { ...hit.object.userData, uv: hit.uv, object: hit.object } : null;
}
function zoomOriginAt(v) {                              // where a point in the world lands on screen
  const p = v.clone().project(camera);
  sceneEl.style.transformOrigin = `${((p.x + 1) / 2 * innerWidth).toFixed(0)}px ${((1 - p.y) / 2 * innerHeight).toFixed(0)}px`;
}
function clickable(mesh, data) { Object.assign(mesh.userData, data); clickables.push(mesh); return mesh; }

/* ---------- A place beside the walkway, facing it ----------
   Returns a group standing on the walkway's left or right, at distance s along it, turned to face the walkway.
   Inside it: x runs along the walkway (to your right as you face the group), y is up, z points at the walkway. */
function besidePath(s, side, offset = SETTINGS.sideOffset) {
  const g = new THREE.Group();
  pathPoint(s, g.position); pathNormal(s, _p);
  g.position.addScaledVector(_p, (side === 'right' ? 1 : -1) * offset);
  const look = pathPoint(s);
  g.lookAt(look.x, 0, look.z);
  g.userData.out = _p.clone().multiplyScalar(side === 'right' ? 1 : -1);
  world3.add(g);
  return g;
}
// a round stone pad on the water, under something that floats
function pad(g, r = 230) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, 40, 40), MAT.sand);
  m.position.y = -34; g.add(m);
  const glow = new THREE.Mesh(new THREE.TorusGeometry(r + 2, 2.5, 6, 64), MAT.cyanGlow);
  glow.rotation.x = Math.PI / 2; glow.position.y = -14; g.add(glow);
  return m;
}

/* ---------- The artworks: tall floating portal frames ---------- */
const floaters = [];                                    // everything that bobs gently
const frames = [];                                      // everything that lifts when you point at it
const tvs = [], extras = [], portalMats = [], roomSigns = [], roomDoorCentre = {}, roomPortal = {};

// One floating frame: a dark stone slab, a thin glowing rim, and the picture. It fits itself to the
// picture's shape (never cropped), up to maxW × maxH. The group's origin is the middle of the picture.
function portalFrame({ src, placeholder, maxW, maxH, glow = MAT.coralGlow, rend = renderer, texMax, onSize, landscape }) {
  const holder = new THREE.Group();
  const slab = new THREE.Mesh(unitBox, MAT.stone);
  const rim = new THREE.Mesh(plane, glow);
  const inset = new THREE.Mesh(plane, MAT.ink);
  const pic = new THREE.Mesh(plane, flat({ map: placeholder, color: 0xededed }));   // (a touch under white, so artworks never glow)
  holder.add(slab, rim, inset, pic);
  const size = (w, h) => {
    const bw = w + FRAME_B * 2, bh = h + FRAME_B * 2;
    slab.scale.set(bw, bh, 36); slab.position.z = 0;
    rim.scale.set(w + 10, h + 10, 1); rim.position.z = 18.5;
    inset.scale.set(w + 4, h + 4, 1); inset.position.z = 18.8;
    pic.scale.set(w, h, 1); pic.position.z = 19.2;
    if (onSize) onSize(bw, bh);
  };
  if (landscape) size(maxW, Math.min(maxH, maxW * .75)); else size(Math.min(maxW, maxH * .75), maxH);
  if (src) loadTex(src, t => {
    const ratio = t.image.width / t.image.height;
    let w = maxH * ratio, h = maxH;
    if (w > maxW) { w = maxW; h = maxW / ratio; }
    pic.material.map = t; pic.material.needsUpdate = true;
    size(w, h);
  }, texMax, rend);
  return { holder, parts: [slab, rim, inset, pic] };
}
function placeholderTex(colour, i, label = 'PLACEHOLDER', landscape = false) {
  return canvasTex(landscape ? 800 : 600, landscape ? 600 : 800, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#1b1838'); gr.addColorStop(1, '#4a2e3c');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = PALETTE.coral; g.globalAlpha = .85; g.beginPath(); g.arc(w / 2, h * .4, Math.min(w, h) * (.18 + (i % 3) * .04), 0, Math.PI * 2); g.fill(); g.globalAlpha = 1;
    g.fillStyle = 'rgba(11,9,22,.6)'; g.fillRect(0, h * .78, w, h * .22);
    g.fillStyle = '#e9e4f5'; g.font = `500 26px ${MONO}`;
    g.fillText(`${String(i + 1).padStart(2, '0')} — ${label}`, 40, h - 50);
  }, null, true);
}

// The glowing stele beside each piece: frosted dark glass with cyan light rising from its base
const steleMat = shared(new THREE.ShaderMaterial({
  transparent: true, depthWrite: false,
  uniforms: { time: { value: 0 }, glow: { value: new THREE.Color(PALETTE.cyan) } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform float time; uniform vec3 glow; varying vec2 vUv;
    void main() {
      float base = pow(1.0 - vUv.y, 3.2);
      float edge = smoothstep(0.06, 0.0, min(vUv.x, 1.0 - vUv.x)) * 0.5 + smoothstep(0.02, 0.0, 1.0 - vUv.y) * 0.6;
      float pulse = 0.9 + 0.1 * sin(time * 1.2 + vUv.y * 3.0);
      vec3 col = vec3(0.07, 0.06, 0.09) + glow * (base * 1.35 * pulse + edge * 0.45);
      gl_FragColor = vec4(col, 0.4 + base * 0.4 + edge * 0.2);
    }`
}));
function stele(g, x, num, title, sub) {
  const s = new THREE.Group(); s.position.set(x, 0, 0); g.add(s);
  const body = new THREE.Mesh(unitBox, steleMat); body.scale.set(120, 620, 22); body.position.y = 310 - 30; s.add(body);
  const text = new THREE.Mesh(plane, flat({ transparent: true, depthWrite: false, map: canvasTex(240, 1240, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.fillStyle = '#ffffff'; c.textAlign = 'center';
    c.font = `700 92px ${DISPLAY}`; c.fillText(num, w / 2, 150);
    c.fillStyle = PALETTE.cyan; c.fillRect(w / 2 - 30, 190, 60, 4);
    c.fillStyle = '#e9e4f5'; c.font = `600 30px ${DISPLAY}`;
    String(title).toUpperCase().split(/\s+/).slice(0, 6).forEach((wd, k) => c.fillText(wd, w / 2, 270 + k * 40));
    c.fillStyle = 'rgba(233,228,245,.7)'; c.font = `500 20px ${MONO}`;
    String(sub).toUpperCase().split(/\s*·\s*|\s*\/\s*/).slice(0, 4).forEach((wd, k) => c.fillText(wd, w / 2, 560 + k * 30));
  }, null, true) }));
  text.scale.set(116, 600, 1); text.position.set(0, 300 - 30, 12); s.add(text);
  return s;
}

/* ---------- The pieces themselves ---------- */
const FLOAT_Y = 140;                                    // how high the bottom of a frame floats above the walkway
const projAnchor = [];                                  // each piece's group (for "look closer")
PROJECTS.forEach((p, i) => {
  const g = besidePath(projS[i], projSide[i]);
  g.userData.side = projSide[i];
  // a long low stone platform on the water, under the frame, its stele, and any screens or doorway
  const left = pieceLeft(p), right = pieceRight(p);
  const plat = box(left + right, 40, 320, MAT.sand); plat.position.set((right - left) / 2, -34, 0); g.add(plat);
  const edge = box(left + right + 2, 3, 3, MAT.edgeGlow); edge.position.set((right - left) / 2, -14, 161); g.add(edge);
  keepClear(g, [[-left, 160], [right, 160], [0, 160], [-left / 2, 160], [right / 2, 160]].map(([x, z]) => new THREE.Vector3(x, 0, z)), WALK_HALF + 60);
  for (let x = -left; x <= right; x += 120) addObstacle(g, x, 0, 180);
  const bob = new THREE.Group(); g.add(bob);
  floaters.push({ g: bob, phase: i * 1.7 });
  const annex = new THREE.Group(); bob.add(annex);
  let f = null;
  const place = (bw, bh) => {
    p._size = [bw, bh];
    if (f) f.holder.position.y = FLOAT_Y + bh / 2;
    annex.position.set(bw / 2 + ANNEX_GAP, FLOAT_Y + MAX_H / 2 + FRAME_B, 0);
    if (p._stele) p._stele.position.x = -bw / 2 - 110;
  };
  f = portalFrame({ src: p.image, placeholder: placeholderTex(p.colour, i), maxW: MAX_W, maxH: MAX_H, onSize: place });
  bob.add(f.holder);
  p._stele = stele(g, 0, String(i + 1).padStart(2, '0'), p.title, `${p.category} · ${p.year}`);
  place(...p._size);
  f.parts.forEach(m => clickable(m, { kind: 'art', i }));
  frames.push({ holder: f.holder, kind: 'art', i, pop: 0 });
  projAnchor[i] = f.holder;
  if (p.videos && p.videos.length) buildTVs(p, i, annex);
  else if (p.extras && p.extras.length) buildExtras(p, i, annex);
  if (p.room) buildRoomPortal(p, i, g);
});

/* ---------- TVs: floating dark glass screens that play a project's videos ---------- */
function testCard(n, caption) {                         // what a screen shows until you add its video
  return canvasTex(480, 320, (c, w, h) => {
    const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#1b1838'); gr.addColorStop(1, '#3a2340');
    c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.strokeStyle = PALETTE.cyan; c.lineWidth = 2; c.beginPath(); c.arc(w / 2, h * .42, 46, 0, Math.PI * 2); c.stroke();
    c.fillStyle = PALETTE.cyan; c.beginPath(); c.moveTo(w / 2 - 14, h * .42 - 22); c.lineTo(w / 2 + 24, h * .42); c.lineTo(w / 2 - 14, h * .42 + 22); c.fill();
    c.fillStyle = '#e9e4f5'; c.font = `500 18px ${MONO}`; c.textAlign = 'center';
    c.fillText(`VIDEO ${n} · ${(caption || 'ADD A VIDEO').toUpperCase().slice(0, 24)}`, w / 2, h * .82);
  }, null, true);
}
function buildTVs(p, i, annex) {
  const n = p.videos.length, rows = n > 1 ? 2 : 1;
  p.videos.forEach((v, k) => {
    const col = Math.floor(k / rows), row = k % rows;
    const x = col * (TV.w + TV.gap) + TV.w / 2, y = rows === 1 ? 0 : (row === 0 ? 1 : -1) * (TV.h / 2 + 16);
    const tv = new THREE.Group(); tv.position.set(x, y, 0); annex.add(tv);
    const body = new THREE.Mesh(unitBox, MAT.stone); body.scale.set(TV.w + 24, TV.h + 24, TV.d); tv.add(body);
    const rim = new THREE.Mesh(plane, MAT.cyanGlow); rim.scale.set(TV.w + 8, TV.h + 8, 1); rim.position.z = TV.d / 2 + .5; tv.add(rim);
    let tex, video = null;
    if (v.src) {
      video = document.createElement('video');
      Object.assign(video, { src: v.src, muted: true, loop: true, playsInline: true, preload: 'metadata', crossOrigin: 'anonymous' });
      video.setAttribute('playsinline', '');
      tex = new THREE.VideoTexture(video); tex.colorSpace = THREE.SRGBColorSpace;
    } else tex = testCard(k + 1, v.caption);
    const screen = new THREE.Mesh(plane, flat({ map: tex, color: 0xededed })); screen.scale.set(TV.w, TV.h, 1); screen.position.z = TV.d / 2 + 1; tv.add(screen);
    [body, screen].forEach(m => clickable(m, { kind: 'tv', i, k }));
    frames.push({ holder: tv, kind: 'tv', i, k, pop: 0 });
    tvs.push({ i, k, tv, screen, video, caption: v.caption || '' });
  });
}
const _tvPos = new THREE.Vector3();
function updateTVs(active) {                            // videos play (silently) only while you're near enough to see them
  for (const t of tvs) {
    if (!t.video) continue;
    t.tv.getWorldPosition(_tvPos);
    const near = active && _tvPos.distanceTo(camera.position) < 2600;
    if (near && t.video.paused) t.video.play().catch(() => {});
    else if (!near && !t.video.paused) t.video.pause();
  }
}

/* ---------- Small frames stacked beside a main frame ---------- */
function buildExtras(p, i, annex) {
  const list = p.extras.slice(0, 3), n = list.length, step = EXTRA.h + FRAME_B * 2 * .6 + EXTRA.gap;
  list.forEach((x, k) => {
    const slot = new THREE.Group(); slot.position.y = ((n - 1) / 2 - k) * step; annex.add(slot);
    const ex = { i, k, slot, size: [EXTRA.w + 40, EXTRA.h + 40], caption: x.caption || '' };
    const f = portalFrame({
      src: x.src, placeholder: placeholderTex(p.colour, i + k + 1, 'EXTRA', true), maxW: EXTRA.w, maxH: EXTRA.h, landscape: true,
      glow: MAT.cyanGlow, onSize: (bw, bh) => { slot.position.x = bw / 2; ex.size = [bw, bh]; }
    });
    f.holder.scale.setScalar(1);
    slot.add(f.holder);
    f.parts.forEach(m => clickable(m, { kind: 'extra', i, k }));
    frames.push({ holder: f.holder, kind: 'extra', i, k, pop: 0 });
    extras.push(ex);
  });
}

/* ---------- Viewing-room portals: a tall doorway glowing with warm light ---------- */
function buildRoomPortal(p, i, g) {
  const d = new THREE.Group(); g.add(d);
  d.position.x = -(MAX_W / 2 + FRAME_B + 360);           // beyond the stele (on the same platform)
  const W = 260, Hh = 560, B = 44;
  const frame = new THREE.Mesh(new THREE.ExtrudeGeometry((() => {
    return archOutline(W + 2 * B, Hh + B, W, Hh);
  })(), { depth: 60, bevelEnabled: false, curveSegments: 20 }).translate(0, 0, -30), MAT.sand);
  d.add(frame);
  const inside = new THREE.Mesh(new THREE.ShapeGeometry((() => {
    const s = new THREE.Shape(); s.moveTo(-W / 2, 0); s.lineTo(W / 2, 0); s.lineTo(W / 2, Hh - W / 2); s.absarc(0, Hh - W / 2, W / 2, 0, Math.PI, false); s.closePath(); return s;
  })(), 20), new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, a: { value: new THREE.Color(PALETTE.coral) }, b: { value: new THREE.Color('#2a1840') } },
    vertexShader: `varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform float time; uniform vec3 a, b; varying vec2 vP;
      void main() { float t = clamp(vP.y / ${Hh.toFixed(1)}, 0.0, 1.0); vec3 c = mix(a * 1.25, b, smoothstep(0.0, 0.9, t)); c += a * 0.08 * sin(time + vP.y * 0.02); gl_FragColor = vec4(c, 1.0); }`
  }));
  inside.position.z = -2; d.add(inside);
  portalMats.push(inside.material);
  // a small sign floating just off the top corner of the doorway, always turned to face you,
  // in the same frosted-glass style as the other little plaques
  const sign = new THREE.Mesh(plane, flat({ transparent: true, depthWrite: false, color: 0xededed, map: canvasTex(512, 104, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.fillStyle = 'rgba(23,19,31,.72)'; roundRect(c, 4, 4, w - 8, h - 8, 18); c.fill();
    c.strokeStyle = 'rgba(233,228,245,.25)'; c.lineWidth = 2; c.stroke();
    c.fillStyle = PALETTE.cyan; c.fillRect(30, h - 14, w - 60, 3);
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillStyle = '#e9e4f5'; c.font = `500 34px ${MONO}`;
    c.fillText('VIEWING ROOM  →', w / 2, h / 2 - 3);
  }, null, true) }));
  sign.scale.set(240, 49, 1); sign.renderOrder = 3;
  const signY = Hh + B + 85;
  sign.position.set(W / 2 + B + 40, signY, 160); d.add(sign);          // (out in front of the arch, towards the walkway, so the doorway never hides it)
  roomSigns.push({ sign, y: signY, phase: i * 1.1 });
  clickable(sign, { kind: 'room', i });
  clickable(inside, { kind: 'room', i }); clickable(frame, { kind: 'room', i });
  roomPortal[i] = d;
  d.updateWorldMatrix(true, false);
  roomDoorCentre[i] = d.localToWorld(new THREE.Vector3(0, Hh / 2, 0));
}

/* ---------- About me: a tall monolith at the start, with your photo ---------- */
const aboutAnchor = (() => {
  const g = besidePath(560, projSide[0] === 'left' ? 'right' : 'left', SETTINGS.sideOffset);
  const back = pathPoint(-300); g.lookAt(back.x, 0, back.z);   // turned a little towards where you start, so it greets you
  keepClear(g, [[-240, 200], [240, 200]].map(([x, z]) => new THREE.Vector3(x, 0, z)), WALK_HALF + 60);
  addObstacle(g, -150, 0, 200); addObstacle(g, 150, 0, 200);
  pad(g, 200);
  const slab = box(460, 820, 70, MAT.stone); slab.position.y = 410 - 20; g.add(slab);
  const glow = box(462, 6, 72, MAT.cyanGlow); glow.position.y = -18; g.add(glow);
  const face = new THREE.Mesh(plane, flat({ map: canvasTex(460, 820, (c, w, h) => {
    c.fillStyle = '#17131f'; c.fillRect(0, 0, w, h);
    c.fillStyle = PALETTE.cyan; c.fillRect(40, 60, 50, 4);
    c.fillStyle = 'rgba(233,228,245,.75)'; c.font = `500 22px ${MONO}`; c.fillText('ABOUT ME', 40, 110);
    c.fillStyle = '#f4efe8'; c.font = `700 64px ${DISPLAY}`;
    ABOUT.name.split(' ').forEach((wd, k) => c.fillText(wd, 40, 200 + k * 70));
    c.fillStyle = 'rgba(233,228,245,.75)'; c.font = `500 20px ${MONO}`; c.fillText('DESIGN × PSYCHOLOGY', 40, 360);
    c.fillStyle = PALETTE.coral; c.font = `500 20px ${MONO}`; c.fillText('CLICK TO READ →', 40, h - 60);
  }, null, true) }));
  const front = new THREE.Group(); front.position.z = 35.5; g.add(front);     // the face and photo lift off together when pointed at
  face.scale.set(460, 820, 1); face.position.set(0, 390, 0); front.add(face);
  const photo = new THREE.Mesh(plane, flat({ color: 0xededed }));
  photo.scale.set(300, 300, 1); photo.position.set(0, 270, .5); front.add(photo);
  loadTex(aboutPhoto(), t => {
    const k = Math.min(1, t.image.width / t.image.height);
    photo.material.map = t; photo.material.needsUpdate = true;
    photo.scale.set(300 * Math.min(1, t.image.width / t.image.height), 300 * Math.min(1, t.image.height / t.image.width), 1);
  }, 800);
  [slab, face, photo].forEach(m => clickable(m, { kind: 'about' }));
  frames.push({ holder: front, kind: 'about', pop: 0, baseZ: 35.5 });
  g.userData.face = face;
  return g;
})();

/* ---------- The end: a great monolith with your contact details, and the exit ---------- */
const endLinks = [];
let endMonolith;
{
  const s = PATH_LEN - 120;
  const g = new THREE.Group(); pathPoint(s, g.position); g.lookAt(pathPoint(s - 400)); g.position.y = 0; world3.add(g);
  const W = 1300, Hh = 1000;
  const slab = box(W + 120, Hh + 260, 160, MAT.stone); slab.position.y = (Hh + 260) / 2 - 48; g.add(slab);
  const base = box(W + 124, 8, 164, MAT.cyanGlow); base.position.y = -20; g.add(base);
  const tex = canvasTex(2048, Math.round(2048 * Hh / W), (c, w, h) => {
    endLinks.length = 0;
    const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#120f1c'); gr.addColorStop(1, '#1d1626');
    c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.textAlign = 'center';
    c.fillStyle = PALETTE.cyan; c.font = `500 34px ${MONO}`; c.fillText('END OF THE WALK', w / 2, h * .16);
    c.fillStyle = '#f4efe8'; c.font = `700 140px ${DISPLAY}`;
    c.fillText('Thanks for', w / 2, h * .16 + 170); c.fillText('walking through.', w / 2, h * .16 + 320);
    c.fillStyle = 'rgba(233,228,245,.7)'; c.font = `500 30px ${MONO}`; c.fillText('GET IN TOUCH', w / 2, h * .16 + 430);
    const items = contactItems(), bw = 520, bh = 110, gap = 30, top = h * .16 + 470;
    items.forEach(([label, shown, url], k) => {
      const x = w / 2 + (k % 2 ? gap / 2 : -gap / 2 - bw), y = top + Math.floor(k / 2) * (bh + gap);
      c.fillStyle = 'rgba(255,255,255,.06)'; roundRect(c, x, y, bw, bh, 18); c.fill();
      c.strokeStyle = 'rgba(255,255,255,.18)'; c.lineWidth = 2; c.stroke();
      c.fillStyle = PALETTE.cyan; c.fillRect(x + 20, y + bh - 4, bw - 40, 3);
      c.textAlign = 'left'; c.fillStyle = 'rgba(233,228,245,.6)'; c.font = `500 20px ${MONO}`; c.fillText(label.toUpperCase(), x + 30, y + 40);
      c.fillStyle = '#f4efe8'; c.font = `600 34px ${DISPLAY}`; c.fillText(shown, x + 30, y + 84);
      endLinks.push({ x: x / w, y: y / h, w: bw / w, h: bh / h, label: label.toUpperCase(), url });
    });
    const ry = top + Math.ceil(items.length / 2) * (bh + gap) + 14;
    c.strokeStyle = PALETTE.coral; c.lineWidth = 3; roundRect(c, w / 2 - 200, ry, 400, 72, 36); c.stroke();
    c.textAlign = 'center'; c.fillStyle = PALETTE.coral; c.font = `500 28px ${MONO}`; c.fillText('↺ BACK TO THE START', w / 2, ry + 46);
    endLinks.push({ x: (w / 2 - 200) / w, y: ry / h, w: 400 / w, h: 72 / h, label: 'BACK TO THE START', restart: true });
  }, null, true);
  const face = new THREE.Mesh(plane, flat({ map: tex })); face.scale.set(W, Hh, 1); face.position.set(0, (Hh + 260) / 2 - 48, 80.5); g.add(face);
  clickable(face, { kind: 'end' });
  endMonolith = g;
}
const endLinkAt = uv => uv && endLinks.find(l => uv.x > l.x && uv.x < l.x + l.w && (1 - uv.y) > l.y && (1 - uv.y) < l.y + l.h);
function openLink(url) {
  const a = document.createElement('a');
  a.href = url;
  if (url.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
  a.click();
}
// the exit (to the break room): a narrow glowing doorway just before the end
let exitCentre, exitAnchor;
{
  const g = besidePath(PATH_LEN - 700, 'right', SETTINGS.sideOffset - 60);
  keepClear(g, [[-160, 160], [160, 160]].map(([x, z]) => new THREE.Vector3(x, 0, z)), WALK_HALF + 60);
  addObstacle(g, 0, 0, 200);
  pad(g, 160);
  const frame = box(200, 470, 50, MAT.stone); frame.position.y = 235 - 20; g.add(frame);
  const door = new THREE.Mesh(plane, flat({ color: new THREE.Color(PALETTE.cyan).multiplyScalar(1.6) }));
  door.scale.set(130, 390, 1); door.position.set(0, 215, 26); g.add(door);
  const label = new THREE.Mesh(plane, flat({ transparent: true, map: canvasTex(256, 64, (c, w, h) => {
    c.clearRect(0, 0, w, h); c.fillStyle = '#e9e4f5'; c.font = `600 34px ${DISPLAY}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('EXIT', w / 2, h / 2);
  }, null, true) }));
  label.scale.set(120, 30, 1); label.position.set(0, 490, 0); g.add(label);
  clickable(door, { kind: 'exit' }); clickable(frame, { kind: 'exit' });
  exitAnchor = door;
  g.updateWorldMatrix(true, true);
  exitCentre = door.getWorldPosition(new THREE.Vector3());
}

/* ---------- Bonsai on stone plinths, here and there along the walk ---------- */
const BONSAI_LEAF = painted({ base: '#5f9a78', top: '#c9dca0', y0: 150, y1: 520, brush: .3 });
const BONSAI_LEAF2 = painted({ base: '#7fb08a', top: '#e4e3a6', y0: 150, y1: 520, brush: .3 });
const BARK = painted({ base: '#6b4a3c', top: '#a07a62', y0: 100, y1: 400 });
const puffGeo = new THREE.IcosahedronGeometry(1, 0); puffGeo.userData.shared = true;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function branch(parent, a, b, r0, r1) {
  const dir = b.clone().sub(a), len = dir.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, len, 6), BARK);
  m.position.copy(a.clone().add(b).multiplyScalar(.5));
  m.quaternion.setFromUnitVectors(V(0, 1, 0), dir.normalize());
  parent.add(m);
}
function bonsai(parent, s = 1, seed = 1) {
  const r = seeded(seed), g = new THREE.Group(); g.scale.setScalar(s); parent.add(g);
  const pts = [V(0, 0, 0), V(-18, 60, 8), V(22, 120, -10), V(-10, 180, 6), V(8, 230, 0)];
  for (let k = 0; k < pts.length - 1; k++) branch(g, pts[k], pts[k + 1], 18 - k * 3.5, 14 - k * 3.5);
  [[2, V(-110, 150, 10), 70], [3, V(110, 200, -12), 74], [1, V(80, 100, 16), 50], [4, V(-40, 250, 0), 60], [4, V(20, 280, -4), 64]].forEach(([from, c, rr]) => {
    branch(g, pts[from], c.clone().lerp(pts[from], .2), 6, 3);
    for (let k = 0; k < 4; k++) {
      const p = new THREE.Mesh(puffGeo, k % 2 ? BONSAI_LEAF : BONSAI_LEAF2);
      p.position.set(c.x + (r() - .5) * rr * 1.2, c.y + (r() - .3) * rr * .25, c.z + (r() - .5) * rr);
      p.scale.set(rr * (.45 + r() * .2), rr * .28, rr * (.4 + r() * .2)); p.rotation.y = r() * 3;
      g.add(p);
    }
  });
  return g;
}
{
  const r = seeded(17);
  const spots = [];
  for (let k = 0; k < projS.length - 1; k++) if (k % 2 === 1) spots.push((projS[k] + projS[k + 1]) / 2);
  spots.push(200);
  const corners = [[-90, 90], [90, 90], [-90, -90], [90, -90]].map(([x, z]) => new THREE.Vector3(x, 0, z));
  spots.forEach((s0, k) => {
    // try a few spots near here (either side, a little forward or back) and use the first one that's clear
    let g = null;
    const sides = k % 2 ? ['left', 'right'] : ['right', 'left'];
    search: for (const ds of [0, 160, -160, 320, -320, 480, -480])
      for (const side of sides) {
        const c = besidePath(s0 + ds, side, WALK_HALF + 140);
        keepClear(c, corners, WALK_HALF + 40);
        if (isClear(c.position.x, c.position.z, 130)) { g = c; break search; }
        c.removeFromParent();
      }
    if (!g) return;                                      // nowhere clear nearby: leave this one out
    obstacles.push({ x: g.position.x, z: g.position.z, r: 130 });
    const plinth = box(170, 160, 170, MAT.sandDark); plinth.position.y = 80 - 14; g.add(plinth);
    const top = box(180, 10, 180, MAT.sand); top.position.y = 160 - 14; g.add(top);
    const t = bonsai(g, .8 + r() * .3, 30 + k); t.position.y = 150;
    t.rotation.y = r() * 6;
  });
}

/* ---------- Up in the sky: floating islands with waterfalls, and drifting crystals ----------
   All far out from the walkway (so they never block your view), slowly bobbing and turning.
   They're painted with the same soft gradient shading as everything else, and show in the water too. */
const SKY = {
  islands: 5,            // how many floating islands
  crystals: 21,          // how many drifting crystals
  near: 3200,            // the closest an island comes to the walkway
  far: 8000              // the furthest out
};
const skyIslands = [];                                    // { g, y, phase, spin }
const ISLAND_ROCK = painted({ base: '#7d7590', top: '#f2dccb', y0: 900, y1: 4600, brush: .35 });   // lilac underneath, warm cream on top
const ISLAND_GRASS = painted({ base: '#78ad86', top: '#d6e6a8', y0: 1500, y1: 4800, brush: .25 });
const islandRockGeo = (() => {                            // a rough upside-down cone of rock, shared by every island
  const geo = new THREE.ConeGeometry(1, 1, 9, 4).toNonIndexed();
  geo.rotateX(Math.PI); geo.translate(0, -.5, 0);         // point downwards, flat top at y = 0
  const p = geo.attributes.position, r = seeded(77), bumps = new Map();
  for (let k = 0; k < p.count; k++) {                     // jag every corner the same way wherever it's shared
    const key = `${p.getX(k).toFixed(3)},${p.getY(k).toFixed(3)},${p.getZ(k).toFixed(3)}`;
    if (!bumps.has(key)) bumps.set(key, [1 + (r() - .5) * .32, (r() - .5) * .12]);
    const [sc, dy] = bumps.get(key);
    if (p.getY(k) < -.01) p.setXYZ(k, p.getX(k) * sc, p.getY(k) + dy, p.getZ(k) * sc);
  }
  geo.computeVertexNormals(); geo.userData.shared = true;
  return geo;
})();
const islandTopGeo = new THREE.CylinderGeometry(1.04, 1, .08, 9); islandTopGeo.userData.shared = true;

// falling water: soft streaks sliding down, thinning out into mist before they reach anything
const FALL_MAT = shared(new THREE.ShaderMaterial({
  uniforms: { time: { value: 0 }, col: { value: new THREE.Color('#e9f6f4') }, fogColor: PAINT.fogColor, fogDensity: PAINT.fogDensity },
  vertexShader: `varying vec2 vUv; varying vec3 vW;
    void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  fragmentShader: `
    uniform float time, fogDensity; uniform vec3 col, fogColor; varying vec2 vUv; varying vec3 vW;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
    void main() {
      float down = 1.0 - vUv.y;                                            // 0 at the lip, 1 at the bottom
      float x = (vUv.x - 0.5) * (1.0 + down * 1.6) + 0.5;                  // the stream spreads as it falls
      float edge = smoothstep(0.0, 0.25, x) * smoothstep(1.0, 0.75, x);
      float streak = noise(vec2(x * 14.0, vUv.y * 6.0 + time * 1.4)) * 0.6 + noise(vec2(x * 30.0, vUv.y * 14.0 + time * 2.2)) * 0.4;
      float a = edge * (0.35 + streak * 0.65) * smoothstep(0.0, 0.05, vUv.y + 0.0) * (1.0 - smoothstep(0.35, 1.0, down));
      a *= 0.85;
      float dist = length(cameraPosition - vW);
      float f = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
      gl_FragColor = vec4(mix(col * (0.85 + streak * 0.12), fogColor, f), a);
    }`,
  transparent: true, depthWrite: false, side: THREE.DoubleSide
}));

{
  const r = seeded(404), span = PATH_LEN + START_S + 2000;
  for (let k = 0; k < SKY.islands; k++) {
    const s = -START_S - 600 + (k + .2 + r() * .6) * span / SKY.islands;
    const side = k % 2 ? 1 : -1;
    const off = SKY.near + r() * (SKY.far - SKY.near);
    const R = 380 + r() * 620, depth = R * (1.5 + r() * .9);
    const g = new THREE.Group();
    pathPoint(s, g.position); pathNormal(s, _p);
    g.position.addScaledVector(_p, side * off);
    const y = 1500 + r() * 2800; g.position.y = y;
    const rock = new THREE.Mesh(islandRockGeo, ISLAND_ROCK); rock.scale.set(R, depth, R); g.add(rock);
    const top = new THREE.Mesh(islandTopGeo, ISLAND_GRASS); top.scale.set(R, R, R); top.position.y = R * .03; g.add(top);
    // a little tree or two, and a pale stone on top
    for (let t = 0, n = 1 + Math.floor(r() * 2); t < n; t++) {
      const a = r() * Math.PI * 2, d = R * (.2 + r() * .45), h = R * (.35 + r() * .3);
      const trunk = new THREE.Mesh(unitBox, BARK); trunk.scale.set(R * .05, h, R * .05);
      trunk.position.set(Math.cos(a) * d, h / 2, Math.sin(a) * d); g.add(trunk);
      for (let q = 0; q < 3; q++) {
        const puff = new THREE.Mesh(puffGeo, q % 2 ? BONSAI_LEAF : BONSAI_LEAF2);
        const ps = R * (.14 + r() * .08); puff.scale.set(ps * 1.3, ps * .8, ps * 1.3);
        puff.position.set(trunk.position.x + (r() - .5) * R * .2, h + (r() - .3) * R * .1, trunk.position.z + (r() - .5) * R * .2);
        g.add(puff);
      }
    }
    if (r() < .6) {
      const stone = new THREE.Mesh(unitBox, MAT.arch); const sh = R * (.3 + r() * .4);
      stone.scale.set(R * .14, sh, R * .14); stone.position.set((r() - .5) * R * .6, sh / 2, (r() - .5) * R * .6); g.add(stone);
    }
    // one or two waterfalls pouring off the edge (two crossed sheets, so they look full from any angle)
    for (let w = 0, n = r() < .5 ? 2 : 1; w < n; w++) {
      const a = r() * Math.PI * 2, len = 1400 + r() * 1400, width = R * (.16 + r() * .1);
      const fall = new THREE.Group(); fall.position.set(Math.cos(a) * R * .96, 0, Math.sin(a) * R * .96);
      [0, Math.PI / 2].forEach(rot => {
        const sheet = new THREE.Mesh(plane, FALL_MAT); sheet.scale.set(width, len, 1);
        sheet.position.y = -len / 2 + 10; sheet.rotation.y = a + rot; sheet.renderOrder = 2; fall.add(sheet);
      });
      g.add(fall);
    }
    g.rotation.y = r() * Math.PI * 2;
    world3.add(g);
    skyIslands.push({ g, y, phase: r() * 6.28, spin: (r() - .5) * .02 });
  }
}

// crystals: tall glassy gems, lilac to pale cyan, catching the warm light on one side
const CRYSTAL_MAT = shared(new THREE.ShaderMaterial({
  uniforms: { keyDir: PAINT.keyDir, lit: PAINT.lit, fogColor: PAINT.fogColor, fogDensity: PAINT.fogDensity,
              deep: { value: new THREE.Color('#5a4fa8') }, pale: { value: new THREE.Color('#b9f1ec') }, pink: { value: new THREE.Color('#f4b9c8') } },
  vertexShader: PAINT_VERT,
  fragmentShader: `
    uniform vec3 keyDir, lit, fogColor, deep, pale, pink; uniform float fogDensity;
    varying vec3 vN, vW, vIC;
    void main() {
      vec3 N = dot(vN, vN) > 1e-8 ? normalize(vN) : vec3(0.0, 1.0, 0.0);
      vec3 toCam = cameraPosition - vW; vec3 V = toCam / max(length(toCam), 1e-3);
      float facet = fract(sin(dot(floor(N * 4.0), vec3(12.9, 78.2, 37.7))) * 43758.5);   // each face a slightly different tone
      vec3 col = mix(deep, pale, clamp(N.y * 0.5 + 0.5 + (facet - 0.5) * 0.5, 0.0, 1.0));
      col = mix(col, pink, smoothstep(0.6, 1.0, facet) * 0.4) * vIC;
      float d = dot(N, normalize(keyDir));
      col = mix(col * 0.75, col * 1.05 + lit * 0.15, smoothstep(-0.1, 0.5, d));
      col += vec3(0.85, 0.95, 1.0) * pow(1.0 - max(dot(N, V), 0.0), 2.5) * 0.35;           // bright glassy edges
      col = min(col, vec3(1.08));                                                          // (just enough for a faint shimmer)
      float dist = length(toCam);
      float f = 1.0 - exp(-fogDensity * fogDensity * dist * dist);
      gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
    }`
}));
const crystalGeo = new THREE.OctahedronGeometry(1, 0); crystalGeo.userData.shared = true;
const crystals = new THREE.InstancedMesh(crystalGeo, CRYSTAL_MAT, SKY.crystals);
const crystalData = [];
{
  const r = seeded(909), span = PATH_LEN + START_S + 2000, c = new THREE.Color();
  for (let k = 0; k < SKY.crystals; k++) {
    const s = -START_S - 600 + r() * span, side = r() < .5 ? -1 : 1;
    const pos = pathPoint(s); pathNormal(s, _p);
    pos.addScaledVector(_p, side * (1900 + r() * 5500)); pos.y = 600 + r() * 3600;
    const size = 50 + r() * 170;
    crystalData.push({ pos, y: pos.y, size, tall: 1.7 + r() * 1.2, phase: r() * 6.28, spin: .1 + r() * .25, tilt: (r() - .5) * .5 });
    crystals.setColorAt(k, c.setRGB(.9 + r() * .1, .9 + r() * .1, 1));
  }
}
crystals.frustumCulled = false;                           // (they're spread across the whole sky)
world3.add(crystals);
const _cd = new THREE.Object3D();
function updateSky(t) {
  FALL_MAT.uniforms.time.value = t;
  for (const s of skyIslands) {
    s.g.position.y = s.y + Math.sin(t * .25 + s.phase) * 40;
    s.g.rotation.y += s.spin * .016;
  }
  crystalData.forEach((c, k) => {
    _cd.position.copy(c.pos); _cd.position.y = c.y + Math.sin(t * .4 + c.phase) * 60;
    _cd.rotation.set(c.tilt, t * c.spin + c.phase, c.tilt * .5);
    _cd.scale.set(c.size, c.size * c.tall, c.size); _cd.updateMatrix();
    crystals.setMatrixAt(k, _cd.matrix);
  });
  crystals.instanceMatrix.needsUpdate = true;
}

/* ---------- Visitors: still, dark-robed figures, like the people in your references ---------- */
const people = [];
const ROBE = painted({ base: '#8f2f24', top: '#d2533a', y0: 0, y1: 330, brush: .12 });      // red cloaks, like your references
const SKIN = painted({ base: '#e8c3a8', brush: .05 });
function figure(p, seatedPose) {
  const g = new THREE.Group(), s = (p.scale || 1) * .75;   // about your own eye height
  const body = new THREE.Group(); body.scale.setScalar(s); g.add(body);
  if (seatedPose) {
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(34, 50, 150, 16), ROBE); robe.position.set(0, 140, -10); body.add(robe);
    const lap = new THREE.Mesh(new THREE.BoxGeometry(80, 40, 90), ROBE); lap.position.set(0, 80, 30); body.add(lap);
    const shins = new THREE.Mesh(new THREE.BoxGeometry(70, 80, 30), ROBE); shins.position.set(0, 40 * (s < 1 ? 1.4 : 1), 70); body.add(shins);
    const head = new THREE.Mesh(new THREE.SphereGeometry(26, 16, 12), SKIN); head.position.set(0, 245, -6); body.add(head);
  } else {
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(30, 58, 300, 18), ROBE); robe.position.y = 150; body.add(robe);
    const shoulders = new THREE.Mesh(new THREE.SphereGeometry(34, 16, 10), ROBE); shoulders.scale.set(1.25, .6, .8); shoulders.position.y = 300; body.add(shoulders);
    const head = new THREE.Mesh(new THREE.SphereGeometry(25, 16, 12), SKIN); head.scale.y = 1.15; head.position.y = 345; body.add(head);
  }
  // a faint coral line of light at their feet (so you can spot them)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(48, 1.6, 6, 40), MAT.coralGlow); ring.rotation.x = Math.PI / 2; ring.position.y = 2; g.add(ring);
  g.userData.body = body;
  return g;
}
const benchList = BENCHES.map(b => typeof b === 'number' ? { at: b, x: 0 } : { x: 0, ...b });
benchList.forEach(bn => {                               // plain stone benches on the walkway
  const i = bn.at - 1; if (projS[i] == null) return;
  const g = new THREE.Group(); pathPoint(projS[i], g.position); pathNormal(projS[i], _p);
  g.position.addScaledVector(_p, clamp(bn.x, -120, 120)); g.lookAt(pathPoint(projS[i] + 100).setY(0).add(_p.clone().multiplyScalar(clamp(bn.x, -120, 120))));
  const seat = box(110, 60, 380, MAT.sandDark); seat.position.y = 30 - 4; g.add(seat);
  world3.add(g); bn.group = g;
});
PEOPLE.forEach((p, n) => {
  let g;
  if (p.pose === 'seated') {
    const i = clamp((p.sitsAt || 1) - 1, 0, PROJECTS.length - 1);
    const bn = benchList.find(b => b.at === p.sitsAt && b.group);
    const group = PEOPLE.filter(o => o.pose === 'seated' && o.sitsAt === p.sitsAt);
    const k = group.indexOf(p);
    g = figure(p, true);
    if (bn) {
      bn.group.add(g); g.position.set(0, 0, (k - (group.length - 1) / 2) * 150);
      g.rotation.y = projSide[i] === 'right' ? -Math.PI / 2 : Math.PI / 2;   // facing the piece
    } else world3.add(g);
  } else {
    const i = clamp((p.standsAt || 1) - 1, 0, PROJECTS.length - 1);
    const group = PEOPLE.filter(o => o.pose !== 'seated' && (o.standsAt || 1) === (p.standsAt || 1));
    const slot = group.indexOf(p) - (group.length - 1) / 2;
    g = figure(p, false);
    const s = projS[i] + slot * 150;
    pathPoint(s, g.position); pathNormal(s, _p);
    g.position.addScaledVector(_p, (projSide[i] === 'right' ? 1 : -1) * ((small ? 300 : 380) / 2 - 70));
    const target = projAnchor[i].getWorldPosition(new THREE.Vector3());
    g.lookAt(target.x, 0, target.z);
    world3.add(g);
  }
  g.traverse(m => { if (m.isMesh && m.material !== MAT.coralGlow) clickable(m, { kind: 'person', n }); });
  people.push({ g, body: g.userData.body, phase: n * 1.3 });
});

let hoverHit = null, hoveredPerson = null;              // what's under the mouse

/* =========================================================
   4. THE CAMERA
   Walking: "cam" is how far along the walkway you are; it eases towards "target".
   Looking closer: the camera glides off the walkway to stand square in front of a piece,
   then glides back again when you're done.
   ========================================================= */
const CAM_START = -700;                                  // where you begin: far enough back to take in the About monolith and the first arch
const MAX_CAM = PATH_LEN - 1250;                        // stop a comfortable distance from the end monolith
let cam = CAM_START, target = CAM_START;
let tween = null;           // a glide in progress, or null
let viewing = null;         // what you're looking at (a piece's number, or 'tv', 'room' …), or null
let returnTo = 0;           // where you were on the walkway before you looked closer
let lastTime = performance.now();
/* If frames are coming slowly for a few seconds, the water's reflection is drawn at a lower resolution
   (it's the most expensive part), stepping down until things run smoothly again. */
let slowFrames = 0;
function keepSmooth(ms) {
  if (document.hidden || flying || tween) return;          // (never during the flyover or a glide: resizing mid-move would itself cause a hitch)
  slowFrames = ms > 30 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
  if (slowFrames > 90 && REFLECT_SCALE > .2) {
    REFLECT_SCALE = Math.max(.2, REFLECT_SCALE * .7);
    water.getRenderTarget().setSize(...reflSize());
    slowFrames = 0;
  }
}
// If the graphics card is overwhelmed and drops the page's 3D for a moment, let it recover by itself
renderer.domElement.addEventListener('webglcontextlost', e => e.preventDefault());
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
let focus = null;           // { pos, look } while standing in front of something
const walkPos = new THREE.Vector3(), walkLook = new THREE.Vector3();
function walkPose(c, pos = walkPos, look = walkLook) {   // where you stand at distance c, and what you look at
  pathPoint(c, pos); pos.y = EYE_H;
  pathPoint(c + 520, look); look.y = EYE_H * .92;
  return { pos, look };
}

let lookX = 0, lookY = 0, lookTargetX = 0, lookTargetY = 0;
let mouse = null;
const hoverLabel = document.getElementById('hover-label');
window.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  mouse = { x: e.clientX, y: e.clientY };
  lookTargetX = e.clientX / innerWidth * 2 - 1;
  lookTargetY = e.clientY / innerHeight * 2 - 1;
  hoverLabel.style.left = e.clientX + 'px';
  hoverLabel.style.top = e.clientY + 'px';
});
document.addEventListener('mouseleave', () => { lookTargetX = 0; lookTargetY = 0; mouse = null; });
const viewPos = i => clamp(projS[i] - SETTINGS.viewDistance, CAM_START, MAX_CAM);

const intro = document.getElementById('intro');
const caption = document.getElementById('caption');
const captionTitle = document.getElementById('caption-title');
let captionIndex = -1, lastIntroFade = -1;

/* ---- Progress rail ---- */
const rail = document.getElementById('rail');
const railFill = document.getElementById('rail-fill');
const railNum = document.getElementById('rail-num');
document.getElementById('rail-total').textContent = '/ ' + String(PROJECTS.length).padStart(2, '0');
const railDots = PROJECTS.map((p, i) => {
  const dot = document.createElement('button');
  dot.className = 'rail-dot';
  dot.dataset.title = p.title;
  dot.setAttribute('aria-label', `Go to ${p.title}`);
  dot.onclick = () => { closeQuote(); walkTo(viewPos(i)); };
  document.getElementById('rail-dots').appendChild(dot);
  return dot;
});
let railCurrent = -2;
function nearestProject() {
  let best = -1, bestDist = Infinity;
  PROJECTS.forEach((_, i) => { const d = Math.abs(cam - viewPos(i)); if (d < bestDist) { bestDist = d; best = i; } });
  return { index: best, dist: bestDist };
}
const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Glide the camera to stand at `pos` looking at `look` (or, with toWalk, back onto the walkway at distance c)
function glide(to, duration, onDone) {
  tween = { fromPos: camPos.clone(), fromLook: camLook.clone(), to, start: performance.now(), duration, onDone };
}
function tick(now) {
  const dt = Math.min((now - lastTime) / 16.67, 3);
  lastTime = now;
  keepSmooth(dt * 16.67);
  const t = now / 1000;

  // where the camera should be
  if (tween) {
    lastMoveTime = now;
    const k = clamp((now - tween.start) / tween.duration, 0, 1), e = easeInOut(k);
    let toPos, toLook;
    if (tween.to.walk != null) { cam = tween.to.walkFrom != null ? lerp(tween.to.walkFrom, tween.to.walk, e) : tween.to.walk; ({ pos: toPos, look: toLook } = walkPose(cam)); }
    else { toPos = tween.to.pos; toLook = tween.to.look; }
    if (tween.to.walkFrom != null) { camPos.copy(toPos); camLook.copy(toLook); }
    else { camPos.lerpVectors(tween.fromPos, toPos, e); camLook.lerpVectors(tween.fromLook, toLook, e); }
    if (k === 1) { const done = tween.onDone; tween = null; if (done) done(); }
  } else if (focus) {
    camPos.copy(focus.pos); camLook.copy(focus.look);
  } else {
    cam += (target - cam) * (1 - Math.pow(1 - SETTINGS.smoothing, dt));
    if (Math.abs(target - cam) > .5) lastMoveTime = now;
    walkPose(cam); camPos.copy(walkPos); camLook.copy(walkLook);
  }

  // look around a little with the mouse (only while walking)
  const free = mode === 'gallery' && viewing === null && !overlayOpen();
  const ease = 1 - Math.pow(1 - SETTINGS.lookSmoothing, dt);
  lookX += ((free ? lookTargetX : 0) - lookX) * ease;
  lookY += ((free ? lookTargetY : 0) - lookY) * ease;
  camera.position.copy(camPos);
  camera.lookAt(camLook);
  camera.rotation.y -= lookX * SETTINGS.lookAmount * DEG;
  camera.rotation.x -= lookY * SETTINGS.lookAmount * .6 * DEG;

  // things that drift, twinkle and glow
  for (const f of floaters) f.g.position.y = Math.sin(t * .6 + f.phase) * SETTINGS.bob;
  stars.material.uniforms.time.value = t;
  dust.material.uniforms.time.value = t;
  water.material.uniforms.time.value = t;
  updateSky(t);
  steleMat.uniforms.time.value = t;
  portalMats.forEach(m => { m.uniforms.time.value = t; });
  for (const r of roomSigns) { r.sign.position.y = r.y + Math.sin(t * .8 + r.phase) * 10; r.sign.lookAt(camera.position); }   // the doorway signs float and turn to you
  for (const p of people) p.body.rotation.z = Math.sin(t * 1.1 + p.phase) * .006;   // (a breath of sway, on the figure itself)

  // what's under the mouse
  hoverHit = (free && mouse && !dragStart) ? pick(mouse.x, mouse.y) : null;
  let label = '';
  if (hoverHit) {
    const k = hoverHit.kind;
    if (k === 'art') label = 'LOOK CLOSER';
    else if (k === 'about') label = 'ABOUT ME';
    else if (k === 'room') label = 'ENTER THE VIEWING ROOM';
    else if (k === 'exit') label = 'EXIT THROUGH HERE';
    else if (k === 'tv') label = 'WATCH THE VIDEO';
    else if (k === 'extra') label = 'LOOK CLOSER';
    else if (k === 'person') label = `TALK TO ${PEOPLE[hoverHit.n].name.toUpperCase()}`;
    else if (k === 'end') { const l = endLinkAt(hoverHit.uv); label = l ? l.label : ''; if (!l) hoverHit = null; }
  }
  if (PEEK.has(viewing) && !tween && mouse) label = (peekCaption ? peekCaption.toUpperCase() + ' · ' : '') + 'CLICK OR SCROLL TO CARRY ON';
  if (label && hoverLabel.textContent !== label) hoverLabel.textContent = label;
  hoverLabel.classList.toggle('show', !!label);
  sceneEl.style.cursor = hoverHit ? 'pointer' : '';

  // the piece you point at drifts gently towards you
  for (const f of frames) {
    const want = hoverHit && hoverHit.kind === f.kind && hoverHit.i === f.i && hoverHit.k === f.k ? 18 : 0;
    f.pop += (want - f.pop) * Math.min(1, .16 * dt);
    f.holder.position.z = (f.baseZ || 0) + f.pop;
  }

  // the title fades as you set off
  const introFade = easeInOut(clamp((cam - CAM_START) / 300, 0, 1));
  if (introFade !== lastIntroFade) {
    lastIntroFade = introFade;
    intro.style.opacity = (1 - introFade).toFixed(3);
    intro.style.transform = `translate(-50%, -50%) translateY(${-introFade * 40}px) scale(${1 - introFade * .06})`;
    intro.style.visibility = introFade >= 1 ? 'hidden' : '';
  }
  // caption and progress rail
  const near = nearestProject();
  const show = cam > 300 && near.dist < SETTINGS.spacing * .6 && cam < MAX_CAM - 100;
  rail.classList.toggle('hidden', cam < 300);
  const span = viewPos(PROJECTS.length - 1) - viewPos(0) || 1;
  const progress = clamp((cam - viewPos(0)) / span, 0, 1);
  railFill.style.height = `calc(${(progress * 100).toFixed(2)}% - ${(progress * 12).toFixed(1)}px)`;
  const current = cam < viewPos(0) - SETTINGS.spacing * .6 ? -1 : near.index;
  if (current !== railCurrent) {
    railCurrent = current;
    railDots.forEach((d, i) => { d.classList.toggle('current', i === current); d.classList.toggle('passed', i < current); });
    railNum.textContent = String(Math.max(current, 0) + 1).padStart(2, '0');
  }
  caption.classList.toggle('hidden', !show);
  if (near.index !== captionIndex) {
    const firstTime = captionIndex === -1;
    captionIndex = near.index;
    captionTitle.textContent = PROJECTS[captionIndex].title;
    if (!firstTime && show && captionTitle.animate)
      captionTitle.animate([{ opacity: 0, transform: 'translateY(10px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 420, easing: 'cubic-bezier(.2,.8,.3,1)' });
  }

  // draw (skipped while the list view or a full-screen room covers the gallery)
  const covered = mode !== 'gallery' || document.body.classList.contains('room-open') || document.body.classList.contains('break-open');
  updateTVs(!covered);
  if (!covered) { mainFX.finish.uniforms.time.value = t % 100; mainFX.composer.render(); }
  requestAnimationFrame(tick);
}

function walkTo(z) { target = clamp(z, CAM_START, MAX_CAM); }

// Stand square in front of something: `obj` faces along its own +z; fit a w × h area into view
const _c = new THREE.Vector3(), _n = new THREE.Vector3(), _q = new THREE.Quaternion();
function focusOn(obj, w, h, key, onDone, fill = SETTINGS.zoomFill) {
  if (tween || viewing !== null) return;
  viewing = key; returnTo = cam;
  document.body.classList.add('zooming');
  obj.getWorldPosition(_c); obj.getWorldQuaternion(_q);
  _n.set(0, 0, 1).applyQuaternion(_q); _n.y = 0; _n.normalize();
  const vfov = camera.fov * DEG, hfov = 2 * Math.atan(Math.tan(vfov / 2) * camera.aspect);
  const dist = Math.max((h / 2) / Math.tan(vfov / 2) / fill, (w / 2) / Math.tan(hfov / 2) / .85, 260);
  const pos = _c.clone().addScaledVector(_n, dist);
  focus = { pos, look: _c.clone() };
  glide({ pos, look: focus.look }, SETTINGS.zoomDuration, onDone);
}
// Walk up to artwork i, face it, then open its project page
function lookCloser(i) {
  if (!PROJECTS[i]) return;
  const [w, h] = PROJECTS[i]._size || [MAX_W, MAX_H];
  focusOn(projAnchor[i], w, h + 60, i, () => openProject(i));
}
// Things you step up to for a closer look, then click or scroll to carry on
const PEEK = new Set(['tv', 'extra']);
let peekCaption = '';
function watchTV(i, k) {
  const t = tvs.find(t => t.i === i && t.k === k);
  if (!t || tween || viewing !== null) return;
  peekCaption = t.caption;
  focusOn(t.tv, TV.w + 120, TV.h + 120, 'tv', () => { if (t.video) { t.video.muted = false; t.video.play().catch(() => {}); } }, .62);
}
function lookAtExtra(i, k) {
  const ex = extras.find(e => e.i === i && e.k === k);
  if (!ex || tween || viewing !== null) return;
  peekCaption = ex.caption;
  focusOn(ex.slot, ex.size[0] + 100, ex.size[1] + 100, 'extra', null, .6);
}
function lookAtAbout() {
  if (tween || viewing !== null) return;
  const face = aboutAnchor.userData.face;
  focusOn(face, 500, 860, 'about', openAbout);
}
function goToExit() {
  if (tween || viewing !== null) return;
  focusOn(exitAnchor, 200, 640, 'exit', () => {
    zoomOriginAt(exitCentre);
    document.body.classList.add('door-zoom');
    setTimeout(openBreak, 650);
  });
}
function goToRoom(i) {
  if (tween || viewing !== null) return;
  const d = roomPortal[i];
  const centre = new THREE.Object3D(); centre.position.set(0, 280, 0); d.add(centre);
  focusOn(centre, 360, 760, 'room', () => {
    zoomOriginAt(roomDoorCentre[i]);
    document.body.classList.add('door-zoom');
    setTimeout(() => openRoom(i, true), 650);
    centre.removeFromParent();
  });
}
// Turn back and return to where you were on the walkway
function stepBack() {
  peekCaption = '';
  tvs.forEach(t => { if (t.video) t.video.muted = true; });
  const { pos, look } = walkPose(returnTo, new THREE.Vector3(), new THREE.Vector3());
  focus = null;
  glide({ pos, look }, SETTINGS.zoomDuration * .85, () => {
    cam = target = returnTo;
    viewing = null;
    document.body.classList.remove('zooming');
  });
}

/* =========================================================
   5. INPUT: scroll, drag/swipe, keyboard, arrow buttons
   ========================================================= */
const scene = document.getElementById('scene');
let mode = 'gallery';
window.addEventListener('wheel', e => {
  if (mode !== 'gallery' || overlayOpen()) return;
  e.preventDefault();
  if (entering) return openDoors();
  if (flying) return skipFlyover();
  if (PEEK.has(viewing) && !tween) return stepBack();
  if (viewing !== null) return;
  closeQuote();
  const lineHeight = e.deltaMode === 1 ? 30 : 1;
  walkTo(target + (e.deltaY + e.deltaX) * lineHeight * SETTINGS.walkSpeed * 1.2);
}, { passive: false });
let dragStart = null, dragged = false;
scene.addEventListener('pointerdown', e => { dragStart = { x: e.clientX, y: e.clientY, target }; dragged = false; scene.classList.add('dragging'); });
window.addEventListener('pointermove', e => {
  if (!dragStart || viewing !== null) return;
  const dx = dragStart.x - e.clientX, dy = dragStart.y - e.clientY;
  if (Math.abs(dx) + Math.abs(dy) > 6) { dragged = true; closeQuote(); }
  walkTo(dragStart.target + (dy + dx) * 2.4);
});
window.addEventListener('pointerup', () => { dragStart = null; scene.classList.remove('dragging'); });
window.addEventListener('keydown', e => {
  if (entering) { openDoors(); return; }
  if (flying) { skipFlyover(); return; }
  if (e.key === 'Escape') {
    if (document.body.classList.contains('viewer-open')) return closeViewer();
    if (document.body.classList.contains('room-open')) return closeRoom();
    if (PEEK.has(viewing) && !tween) return stepBack();
    closeQuote(); closeBreak(); return closeProject();
  }
  if (mode !== 'gallery' || overlayOpen() || viewing !== null) return;
  const k = e.key.toLowerCase();
  if (k === 'arrowup' || k === 'w')   { walkTo(target + SETTINGS.spacing * .5); e.preventDefault(); }
  if (k === 'arrowdown' || k === 's') { walkTo(target - SETTINGS.spacing * .5); e.preventDefault(); }
  if (k === 'arrowright' || k === 'd') step(1);
  if (k === 'arrowleft' || k === 'a')  step(-1);
});
function step(dir) {
  const here = nearestProject();
  let i = here.index;
  if (cam < viewPos(0) - 50 && dir > 0) i = 0;
  else i = clamp(i + dir, 0, PROJECTS.length - 1);
  walkTo(viewPos(i));
}
document.getElementById('next').onclick = () => step(1);
document.getElementById('prev').onclick = () => step(-1);
sceneEl.addEventListener('click', e => {
  if (PEEK.has(viewing) && !tween && !dragged) return stepBack();
  if (dragged || tween || viewing !== null || overlayOpen()) return;
  const hit = pick(e.clientX, e.clientY);
  if (hit && hit.kind === 'person') return openQuote(hit.n);
  if (quoteOpen()) return closeQuote();
  if (!hit) return;
  if (hit.kind === 'exit') return goToExit();
  if (hit.kind === 'room') return goToRoom(hit.i);
  if (hit.kind === 'about') return lookAtAbout();
  if (hit.kind === 'art') return lookCloser(hit.i);
  if (hit.kind === 'tv') return watchTV(hit.i, hit.k);
  if (hit.kind === 'extra') return lookAtExtra(hit.i, hit.k);
  if (hit.kind === 'end') { const l = endLinkAt(hit.uv); if (l && l.restart) walkTo(CAM_START); else if (l) openLink(l.url); }
});
document.getElementById('caption-open').onclick = () => lookCloser(captionIndex);

/* =========================================================
   6. LIST VIEW
   ========================================================= */
const rows = document.getElementById('list-rows');
const preview = document.getElementById('preview');
preview.querySelector('img')?.remove();
// Each hover picture is shrunk to a small thumbnail once, ahead of time, and kept ready in the preview box.
// Hovering a row just shows its thumbnail, so nothing has to load or decode while you move between rows.
const thumbs = new Map();
function thumbFor(key, src) {
  if (thumbs.has(key)) return thumbs.get(key);
  const c = document.createElement('canvas'), dpr = Math.min(devicePixelRatio || 1, 2);
  c.width = Math.round(220 * dpr); c.height = Math.round(220 * 4 / 3 * dpr);
  preview.appendChild(c); thumbs.set(key, c);
  const img = new Image(); img.decoding = 'async';
  img.onload = () => {                                 // crop to fill, like object-fit: cover
    const k = Math.max(c.width / img.width, c.height / img.height), w = img.width * k, h = img.height * k;
    c.getContext('2d').drawImage(img, (c.width - w) / 2, (c.height - h) / 2, w, h);
  };
  img.src = typeof src === 'function' ? src() : src;   // only worked out the first time
  return c;
}
let shownThumb = null;
function showPreview(key, src) {
  const c = thumbFor(key, src);
  if (shownThumb && shownThumb !== c) shownThumb.classList.remove('on');
  c.classList.add('on'); shownThumb = c;
  preview.classList.add('show');
}
function prepareThumbs() {                             // make them all while the list fades in, a few per frame
  const jobs = PROJECTS.map((p, i) => () => thumbFor(i, () => imageFor(p, i)));
  jobs.push(() => thumbFor('about', aboutPhoto));
  (function next() { const job = jobs.shift(); if (job) { job(); (window.requestIdleCallback || requestAnimationFrame)(next); } })();
}

PROJECTS.forEach((p, i) => {
  const row = document.createElement('button');
  row.className = 'row-item';
  row.style.setProperty('--i', i + 1);   // for the staggered fade-in
  row.innerHTML = `
    <span class="num">${String(i + 1).padStart(2, '0')}</span>
    <span class="name">${p.title}</span>
    <span class="cat">${p.category}</span>
    <span class="yr">${p.year}</span>`;
  row.onclick = () => openProject(i);
  row.onmouseenter = () => showPreview(i, () => imageFor(p, i));
  row.onmouseleave = () => preview.classList.remove('show');
  rows.appendChild(row);
});
// About row (top of the list)
const aboutRow = document.createElement('button');
aboutRow.className = 'row-item';
aboutRow.innerHTML = `<span class="num">00</span><span class="name">About me</span><span class="cat">${ABOUT.name}</span><span class="yr"></span>`;
aboutRow.onclick = openAbout;
aboutRow.onmouseenter = () => showPreview('about', aboutPhoto);
aboutRow.onmouseleave = () => preview.classList.remove('show');
document.getElementById('list-about').appendChild(aboutRow);

// Contact rows (bottom of the list)
contactItems().forEach(([label, shown, url], k) => {
  const a = document.createElement('a');
  a.className = 'row-item';
  a.href = url;
  if (url.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
  a.style.setProperty('--i', PROJECTS.length + 2 + k);
  a.innerHTML = `<span class="num">→</span><span class="name">${shown}</span><span class="cat">${label}</span><span class="yr"></span>`;
  document.getElementById('list-contact').appendChild(a);
});

// the preview follows the mouse smoothly: moved with a GPU transform once per frame, only while the list is open
let pvX = 0, pvY = 0, pvTX = 0, pvTY = 0, pvLoop = false;
window.addEventListener('mousemove', e => {
  pvTX = e.clientX + 24; pvTY = e.clientY - 140;
  if (mode === 'list' && !pvLoop) { pvLoop = true; requestAnimationFrame(movePreview); }
}, { passive: true });
function movePreview() {
  pvX += (pvTX - pvX) * .35; pvY += (pvTY - pvY) * .35;
  preview.style.transform = `translate3d(${pvX.toFixed(1)}px, ${pvY.toFixed(1)}px, 0)`;
  if (Math.abs(pvTX - pvX) + Math.abs(pvTY - pvY) > .5) requestAnimationFrame(movePreview); else pvLoop = false;
}

function setMode(m) {
  mode = m;
  document.body.classList.toggle('list-mode', m === 'list');
  if (m === 'list') prepareThumbs();
  document.getElementById('btn-gallery').setAttribute('aria-pressed', m === 'gallery');
  document.getElementById('btn-list').setAttribute('aria-pressed', m === 'list');
  preview.classList.remove('show');
}
document.getElementById('btn-gallery').onclick = () => setMode('gallery');
document.getElementById('btn-list').onclick = () => setMode('list');

/* =========================================================
   7. PROJECT POP-UP
   ========================================================= */
function openProject(i) {
  const p = PROJECTS[i];
  if (!p) return;
  document.getElementById('m-img').src = imageFor(p, i);
  document.getElementById('m-meta').textContent = [p.category, p.course, p.year].filter(Boolean).join('  ·  ');
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-summary').textContent = p.summary;
  document.getElementById('m-sections').innerHTML = toolChips(p.tools) +
    [['The brief', p.brief], ['Process', p.process], ['Outcome', p.outcome]]
      .filter(([, text]) => text)
      .map(([h, text]) => `<h3>${h}</h3><p class="body">${text}</p>`).join('') +
    (p.room ? `<button class="m-room" data-room="${i}">Enter the viewing room →</button>` : '');
  document.body.classList.add('modal-open');
  document.getElementById('modal').scrollTop = 0;
  preview.classList.remove('show');
}
document.getElementById('m-sections').addEventListener('click', e => {
  const b = e.target.closest('.m-room');
  if (!b) return;
  closeProject();
  setTimeout(() => openRoom(+b.dataset.room, false), 350);
});
// the "Tools used" badges in a project's pop-up (matched to TOOLS by name or badge letters, so the logos carry over)
function toolChips(list) {
  if (!list || !list.length) return '';
  const chips = list.map(name => {
    const t = TOOLS.find(t => [t.name, t.badge].some(v => v && v.toLowerCase() === String(name).toLowerCase())) || { name, badge: String(name).slice(0, 2) };
    const mark = t.logo ? `<img src="${t.logo}" alt="">` : `<span class="tool-badge">${t.badge || t.name.slice(0, 2)}</span>`;
    return `<span class="m-tool"><span class="tool-logo">${mark}</span>${t.name}</span>`;
  }).join('');
  return `<h3>Tools used</h3><div class="m-tools">${chips}</div>`;
}
function openAbout() {
  document.getElementById('m-img').src = aboutPhoto();
  document.getElementById('m-meta').textContent = 'About me';
  document.getElementById('m-title').textContent = ABOUT.name;
  document.getElementById('m-summary').textContent = ABOUT.intro;
  const contact = contactItems().map(([label, shown, url]) =>
    `<a href="${url}" ${linkAttrs(url)} style="color:inherit">${label}: ${shown}</a>`).join('<br>');
  document.getElementById('m-sections').innerHTML =
    ABOUT.sections.map(([h, text]) => `<h3>${h}</h3><p class="body">${text}</p>`).join('') +
    (contact ? `<h3>Get in touch</h3><p class="body">${contact}</p>` : '');
  document.body.classList.add('modal-open');
  document.getElementById('modal').scrollTop = 0;
  preview.classList.remove('show');
}
function closeProject() {
  if (!document.body.classList.contains('modal-open')) return;
  document.body.classList.remove('modal-open');
  if (viewing !== null) setTimeout(stepBack, 250);   // let the page fade, then turn back
}
document.getElementById('modal-close').onclick = closeProject;

/* ---- Full-size viewer: click a picture to zoom in on that spot, click again to zoom back out.
   Scroll to zoom in and out, and drag to look around while zoomed in. ---- */
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerHint = document.getElementById('viewer-hint');
const vz = { s: 1, x: 0, y: 0 };                       // zoom, and how far the picture is shifted
const VZ_MAX = 6;
function vzApply() {
  viewerImg.style.transform = `translate(${vz.x.toFixed(1)}px, ${vz.y.toFixed(1)}px) scale(${vz.s.toFixed(3)})`;
  viewer.classList.toggle('zoomed', vz.s > 1.01);
  viewerHint.textContent = vz.s > 1.01 ? 'Drag to look around · scroll or click to zoom out' : 'Click or scroll to zoom in';
}
// zoom to s, keeping the point under the cursor (cx, cy) where it is
function vzTo(s, cx, cy) {
  s = clamp(s, 1, VZ_MAX);
  const r = viewer.getBoundingClientRect();
  const ox = cx - (r.left + r.width / 2), oy = cy - (r.top + r.height / 2);    // the cursor, from the middle of the screen
  vz.x = ox - (ox - vz.x) * s / vz.s; vz.y = oy - (oy - vz.y) * s / vz.s;
  vz.s = s;
  if (s <= 1.01) { vz.s = 1; vz.x = vz.y = 0; }
  vzKeepInView(); vzApply();
}
function vzKeepInView() {                              // don't let the picture be dragged right off the screen
  const w = viewerImg.clientWidth * vz.s, h = viewerImg.clientHeight * vz.s;
  const mx = Math.max(0, (w - innerWidth) / 2 + 60), my = Math.max(0, (h - innerHeight) / 2 + 60);
  vz.x = clamp(vz.x, -mx, mx); vz.y = clamp(vz.y, -my, my);
}
function openViewer(src) {
  viewerImg.src = src;
  vz.s = 1; vz.x = vz.y = 0; vzApply();
  document.body.classList.add('viewer-open');
}
function closeViewer() { document.body.classList.remove('viewer-open'); }
document.getElementById('m-img').addEventListener('click', e => openViewer(e.target.src));
document.getElementById('viewer-close').onclick = closeViewer;
let vDrag = null, vMoved = false;
viewerImg.addEventListener('click', e => {
  e.stopPropagation();
  if (vMoved) return;
  if (vz.s > 1.01) return vzTo(1, e.clientX, e.clientY);
  // zoom in far enough to see real detail (at least 2.5×, more for big pictures)
  const natural = viewerImg.naturalWidth / Math.max(1, viewerImg.clientWidth);
  vzTo(clamp(Math.max(2.5, natural), 2.5, VZ_MAX), e.clientX, e.clientY);
});
viewer.addEventListener('wheel', e => {
  e.preventDefault();
  vzTo(vz.s * Math.exp(-e.deltaY * (e.deltaMode === 1 ? .05 : .0022)), e.clientX, e.clientY);
}, { passive: false });
viewer.addEventListener('click', e => { if (e.target === viewer) closeViewer(); });   // click the dark area to close
viewer.addEventListener('pointerdown', e => {
  if (vz.s <= 1.01 || e.target !== viewerImg) return;
  vDrag = { x: e.clientX, y: e.clientY, ox: vz.x, oy: vz.y }; vMoved = false;
  viewer.classList.add('dragging'); e.preventDefault();
});
window.addEventListener('pointermove', e => {
  if (!vDrag) return;
  const dx = e.clientX - vDrag.x, dy = e.clientY - vDrag.y;
  if (Math.abs(dx) + Math.abs(dy) > 4) vMoved = true;
  vz.x = vDrag.ox + dx; vz.y = vDrag.oy + dy; vzKeepInView(); vzApply();
});
window.addEventListener('pointerup', () => { vDrag = null; viewer.classList.remove('dragging'); setTimeout(() => vMoved = false, 0); });

/* =========================================================
   7b. QUOTE CARD
   ========================================================= */
const card = document.getElementById('quote-card');
let cardFor = -1;   // which visitor's quote is showing

function overlayOpen() {
  const c = document.body.classList;
  return c.contains('modal-open') || c.contains('break-open') || c.contains('room-open');
}
function quoteOpen() { return document.body.classList.contains('quote-open'); }

function openQuote(n) {
  const p = PEOPLE[n];
  if (!p || n === cardFor && quoteOpen()) return;
  const switching = quoteOpen();
  cardFor = n;
  card.style.setProperty('--accent', PALETTE.coral);
  document.getElementById('qc-quote').textContent = p.quote || '';
  const from = document.getElementById('qc-from');
  from.textContent = p.from || '';
  from.hidden = !p.from;

  // Optional link to the project the quote is about
  const projBtn = document.getElementById('qc-project');
  const proj = p.project ? PROJECTS[p.project - 1] : null;
  projBtn.hidden = !proj;
  if (proj) {
    projBtn.textContent = `About: ${proj.title} →`;
    projBtn.onclick = () => { closeQuote(); lookCloser(p.project - 1); };
  }

  if (switching) {                       // already open: just swap the words with a soft fade
    const body = document.getElementById('qc-body');
    body.classList.remove('qc-swap'); void body.offsetWidth; body.classList.add('qc-swap');
  }
  document.body.classList.add('quote-open');
}
function closeQuote() {
  if (!quoteOpen()) return;
  document.body.classList.remove('quote-open');
  cardFor = -1;
}

document.getElementById('qc-close').onclick = closeQuote;
// Clicking anywhere outside the card (header, buttons, list…) closes it too
document.addEventListener('click', e => {
  if (quoteOpen() && !card.contains(e.target) && !sceneEl.contains(e.target)) closeQuote();
});

/* =========================================================
   7b2. BREAK ROOM — a pixel-art landscape drawn in code (320 × 180, scaled up)
   ========================================================= */
const scenery = document.getElementById('scenery');
const sctx = scenery.getContext('2d');
const SW = 320, SH = 180;
let sceneLayers = null, cloudX = 0, breakRAF = 0;

function layer() { const c = document.createElement('canvas'); c.width = SW; c.height = SH; return c; }
function blob(g, cx, cy, r, col) {             // a pixel circle
  g.fillStyle = col;
  for (let y = -r; y <= r; y++) {
    const w = Math.floor(Math.sqrt(r * r - y * y));
    g.fillRect(Math.round(cx - w), Math.round(cy + y), w * 2 + 1, 1);
  }
}
function ragged(g, cx, cy, r, cols, rnd, n = 14) {   // a leafy clump: many small blobs, lit from the top-left
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2, d = rnd() * r * 0.75;
    const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.9;
    const lit = (x - cx) * -0.6 + (y - cy) * -0.8;   // towards the light = lighter
    const col = lit > r * 0.25 ? cols[2] : lit > -r * 0.2 ? cols[1] : cols[0];
    blob(g, x, y, Math.max(2, r * (0.3 + rnd() * 0.25)), col);
  }
}
function pine(g, x, base, h, cols, rnd) {          // a stacked, jagged pine tree
  const tiers = Math.max(4, Math.round(h / 9));
  for (let t = 0; t < tiers; t++) {
    const y = base - h + (t / tiers) * h;
    const w = 2 + (t / tiers) * h * 0.32;
    for (let k = 0; k < 6; k++) {
      const ox = (rnd() - 0.5) * w * 1.4, oy = rnd() * (h / tiers);
      blob(g, x + ox, y + oy, 1 + w * 0.3, ox > w * 0.15 ? cols[0] : ox < -w * 0.2 ? cols[2] : cols[1]);
    }
  }
}

function buildScene() {
  const rnd = seeded(7);
  // sky (back layer)
  const sky = layer(), g0 = sky.getContext('2d');
  const bands = ['#8db3c3', '#90b6c5', '#94b9c7', '#99bdca', '#a2c3cd'];
  bands.forEach((c, i) => { g0.fillStyle = c; g0.fillRect(0, Math.round(i * 22), SW, 23); });
  g0.fillStyle = '#a9c6cc'; g0.fillRect(0, 110, SW, 70);

  // clouds (their own layer so they can drift)
  const cl = layer(), g1 = cl.getContext('2d'), rc = seeded(3);
  const cloud = (cx, cy, s) => {
    for (let i = 0; i < 22; i++) {
      const x = cx + (rc() - 0.5) * 70 * s, y = cy - rc() * 34 * s + Math.abs(x - cx) * 0.3;
      const r = (6 + rc() * 9) * s;
      blob(g1, x + 1, y + 2, r, '#c9cfc9');                         // shaded underside
      blob(g1, x, y, r, y < cy - 14 * s ? '#f6f3d8' : '#e6e6d4');   // lit tops
    }
  };
  cloud(70, 92, 1.15); cloud(150, 102, 0.6); cloud(255, 104, 0.55);

  // everything in front (transparent above the hills)
  const fr = layer(), g = fr.getContext('2d');
  // far hills
  g.fillStyle = '#9bbf5e';
  for (let x = 0; x < SW; x++) { const y = 112 + Math.sin(x / 34) * 3 + Math.sin(x / 11) * 1; g.fillRect(x, Math.round(y), 1, SH); }
  // pines along the hills
  [[16, 112, 40], [36, 114, 54], [92, 113, 40], [110, 112, 58], [175, 116, 30], [196, 114, 50], [226, 116, 40], [252, 118, 30]]
    .forEach(([x, b, h]) => pine(g, x, b, h, ['#5f8a3e', '#86ad4a', '#a8c665'], rnd));
  // mid meadow
  g.fillStyle = '#a3c25f';
  for (let x = 0; x < SW; x++) { const y = 120 + Math.sin(x / 50 + 1) * 3; g.fillRect(x, Math.round(y), 1, SH); }
  g.fillStyle = '#4f7d52';
  for (let x = 0; x < SW; x++) { const y = 136 + Math.sin(x / 40 + 2) * 3; g.fillRect(x, Math.round(y), 1, SH); }
  g.fillStyle = '#466f49';
  for (let x = 0; x < SW; x++) { const y = 152 + Math.sin(x / 30) * 2; g.fillRect(x, Math.round(y), 1, SH); }
  // grass streaks
  for (let i = 0; i < 90; i++) { g.fillStyle = rnd() > 0.5 ? '#5a8a58' : '#3f6542'; g.fillRect(Math.round(rnd() * SW), Math.round(140 + rnd() * 40), 3 + Math.round(rnd() * 6), 1); }
  // round bushes / cypresses in the meadow
  const bush = ['#2d4f35', '#3f6b45', '#5b8b55'];
  [[165, 132, 13], [228, 124, 15], [276, 118, 15]].forEach(([x, y, r]) => {
    for (let k = 0; k < 3; k++) ragged(g, x, y - k * r * 0.7, r * (1 - k * 0.18), bush, rnd, 12);
  });
  // a wooden park bench in the meadow, facing us
  const benchX = 196, benchY = 150;                     // where its seat sits
  const wood = ['#6b4a2e', '#8a6239', '#a87a48'], iron = '#2a2a2c';
  g.fillStyle = 'rgba(20,40,24,.45)'; g.fillRect(benchX - 2, benchY + 13, 48, 3);           // shadow on the grass
  g.fillStyle = iron;                                                                         // legs and frame
  [[0, 0], [41, 0]].forEach(([ox]) => { g.fillRect(benchX + ox, benchY - 12, 3, 26); });
  g.fillRect(benchX + 3, benchY + 6, 38, 1);
  [-12, -8].forEach((dy, k) => {                                                              // two backrest slats
    g.fillStyle = wood[1]; g.fillRect(benchX - 2, benchY + dy, 48, 3);
    g.fillStyle = wood[2]; g.fillRect(benchX - 2, benchY + dy, 48, 1);
    g.fillStyle = wood[0]; g.fillRect(benchX - 2, benchY + dy + 2, 48, 1);
  });
  [0, 3].forEach(dy => {                                                                       // two seat slats
    g.fillStyle = wood[2]; g.fillRect(benchX - 3, benchY + dy, 50, 2);
    g.fillStyle = wood[0]; g.fillRect(benchX - 3, benchY + dy + 2, 50, 1);
  });
  g.fillStyle = iron; [[ -4, -1], [46, -1]].forEach(([ox]) => g.fillRect(benchX + ox, benchY - 2, 2, 5));   // armrests

  // big dark foreground bushes
  const dark = ['#1e3a26', '#2b4d33', '#3e6644'];
  [[10, 158, 26], [40, 150, 24], [78, 138, 22], [100, 150, 20], [120, 160, 22], [306, 170, 22]].forEach(([x, y, r]) => ragged(g, x, y, r, dark, rnd, 22));
  sceneLayers = { sky, cl, fr };
}

function drawScene() {
  if (!sceneLayers) buildScene();
  cloudX = (cloudX + 0.04) % SW;
  sctx.drawImage(sceneLayers.sky, 0, 0);
  const x = Math.round(cloudX);
  sctx.drawImage(sceneLayers.cl, x, 0); sctx.drawImage(sceneLayers.cl, x - SW, 0);   // drifting, wrapping clouds
  sctx.drawImage(sceneLayers.fr, 0, 0);
  breakRAF = requestAnimationFrame(drawScene);
}

// keep the pixels crisp and fill the screen without stretching (re-runs on resize and when entering full screen)
function fitScenery() {
  const s = Math.max(innerWidth / SW, innerHeight / SH);
  scenery.style.inset = 'auto';                           // (first, so it doesn't wipe out the left/top set below)
  scenery.style.width = SW * s + 'px'; scenery.style.height = SH * s + 'px';
  scenery.style.left = (innerWidth - SW * s) / 2 + 'px';
  scenery.style.top = (innerHeight - SH * s) + 'px';     // anchored to the bottom: any cropping comes off the sky, never the meadow
}
window.addEventListener('resize', fitScenery);
document.addEventListener('fullscreenchange', () => setTimeout(fitScenery, 50));

function openBreak() {
  fitScenery();
  cancelAnimationFrame(breakRAF); drawScene();
  document.body.classList.add('break-open');
  hoverLabel.classList.remove('show');
}
function closeBreak() {
  if (!document.body.classList.contains('break-open')) return;
  document.body.classList.remove('break-open');
  document.body.classList.remove('door-zoom');                              // the view eases back out of the doorway
  setTimeout(() => { cancelAnimationFrame(breakRAF); stepBack(); }, 800);   // then step back from the door
}
document.getElementById('break-back').onclick = closeBreak;

/* =========================================================
   7b3. VIEWING ROOMS
   A small square room for one project, drawn in 3D in the same style as the gallery:
   sticker walls, a yellow rail, checkerboard floor and open sky. You stand in the middle and can turn
   all the way round; the pictures hang on the three walls without the door, which is behind you.
   ========================================================= */
const VR = { camZ: 0, eye: -40 };                      // where you stand (in the middle) and your eye height
const vroom = document.getElementById('vroom');
const vrScene = document.getElementById('vr-scene');
const vrRenderer = new THREE.WebGLRenderer({ antialias: true });
vrRenderer.setPixelRatio(pixelRatio);
vrRenderer.outputColorSpace = THREE.SRGBColorSpace;
vrRenderer.toneMapping = THREE.NoToneMapping;
vrRenderer.shadowMap.enabled = true;                    // the frames cast long soft shadows across the floor
vrRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
vrScene.appendChild(vrRenderer.domElement);
const vrCam = new THREE.PerspectiveCamera(50, 1, 5, 20000);
vrCam.rotation.order = 'YXZ';
/* The look of the viewing rooms, matching the walkway: no walls, just dark stone frames with a coral glow
   standing on warm sandstone that runs off into the night, under the stars. Change these to restyle it. */
const ROOM_STYLE = {
  sky: ['#020208', '#06040f', '#120c22', '#24183a'],   // night sky, top to horizon
  floor: '#a9785e',                                    // warm sandstone
  haze: 0x120e22,                                      // the far floor fades into this (the rooms keep their night look)
  frame: PALETTE.stone,                                // the frames
  light: PALETTE.key,                                  // warm low light
  stars: 1600
};
const room3 = new THREE.Scene();
room3.background = canvasTex(4, 512, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  ROOM_STYLE.sky.forEach((c, k) => gr.addColorStop([0, .45, .78, 1][k], c));
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
});
room3.fog = new THREE.FogExp2(ROOM_STYLE.haze, .00022);
room3.add(new THREE.HemisphereLight(PALETTE.sky, PALETTE.ground, 1.3));
{ const rim = new THREE.DirectionalLight(PALETTE.rim, 1.1); rim.position.set(900, 500, 900); room3.add(rim); }
const vrSun = new THREE.DirectionalLight(ROOM_STYLE.light, 2.4);
vrSun.position.set(-1300, 900, -700);                 // low and to one side, for long shadows
vrSun.castShadow = true;
vrSun.shadow.mapSize.set(2048, 2048);
Object.assign(vrSun.shadow.camera, { left: -1700, right: 1700, top: 1700, bottom: -1700, near: 100, far: 5000 });
vrSun.shadow.bias = -.0005; vrSun.shadow.radius = 4;
room3.add(vrSun);
// the floor, stretching away into the dark
{
  const floor = new THREE.Mesh(new THREE.CircleGeometry(9000, 64), new THREE.MeshLambertMaterial({ color: ROOM_STYLE.floor }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -H / 2; floor.receiveShadow = true;
  room3.add(floor);
}
// stars (the same twinkling kind as over the walkway)
const roomStars = makeStars(ROOM_STYLE.stars, 9000, 11);
room3.add(roomStars);
const vrFX = makeFX(vrRenderer, room3, vrCam);
function fitRoom() {
  vrCam.aspect = innerWidth / innerHeight;
  vrCam.fov = 2 * Math.atan(innerHeight / 2 / EYE) / DEG;
  vrCam.updateProjectionMatrix();
  vrRenderer.setSize(innerWidth, innerHeight);
  fitFX(vrFX);
}
fitRoom();
window.addEventListener('resize', fitRoom);

let vrContent = null, vrClick = [], vrFrames = [], vrHover = null;
let vrYaw = 0, vrYawTarget = 0, vrPitch = 0, vrRAF = 0, vrFromDoor = false, vrMouse = null, vrBuiltFor = -1;
let vrDrag = null, vrDragged = false;

// a placeholder picture for an empty slot (also what the full-size viewer shows for it)
function roomPlaceholder(colour, n, landscape) {
  const w = landscape ? 400 : 300, h = landscape ? 300 : 400;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * 2}" height="${h * 2}">
    <rect width="${w}" height="${h}" fill="#f4f2ec"/>
    <rect x="${w * .1}" y="${h * .1}" width="${w * .8}" height="${h * .64}" fill="${colour}" opacity=".35"/>
    <text x="${w / 2}" y="${h * .5}" text-anchor="middle" font-family="Helvetica, Arial" font-weight="700" font-size="${h * .2}" fill="#111">${String(n).padStart(2, '0')}</text>
    <text x="${w / 2}" y="${h * .87}" text-anchor="middle" font-family="Helvetica, Arial" font-size="${h * .045}" letter-spacing="3" fill="#777">ADD AN IMAGE</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function roomPlaceholderTex(colour, n, landscape) {
  return canvasTex(landscape ? 400 : 300, landscape ? 300 : 400, (g, w, h) => {
    g.fillStyle = '#1b1838'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2b2546'; g.fillRect(w * .1, h * .1, w * .8, h * .64);
    g.fillStyle = '#e9e4f5'; g.textAlign = 'center'; g.font = `700 ${Math.round(h * .2)}px ${DISPLAY}`; g.fillText(String(n).padStart(2, '0'), w / 2, h * .52);
    g.font = `${Math.round(h * .045)}px ${MONO}`; g.fillText('ADD AN IMAGE', w / 2, h * .88);
  }, null, true);
}

const roomCache = {};                                  // each room is built once, then kept, so going back in is instant
const roomBlank = canvasTex(4, 4, g => { g.fillStyle = C.cream; g.fillRect(0, 0, 4, 4); });   // shown for a moment while a picture loads
// the frames: dark stone, with a thin coral line of light just inside
const woodMat = new THREE.MeshStandardMaterial({ color: ROOM_STYLE.frame, roughness: .75, metalness: .05 });
const woodLightMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(PALETTE.coral).multiplyScalar(2) });
// a box-section rectangle frame: border b wide, depth d, around a w × h opening
function frameRing(w, h, b, d) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 - b, -h / 2 - b); s.lineTo(w / 2 + b, -h / 2 - b); s.lineTo(w / 2 + b, h / 2 + b); s.lineTo(-w / 2 - b, h / 2 + b); s.closePath();
  const hole = new THREE.Path();
  hole.moveTo(-w / 2, -h / 2); hole.lineTo(-w / 2, h / 2); hole.lineTo(w / 2, h / 2); hole.lineTo(w / 2, -h / 2); hole.closePath();
  s.holes.push(hole);
  return new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: true, bevelThickness: 2, bevelSize: 2, bevelSegments: 1 }).translate(0, 0, -d / 2);
}
// One freestanding frame, standing on the floor (y = 0 is the floor), facing +z.
// It fits itself to the picture's shape, up to maxW × maxH.
function standingFrame({ placeholder, src, maxW, maxH, landscape, rend }) {
  const g = new THREE.Group(), holder = new THREE.Group(); g.add(holder);
  const B = 30, D = 46;                                // border width and depth of the wood
  const outer = new THREE.Mesh(new THREE.BufferGeometry(), woodMat);
  const lip = new THREE.Mesh(new THREE.BufferGeometry(), woodLightMat);     // a thin lighter edge just inside
  const back = new THREE.Mesh(plane, new THREE.MeshStandardMaterial({ color: '#2a211a', roughness: .9 }));
  const pic = new THREE.Mesh(plane, flat({ map: placeholder, color: 0xededed }));
  [outer, back].forEach(m => { m.castShadow = true; m.receiveShadow = true; });
  holder.add(outer, lip, back, pic);
  const size = (w, h) => {
    outer.geometry.dispose(); outer.geometry = frameRing(w + 12, h + 12, B, D);
    lip.geometry.dispose(); lip.geometry = frameRing(w, h, 6, D - 14);
    back.scale.set(w + 12, h + 12, 1); back.position.z = -D / 2 + 3;
    pic.scale.set(w, h, 1); pic.position.z = 2;
    holder.position.y = (h + 12) / 2 + B;              // stands on the floor
  };
  if (landscape) size(maxW, Math.min(maxH, maxW * .75)); else size(Math.min(maxW, maxH * .75), maxH);
  if (src) loadTex(src, t => {
    const ratio = t.image.width / t.image.height;
    let w = maxH * ratio, h = maxH;
    if (w > maxW) { w = maxW; h = maxW / ratio; }
    pic.material.map = t; pic.material.needsUpdate = true;
    size(w, h);
  }, 900, rend);
  outer.castShadow = true;
  return { g, holder, parts: [outer, lip, back, pic] };
}

const ROOM_UPPER = 390;                                // how far above the floor the upper row of pictures floats
function buildRoom(i) {
  const p = PROJECTS[i];
  if (vrContent) vrContent.visible = false;
  vrContent = new THREE.Group(); room3.add(vrContent);
  vrClick = []; vrFrames = []; vrBuiltFor = i;
  const floorY = -H / 2;
  // The way back: an empty doorframe standing behind you, with the gallery's warm daylight showing through it
  {
    const dg = new THREE.Group(); dg.position.set(0, floorY, 760); dg.rotation.y = Math.PI; vrContent.add(dg);
    const dw = 230, dh = 470, B = 28, D = 50;
    const ring = new THREE.Mesh(frameRing(dw, dh, B, D), woodMat); ring.position.y = dh / 2 + B; ring.castShadow = true; dg.add(ring);
    const view = new THREE.Mesh(plane, flat({ map: canvasTex(128, 256, (c, w, h) => {   // a glimpse of the walkway through it
      const gr = c.createLinearGradient(0, 0, 0, h);
      gr.addColorStop(0, '#05040c'); gr.addColorStop(.62, '#24183a'); gr.addColorStop(.7, PALETTE.coral); gr.addColorStop(.74, '#120c22'); gr.addColorStop(1, '#06050f');
      c.fillStyle = gr; c.fillRect(0, 0, w, h);
      for (let k = 0; k < 40; k++) { c.fillStyle = 'rgba(255,255,255,' + (.3 + Math.random() * .6) + ')'; c.fillRect(Math.random() * w, Math.random() * h * .6, 1.5, 1.5); }
      c.strokeStyle = PALETTE.cyan; c.lineWidth = 2; c.beginPath(); c.moveTo(w * .5 - 4, h * .72); c.lineTo(w * .2, h); c.moveTo(w * .5 + 4, h * .72); c.lineTo(w * .8, h); c.stroke();
    }) }));
    view.scale.set(dw, dh, 1); view.position.y = dh / 2 + B; dg.add(view);
    const plaque = new THREE.Mesh(plane, flat({ map: canvasTex(512, 64, (c, w, h) => {
      c.fillStyle = '#17131f'; c.fillRect(0, 0, w, h); c.fillStyle = PALETTE.cyan; c.fillRect(0, h - 3, w, 3);
      c.fillStyle = '#e9e4f5'; c.font = `500 24px ${MONO}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('← BACK TO THE GALLERY', w / 2, h / 2 + 1);
    }, null, true) }));
    plaque.scale.set(240, 30, 1); plaque.position.set(0, dh + 2 * B + 40, 0); dg.add(plaque);
    [ring, view, plaque].forEach(m => { m.userData = { door: true }; vrClick.push(m); });
  }
  // The pictures stand in a wide arc around you (leaving the doorway clear behind you), in order from
  // left to right. With lots of pictures they go in two rows on the same circle: one standing on the floor,
  // and one floating gently above it, set in the gaps between the lower ones, so every picture can be seen.
  const items = (p.room || []).slice(0, 24);
  const n = items.length;
  const twoRows = n > 8;
  const span = Math.min(290, Math.max(60, (twoRows ? Math.ceil(n / 2) : n) * 34));   // how much of the circle they spread over (degrees)
  const perRow = twoRows ? Math.ceil(n / 2) : n;
  items.forEach((item, k) => {
    if (!item) return;
    const upper = twoRows && k % 2 === 1;
    const slot = twoRows ? Math.floor(k / 2) + (upper ? .5 : 0) : k;         // upper ones sit between the lower ones
    const a = (-span / 2 + span * (slot + (twoRows ? .25 : .5)) / perRow) * DEG;
    const r = twoRows ? 1000 : 760;
    const landscape = !item.src && k % 3 === 0;
    const f = standingFrame({
      placeholder: item.src ? roomBlank : roomPlaceholderTex(p.colour, k + 1, landscape), src: item.src,
      maxW: twoRows ? 360 : 330, maxH: twoRows ? 280 : 360, landscape, rend: vrRenderer
    });
    const baseY = floorY + (upper ? ROOM_UPPER : 0);
    f.g.position.set(Math.sin(a) * r, baseY, -Math.cos(a) * r);
    f.g.rotation.y = -a;                                  // facing you
    vrContent.add(f.g);
    const src = item.src || roomPlaceholder(p.colour, k + 1, landscape);
    f.parts.forEach(m => { m.userData = { n: k, src, caption: item.caption || '' }; vrClick.push(m); });
    vrFrames.push({ holder: f.holder, n: k, pop: 0, float: upper ? f.g : null, baseY, phase: k * 1.3 });
  });
  roomCache[i] = { content: vrContent, click: vrClick, frames: vrFrames };
}
function showRoom(i) {                                 // switch to room i (building it the first time)
  if (vrBuiltFor === i) return;
  const r = roomCache[i];
  if (!r) return buildRoom(i);
  if (vrContent) vrContent.visible = false;
  vrContent = r.content; vrClick = r.click; vrFrames = r.frames; vrBuiltFor = i;
  vrContent.visible = true;
}

function vrTick(now) {
  vrYaw += (vrYawTarget - vrYaw) * 0.09;
  const look = vrMouse ? (vrMouse[1] / innerHeight - 0.5) * -8 : 0;        // tilt a little up or down with the mouse
  vrPitch += (look - vrPitch) * 0.05;
  vrCam.position.set(0, VR.eye, VR.camZ);
  vrCam.rotation.set(vrPitch * DEG, -vrYaw * DEG, 0);
  // which picture is under the mouse
  vrHover = null;
  if (vrMouse && !vrDrag) {
    ndc.set(vrMouse[0] / innerWidth * 2 - 1, -(vrMouse[1] / innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, vrCam);
    const hit = raycaster.intersectObjects(vrClick, false)[0];
    vrHover = hit ? hit.object.userData : null;
  }
  for (const f of vrFrames) {
    const want = vrHover && !vrHover.door && vrHover.n === f.n ? 12 : 0;
    f.pop += (want - f.pop) * 0.18;
    f.holder.position.z = f.pop;
    if (f.float) f.float.position.y = f.baseY + Math.sin((now || 0) * .0008 + f.phase) * 8;   // the upper row drifts very gently
  }
  if (vrHover) { hoverLabel.textContent = vrHover.door ? 'BACK TO THE GALLERY' : (vrHover.caption ? vrHover.caption.toUpperCase() + ' · ' : '') + 'VIEW FULL SIZE'; hoverLabel.style.left = vrMouse[0] + 'px'; hoverLabel.style.top = vrMouse[1] + 'px'; }
  hoverLabel.classList.toggle('show', !!vrHover);
  vrScene.style.cursor = vrHover ? 'pointer' : '';
  vrFX.finish.uniforms.time.value = ((now || 0) * .001) % 100;
  roomStars.material.uniforms.time.value = (now || 0) * .001;
  vrFX.composer.render();
  vrRAF = requestAnimationFrame(vrTick);
}

function openRoom(i, fromDoor) {
  const p = PROJECTS[i];
  if (!p || !p.room) return;
  showRoom(i);
  vrFromDoor = fromDoor;
  document.getElementById('vr-title').innerHTML = `${p.title}<small>Viewing room</small>`;
  vrYaw = -18; vrYawTarget = 0;                                             // turn gently into the room as you arrive
  cancelAnimationFrame(vrRAF); vrRAF = requestAnimationFrame(vrTick);
  document.body.classList.add('room-open');
}
function closeRoom() {
  if (!document.body.classList.contains('room-open')) return;
  document.body.classList.remove('room-open');
  hoverLabel.classList.remove('show');
  setTimeout(() => cancelAnimationFrame(vrRAF), 700);
  if (vrFromDoor) {
    document.body.classList.remove('door-zoom');                            // ease back out of the doorway
    setTimeout(stepBack, 800);
  }
}
document.getElementById('vr-back').onclick = closeRoom;

// looking around: scroll, drag, arrow keys
const vrTurn = d => { vrYawTarget += d; };            // all the way round, as far as you like
vroom.addEventListener('wheel', e => { e.preventDefault(); vrTurn((e.deltaY + e.deltaX) * (e.deltaMode === 1 ? 2.4 : 0.08)); }, { passive: false });
vrScene.addEventListener('pointerdown', e => { vrDrag = { x: e.clientX, yaw: vrYawTarget }; vrDragged = false; vrScene.classList.add('dragging'); });
window.addEventListener('pointermove', e => {
  if (document.body.classList.contains('room-open')) vrMouse = [e.clientX, e.clientY];
  if (!vrDrag) return;
  const dx = e.clientX - vrDrag.x;
  if (Math.abs(dx) > 5) vrDragged = true;
  vrYawTarget = vrDrag.yaw - dx * 0.18;
});
window.addEventListener('pointerup', () => { vrDrag = null; vrScene.classList.remove('dragging'); });
window.addEventListener('keydown', e => {
  if (!document.body.classList.contains('room-open') || document.body.classList.contains('viewer-open')) return;
  if (e.key === 'ArrowRight' || e.key === 'd') vrTurn(20);
  if (e.key === 'ArrowLeft' || e.key === 'a') vrTurn(-20);
});
// clicking a picture opens it full size
// (it checks what's under the pointer at the moment you click: while the button is held down the
//  room treats it as a possible drag, so the hover from before can't be relied on)
vrScene.addEventListener('click', e => {
  if (vrDragged) return;
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, vrCam);
  const hit = raycaster.intersectObjects(vrClick, false)[0], d = hit && hit.object.userData;
  if (!d) return;
  hoverLabel.classList.remove('show');
  if (d.door) return closeRoom();
  openViewer(d.src);
});

/* =========================================================
   7c. CUSTOM CURSOR (mouse and trackpad only)
   ========================================================= */
if (window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('custom-cursor');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mx = -100, my = -100, rx = -100, ry = -100;
  const clickable = 'a, button, .art, .person, .row-item, [role="button"]';

  window.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    document.body.classList.add('cursor-in');
    // grow the ring over anything clickable (or a visitor you're hovering)
    ring.classList.toggle('active', !!e.target.closest?.(clickable) || !!hoverHit);
  });
  window.addEventListener('pointerdown', () => ring.classList.add('pressed'));
  window.addEventListener('pointerup', () => ring.classList.remove('pressed'));
  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-in'));

  // the ring trails slightly behind the dot
  (function follow() {
    rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
    ring.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px)`;
    requestAnimationFrame(follow);
  })();
}
/* =========================================================
   8. START
   People who've asked their device to reduce motion get the
   list view first. They can still switch to the gallery.
   ========================================================= */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  SETTINGS.smoothing = 1;
  SETTINGS.zoomDuration = 1;
  SETTINGS.lookAmount = 0;
  setMode('list');
}
document.getElementById('brand-name').textContent = ABOUT.name;

// Tools strip: the list is added twice so the scroll can loop without a gap
const toolItem = t => `<span class="tool">
    <span class="tool-logo">${t.logo ? `<img src="${t.logo}" alt="">` : `<span class="tool-badge">${t.badge || t.name.slice(0, 2)}</span>`}</span>
    <span>${t.name}</span>
  </span>`;
const toolsTrack = document.getElementById('tools-track');
toolsTrack.innerHTML = TOOLS.map(toolItem).join('') +
  `<span aria-hidden="true" style="display:contents">${TOOLS.map(toolItem).join('')}</span>`;
toolsTrack.style.setProperty('--tools-speed', TOOLS_SPEED + 's');

// Logo (or initials until you add one). Clicking it takes you back to the start of the gallery.
const logo = document.getElementById('logo');
const initials = ABOUT.name.split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
logo.innerHTML = LOGO ? `<img src="${LOGO}" alt="${ABOUT.name} logo">` : `<span class="logo-mark">${initials}</span>`;
logo.onclick = () => { closeQuote(); closeProject(); setMode('gallery'); walkTo(CAM_START); };
document.getElementById('intro-name').textContent = ABOUT.name;

/* ---- Entrance: doors, then a flyover ----
   Your name is split across the two doors. The light in the gap brightens, the doors swing open
   onto the far end of the gallery, and then the camera glides backwards down the whole corridor
   — past every piece — to the start, where your title fades in. */
const entrance = document.getElementById('entrance');
const nameParts = ABOUT.name.trim().split(/\s+/);
document.getElementById('e-first').textContent = nameParts[0] || '';
document.getElementById('e-last').textContent = nameParts.slice(1).join(' ');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let entering = SETTINGS.entranceDoors && !reduceMotion;
let flying = false;
let doorTimers = [];
const FLY_FROM = MAX_CAM;                            // the far end of the walk, by the closing monolith

// the gentle glide back to the start: eases in, cruises, then settles softly
function startFlyover(delay = 0) {
  if (!SETTINGS.flyover || reduceMotion) { cam = target = CAM_START; startWarmingRooms(); return; }
  flying = true;
  cam = target = FLY_FROM;
  document.body.classList.add('flyover');
  setTimeout(() => {
    if (!flying || tween) return;                     // (already skipped)
    glide({ walkFrom: FLY_FROM, walk: CAM_START }, SETTINGS.flyover, endFlyover);
  }, delay);
}
function endFlyover() {
  flying = false;
  startWarmingRooms();
  target = cam;
  document.body.classList.remove('flyover');
}
function skipFlyover() {                             // a scroll, click or key hurries you to the start
  if (!flying) return;
  glide({ walkFrom: cam, walk: CAM_START }, 800, endFlyover);
}
window.addEventListener('pointerdown', () => { if (flying && !entering) skipFlyover(); });

function openDoors() {
  if (!entering) return;
  entering = false;
  doorTimers.forEach(clearTimeout);
  entrance.classList.add('glow', 'open');
  // the glass doors part onto the far end of the walk; as they clear the screen, the glide back begins
  scene.animate([{ filter: 'brightness(.55)' }, { filter: 'brightness(1)' }],
                { duration: 2200, easing: 'cubic-bezier(.55, 0, .3, 1)' });
  startFlyover(1500);
  setTimeout(() => entrance.remove(), 2700);         // by now the doors are past the edges of the screen
}

// The loading screen: shows how many artworks are ready, then fades and the doors take over
const loaderEl = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderNum = document.getElementById('loader-num');
function begin() {
  if (entering) {
    entrance.addEventListener('click', openDoors);
    doorTimers.push(setTimeout(() => entrance.classList.add('glow'), 500));
    doorTimers.push(setTimeout(openDoors, 1700));
  } else {
    entrance.remove();
    startFlyover(400);                               // no doors: just the flyover
  }
}
if (entering) { cam = target = FLY_FROM; document.body.classList.add('flyover'); }
(function waitForArt(t0) {
  const total = Math.max(1, loading.started), k = Math.min(1, loading.done / total);
  if (loaderBar) loaderBar.style.transform = `scaleX(${k.toFixed(3)})`;
  if (loaderNum) loaderNum.textContent = String(Math.round(k * 100)).padStart(2, '0') + '%';
  if (k >= 1 || performance.now() - t0 > 6000) {     // ready (or taking too long: carry on anyway)
    if (loaderEl) { loaderEl.classList.add('done'); setTimeout(() => loaderEl.remove(), 900); }
    return setTimeout(begin, 300);
  }
  setTimeout(() => waitForArt(t0), 120);
})(performance.now());

// Get everything onto the graphics card before the flyover: draw the whole world once, out of sight,
// with nothing left out for being off screen, so there's no hiccup the first time something comes into view.
const warmRT = new THREE.WebGLRenderTarget(64, 64);
function warmUp() {
  const culled = [];
  world3.traverse(o => { if (o.frustumCulled) { o.frustumCulled = false; culled.push(o); } });
  renderer.setRenderTarget(warmRT); renderer.render(world3, camera);
  renderer.setRenderTarget(null);
  culled.forEach(o => { o.frustumCulled = true; });
}
try {
  (renderer.compileAsync ? renderer.compileAsync(world3, camera) : Promise.resolve(renderer.compile(world3, camera))).then(warmUp, warmUp);
  setTimeout(warmUp, 1500);                            // and once more after the artworks have had a moment to load
} catch (e) { /* not important */ }
requestAnimationFrame(tick);

// Get the viewing rooms ready in the background a few seconds after the page loads, one at a time:
// build each room, prepare its shaders and draw it once out of sight, so walking in is smooth.
function warmRooms() {
  const todo = PROJECTS.map((p, i) => p.room ? i : -1).filter(i => i >= 0);
  const idle = window.requestIdleCallback || (fn => setTimeout(fn, 200));
  const next = () => {
    if (!todo.length) return;
    if (document.body.classList.contains('room-open')) return setTimeout(next, 2000);   // not while you're in one
    if (flying || !settled()) return setTimeout(next, 500);                              // nor while you're moving (only once you've stood still a moment)
    const i = todo.shift(), was = vrBuiltFor;
    showRoom(i);
    vrCam.position.set(0, VR.eye, VR.camZ); vrCam.rotation.set(0, 0, 0);
    const culled = [];                                   // draw every part, not just what's in front
    vrContent.traverse(o => { if (o.frustumCulled) { o.frustumCulled = false; culled.push(o); } });
    try { vrRenderer.compile(room3, vrCam); vrFX.composer.render(); } catch (e) { /* not important */ }
    culled.forEach(o => { o.frustumCulled = true; });
    if (was >= 0 && was !== i) showRoom(was);
    idle(() => setTimeout(next, 600));
  };
  idle(next);
}
// (started only once the opening flyover has finished, so it never competes with it)
var roomsWarming = roomsWarming || false;                             // (var, so it works even if called before this line runs)
function startWarmingRooms() { if (!roomsWarming) { roomsWarming = true; setTimeout(warmRooms, 1500); } }
setTimeout(startWarmingRooms, 25000);                  // (a fallback, in case the flyover never ran)

// handy for trying things from the browser console, e.g. gallery.lookCloser(2)
window.gallery = { walkTo, lookCloser, lookAtAbout, goToRoom, goToExit, openRoom, closeRoom, openProject, closeProject, skipFlyover, dispose: disposeObject };