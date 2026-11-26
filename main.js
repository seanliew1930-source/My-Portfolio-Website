/* =========================================================
   SEAN LIEW — DESIGN PORTFOLIO (three.js · minimal gallery)
   A quiet, curved white hallway. Your work hangs close together along one wall, so you can see
   most of it the moment you arrive. Click a work to look closer; click again for its page.
   index.html holds the page, style.css the look, and this file everything that moves.
   Run it with:  npm run dev   (or  npx vite ), then open the address it prints.
   Your images go in the  public/images/  folder, so 'images/ppp.jpg' finds them.
   ========================================================= */
import * as THREE from 'three';

/* =========================================================
   1. YOUR PROJECTS  ← this is the part you'll edit most
   ---------------------------------------------------------
   One { ... } block per project. They hang along the wall in this order,
   and the hallway gets longer or shorter by itself.
   image:  the path to your image, e.g. 'images/wayfinding.jpg' (leave '' for a placeholder)
   thumb:  your own thumbnail for the list view, e.g. 'images/thumbs/wayfinding.jpg'
           (best at 740 × 532 pixels; leave '' to use a crop of the main image instead)
   colour: the colour of the placeholder, if there's no image yet
   tools:  the tools you used, shown on the project's page, e.g. ['Figma', 'Illustrator']
   ========================================================= */
const PROJECTS = [
  {
    title: 'CARE Principles in Practice',
    category: 'Graphic / Visual',
    year: '2026',
    course: 'University of Auckland Summer Research Scholarship',
    tools: ['Photoshop', 'Illustrator'],
    image: 'images/ppp.jpg', thumb: 'images/CARE Principles — thumbnail 370×266@1x.png',
    colour: '#d94a38',
    summary: 'An educational infographic designed during a University of Auckland Summer Research Scholarship to help student researchers uphold Indigenous and Pacific data sovereignty.',
    brief: 'Student researchers often struggle to translate dense ethical frameworks into practical habits. Completed for the School of Psychology alongside researchers Dr. Sam Manuela and Dr. Sarah Kapeli, this brief tasked me with creating an accessible, student-facing reference tool that demystifies the CARE Principles (Collective Benefit, Authority to Control, Responsibility, Ethics) and protects Pacific and Māori data sovereignty throughout the research lifecycle.',
    process: 'I conducted qualitative consultations with data sovereignty faculty and active student researchers to identify where ethical friction occurs during projects. Applying cognitive load principles from psychology, I replaced dense academic walls of text with an isometric, upward-stepping visual metaphor—visually mirroring how researchers progressively build ethical accountability from Step One to Step Four, paired with clear "In Context" takeaways and actionable checkboxes.',
    outcome: 'The final poster was officially adopted by the University of Auckland and is actively used to teach data sovereignty principles to incoming research students. The project received strong faculty praise for bridging cultural theory and daily practice, teaching me how to balance visual storytelling with strict functional utility for a specific academic audience.'
  },
  {
    title: 'IAEA Principles',
    category: 'Graphic / Visual',
    year: '2025',
    course: 'IAEA Infographic Competition',
    tools: ['Photoshop', 'Illustrator'],
    image: 'images/ccc.jpg', thumb: 'images/Communicating Calm in Crisis — thumbnail 370×266@1x.png',
    colour: '#2f5bd3',
    summary: 'A conceptual infographic designed for an International Atomic Energy Agency (IAEA) competition to raise awareness around nuclear emergency preparedness and the stark consequences of nuclear escalation.',
    brief: 'Public safety guidelines for radiological emergencies often rely on sterile, clinical diagrams that fail to capture public urgency. Entered into an official infographic competition hosted by the International Atomic Energy Agency (IAEA), this brief challenged designers to communicate critical emergency protocols and guidance for Public Information Officers (PIOs) while raising broad public awareness about what to do during a nuclear crisis.',
    process: 'Rather than taking a purely utilitarian approach, I used this brief as a showcase for expressive visual storytelling and advanced Photoshop compositing. Drawing on principles of emotional resonance and visual salience, I juxtaposed high-contrast, authoritative yellow editorial typography with a sombre, atmospheric illustration of a lone figure facing towering cooling towers and a fractured landscape—integrating communication channel icons and core principles directly into the skyline to command immediate viewer attention.',
    outcome: 'While the poster did not take the overall competition prize due to its artistic prioritization over strict step-by-step utility, it received formal recognition from the IAEA for the power of its visual imagery. The jury acknowledged the piece as an arresting cautionary statement on the trajectory of global nuclear risk, successfully fulfilling my goal of provoking reflection—and teaching me valuable lessons on calibrating artistic impact against functional clarity.'
  },
  {
    title: 'Tawa Commons Outdoor Experience',
    category: 'Spatial / Product',
    year: '2026',
    course: 'DESIGN212',
    tools: ['Tinkercad', 'Blender', 'Canva', 'Procreate'],
    image: 'images/ppoo.png', thumb: 'images/Tawa Commons — thumbnail 370×266@1x.png',
    colour: '#e8c547',
    summary: 'A modular, weather-responsive timber seating and landscape system designed for One Tree Hill College to transform an underutilized campus walkway into a sheltered social hub.',
    brief: 'Tawa Commons at One Tree Hill College functioned primarily as a bare pass-through corridor, offering limited shade, little seating, and frequent surface flooding over shallow volcanic rock. Working in a five-person team for DESIGN 212 (Local Making), we were tasked with designing a durable, low-maintenance outdoor furniture and landscaping proposal within a strict $3,000–$5,000 budget that could be realistically constructed by the schools Trade Academy.',
    process: 'Acting as co-product designer and technical lead, I conducted site visits and consulted with Mitre 10 trade specialists to align our designs with commercial timber lengths, minimizing off-cut waste to under 2%. I translated our teams concepts into detailed 3D TinkerCAD models, exploded joinery diagrams, scaled orthographic blueprints, and a 1:50 Photoshop master plan. To solve after-hours theft concerns raised during student feedback, I designed a dual-purpose bench featuring a lockable storage chest to house the smaller movable stools, paired with sloped roofs that channel rainwater into native wetland planters and custom-cast Maungakiekie cultural stepping stones.',
    outcome: 'We delivered a fully costed $4,209.10 construction proposal complete with material specifications, joinery rationales, and contextual visualizations. One Tree Hill College utilized our designs to inform the future development of the courtyard area. Through navigating mid-project layout discrepancies and coordinating technical deliverables, I strengthened my 3D CAD drafting skills and learned how to turn spatial constraints into adaptable, buildable design solutions.',
    /* The clothesline: scroll down this project's page and these hang on a line across the screen.
       Keep scrolling and the line moves along through every image, looping round to the start again.
       (Any project can have one: give it a room: [ ... ] list like this. A line with src: '' shows a placeholder.)
       lineTitle: the heading above the line
       src: the image file, e.g. 'images/p3-01.jpg'
       caption: the short description written under that image */
    lineTitle: 'The full collection',
    room: [
      { src: 'images/gg (1).jpg', caption: 'Aerial site view of Tawa Commons' },
      { src: 'images/gg (1).png', caption: 'Storage bench frame in TinkerCAD' },
      { src: 'images/gg (2).jpg', caption: '1:50 site development plan' },
      { src: 'images/gg (2).png', caption: 'Lockable storage bench with lid open' },
      { src: 'images/gg (3).jpg', caption: 'Low table orthographics, 1:20' },
      { src: 'images/gg (3).png', caption: 'Exploded view of the bench and enclosure' },
      { src: 'images/gg (4).jpg', caption: 'Sheltered bench orthographics' },
      { src: 'images/gg (4).png', caption: 'Sheltered bench model in TinkerCAD' },
      { src: 'images/gg (5).jpg', caption: 'Labelled planter bench components' },
      { src: 'images/gg (5).png', caption: 'Exploded assembly of the slat bench' },
      { src: 'images/gg (6).jpg', caption: 'Rain-channelling roof and planter' },
      { src: 'images/gg (6).png', caption: 'Main post joinery detail' },
      { src: 'images/gg (7).jpg', caption: 'Picnic table concept views' },
      { src: 'images/gg (7).png', caption: 'Bench frame and posts in TinkerCAD' },
      { src: 'images/gg (8).jpg', caption: 'Convertible bench concept views' },
      { src: 'images/gg (8).png', caption: 'Planter bench and stools render' },
      { src: 'images/gg (9).png', caption: 'Planter bench with low table' },
      { src: 'images/gg (10).png', caption: 'The finished courtyard, visualised' }
    ]
  },
  {
    title: 'The Grove',
    category: 'UX/UI / App Design',
    year: '2025',
    course: 'DESIGN 200',
    tools: ['Canva', 'Figma', 'Photoshop', 'Illustrator'],
    image: 'images/ooo.png', thumb: 'images/The Grove — thumbnail 370×266@1x.png',
    colour: '#5fa37a',
    summary: 'A mobile application designed for Aotearoa conservation charity Trees That Count to make native tree planting, tracking, and ecological donations accessible and engaging.',
    brief: 'Working in a six-person team for DESIGN 200, we were tasked with designing an interactive mobile prototype for Trees That Count that encourages everyday Kiwis to donate toward, track, and learn about native reforestation. Our challenge was to translate environmental stewardship into a streamlined, intuitive user experience through iterative Alpha, Beta, and Final user-testing cycles.',
    process: 'Starting with hand-drawn sketches, I created the original organic tree brand concept for "The Grove" before pivoting into UI/UX design and prototyping in Figma. Across 13 moderated usability tests, 100% of Alpha participants found our initial "Pinterest-style" homepage confusing, and 85% struggled to understand the apps core functions without guidance. To solve this, I completely overhauled the homepage hierarchy, designed custom feature illustrations, and built a four-card onboarding sequence paired with a skippable, game-inspired interactive walkthrough tutorial. I also implemented smart-animated loading and payment confirmation states and manually wired consistent swipe-back navigation across every screen.',
    outcome: 'By the Final prototype, open-coded qualitative testing showed a sharp drop in user friction, with pain points around navigation and feature clarity largely resolved. Stepping outside my comfort zone to master Figma mid-project taught me how to use component systems, motion states, and empirical user feedback to turn rough wireframes into a cohesive, user-centered product.',
    /* This project's clothesline: seven images and three videos of the app in action.
       A line with video: instead of src: hangs a video, which loops silently the whole time it's on screen.
       Put videos in public/videos/, e.g. video: 'videos/p4-demo-1.mp4'. Move the lines around to change
       the order. Until you add a file, that spot shows a coloured placeholder with its caption. */
    room: [
      { src: 'images/fah (1).png', caption: 'Hand-drawn logo sketches' },
      { src: 'images/fah (2).png', caption: 'Onboarding: donate and track' },
      { src: 'images/fah (3).png', caption: 'Welcome and sign-in screens' },
      { src: 'images/fah.png', caption: 'Onboarding: meet and learn' },
      { src: 'images/rahreal (1).png', caption: 'Smart-animated loading sequence' },
      { src: 'images/rahreal (2).png', caption: 'Interactive walkthrough tutorial' },
      { video: 'videos/MENU.mp4', caption: 'Menu Animation' },
      { video: 'videos/intro.mp4', caption: 'Onboarding cards in motion' },
      { video: 'videos/INTROp.mp4', caption: 'Homepage walkthrough tutorial' },
      { video: 'videos/TUT.mp4', caption: 'App demo three' }
    ]
  },
  {
    title: 'Glitch Run',
    category: 'Product / Illustration',
    year: '2026',
    course: 'DESIGN 233',
    tools: ['Procreate', 'Photoshop', 'Canva'],
    image: 'images/gr.png', thumb: 'images/gah (1).png',
    colour: '#c9b8a6',
    summary: 'An asymmetric, cyberpunk-themed board game designed to teach university students about AI ethics, digital privacy, and resource boundaries through cooperative strategy.',
    brief: 'Working in a five-person team for DESIGN 223, we set out to make complex topics like AI overuse, data vulnerability, and water consumption approachable for rangatahi aged 16–25. Our goal was to turn abstract digital privacy concepts into a physical, tabletop experience where four players team up with AI companions to locate and eliminate a system "breach" before their personal data is compromised.',
    process: 'Serving as Visual Identity Lead, Asset Designer, and Co-Systems Architect, I hand-illustrated the entire deck of Utility and AI Companion cards from scratch in Procreate, stepping outside my usual style to develop a cohesive, stylized cartoon aesthetic. I then formatted and engineered those hand-drawn illustrations into scalable master card templates and print-ready packaging layouts using Adobe Photoshop and Illustrator. Alongside co-authoring the core gameplay loops and balancing card mechanics across five playtest cycles in Miro, I solved double-sided print alignment bottlenecks using custom full-bleed patterns in Adobe Acrobat and directed, filmed, and edited a 2.5-minute promotional trailer in Premiere Pro and After Effects.',
    outcome: 'We delivered a complete, playable physical prototype featuring nearly 100 custom-illustrated cards, bespoke packaging, a balanced rulebook, and a cinematic launch trailer. Pushing into a brand-new illustration style while managing physical print tolerances and motion graphics taught me how to balance creative storytelling with systematic, production-ready design pipelines.',
    /* This project's clothesline (works the same as Project Three's). Until you put an image in a src,
       that spot shows a coloured placeholder with its caption, so you can see the line straight away. */
    room: [
      { src: 'images/glitch run cards (1).png', caption: 'AI Reunion: stored buff card' },
      { src: 'images/glitch run cards (2).png', caption: 'Black Friday: stored buff card' },
      { src: 'images/glitch run cards (3).png', caption: 'Chatybird AI: companion card' },
      { src: 'images/glitch run cards (4).png', caption: 'Copi AI: companion card' },
      { src: 'images/glitch run cards (5).png', caption: 'Data Profit: buff card' },
      { src: 'images/glitch run cards (6).png', caption: 'Data Wipe: debuff card' },
      { src: 'images/glitch run cards (7).png', caption: 'Depsee AI: companion card' },
      { src: 'images/glitch run cards (8).png', caption: 'Donation: debuff card' },
      { src: 'images/glitch run cards (9).png', caption: 'Gemholo AI: companion card' },
      { src: 'images/glitch run cards (10).png', caption: 'Gift With Purchase: stored buff card' },
      { src: 'images/glitch run cards (11).png', caption: 'Information Heist: stored buff card' },
      { src: 'images/glitch run cards (12).png', caption: 'Lost Data: debuff card' },
      { src: 'images/glitch run cards (13).png', caption: 'Refused Service: debuff card' },
      { src: 'images/glitch run cards (14).png', caption: 'Storage Backup: stored buff card' },
      { src: 'images/glitch run cards (15).png', caption: 'Tear Heist: buff card' },
      { src: 'images/glitch run cards (16).png', caption: 'Tear Tumble: buff card' },
    ]
  },
  {
    title: 'Off-Grid',
    category: 'Video Editing / UI/UX',
    year: '2025',
    course: 'Personal',
    tools: ['Premiere Pro', 'After Effects', 'Procreate'],
    image: 'images/og.png', thumb: 'images/Off Grid — thumbnail 370×266@1x.png',
    colour: '#8e6bd1',
    summary: 'An interconnected smart e-waste vending kiosk and companion mobile app that scans, sorts, and rewards everyday electronic recycling with instant local store vouchers.',
    brief: 'Working in a five-person multidisciplinary team for DESIGN 232, we set out to tackle the escalating environmental crisis of improperly disposed electronic waste. Our challenge was to design an accessible, rewarding public system that encourages everyday users to drop off old devices at smart collection kiosks—turning sustainable disposal into an effortless habit backed by real-world retail incentives.',
    process: 'Acting as Lead Concept Artist and Digital UI/UX Designer, I first broke an early ideation deadlock by sketching out cohesive hardware forms for our arcade-inspired smart recycling kiosk. Once our physical hardware direction was locked in, I took full ownership of the machines on-screen UI system and the end-to-end development of the companion Off-Grid mobile app in Figma. Directly applying the component architecture, motion feedback, and user-flow principles I mastered while designing The Grove, I built a high-contrast dark-mode interface that bridges the physical kiosk and mobile screen—guiding users from QR code scanning and interactive machine-locator maps through to instant voucher redemption and Google Wallet integration.',
    outcome: 'We delivered a working physical hardware prototype paired with a fully interactive Figma companion app and machine screen flow, demonstrating a complete circular lifecycle from e-waste drop-off to digital reward. Building directly on my previous UX foundation allowed me to own the digital side of a physical-digital product ecosystem with speed and confidence, uniting industrial hardware with intuitive user interaction.',
    /* Videos for this project: scroll down its page and they hang on a clothesline (like Project Three's images).
       It plays (muted, on repeat) while it's on screen; click it to watch it big, with sound and controls.
       src: the video file, e.g. 'videos/p6-reel.mp4' (put videos in public/videos/)
       caption: the short description written under it. Add a line for another video.
       (Add lineTitle: 'Your heading' to this project to change the heading above the line.) */
    videos: [
      { src: 'videos/ogr.mp4', caption: 'App Showcase Video' }
    ]
  },
  {
    title: 'Glitch Run — Cinematic Launch Trailer', category: 'Video Editing / Motion Graphics', year: '2026', course: 'DESIGN 233', image: 'images/grgr.png', 
    thumb: 'images/gah (2).png', colour: '#e07b39',
    tools: ['Premiere Pro', 'After Effects', 'Procreate'],
    summary: 'A 2.5-minute, anime- and sports-hype-inspired promotional trailer directed, filmed, and animated to showcase the tabletop mechanics and cyberpunk energy of Glitch Run.',
    brief: 'As the marketing deliverable for our DESIGN 223 tabletop game Glitch Run, we needed a launch trailer capable of communicating asymmetric gameplay rules, character companions, and player excitement within a tight runtime. Stepping into the sole Video Editor and Director role, I took complete creative liberty and end-to-end ownership over the trailers concept, visual direction, cinematography, and post-production.', 
    process: 'Starting from scratch in Miro, I hand-sketched a 14-frame storyboard blending the high-energy pacing of anime opening sequences with the dramatic player introductions of competitive sports broadcasts. I scripted, blocked, and filmed all live-action gameplay footage myself—capturing dynamic low-angle player reactions, extreme close-ups of dice rolls, and rapid card-placement sequences. In Adobe Premiere Pro and After Effects, I synced every cut to the driving glitch-hop beat of TheFatRats "Oblivion," building custom glitch title animations, face-tracked kinetic text overlays, and animated rule callouts while optimizing local RAM disk caches to handle heavy render loads.   ', 
    outcome: 'I delivered a polished 2.5-minute promotional trailer that gave our physical prototype a distinct, high-impact visual identity and clearly onboarded viewers into the games core loop. Taking full creative and technical command over a discipline outside my usual illustration comfort zone pushed me to master beat-synced editing, After Effects motion tracking, and end-to-end video direction.',
    /* This project's videos (works the same as Project Six's) */
    videos: [
      { src: 'videos/obliv.mp4', caption: 'Glitch Run launch trailer' }
    ]
  },
  {
    title: 'Good Homestay', category: 'Marketing / Branding', year: '2025', course: '', image: 'images/GH.png', thumb: 'images/gah (4).png', colour: '#3a9fb0',
    tools: ['Photoshop', 'Procreate', 'Illustrator'],
    summary: 'A series of high-contrast Facebook and Google pop-up advertisements designed for Melbourne-based student accommodation provider Good Homestay to recruit local host families.',
    brief: 'Hired as a freelance graphic designer for Good Homestay, a homestay accommodation agency based in Melbourne, Australia, I was commissioned to create a suite of promotional pop-up advertisements for Facebook and Google Ads. The objective was to grab the attention of prospective local households scrolling online and drive immediate registration inquiries to host international students.', 
    process: 'Working across Adobe Illustrator and Photoshop, I developed a cohesive, conversion-focused visual system anchored by Good Homestays primary brand blue, high-visibility yellow and red accents, and bold condensed display typography. To maximize scannability within compact digital ad placements, I paired welcoming, authentic lifestyle photography of international students and host families with sharp geometric framing and clear visual hierarchy. Across multiple layout variations, I balanced immediate calls-to-action ("Host Families Needed," "Register Now") with direct contact details and brand recognition so the creatives could be deployed and A/B tested across social feeds and display networks.', 
    outcome: 'I delivered a versatile set of web-ready promotional graphics tailored for Facebook and Google ad placements, giving Good Homestay a consistent, eye-catching campaign toolkit to attract new host family registrations. Working directly with a real-world international client taught me how to design for rapid visual clarity, strict brand alignment, and commercial conversion goals.',
    /* This project's clothesline, with its three images (works the same as Project Three's) */
    room: [
      { src: 'images/pp1.jpg', caption: '"Host Families Needed" ad' },
      { src: 'images/pp2.jpg', caption: '"Register Now" student ad' },
      { src: 'images/pp3.jpg', caption: 'Host family photo ad' }
    ]
  },
  {
    title: 'Beer: A Hop’s Story', category: 'illustration / Formatting', year: '2025', course: '', image: 'images/BEER.jpg', thumb: 'images/Beer A Hops Story — thumbnail 370×266@1x (1).png', colour: '#d8a3b4',
    tools: ['Procreate', 'Photoshop', 'Illustrator'],
    summary: 'An illustrated storybook exploring how craft beer is brewed in New Zealand, commissioned with full front-and-back cover artwork, interior page layouts, and print-ready formatting.',
    brief: 'Commissioned by a fellow creator publishing a book on how beer is made in New Zealand, I was brought on to lead the visual storytelling and print production. My brief covered illustrating the front and back covers, designing the interior page artwork, and formatting the entire publication for physical printing.', 
    process: 'To give an informative topic a playful, storybook charm, I illustrated the front and back cover art as well as the interior pages by hand in Procreate—pairing warm, painterly textures with expressive brush lettering. From there, I moved the raw artwork into Adobe Photoshop to assemble and align the interior page spreads, before bringing the complete publication into Adobe Illustrator to structure the typography, set up trim margins and bleeds, and format the final print-ready files.', 
    outcome: 'I delivered a cohesive, press-ready illustrated book from cover to cover, uniting hand-crafted Procreate artwork with clean editorial formatting. Managing the entire pipeline—from initial illustration to final pre-press setup in Illustrator—sharpened my eye for print tolerances, pacing across physical spreads, and cohesive visual storytelling.',
    /* This project's clothesline (works the same as Project Three's). Until you put an image in a src,
       that spot shows a coloured placeholder with its caption, so you can see the line straight away. */
    room: [
      { src: 'images/hhh (1).jpg', caption: 'Small Beer, Big Cost' },
      { src: 'images/hhh (2).jpg', caption: 'Back cover blurb' },
      { src: 'images/hhh (3).jpg', caption: 'Solutions: selling surplus beer' },
      { src: 'images/hhh (4).jpg', caption: 'Solutions: shared hop imports' },
      { src: 'images/hhh (5).jpg', caption: 'Key issues facing the brewery' },
      { src: 'images/hhh (6).jpg', caption: 'Systems map of the brewery' },
      { src: 'images/hhh (7).jpg', caption: 'Brothers Beer Brewery spread' }
    ]
  },
  {
    title: 'Mitre Joints!', category: 'Graphic / Visual', year: '2026', course: '', image: 'images/IKMJ.jpg', thumb: '', colour: '#a4b83c',
    tools: ['Photoshop'],
    summary: 'A Top-5 placing editorial magazine spread examining the structural mechanics, weather resistance, and visual craft of timber mitre joints observed on-site at Smales Farm.',
    brief: 'Entered into a University of Auckland design competition centered on timber craftsmanship (DESIGN 212), the challenge was to design an engaging editorial magazine spread spotlighting a specific wood joint of our choice. I selected the mitre joint, aiming to communicate both its 45-degree technical construction and its real-world functional benefits in public architecture.', 
    process: 'Using real-world field photography I captured at Smales Farm in Auckland, I analyzed four distinct applications of mitre joinery—from picture-frame decking borders that prevent moisture soak to smooth, splinter-free seating corners and flush metal drainage transitions. In Adobe Photoshop and Illustrator, I structured the spread around an asymmetrical Swiss-inspired editorial grid, pairing oversized forest-green slab typography and technical registration marks with monospaced analytical callouts and a custom vector isometric diagram illustrating how a 45-degree cut conceals exposed end-grain.', 
    outcome: 'My spread placed in the Top 5 of the university competition, recognized for turning technical timber analysis into a bold, scannable editorial layout. Designing this piece sharpened my typographic hierarchy, grid discipline, and ability to translate hands-on structural observations into compelling print communication.'
  }
];

/* The tools you use, shown as a row on the About page (badge and logo aren't used in this style). */
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

/* Your logo, shown at the top left of the header.
   Leave '' to show your initials, or put the path to your logo, e.g. 'images/logo.svg'.
   A white version will look best on the black header. */
const LOGO = 'images/LOGOOOO.jpg';

/* About Me — the first thing on the wall (your photo), and the About page.
   photo: the path to your photo, e.g. 'images/me.jpg'
   sections: extra paragraphs for the About page, as ['Heading', 'Text'] pairs (add or remove freely) */
const ABOUT = {
  name: 'Sean Liew',
  photo: 'images/me.jpg',
  intro: 'Hello! I’m an Auckland-based multidisciplinary designer and researcher who loves turning complex ideas into intuitive, human-centered experiences across digital interfaces, physical fabrication, and visual storytelling. :D',
  sections: [
    ['What I do', 'My practice spans UX/UI prototyping, custom illustration, spatial product design, and motion graphics—grounded in how people actually think, perceive, and behave. Studying psychology alongside design shapes every stage of my process, helping me strip away cognitive friction, structure clear visual hierarchies, and build tools that feel natural from the first interaction.'],
    ['Background', 'I’m currently in my third year of a conjoint Bachelor of Design and Bachelor of Science (majoring in Psychology) at the University of Auckland. Alongside my coursework, I’ve completed two funded University of Auckland Summer Research Scholarships—producing an official university-adopted guide on Indigenous data sovereignty and the CARE principles, and investigating community-led material tinkering for a low-carbon future. Beyond university, I’ve worked on freelance digital advertising and branding for clients like Good Homestay and Griffin’s Foods, and received formal recognition from the International Atomic Energy Agency (IAEA) for nuclear emergency awareness design.   '],
    ['Outside the studio', 'When I’m away from Figma and Procreate, you’ll usually find me on the keys—leading and coordinating weekly live music sets at Equippers Church—or sketching characters on the bus, sewing upcycled textile pieces, and exploring interactive 3D web worlds.']
  ]
};

/* Contact details — written on the wall at the end of the hallway, and at the bottom of the About page.
   Leave any of them as '' to hide it. */
const CONTACT = {
  email: 'se.anliew1930@gmail.com',
  phone: '+64 27 781 5691',
  instagram: '@se.anliew',                              // what's shown
  instagramUrl: 'https://www.instagram.com/se.anliew/',   // where it links to
  linkedin: 'Sean Liew',
  linkedinUrl: 'https://www.linkedin.com/feed/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BcT8QzRIAQ4e781GkTTkFXQ%3D%3D'
};

/* Kind words — testimonies, shown on the About page under "Kind words".
   quote: what they said · from: who said it, e.g. 'Jane Smith, Course Coordinator, DESIGN 301'
   (The other details on each line are left over from the old gallery and aren't used; delete a whole { } block to remove one.) */
const PEOPLE = [
  {
    name: 'Freddie', standsAt: 2, outfit: 'suit', colour: '#2f5bd3',
    quote: 'Excellent work Sean! You have a real talent for graphics and spatial thinking. All the best with your design journey! ',
    from: 'Xin Cheng, Design Coordinator, University of Auckland',
    project: 1
  },
  {
    name: 'Mercury', standsAt: 5, outfit: 'suit', colour: '#c8372d',
    quote: 'Very detailed technical considerations which included a variety of joinery used at OTHC. Excellent hand-drawn orthographics.',
    from: 'Xin Cheng, Design Coordinator, University of Auckland',
    project: 2
  },
  {
    name: 'Ripley', standsAt: 8, outfit: 'dress', colour: '#8a4fc9',
    quote: 'Kia ora koutou and a huge congratulations to you for your final presentation across Friday (NMW) and today (SoP). You have contributed to some incredible mahi over the summer and we are all very proud of the work you have completed. ',
    from: 'Dr. Sarah Kapeli, Senior Lecturer , University of Auckland',
    project: 3
  },
  {
    name: 'Sofia', standsAt: 5, outfit: 'dress', colour: '#2e8b57',
    quote: 'Visual design and presentation are strong.  The visual elements enhance gameplay rather than distract from it, which is an important achievement in physical game design.',
    from: 'Allan Fowler, Senior Lecturer, University of Auckland',
    project: 5
  },
  {
    name: 'Alyssa', pose: 'seated', sitsAt: 9, outfit: 'dress', colour: '#e3b21c',
    quote: 'Pleasure to work with you Sean! You understand our company’s needs and are able to translate them into a clear and visually appealing design. ',
    from: 'Aoi Miyata, Company Owner, Good Homestay',
    project: 9
  },
  {
    name: 'MaoMao', pose: 'seated', sitsAt: 9, scale: 0.62, outfit: 'dress', colour: '#ec7fb0',
    quote: 'Very impressive work done over the summer! Your inforaphic design is very well thought out and visually appealing. While not starring in practicality, it is a very strong piece of work that is visually arresting and thought provoking. ',
    from: 'IAEA Competition Coordinator, Competition Organiser, IAEA',
    project: 9
  }
];

/* =========================================================
   2. SETTINGS  (sizes are in the gallery's own units: the hallway is 1600 wide)
   ========================================================= */
const SETTINGS = {
  radius:      4000,   // how big the curve of the hallway is (bigger = gentler bend)
  width:       1600,   // how wide the hallway is
  wallHeight:  1150,   // how tall the walls are
  spacing:     860,    // roughly the distance from one work to the next along the wall (smaller = more compact)
  maxW:        680,    // the largest a work can be, wide…
  maxH:        540,    //   …and tall
  hangHeight:  510,    // the height of the middle of each work above the floor (575 = halfway up the wall)
  eye:         430,    // your eye height
  lookAhead:   .45,    // how far round the bend you look while walking (bigger = further ahead)
  focusFill:   .62,    // how much of the screen a work fills when you look closer
  glide:       950,    // how long the move to a work takes (milliseconds)
  smoothing:   .085,   // how smoothly walking eases (smaller = floatier)
  walkSpeed:   1.4,    // how far one scroll moves you
  mousePan:    .06,    // how much the view follows your mouse (0 = not at all)
  idleAfter:   4,      // seconds without scrolling or clicking before the gallery starts drifting on by itself
  idleSpeed:   .7,     // how fast it drifts (0 = never; 1 ≈ one work every 14 seconds)
  texMax:      2048    // the largest an image is drawn (bigger images are scaled down to this)
};
/* The opening fly-through: a fast sweep round the hallway with motion blur, ending where you start.
   Scroll, click or press a key to skip it. */
const FLYOVER = {
  loops:    1,         // how many times it goes round the hallway (0 = no fly-through)
  duration: 4800,      // how long it takes, in milliseconds
  speedUp:  2.9,        // how much of that time it spends picking up speed (0–1)
  slowDown: 2.9,       // how much of that time it spends slowing to a stop (0–1)
  captionAt: .8,       // how far through it the caption at the bottom fades in (0–1; smaller = sooner)
  inertia:  .1,         // the little push at the end: it rolls on just past the start, then settles back (0 = none, 2 = more)
  blur:     1          // how strong the motion blur is (0 = none, 1.5 = heavy)
};
// How far along the fly-through is at each moment: speed builds smoothly, holds, then eases off smoothly.
const flyCurve = (() => {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const N = 400, smooth = x => { x = clamp(x, 0, 1); return Math.sin(x * Math.PI / 2); };   // (a quarter sine: soft at rest, firm once moving)
  const up = Math.max(.01, FLYOVER.speedUp), down = Math.max(.01, FLYOVER.slowDown);
  const pos = [0];
  for (let i = 1; i <= N; i++) {
    const endV = .1 * FLYOVER.inertia;                          // (it arrives still moving a little, so it can roll on)
    const t = (i - .5) / N, v = Math.min(smooth(t / up), endV + (1 - endV) * smooth((1 - t) / down));
    pos.push(pos[i - 1] + v);
  }
  const total = pos[N];
  return k => { const f = clamp(k, 0, 1) * N, i = Math.floor(f), j = Math.min(N, i + 1); return (pos[i] + (pos[j] - pos[i]) * (f - i)) / total; };
})();
const COLOURS = {
  void:  '#15161c',    // the dark above the walls
  wall:  '#d3d1cc',    // the walls between the lights
  lit:   '#fffbee',    // the warm glow of light behind each work
  shade: '#a9a7a2',    // the walls right down by the floor
  floor: '#2a2a2f',    // the floor
  pool:  '#4a4a50'     // the floor under the lights
};

/* =========================================================
   3. THE GALLERY (you shouldn't need to edit below here)
   ========================================================= */
const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const small = innerWidth < 700;

/* ---------- what hangs on the wall, in order: About, every project, then how to get in touch ---------- */
const ITEMS = [
  { kind: 'about', title: 'About me', sub: ABOUT.name, image: ABOUT.photo, colour: '#9c9a94' },
  ...PROJECTS.map((p, i) => ({ kind: 'project', i, title: p.title, sub: [p.category, p.year].filter(Boolean).join(' · '), image: p.image, colour: p.colour || '#888' })),
  { kind: 'contact', title: 'Get in touch', sub: CONTACT.email || 'Contact', image: '', colour: '#ecebe7' }
];

/* ---------- the shape of the hallway ----------
   A complete circle, bending gently to the left as you walk, so it never ends: keep walking and you
   come round to the start again. The works hang on the outer (right-hand) wall, so you see most of
   them at once as the wall curves round in front of you. The circle is big, so the whole set hangs
   round it a few times over (like walking the same loop again). */
const R = SETTINGS.radius;                                     // the middle of the hallway
const RO = R + SETTINGS.width / 2, RI = R - SETTINGS.width / 2;  // the outer and inner walls
const H = SETTINGS.wallHeight;
const TAU = Math.PI * 2;
const COPIES = Math.max(1, Math.round(TAU * RO / (ITEMS.length * SETTINGS.spacing)));   // how many times the set fits round
const SLOTS = ITEMS.length * COPIES, SLOT = TAU / SLOTS;
const itemAngle = k => (k + .6) * SLOT;                        // where slot k hangs (an angle round the circle)
const wrap = a => ((a + Math.PI) % TAU + TAU) % TAU - Math.PI; // any angle as -π…π
const LOOP = TAU * R;                                          // one full lap, walking down the middle
const onCircle = (r, a, y = 0, out = new THREE.Vector3()) => out.set(r * Math.cos(a), y, -r * Math.sin(a));

/* ---------- renderer, scene, camera ---------- */
const host = $('scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
host.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(COLOURS.void);
const camera = new THREE.PerspectiveCamera(small ? 70 : 60, 1, 30, 20000);   // (a near limit of 30 keeps far-off details crisp and flicker-free)
function fit() {
  const w = host.clientWidth || innerWidth, h = host.clientHeight || innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
fit();
addEventListener('resize', fit);

/* ---------- walls and floor ----------
   One small shader paints them: off-white walls with a soft pool of light around every work,
   a little shadow down at the floor, and a dark floor with brighter patches under the lights. */
const MAXN = 96;
const angles = new Float32Array(MAXN);
for (let k = 0; k < Math.min(SLOTS, MAXN); k++) angles[k] = itemAngle(k);
// the size of the glow behind each work (it follows the work's own shape)
const haloSize = Array.from({ length: MAXN }, () => new THREE.Vector2(SETTINGS.maxW / 2 + 65, SETTINGS.maxH * .375 + 150));
const shared = {
  angles: { value: angles }, halo: { value: haloSize }, count: { value: Math.min(SLOTS, MAXN) },
  wall: { value: new THREE.Color(COLOURS.wall) }, lit: { value: new THREE.Color(COLOURS.lit) },
  shade: { value: new THREE.Color(COLOURS.shade) }, floorCol: { value: new THREE.Color(COLOURS.floor) },
  pool: { value: new THREE.Color(COLOURS.pool) }
};
const VERT = `varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
function wallMaterial(radius, lights) {
  return new THREE.ShaderMaterial({
    defines: { MAXN },
    uniforms: { ...shared, radius: { value: radius }, lights: { value: lights ? 1 : 0 }, hy: { value: SETTINGS.hangHeight + 40 }, top: { value: H } },
    vertexShader: VERT,
    fragmentShader: `
      uniform float angles[MAXN]; uniform vec2 halo[MAXN]; uniform int count; uniform vec3 wall, lit, shade; uniform float radius, lights, hy, top;
      varying vec3 vW;
      void main() {
        float a = atan(-vW.z, vW.x), y = vW.y;
        float glow = 0.0;
        for (int i = 0; i < MAXN; i++) {
          if (i >= count) break;
          float dx = (mod(a - angles[i] + 3.14159265, 6.2831853) - 3.14159265) * radius;
          if (abs(dx) > 1400.0) continue;
          // backlighting: a tall, rounded glow behind each work, bright inside with a soft edge,
          // and a faint haze spilling out beyond it
          vec2 p = vec2(dx, y - hy), b = halo[i];
          float r = b.x * 0.92;
          vec2 q = abs(p) - b + r;
          float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
          glow += (1.0 - smoothstep(-80.0, 70.0, d)) + exp(-max(d, 0.0) / 170.0) * 0.2;
        }
        glow = clamp(glow, 0.0, 1.0) * lights;
        vec3 col = mix(shade, wall, smoothstep(0.0, 220.0, y));            // a little darker down by the floor
        col *= 1.0 - 0.12 * smoothstep(top * 0.55, top, y);                // and softly towards the top
        col = mix(col, lit, glow * 0.94);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
    side: THREE.DoubleSide
  });
}
{
  const outer = new THREE.Mesh(new THREE.CylinderGeometry(RO, RO, H, 360, 1, true), wallMaterial(RO, true));
  outer.position.y = H / 2; scene.add(outer);
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(RI, RI, H, 360, 1, true), wallMaterial(RI, false));
  inner.position.y = H / 2; scene.add(inner);
  const floor = new THREE.Mesh(new THREE.RingGeometry(RI - 10, RO + 10, 360, 1), new THREE.ShaderMaterial({
    defines: { MAXN },
    uniforms: { ...shared, ro: { value: RO }, ri: { value: RI } },
    vertexShader: VERT,
    fragmentShader: `
      uniform float angles[MAXN]; uniform int count; uniform vec3 floorCol, pool, wall; uniform float ro, ri;
      varying vec3 vW;
      void main() {
        float r = length(vW.xz), a = atan(-vW.z, vW.x);
        float p = 0.0;
        for (int i = 0; i < MAXN; i++) {
          if (i >= count) break;
          float dx = (mod(a - angles[i] + 3.14159265, 6.2831853) - 3.14159265) * r, dr = r - (ro - 330.0);
          p += exp(-dx * dx / 90000.0 - dr * dr / 70000.0);               // a soft patch of light under each work
        }
        vec3 col = mix(floorCol, pool, clamp(p, 0.0, 1.0) * 0.8);
        col = mix(col, wall * 0.42, smoothstep(ro - 260.0, ro, r) * 0.35);   // the bright wall glancing off the floor
        col *= 0.82 + 0.18 * smoothstep(ri, ri + 260.0, r);                  // darker along the inner wall
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`
  }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
}

/* ---------- a few things drawn on canvas (labels, the end wall, placeholders) ---------- */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
function placeholderCanvas(item, k) {
  const c = document.createElement('canvas'); c.width = 800; c.height = 600;
  const g = c.getContext('2d');
  g.fillStyle = item.colour; g.fillRect(0, 0, 800, 600);
  g.fillStyle = 'rgba(255,255,255,.18)'; g.beginPath(); g.arc(400, 270, 150, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff'; g.font = '72px "Oranienbaum", serif'; g.textAlign = 'center';
  g.fillText(item.title, 400, 290);
  g.font = '18px "IBM Plex Mono", monospace'; g.fillText('ADD AN IMAGE IN main.js', 400, 540);
  return c;
}
const shadowTex = canvasTex(256, 256, (g, w, h) => {      // the soft shadow behind each work
  g.shadowColor = 'rgba(0,0,0,.55)'; g.shadowBlur = 34; g.shadowOffsetX = 2000;
  g.fillStyle = '#000'; g.fillRect(56 - 2000, 60, 144, 144);
});

/* ---------- loading the images (all before the gallery opens, so walking is smooth) ---------- */
const loading = { total: 0, done: 0 };
function loadImage(src) {
  loading.total++;
  return new Promise(resolve => {
    if (!src) { loading.done++; return resolve(null); }
    const img = new Image(); img.decoding = 'async';
    img.onload = () => { loading.done++; resolve(img); };
    img.onerror = () => { loading.done++; console.warn('Could not load ' + src + ' (is it in public/images/?)'); resolve(null); };
    img.src = src;
  });
}
function textureFrom(source) {
  let src = source;
  const w = source.naturalWidth || source.width, h = source.naturalHeight || source.height;
  const k = Math.min(1, SETTINGS.texMax / Math.max(w, h));
  if (k < 1) {                                                // scale huge images down
    const c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
    c.getContext('2d').drawImage(source, 0, 0, c.width, c.height); src = c;
  }
  const t = src instanceof HTMLCanvasElement ? new THREE.CanvasTexture(src) : new THREE.Texture(src);
  t.needsUpdate = true; t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

/* ---------- hanging the works ---------- */
const edgeMats = ['#cfccc6', '#cfccc6', '#efede8', '#b9b6b0', '#efede8', '#efede8'].map(c => new THREE.MeshBasicMaterial({ color: c }));
const plane = new THREE.PlaneGeometry(1, 1), box = new THREE.BoxGeometry(1, 1, 1);
const works = [];                                              // { item, group, lift, pic, w, h, centre }
const clickables = [];
function hang(item, k) {
  const a = itemAngle(k);
  const g = new THREE.Group();
  onCircle(RO, a, 0, g.position); g.lookAt(0, 0, 0);          // on the wall, facing into the hallway
  scene.add(g);
  const lift = new THREE.Group(); g.add(lift);                  // (lifts off the wall a touch when you point at it)
  const shadow = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  lift.add(shadow);
  const edge = new THREE.Mesh(box, edgeMats); edge.position.z = 25; lift.add(edge);   // (its front sits 1.5 behind the picture, so the two never flicker)
  const pic = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ color: 0xf2f2f2 }));
  pic.position.z = 31.5; lift.add(pic);
  const label = new THREE.Mesh(plane, new THREE.MeshBasicMaterial({ transparent: true }));
  lift.add(label);
  const w = { item, k, group: g, lift, pic, edge, shadow, label, w: SETTINGS.maxW, h: SETTINGS.maxH, lifted: 0 };
  size(w, SETTINGS.maxW, SETTINGS.maxH * .75);
  [pic, edge].forEach(m => { m.userData.work = w; clickables.push(m); });
  works.push(w);
  return w;
}
function size(w, iw, ih) {                                     // fit the work into the largest size, keeping its shape
  const s = Math.min(SETTINGS.maxW / iw, SETTINGS.maxH / ih);
  const pw = iw * s, ph = ih * s, y = SETTINGS.hangHeight;
  w.w = pw; w.h = ph;
  if (w.k < MAXN) haloSize[w.k].set(pw / 2 + 65, ph / 2 + 150);   // the glow behind it fits its shape
  w.pic.scale.set(pw, ph, 1); w.pic.position.y = y;
  w.edge.scale.set(pw, ph, 10); w.edge.position.y = y;
  w.shadow.scale.set(pw * 1.42, ph * 1.42, 1); w.shadow.position.set(6, y - 18, 18);
  w.label.scale.set(176, 62, 1); w.label.position.set(-pw / 2 + 88, y - ph / 2 - 62, 22);
}
function labelTex(item) {                                      // the little museum label under each work
  return canvasTex(528, 186, (g, W, Hh) => {
    g.fillStyle = '#f4f3ef'; g.fillRect(0, 0, W, Hh);
    g.strokeStyle = 'rgba(0,0,0,.08)'; g.lineWidth = 2; g.strokeRect(1, 1, W - 2, Hh - 2);
    g.fillStyle = '#1d1d1d'; g.font = '500 44px "Newsreader", serif'; g.fillText(item.title, 26, 66, W - 52);
    g.fillStyle = '#6d6c68'; g.font = '22px "IBM Plex Mono", monospace';
    g.fillText(String(item.sub || '').toUpperCase(), 26, 112, W - 52);
    g.fillStyle = '#9a9893'; g.font = '18px "IBM Plex Mono", monospace';
    g.fillText({ about: 'CLICK TO READ →', contact: 'CLICK FOR LINKS →' }[item.kind] || 'CLICK TO LOOK CLOSER →', 26, 156, W - 52);
  });
}

/* ---------- the "get in touch" card that hangs after the last project ---------- */
function contactCanvas() {
  const c = document.createElement('canvas'); c.width = 1200; c.height = 900;
  const g = c.getContext('2d');
  g.fillStyle = '#f1f0ec'; g.fillRect(0, 0, 1200, 900);
  g.fillStyle = '#161616'; g.textAlign = 'center';
  g.font = '150px "Oranienbaum", serif'; g.fillText('Get in touch', 600, 320);
  const lines = [CONTACT.email, CONTACT.phone, CONTACT.instagram, CONTACT.linkedin].filter(Boolean);
  g.font = '48px "Newsreader", serif';
  lines.forEach((l, k) => g.fillText(l, 600, 450 + k * 70));
  g.fillStyle = '#7a7974'; g.font = '24px "IBM Plex Mono", monospace';
  g.fillText('CLICK FOR LINKS →', 600, 470 + lines.length * 70 + 30);
  return c;
}

/* ---------- motion blur (only used during the fly-through) ----------
   The scene is drawn into an off-screen picture, then smeared sideways (and a little outwards from the
   middle) in proportion to how fast you're moving. */
const blurTarget = new THREE.WebGLRenderTarget(1, 1, { samples: 4 });
const blurScene = new THREE.Scene(), blurCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const blurMat = new THREE.ShaderMaterial({
  uniforms: { tex: { value: blurTarget.texture }, amount: { value: 0 }, px: { value: new THREE.Vector2() } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tex; uniform float amount; uniform vec2 px; varying vec2 vUv;
    void main() {
      vec4 c = vec4(0.0); float total = 0.0;
      vec2 side = vec2(amount * px.x * 7.0, 0.0);                // sideways streaks (the walls rushing past)
      vec2 zoom = (vUv - 0.5) * amount * 0.012;                  // and a slight rush outwards from the middle
      for (int i = -8; i <= 8; i++) {
        float f = float(i) / 8.0, w = 1.0 - abs(f) * 0.85;
        c += texture2D(tex, vUv + side * f + zoom * f) * w; total += w;
      }
      gl_FragColor = c / total;
      #include <colorspace_fragment>
    }`,
  depthTest: false, depthWrite: false
});
blurScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blurMat));
function sizeBlur() {
  const v = renderer.getDrawingBufferSize(new THREE.Vector2());
  blurTarget.setSize(v.x, v.y); blurMat.uniforms.px.value.set(1 / v.x, 1 / v.y);
}
sizeBlur(); addEventListener('resize', sizeBlur);
function draw(blur) {
  if (blur < .02) { renderer.setRenderTarget(null); renderer.render(scene, camera); return; }
  renderer.setRenderTarget(blurTarget); renderer.render(scene, camera);
  renderer.setRenderTarget(null);
  blurMat.uniforms.amount.value = blur;
  renderer.render(blurScene, blurCam);
}
let fly = null;                // the fly-through in progress: { start, dur, from }
function endFlyover() {
  if (!fly) return;
  fly = null; target = cam; lastInput = performance.now();
  showCaption();
}

/* ---------- where you stand ---------- */
let cam = 0, target = 0;                                       // how far you've walked round (it just keeps going)
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const _a = new THREE.Vector3(), _b = new THREE.Vector3();
function walkPose(c, pos, look) {                              // walking: in the middle, looking round the bend
  const a = c / R;
  onCircle(R, a, SETTINGS.eye, pos);
  onCircle(RO * .97, a + SETTINGS.lookAhead, SETTINGS.hangHeight - 30, look);   // (eyes level with the works)
}
function focusPose(w, pos, look) {                             // looking closer: standing right in front of a work
  const a = itemAngle(w.k), tanHalf = Math.tan(camera.fov * Math.PI / 360);
  const dist = Math.max(w.h / SETTINGS.focusFill / 2 / tanHalf, w.w / SETTINGS.focusFill / 2 / (tanHalf * camera.aspect)) + 31;
  onCircle(RO - Math.min(dist, SETTINGS.width - 120), a, SETTINGS.hangHeight + 6, pos);
  onCircle(RO - 31, a, SETTINGS.hangHeight, look);
}
const camForWork = w => {                                      // where to stand to see a work (the nearest lap to where you are)
  const c = (itemAngle(w.k) - SETTINGS.lookAhead * .78) * R;
  return c + LOOP * Math.round((cam - c) / LOOP);
};

let focused = null;            // the work you're looking closer at (or null while walking)
let tween = null;              // a glide in progress: { fromPos, fromLook, to: 'walk' | work, start, dur }
function glide(to, dur = SETTINGS.glide) {
  tween = { fromPos: camPos.clone(), fromLook: camLook.clone(), to, start: performance.now(), dur };
}
function lookCloser(w) {
  lastInput = performance.now();
  focused = w;
  glide(w);
  showCaption();
}
function backToWalking() {
  if (!focused) return;
  cam = target = camForWork(focused);
  focused = null;
  glide('walk', 800);
  showCaption();
}
let lastInput = performance.now();                             // the last time you scrolled, dragged, clicked or pressed a key
function walkBy(d, idle) {
  if (fly) endFlyover();                                       // (scrolling skips the fly-through)
  if (!idle) lastInput = performance.now();
  if (focused) backToWalking();
  target += d;
}
function nearestWork() {                                       // the work in front of you right now
  if (focused) return focused;
  const a = (fly && fly.reveal ? 0 : cam) / R + SETTINGS.lookAhead * .78;   // (as the fly-through lands: where it's landing)
  let best = works[0], bd = Infinity;
  for (const w of works) { const d = Math.abs(wrap(itemAngle(w.k) - a)); if (d < bd) { bd = d; best = w; } }
  return best;
}
function step(dir) {                                           // the round arrow buttons: on to the next (or last) work
  if (focused) return lookCloser(works[(focused.k + dir + SLOTS) % SLOTS]);
  const s = (cam / R + SETTINGS.lookAhead * .78) / SLOT - .6;   // where you're looking, counted in works
  const k = dir > 0 ? Math.ceil(s - .05) : Math.floor(s - .1);
  lookCloser(works[((k % SLOTS) + SLOTS) % SLOTS]);
}

/* ---------- the caption at the bottom ---------- */
let captionFor = null;
function showCaption() {
  $('caption').classList.toggle('away', !!focused || (!!fly && !fly.reveal));   // out of the way while you look closer (or fly through)
  const w = nearestWork();
  const key = (focused ? 'f' : 'w') + w.k;
  if (key === captionFor) return;
  captionFor = key;
  const cap = $('caption');
  cap.classList.add('fade');
  setTimeout(() => {
    $('cap-label').textContent = focused ? 'You are looking at' : 'You are walking past';
    $('cap-title').textContent = w.item.title;
    $('cap-link').textContent = { about: 'Read about me →', contact: 'See all the ways to reach me →' }[w.item.kind] || 'View project →';
    cap.classList.remove('fade');
  }, 180);
}
$('cap-link').onclick = () => openItem(nearestWork().item);
function openItem(item) { if (item.kind === 'about') openAbout(); else if (item.kind === 'contact') openAbout('contact'); else openProject(item.i); }

/* ---------- input: scroll, drag, keys, clicks ---------- */
const pagesOpen = () => document.body.classList.contains('list-mode') || document.querySelector('.page.open') || $('viewer').classList.contains('open');
host.addEventListener('wheel', e => {
  e.preventDefault();
  const d = e.deltaMode === 1 ? e.deltaY * 30 : e.deltaY;
  walkBy(d * SETTINGS.walkSpeed);
}, { passive: false });
let drag = null;
host.addEventListener('pointerdown', e => {
  lastInput = performance.now();
  if (fly) endFlyover();
  drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: 0 };
  host.setPointerCapture(e.pointerId);
});
host.addEventListener('pointermove', e => {
  pointer.x = e.clientX; pointer.y = e.clientY; pointer.in = true;
  if (!drag) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  drag.x = e.clientX; drag.y = e.clientY;
  drag.moved += Math.abs(dx) + Math.abs(dy);
  if (drag.moved > 6) { host.classList.add('dragging'); walkBy(-(dx + dy) * 2.4); }
});
host.addEventListener('pointerup', e => {
  const wasClick = drag && drag.moved <= 6;
  drag = null; host.classList.remove('dragging');
  if (wasClick) clickAt(e.clientX, e.clientY);
});
host.addEventListener('pointerleave', () => { pointer.in = false; });
const keys = new Set();
addEventListener('keydown', e => {
  lastInput = performance.now();
  if (fly) endFlyover();
  if (e.key === 'Escape') return closeTop();
  if (pagesOpen()) return;
  if (['ArrowUp', 'w', 'W', 'ArrowDown', 's', 'S'].includes(e.key)) { keys.add(e.key.toLowerCase()); e.preventDefault(); }
  if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') step(1);
  if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') step(-1);
  if (e.key === 'Enter' && focused) openItem(focused.item);
});
addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
$('prev').onclick = () => step(-1);
$('next').onclick = () => step(1);

// the view leans gently towards wherever your mouse is
const pan = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('pointermove', e => { pan.tx = e.clientX / innerWidth * 2 - 1; pan.ty = e.clientY / innerHeight * 2 - 1; });
document.addEventListener('pointerleave', () => { pan.tx = pan.ty = 0; });
const UP = new THREE.Vector3(0, 1, 0), _f = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _look = new THREE.Vector3();
let drift = 0;                                                 // the idle drift's current speed (eases in and out)

const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
const pointer = { x: 0, y: 0, in: false };
function hitAt(x, y) {
  const r = host.getBoundingClientRect();
  ndc.set((x - r.left) / r.width * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return raycaster.intersectObjects(clickables, false)[0] || null;
}
function clickAt(x, y) {
  const hit = hitAt(x, y);
  const w = hit && hit.object.userData.work;
  if (focused) {                                               // looking closer:
    if (w === focused) { if (!tween) openItem(w.item); }       //   click the work again to open it,
    else backToWalking();                                      //   or anywhere else to step back out
    return;
  }
  if (w) lookCloser(w);
}

/* ---------- every frame ---------- */
let hovered = null, last = performance.now();
const hoverTag = $('hover-tag');
function tick(now) {
  requestAnimationFrame(tick);
  const dt = Math.min((now - last) / 16.67, 3); last = now;
  if (document.hidden || pagesOpen()) return;                 // (nothing to draw while a page covers the gallery)
  if (keys.has('arrowup') || keys.has('w')) walkBy(18 * dt);
  if (keys.has('arrowdown') || keys.has('s')) walkBy(-18 * dt);
  // left alone for a while, the gallery drifts slowly on by itself (pausing while you point at a work)
  const idle = !focused && !tween && !drag && !hovered && SETTINGS.idleSpeed > 0 && now - lastInput > SETTINGS.idleAfter * 1000;
  drift += ((idle ? SETTINGS.idleSpeed : 0) - drift) * .012 * dt;
  if (drift > .001) target += drift * dt;
  let blur = 0;
  if (fly) {                                                    // the opening fly-through
    const before = cam;
    if (!fly.settling) {
      const k = clamp((now - fly.start) / fly.dur, 0, 1);
      cam = target = fly.from * (1 - flyCurve(k));              // speeds up, cruises, then slows down…
      if (k >= FLYOVER.captionAt) fly.reveal = true;            // (the caption fades in as it slows)
      if (k === 1) { fly.settling = true; fly.v = (cam - before) / Math.max(dt, .001); }
    } else {                                                    // …and its momentum carries it a touch past the start,
      fly.v += (-.012 * cam - .085 * fly.v) * dt;               //    then a soft spring pulls it back and it settles
      cam = target = cam + fly.v * dt;
      if (Math.abs(cam) < .5 && Math.abs(fly.v) < .05) { cam = target = 0; endFlyover(); }
    }
    blur = Math.min(1.6, Math.abs(cam - before) / Math.max(dt, .001) / 220) * FLYOVER.blur;
  } else cam += (target - cam) * (1 - Math.pow(1 - SETTINGS.smoothing, dt));
  // where the camera is
  if (tween) {
    const k = clamp((now - tween.start) / tween.dur, 0, 1), e = easeInOut(k);
    if (tween.to === 'walk') walkPose(cam, _a, _b); else focusPose(tween.to, _a, _b);
    camPos.lerpVectors(tween.fromPos, _a, e); camLook.lerpVectors(tween.fromLook, _b, e);
    if (k === 1) tween = null;
  } else if (focused) focusPose(focused, camPos, camLook);
  else walkPose(cam, camPos, camLook);
  camera.position.copy(camPos);
  pan.x += (pan.tx - pan.x) * .05 * dt; pan.y += (pan.ty - pan.y) * .05 * dt;
  _f.subVectors(camLook, camPos); const far = _f.length(); _f.normalize();
  _r.crossVectors(_f, UP).normalize(); _u.crossVectors(_r, _f);
  _look.copy(camLook).addScaledVector(_r, pan.x * far * SETTINGS.mousePan).addScaledVector(_u, -pan.y * far * SETTINGS.mousePan * .6);
  camera.lookAt(_look);
  // what the pointer is over
  const hit = pointer.in && !drag && !fly ? hitAt(pointer.x, pointer.y) : null;
  const over = hit ? (hit.object.userData.work || 'contact') : null;
  if (over !== hovered) {
    hovered = over;
    host.classList.toggle('pointing', !!over);
    hoverTag.classList.toggle('show', !!over);
    if (over === 'contact') hoverTag.textContent = 'Get in touch';
    else if (over) hoverTag.textContent = focused === over ? ({ about: 'Read about me', contact: 'Get in touch' }[over.item.kind] || 'Open project') : 'Look closer';
  }
  if (over) { hoverTag.style.left = pointer.x + 'px'; hoverTag.style.top = pointer.y + 'px'; }
  for (const w of works) {                                     // the one you point at lifts off the wall a little
    w.lifted += ((hovered === w ? 1 : 0) - w.lifted) * .18;
    w.lift.position.z = w.lifted * 10;
  }
  if (!tween) showCaption();
  draw(blur);
}

/* ---------- the list view ---------- */
const rowImgs = [];
// The list shows small copies of your images (made once, in the background), rather than the full-size files:
// big images are slow to decode, which made switching to the list and scrolling it stutter.
function makeThumbs(sources) {
  const idle = window.requestIdleCallback || (fn => setTimeout(fn, 60));
  let i = 0;
  const next = () => {
    if (i >= PROJECTS.length) return;
    const k = i++, src = sources[k], el = rowImgs[k];
    if (!el) return idle(next);
    if (PROJECTS[k].thumb) { el.src = PROJECTS[k].thumb; return idle(next); }   // your own thumbnail, used as it is
    if (!src) { el.src = PROJECTS[k].image || ''; return idle(next); }
    const W = 740, Hh = 532, c = document.createElement('canvas'); c.width = W; c.height = Hh;
    const iw = src.naturalWidth || src.width, ih = src.naturalHeight || src.height, s = Math.max(W / iw, Hh / ih);
    c.getContext('2d').drawImage(src, (W - iw * s) / 2, (Hh - ih * s) / 2, iw * s, ih * s);   // cropped to fill, like the list shows it
    c.toBlob(b => { if (b) el.src = URL.createObjectURL(b); idle(next); }, 'image/jpeg', .85);
  };
  idle(next);
}
function buildList() {
  $('list-count').textContent = `${PROJECTS.length} projects`;
  const rows = $('list-rows');
  PROJECTS.forEach((p, i) => {
    const row = document.createElement('button'); row.className = 'row';
    row.innerHTML = `<div class="row-img"><img alt="" decoding="async"></div>
      <div><div class="row-title"></div><div class="row-sub"></div></div><div class="row-arrow">→</div>`;
    rowImgs[i] = row.querySelector('img');                     // (filled with a small, quick copy once the images have loaded)
    row.querySelector('.row-title').textContent = p.title;
    row.querySelector('.row-sub').textContent = [p.category, p.year].filter(Boolean).join(' · ');
    row.onclick = () => openProject(i);
    rows.appendChild(row);
  });
}
function setView(list) {
  document.body.classList.toggle('list-mode', list);
  $('btn-gallery').setAttribute('aria-pressed', String(!list));
  $('btn-list').setAttribute('aria-pressed', String(list));
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.go === (list ? 'list' : 'gallery') && !document.querySelector('.page.open')));
}
/* The list's images stretch and trail a little behind as you scroll, with a touch of motion blur,
   as if they're stuck to the page and being dragged along. They settle back the moment you stop. */
const LIST_DRAG = {
  stretch: .0045,   // how much the images stretch per unit of scroll speed (0 = off)
  lag: .35,         // how far they trail behind
  blur: .12         // how much motion blur (0 = none)
};
{
  const list = $('list');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0'); svg.style.position = 'absolute';
  svg.innerHTML = '<filter id="vblur" x="0" y="-20%" width="100%" height="140%"><feGaussianBlur stdDeviation="0 0"/></filter>';
  document.body.appendChild(svg);
  const blurNode = svg.querySelector('feGaussianBlur');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastTop = 0, vel = 0, running = false;
  const frame = () => {
    const top = list.scrollTop, v = clamp(top - lastTop, -70, 70);
    lastTop = top;
    vel += (v - vel) * .22;
    if (Math.abs(vel) < .05 && v === 0) vel = 0;
    const a = Math.abs(vel), down = vel > 0;
    const blur = Math.min(6, a * LIST_DRAG.blur);
    blurNode.setAttribute('stdDeviation', `0 ${blur.toFixed(2)}`);
    const tf = vel === 0 ? '' : `translateY(${(vel * LIST_DRAG.lag).toFixed(2)}px) scaleY(${(1 + a * LIST_DRAG.stretch).toFixed(4)})`;
    for (const el of rowImgs) {
      const box = el && el.parentElement; if (!box) continue;
      box.style.transformOrigin = down ? 'center top' : 'center bottom';   // the leading edge keeps up; the trailing edge drags
      box.style.transform = tf;
      box.style.filter = blur > .3 ? 'url(#vblur)' : '';
    }
    if (vel !== 0 && document.body.classList.contains('list-mode')) requestAnimationFrame(frame);
    else running = false;
  };
  list.addEventListener('scroll', () => {
    if (reduce || running) return;
    running = true; requestAnimationFrame(frame);
  }, { passive: true });
}
$('btn-gallery').onclick = () => { closePages(); setView(false); };
$('btn-list').onclick = () => { closePages(); setView(true); };

/* ---------- a project's page ---------- */
let media = [], mediaAt = 0, pageProject = -1;
function openProject(i) {
  const p = PROJECTS[i]; if (!p) return;
  pageProject = i;
  $('p-title').textContent = p.title;
  $('p-sub').textContent = p.category || '';
  $('p-summary').textContent = p.summary || '';
  const more = $('p-more'); more.innerHTML = ''; more.classList.remove('open');
  [['Brief', p.brief], ['Process', p.process], ['Outcome', p.outcome]].forEach(([h, t]) => {
    if (!t) return;
    const s = document.createElement('section');
    s.innerHTML = '<div class="label"></div><p></p>';
    s.querySelector('.label').textContent = h; s.querySelector('p').textContent = t;
    more.appendChild(s);
  });
  $('p-readmore').style.display = more.children.length ? '' : 'none';
  $('p-readmore').textContent = 'Read more +';
  const det = $('p-details'); det.innerHTML = '';
  const detail = (label, value, chips) => {
    if (!value || (Array.isArray(value) && !value.length)) return;
    const d = document.createElement('div'); d.className = 'detail';
    const l = document.createElement('div'); l.className = 'label'; l.textContent = label + ':';
    if (!chips) { const s = document.createElement('span'); s.textContent = value; l.appendChild(s); d.appendChild(l); }
    else {
      d.appendChild(l);
      const c = document.createElement('div'); c.className = 'chips';
      value.forEach((v, k) => { const b = document.createElement('div'); b.className = 'chip' + (k === 0 ? ' strong' : ''); b.textContent = v; c.appendChild(b); });
      d.appendChild(c);
    }
    det.appendChild(d);
  };
  detail('Tools', p.tools, true);
  detail('Year', p.year);
  detail('Course', p.course);
  detail('Category', p.category);
  // everything to show on the left: the main image, then any extra images, then any videos
  media = [{ type: 'img', src: p.image || placeholderCanvas(ITEMS[i + 1], i + 1).toDataURL('image/jpeg', .85) }];
  (p.extras || []).forEach(x => x && x.src && media.push({ type: 'img', src: x.src, caption: x.caption }));
  showMedia(0);
  buildLine(p);
  $('about').classList.remove('open');
  $('project').classList.add('open'); $('project').scrollTop = 0;
  document.body.classList.add('page-open');
  setView(document.body.classList.contains('list-mode'));
}
function showMedia(k) {
  mediaAt = (k + media.length) % media.length;
  const m = media[mediaAt], stage = $('p-stage');
  stage.querySelectorAll('video').forEach(v => v.pause());
  stage.innerHTML = '';
  if (m.type === 'video') {
    const v = document.createElement('video');
    Object.assign(v, { src: m.src, muted: true, loop: true, autoplay: true, playsInline: true, controls: true });
    stage.appendChild(v);
  } else {
    const img = document.createElement('img'); img.src = m.src; img.alt = m.caption || '';
    img.onclick = () => openViewer(m.src);
    stage.appendChild(img);
  }
  $('p-count').textContent = `${mediaAt + 1}/${media.length}`;
  document.querySelector('.p-nav').classList.toggle('solo', media.length < 2);
}
$('p-prev').onclick = () => showMedia(mediaAt - 1);
$('p-next').onclick = () => showMedia(mediaAt + 1);
$('p-readmore').onclick = () => {
  const open = $('p-more').classList.toggle('open');
  $('p-readmore').textContent = open ? 'Read less −' : 'Read more +';
};
$('p-back').onclick = () => { closePages(); };
$('p-wall').onclick = () => {                                  // go and stand in front of it in the gallery
  const a = cam / R + SETTINGS.lookAhead * .78;                 // (the nearest copy of it round the loop)
  const w = works.filter(x => x.item.kind === 'project' && x.item.i === pageProject)
    .sort((p, q) => Math.abs(wrap(itemAngle(p.k) - a)) - Math.abs(wrap(itemAngle(q.k) - a)))[0];
  closePages(); setView(false);
  if (w) { cam = target = camForWork(w); walkPose(cam, camPos, camLook); lookCloser(w); }
};

/* ---------- the clothesline (further down a project's page) ----------
   The images hang from a sagging line by little pegs. As you scroll down through this part of the page
   the line moves along, through every image and round to the start again; you can also drag it.
   The sheets sway a little as they move, and the one in the middle is shown larger with its description. */
const LINE = {
  sheetW: 420,      // the most room each hanging image gets, wide (on a big screen; tall images are limited by height instead)
  singleW: 760,     // how wide it is when there's only one thing on the line
  gap: 110,         // the space between them
  sag: 70,          // how far the line dips in the middle
  scrollPerImage: 170,   // how much page scrolling moves the line on by one image (bigger = slower)
  sway: 1           // how much they swing as they move (0 = not at all)
};
const line = { on: false, items: [], sheets: [], offset: 0, want: 0, drag: 0, vel: 0, n: 0, spacing: 0 };
function linePlaceholder(p, x, k, isVideo) {                            // a stand-in for a clothesline image you haven't added yet
  const c = document.createElement('canvas'); c.width = 600; c.height = 450;
  const g = c.getContext('2d');
  g.fillStyle = p.colour || '#777'; g.fillRect(0, 0, 600, 450);
  g.fillStyle = 'rgba(255,255,255,.16)'; g.beginPath(); g.arc(300, 200, 110, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff'; g.textAlign = 'center';
  g.font = '54px "Oranienbaum", serif'; g.fillText(x.caption || `Image ${k + 1}`, 300, 218);
  g.font = '15px "IBM Plex Mono", monospace'; g.fillText(isVideo ? '▶ ADD A VIDEO IN main.js' : 'ADD AN IMAGE IN main.js', 300, 410);
  return c.toDataURL('image/jpeg', .85);
}
function buildLine(p) {
  const wrap = $('line-wrap'), track = $('line-track');
  line.on = false;
  track.innerHTML = ''; line.sheets = [];
  line.items = [
    ...(p.room || []).filter(Boolean).map((x, k) =>                                   // images, or videos (video: '…')
      'video' in x && x.video ? { ...x, type: 'video', src: x.video }
                              : { ...x, type: 'img', src: x.src || linePlaceholder(p, x, k, 'video' in x) }),   // (empty spots get a placeholder)
    ...(p.videos || []).filter(x => x && x.src).map(x => ({ ...x, type: 'video' }))   // videos hang on the line too
  ];
  const hasVideo = line.items.some(x => x.type === 'video');
  if (line.items.length < (hasVideo ? 1 : 2)) { wrap.hidden = true; $('more-cue').classList.remove('show'); return; }
  wrap.hidden = false;
  const title = p.lineTitle || (line.items.every(x => x.type === 'video') ? 'Watch the film' : 'The full set');
  $('more-cue-text').textContent = `Scroll down · ${title}`;
  $('line-title').textContent = title;
  $('line-total').textContent = String(line.items.length).padStart(2, '0');
  // just one thing to hang: it hangs on its own in the middle, larger, and stays put (no repeats)
  line.single = line.items.length === 1;
  wrap.classList.toggle('single', line.single);
  $('line-kicker').lastChild.textContent = line.single ? ' Click to watch it big' : ' Keep scrolling to move along the line';
  $('line-hint').textContent = line.single ? (line.items[0].type === 'video' ? 'Click to watch with sound' : 'Click to view it big') : 'Scroll or drag · click one to view it big';
  const w = line.single ? Math.min(LINE.singleW, innerWidth * (innerWidth < 700 ? .86 : .5))
                        : Math.min(LINE.sheetW, innerWidth * (innerWidth < 700 ? .7 : .3));
  line.spacing = w + LINE.gap; line.w = w;
  // repeat the set if needed, so the line is always full from edge to edge
  const reps = line.single ? 1 : Math.max(1, Math.ceil((innerWidth + line.spacing * 3) / (line.items.length * line.spacing)));
  line.n = line.items.length * reps;
  for (let k = 0; k < line.n; k++) {
    const it = line.items[k % line.items.length];
    const el = document.createElement('figure'); el.className = 'sheet';
    el.style.width = w + 'px';
    if (it.type === 'video') {                                   // a video (it plays, muted, while it's on screen)
      el.classList.add('is-video');
      el.innerHTML = '<span class="peg"></span><div class="sheet-media"><video muted loop playsinline preload="auto"></video></div><figcaption></figcaption>';
      el.querySelector('video').src = it.src + '#t=0.1';        // (#t=0.1 shows its first frame before it plays)
    } else {
      el.innerHTML = '<span class="peg"></span><div class="sheet-media"><img alt="" decoding="async"></div><figcaption></figcaption>';
      el.querySelector('img').src = it.src;
    }
    el.querySelector('figcaption').textContent = it.caption || '';
    el.dataset.n = k % line.items.length;
    track.appendChild(el);
    line.sheets.push({ el, k, video: el.querySelector('video'), sway: 0, swayV: 0, seed: .75 + ((k * 37) % 10) / 20 });
  }
  line.lap = line.single ? 0 : Math.max(line.items.length, 4);  // (at least a few steps' worth of scrolling)
  wrap.style.height = `calc(100vh + ${line.lap * LINE.scrollPerImage}px)`;
  line.offset = line.want = line.drag = 0; line.centreSheet = null;
  line.on = true;
  requestAnimationFrame(lineTick);
}
function lineTick() {
  if (!line.on || !$('project').classList.contains('open')) { line.on = false; return; }
  requestAnimationFrame(lineTick);
  const page = $('project'), wrap = $('line-wrap'), stick = wrap.firstElementChild;
  const run = wrap.offsetHeight - stick.offsetHeight;
  // the "scroll down" nudge shows while the clothesline is still out of sight below
  $('more-cue').classList.toggle('show', wrap.offsetTop - page.scrollTop > page.clientHeight - 40);   // (until the line's own heading peeks in)
  const prog = run > 0 ? clamp((page.scrollTop - wrap.offsetTop) / run, 0, 1) : 0;
  line.want = line.single ? 0 : prog * line.lap * line.spacing + line.drag;   // one full lap over this part of the page
  const before = line.offset;
  line.offset += (line.want - line.offset) * .12;
  line.vel += ((line.offset - before) - line.vel) * .2;
  const W = stick.clientWidth, Hh = stick.clientHeight, total = line.n * line.spacing;
  const y0 = Hh * .26, sag = LINE.sag;
  const rope = $('line-rope');
  rope.setAttribute('viewBox', `0 0 ${W} ${Hh}`);
  rope.firstElementChild.setAttribute('d', `M -20 ${y0} Q ${W / 2} ${y0 + sag * 2} ${W + 20} ${y0}`);
  let centre = null, best = Infinity;
  for (const s of line.sheets) {
    let x = ((s.k * line.spacing - line.offset) % total + total) % total;   // wrap round: the line never ends
    if (x >= total / 2) x -= total;                                 // (so there are always sheets either side of the middle)
    const sx = W / 2 + x;                                           // (sheet 0 starts in the middle)
    const u = (sx - W / 2) / (W / 2);
    const y = y0 + sag * (1 - u * u);                               // hanging on the curve of the line
    const slope = Math.atan2(-2 * sag * u / (W / 2), 1) * 180 / Math.PI;
    // a little swing as the line moves, springing back when it stops
    const target = clamp(-line.vel * .3 * LINE.sway * s.seed, -7, 7);
    s.swayV += (target - s.sway) * .06; s.swayV *= .86; s.sway += s.swayV;
    const near = Math.max(0, 1 - Math.abs(u) * 1.6);
    const scale = 1 + near * .06;
    s.el.style.transform = `translate(${(sx - line.w / 2).toFixed(1)}px, ${(y - 6).toFixed(1)}px) rotate(${(slope + s.sway).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    s.el.style.zIndex = Math.round(near * 10);
    if (Math.abs(x) < best) { best = Math.abs(x); centre = s; }
    if (s.video) {                                                  // videos loop the whole time they're on screen
      const on = Math.abs(x) < W / 2 + line.w;
      if (on && s.video.paused) s.video.play().catch(() => {});
      else if (!on && !s.video.paused) s.video.pause();
    }
  }
  if (centre && line.centreSheet !== centre) {                  // a new sheet has reached the middle
    line.centreSheet = centre;
    const n = +centre.el.dataset.n;
    $('line-num').textContent = String(n + 1).padStart(2, '0');
    $('line-cap').textContent = line.items[n].caption || '';
    line.sheets.forEach(s => s.el.classList.toggle('centre', s === centre));
  }
}
$('more-cue').onclick = () => $('project').scrollTo({ top: $('line-wrap').offsetTop, behavior: 'smooth' });
{
  const track = $('line-track');
  let d = null;
  track.addEventListener('pointerdown', e => { d = { x: e.clientX, moved: 0 }; track.setPointerCapture(e.pointerId); });
  track.addEventListener('pointermove', e => {
    if (!d) return;
    const dx = e.clientX - d.x; d.x = e.clientX; d.moved += Math.abs(dx);
    if (line.single) return;
    line.drag -= dx; line.offset -= dx;                              // drag the line along
  });
  track.addEventListener('pointerup', e => {
    const click = d && d.moved < 6; d = null;
    if (!click) return;
    const sheet = document.elementsFromPoint(e.clientX, e.clientY).find(el => el.classList && el.classList.contains('sheet'));
    if (!sheet) return;                                              // click a sheet to see it full size
    const v = sheet.querySelector('video');
    if (v) openViewer(v.currentSrc || v.src, true); else openViewer(sheet.querySelector('img').src);
  });
}

/* ---------- the About page (with contact details at the bottom) ---------- */
function buildAbout() {
  $('a-name').textContent = ABOUT.name;
  $('a-intro').textContent = ABOUT.intro || '';
  if (ABOUT.photo) $('a-photo').src = ABOUT.photo; else $('a-photo').parentElement.style.display = 'none';
  const secs = $('a-sections');
  (ABOUT.sections || []).forEach(([h, t]) => {
    const s = document.createElement('section'); s.innerHTML = '<div class="label"></div><p></p>';
    s.querySelector('.label').textContent = h; s.querySelector('p').textContent = t; secs.appendChild(s);
  });
  const tools = $('a-tools');
  TOOLS.forEach(t => { const c = document.createElement('div'); c.className = 'chip'; c.textContent = t.name; tools.appendChild(c); });
  if (!TOOLS.length) $('a-tools-block').style.display = 'none';
  const words = $('a-words');
  (PEOPLE || []).filter(q => q.quote).forEach(q => {
    const d = document.createElement('div'); d.className = 'quote';
    d.innerHTML = '<p></p><small></small>';
    d.querySelector('p').textContent = `“${q.quote}”`;
    d.querySelector('small').textContent = q.from || '';
    words.appendChild(d);
  });
  if (!words.children.length) $('a-words-block').style.display = 'none';
  const con = $('a-contact');
  const line = (label, text, href, copy) => {
    if (!text) return;
    const d = document.createElement('div'); d.className = 'contact-line';
    d.innerHTML = '<span></span><a></a>';
    d.querySelector('span').textContent = label;
    const a = d.querySelector('a'); a.textContent = text; a.href = href;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    if (copy) {                                                // email and phone: a click copies it for you
      a.title = 'Click to copy';
      const note = document.createElement('em');
      Object.assign(note.style, { fontFamily: 'var(--mono)', fontStyle: 'normal', fontSize: '10px', letterSpacing: '.2em',
        textTransform: 'uppercase', color: 'var(--muted)', marginLeft: '14px', transition: 'opacity .3s' });
      note.textContent = 'Click to copy';
      d.appendChild(note);
      a.onclick = e => {
        e.preventDefault();
        copyText(copy).then(ok => {
          note.textContent = ok ? 'Copied ✓' : 'Press Ctrl+C to copy';
          note.style.color = ok ? 'var(--ink)' : 'var(--muted)';
          clearTimeout(note.t);
          note.t = setTimeout(() => { note.textContent = 'Click to copy'; note.style.color = 'var(--muted)'; }, 1800);
        });
      };
    }
    con.appendChild(d);
  };
  line('Email', CONTACT.email, 'mailto:' + CONTACT.email, CONTACT.email);
  line('Phone', CONTACT.phone, 'tel:' + String(CONTACT.phone).replace(/\s/g, ''), CONTACT.phone);
  line('Instagram', CONTACT.instagram, CONTACT.instagramUrl);
  line('LinkedIn', CONTACT.linkedin, CONTACT.linkedinUrl);
}
// Copy some text to the clipboard (with an older fallback for browsers that block the modern way)
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext)
    return navigator.clipboard.writeText(text).then(() => true, () => fallback());
  return Promise.resolve(fallback());
  function fallback() {
    const t = document.createElement('textarea'); t.value = text;
    Object.assign(t.style, { position: 'fixed', opacity: '0' }); document.body.appendChild(t); t.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
    t.remove(); return ok;
  }
}
// Keep your photo centred up and down beside the text (and centred as you scroll the page), on wider screens
function centrePhoto() {
  const box = $('a-photo').parentElement, img = $('a-photo'), page = $('about');
  if (innerWidth <= 820) { box.removeAttribute('style'); img.removeAttribute('style'); return; }   // (phones: photo sits above the text)
  Object.assign(box.style, { position: 'relative', top: '0', alignSelf: 'stretch', background: 'none' });
  const h = img.offsetHeight || 0, view = page.clientHeight;
  Object.assign(img.style, { position: 'sticky', top: Math.max(30, (view - h) / 2) + 'px' });
}
addEventListener('resize', () => { if ($('about').classList.contains('open')) centrePhoto(); });
$('a-photo').addEventListener('load', () => { if ($('about').classList.contains('open')) centrePhoto(); });
function openAbout(section) {
  $('project').classList.remove('open');
  const page = $('about'); page.classList.add('open');
  centrePhoto();
  document.body.classList.add('page-open');
  page.scrollTop = 0;
  if (section === 'contact') setTimeout(() => $('contact').scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.go === (section === 'contact' ? 'contact' : 'about')));
}
$('a-back').onclick = () => closePages();

function closePages() {
  line.on = false;
  $('line-track').querySelectorAll('video').forEach(v => v.pause());
  $('more-cue').classList.remove('show');
  document.querySelectorAll('.page.open').forEach(p => p.classList.remove('open'));
  document.body.classList.remove('page-open');
  $('p-stage').querySelectorAll('video').forEach(v => v.pause());
  setView(document.body.classList.contains('list-mode'));
}
function closeTop() {
  if ($('viewer').classList.contains('open')) return closeViewer();
  if (document.querySelector('.page.open')) return closePages();
  if (focused) backToWalking();
}

/* ---------- header ---------- */
{
  const logo = $('logo');
  if (LOGO) { logo.classList.add('has-img'); logo.innerHTML = `<img src="${LOGO}" alt="">`; }
  else logo.textContent = ABOUT.name.split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase();
  logo.onclick = () => {                                       // back to the start of the gallery
    closePages(); setView(false);
    focused = null; cam = target = LOOP * Math.round(cam / LOOP); glide('walk', 900);
  };
  document.querySelectorAll('.nav button').forEach(b => b.onclick = () => {
    const go = b.dataset.go;
    if (go === 'gallery') { closePages(); setView(false); }
    if (go === 'list') { closePages(); setView(true); }
    if (go === 'about') openAbout();
    if (go === 'contact') openAbout('contact');
  });
  $('loader-name').textContent = ABOUT.name;
  $('header-tag').textContent = 'Design × Psychology';
}

/* ---------- full-size image ---------- */
const viewer = $('viewer'), vImg = $('viewer-img');
const vVid = $('viewer-video');
function openViewer(src, isVideo) {
  viewer.classList.remove('zoomed');
  viewer.classList.toggle('is-video', !!isVideo);
  if (isVideo) { vVid.src = src; vVid.currentTime = 0; vVid.play().catch(() => {}); }
  else vImg.src = src;
  viewer.classList.add('open');
}
function closeViewer() { viewer.classList.remove('open', 'zoomed'); vVid.pause(); }
vVid.onclick = e => e.stopPropagation();                         // (clicking the video's controls doesn't close it)
vImg.onclick = e => {
  e.stopPropagation();
  const r = vImg.getBoundingClientRect();
  vImg.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
  viewer.classList.toggle('zoomed');
};
viewer.addEventListener('mousemove', e => {                    // while zoomed, move to look around
  if (!viewer.classList.contains('zoomed')) return;
  vImg.style.transformOrigin = `${e.clientX / innerWidth * 100}% ${e.clientY / innerHeight * 100}%`;
});
viewer.onclick = closeViewer;
$('viewer-close').onclick = closeViewer;

/* ---------- start: wait for the fonts and images, hang everything, then open ---------- */
async function start() {
  const fonts = Promise.all(['400 40px "Oranienbaum"', '500 40px "Newsreader"', '400 20px "IBM Plex Mono"']
    .map(f => document.fonts.load(f).catch(() => {})));
  await Promise.race([fonts, new Promise(r => setTimeout(r, 2500))]);
  buildList(); buildAbout();
  for (let k = 0; k < SLOTS; k++) hang(ITEMS[k % ITEMS.length], k);
  const labels = ITEMS.map(labelTex);                          // one label per work, shared by its copies
  works.forEach(w => { w.label.material.map = labels[w.k % ITEMS.length]; w.label.material.needsUpdate = true; });
  const bar = $('loader-bar'), num = $('loader-num');
  const shown = setInterval(() => {
    const k = loading.total ? loading.done / loading.total : 0;
    bar.style.transform = `scaleX(${k.toFixed(3)})`;
    num.textContent = 'Loading ' + String(Math.round(k * 100)).padStart(2, '0') + '%';
  }, 100);
  // each picture is loaded once and shared by every copy of it round the loop
  const imgs = await Promise.race([
    Promise.all(ITEMS.map(it => it.kind === 'contact' ? Promise.resolve(contactCanvas()) : loadImage(it.image))),
    new Promise(r => setTimeout(() => r(null), 12000))         // (don't wait forever on a slow connection)
  ]);
  const apply = (n, src) => {
    const t = textureFrom(src);
    renderer.initTexture(t);                                   // send it to the graphics card now, not mid-walk
    works.forEach(w => {
      if (w.k % ITEMS.length !== n) return;
      w.pic.material.map = t; w.pic.material.needsUpdate = true;
      size(w, src.naturalWidth || src.width, src.naturalHeight || src.height);
    });
  };
  ITEMS.forEach((it, n) => apply(n, (imgs && imgs[n]) || (it.kind === 'contact' ? contactCanvas() : placeholderCanvas(it, n))));
  if (!imgs) ITEMS.forEach((it, n) => it.kind !== 'contact' && loadImage(it.image).then(img => img && apply(n, img)));   // late arrivals swap in
  makeThumbs(PROJECTS.map((p, i) => (imgs && imgs[i + 1]) || (imgs || !p.image ? placeholderCanvas(ITEMS[i + 1], i + 1) : null)));   // (missing images get the placeholder)
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (FLYOVER.loops > 0 && !calm) {                             // the fly-through: round the hallway and back to the start
    cam = target = -LOOP * FLYOVER.loops;
    fly = { start: performance.now() + 450, dur: FLYOVER.duration, from: cam };
    walkPose(cam, camPos, camLook);
  } else {                                                      // (or just a short, gentle drift in)
    walkPose(cam, camPos, camLook);
    onCircle(R, -.05, SETTINGS.eye + 30, camPos);
    tween = { fromPos: camPos.clone(), fromLook: camLook.clone(), to: 'walk', start: performance.now() + 300, dur: 1600 };
  }
  renderer.compile(scene, camera);
  renderer.render(scene, camera);
  clearInterval(shown);
  bar.style.transform = 'scaleX(1)'; num.textContent = 'Loading 100%';
  setTimeout(() => $('loader').classList.add('done'), 250);
  showCaption();
  requestAnimationFrame(tick);
}
start();

// handy for trying things from the browser console
window.gallery = { lookCloser: k => works[k] && lookCloser(works[k]), openProject, openAbout, setView, get cam() { return cam; } };