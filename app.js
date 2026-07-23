const SESSION_STATE_SCOPE = "teoyube.phase11-1.session-only";
const LOCAL_MEDIA_SOURCE_NOTICE =
  "No media has been published yet.";

const localMediaThumbnails = [
  "public/images/embed/embedded-videos-hero-bg.png",
  "public/images/today/teoyubeworld-search-bg.png",
  "public/images/table/calling-compass-panel-bg.png",
  "public/images/search/search-purpose-hero.png",
  "public/images/canon/journey-calling.png",
  "public/images/carousel/kingdom-wisdom.png",
  "public/images/carousel/growth-in-grace.png",
  "public/images/canon/canon-card-04.png"
];

let promiseClusters = [
  {
    theme: "Divine Direction",
    triggers: ["purpose", "direction", "decision", "wisdom", "confused", "calling"],
    scriptures: ["Proverbs 3:5-6", "Psalm 32:8", "Isaiah 30:21", "James 1:5", "John 10:27"],
    keywords: ["Trust", "Instruction", "Direction", "Order", "Voice", "Path"],
    summary:
      "God invites you to trust His wisdom, listen for His voice through Scripture, and take the next faithful step without forcing the whole map to appear at once.",
    declaration:
      "According to Your Word, Lord, guide my path, teach me wisdom, and train my heart to recognize Your direction."
  },
  {
    theme: "Strength in Christ",
    triggers: ["tired", "weak", "fear", "strength", "discouraged", "pressure"],
    scriptures: ["Philippians 4:13", "Isaiah 41:10", "2 Corinthians 12:9", "Psalm 46:1"],
    keywords: ["Christ", "Strength", "Grace", "Help", "Courage", "Steady"],
    summary:
      "God's strength meets weakness with grace. The next action does not need to be dramatic; it needs to be faithful.",
    declaration:
      "Christ strengthens me for obedient action, steady courage, and grace-filled endurance."
  },
  {
    theme: "New Creation",
    triggers: ["change", "identity", "past", "healing", "new", "transformation"],
    scriptures: ["2 Corinthians 5:17", "Romans 12:2", "Ezekiel 36:26", "Galatians 2:20"],
    keywords: ["Renewed", "Created", "Heart", "Mind", "Life", "Christ"],
    summary:
      "In Christ, transformation is not cosmetic. God renews the heart, reshapes the mind, and forms a life that can carry purpose.",
    declaration:
      "I receive renewal in Christ and walk today as one being formed by God's grace."
  },
  {
    theme: "Kingdom Service",
    triggers: ["serve", "ministry", "mission", "people", "church", "help"],
    scriptures: ["Matthew 28:19-20", "1 Peter 4:10", "Ephesians 2:10", "Mark 10:45"],
    keywords: ["Serve", "Gift", "Mission", "Disciple", "Good", "Work"],
    summary:
      "God gives gifts for service. Calling becomes clearer as you bless people with what has already been placed in your hands.",
    declaration:
      "Lord, help me steward my gifts in love and take one faithful step of service today."
  }
];

const archetypes = [
  {
    name: "Paul",
    signals: ["teaching", "writing", "missions", "theology", "communication", "discipleship"],
    themes: "Teaching, mission, conviction, church building"
  },
  {
    name: "Bezalel",
    signals: ["design", "creative", "craft", "technology", "film", "animation", "building"],
    themes: "Spirit-filled skill, creativity, building sacred things"
  },
  {
    name: "Joseph",
    signals: ["strategy", "administration", "leadership", "business", "management", "resilience"],
    themes: "Preparation, stewardship, leadership through adversity"
  },
  {
    name: "Esther",
    signals: ["justice", "advocacy", "influence", "courage", "women", "community"],
    themes: "Courage, timing, advocacy, deliverance"
  },
  {
    name: "Nehemiah",
    signals: ["systems", "restoration", "organization", "rebuilding", "operations", "community"],
    themes: "Rebuilding, burden for broken systems, organized action"
  },
  {
    name: "David",
    signals: ["worship", "music", "creative", "leadership", "youth", "courage"],
    themes: "Worship, courage, creativity, shepherding"
  },
  {
    name: "Deborah",
    signals: ["wisdom", "leadership", "counsel", "discernment", "justice"],
    themes: "Wisdom, leadership, discernment, courage"
  },
  {
    name: "Moses",
    signals: ["deliverance", "advocacy", "intercession", "oppressed", "leadership"],
    themes: "Deliverance, intercession, reluctant leadership"
  }
];

const purposeStages = [
  ["Awakening", "The eyes of understanding begin to open.", 14],
  ["Discovery", "Patterns in promises, gifts, burdens, and archetypes become visible.", 28],
  ["Alignment", "Prayer, habits, and decisions are brought under Scripture.", 42],
  ["Activation", "The Saint moves from knowledge into faithful action.", 56],
  ["Transformation", "Character, testimony, and renewed identity deepen.", 70],
  ["Impact", "Purpose begins blessing others through service and contribution.", 84],
  ["Legacy", "Wisdom, testimony, and purpose become a multiplying record.", 100]
];

const journeyStatuses = [
  "Discovered",
  "Studying",
  "Praying",
  "Acting",
  "Witnessing Progress",
  "Testified",
  "Remembered"
];

const fallbackCoreWords = [
  {
    word: "TEOYUBE",
    pronunciation: "Tee-Oh-You-Bay",
    meaning: "The Eyes Of Your Understanding Being Enlightened",
    category: "Revelation",
    scripture_sources: ["Ephesians 1:18"],
    promise_category: "Calling",
    prayer_use: "Used when praying for understanding, enlightenment, calling, and purpose.",
    animation_symbol: "A door opening as light reveals a path."
  },
  {
    word: "EPHPHATHA",
    pronunciation: "Ef-Fa-Tha",
    meaning: "Be Opened",
    category: "Revelation",
    scripture_sources: ["Mark 7:34"],
    promise_category: "Transformation",
    prayer_use: "Used when praying for spiritual openness, healing, and receptivity to God's word.",
    animation_symbol: "A key turning as closed gates open."
  }
];

let coreWords = fallbackCoreWords;
let theologyConstitution = null;
let promiseCategories = [];
let searchFramework = null;
let promiseClusterArchitecture = null;
let languageGrammar = null;
let promiseLanguageLexicon = [];
let canonArchitecture = null;
let kingdomArchetypes = [];
let covenantPaths = [];
let destinyMaps = [];
let prayerEngineTemplates = [];
let prayerEngineSystem = null;
let prayerRecommendationMap = {};
let prayerJourneys = [];
let tkosArchitecture = null;
let tkosGrowthLevels = [];
let tkosSampleProfile = null;
let tkosEngines = null;
let technicalArchitecture = null;
let onboardingFlow = [];
let subscriptionModel = null;
let mvpBuildOrder = [];
let projectStructureRoadmap = null;
let mvpCodeStarterFiles = null;
let mvpSeedFiles = null;
let mvpUiPages = null;
let mvpBrandIdentity = null;
let mvpLaunchPlan = null;
let launch1StaticMvpPackage = null;
let glyphDefinitions = [];
let promiseGraphDesign = null;
let canonMasterSchema = null;
let graphRelationships = [];
let scriptureKnowledgeGraphSchema = null;
let scriptureCanon = [];
let scriptureLinkedPaths = [];
let scriptureLinkedArchetypes = [];
let scripturePromiseClusters = [];
let scriptureGraphRelationships = [];
let scriptureSearchTags = [];
let promiseClusterSystem = null;
let promiseClusterRules = [];
let promiseClusterNavigation = [];
let compassVideos = [];
let selectedCompassVideo = null;
let todayYoutubeVideos = [];
let selectedTodayYoutubeVideo = null;
let selectedTodayYoutubeVideoIndex = 0;
let promiseMovieStatus = "Loading TeoyubeWorld videos.";
let featuredStoryTimer = null;
let featuredStoryPaused = false;
let featuredStoryDragStart = null;
let promiseTableYoutubeVideos = [];
let selectedPromiseTableVideo = null;
let promiseTableQuery = "";
let uiElementVideos = [];
let uiVideoCategoryFilter = "All Videos";
let uiVideoSearchQuery = "";
let uiVideoSortMode = "Sort by: Latest";
let uiVideoVisibleCount = 4;
let uiVideoCardSelections = new Map();
let backendPromiseSeeds = [];
let optionalMediaStatus = {
  available: false,
  fileCount: 0,
  manifestUrl: null,
  message: "No media has been published yet."
};
let expandedTeoyubeTableRows = new Set([0, 1, 2, 3]);
let teoyubeTableSearchQuery = "";
let teoyubeTableCategoryFilter = "All Categories";
let teoyubeTableSortMode = "Sort by: Position";
let teoyubeTablePageSize = 10;
let teoyubeTablePage = 1;
let activeCanonTab = "canon-maps";
let selectedCanonItemId = "";
let activeCanonPage = 1;
let selectedWatchmanJourneyVideoIndex = 0;
let selectedCanonFeaturedJourneySlideIndex = 0;
let canonFeaturedJourneyTimer = null;
let canonFeaturedJourneyPaused = false;
let canonFeaturedJourneyDragStart = null;
let selectedCanonRecommendedSlideIndex = 0;
let canonRecommendedTimer = null;
let canonRecommendedPaused = false;
let canonRecommendedDragStart = null;
const CANON_ITEMS_PER_PAGE = 12;
const CANON_RECENT_CARD_COUNT = 10;
let lexiconSearchQuery = "";
let lexiconCategoryFilter = "all";
let lexiconSpeechFilter = "all";
let activeLexiconAlpha = "all";
let activeTestimonyFilter = "All";
let activePromiseSlide = 0;
let promiseCarouselTimer = null;
let promiseCarouselPaused = false;
let promiseCarouselDragStart = null;
let lastPromiseCarouselAdvance = 0;

const teoyubeWorldFallbackVideos = [
  ["local-seed-of-promise", "The Seed of Promise", "Teaching", "A local TeoyubeWorld preview about tending promise language through Scripture and faithful action.", ["2 Corinthians 5:17", "Ephesians 1:18"]],
  ["local-power-of-prayer", "The Power of Prayer", "Message", "A Scripture-rooted local preview for prayer, surrender, wisdom, and one faithful next step.", ["Proverbs 3:5-6", "James 1:5"]],
  ["local-walk-in-purpose", "Walk in Divine Purpose", "Teaching", "A cautious calling preview that connects purpose, courage, and Scripture without claiming certainty.", ["Romans 8:28", "Joshua 1:9"]],
  ["local-rooted-in-truth", "Rooted in His Word", "Documentary", "A local preview about Scripture as the highest authority over Teoyube language aids.", ["Psalm 119:105", "Ephesians 1:18"]],
  ["local-called-for-more", "Called for More", "Shorts", "A short local preview encouraging prayerful testing of calling through Scripture, fruit, counsel, and time.", ["Ephesians 2:10", "Romans 8:28"]],
  ["local-strength-for-today", "Strength for Today", "Worship", "A worship preview for renewed strength, patient trust, and hope in waiting.", ["Isaiah 40:31"]],
  ["local-promise-language", "Promise Language and Calling", "Teaching", "A local preview that keeps Teoyube words as memory aids, not Scripture replacements.", ["Ephesians 1:18", "Psalm 119:105"]],
  ["local-daily-assignment", "Daily Divine Assignment", "Message", "A local preview for translating Scripture, prayer, and calling into one faithful action.", ["Matthew 25:21", "Proverbs 16:3"]]
].map(([id, title, category, description, scriptureReferences], index) => ({
  id,
  title,
  category,
  description,
  scriptureReferences,
  channelTitle: "TeoyubeWorld",
  thumbnail: localMediaThumbnails[index % localMediaThumbnails.length],
  sourceStatus: "source_not_connected"
}));

const watchmanJourneyCarouselSlides = [
  {
    title: "Personalized Recommendation Logic",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-01.png"
  },
  {
    title: "Promise-to-Journey Flow",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-02.png"
  },
  {
    title: "Archetype Mapping Logic",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-03.png"
  },
  {
    title: "Journey Lifecycle and Status Flow",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-04.png"
  },
  {
    title: "Teoyube App Promise Journey",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-05.png"
  },
  {
    title: "TeoyubeWorld Faith Discovery Connection",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-06.png"
  },
  {
    title: "The Future of Entertainment",
    image: "public/images/canon/watchman-carousel/canon-watchman-slide-07.png"
  }
];

function normalizeTeoyubeWorldVideos(videos) {
  return (Array.isArray(videos) ? videos : [])
    .filter((video) => video?.id)
    .map((video, index) => {
      const id = String(video.id).trim();
      return {
        ...video,
        id,
        title: video.title || `TeoyubeWorld Video ${index + 1}`,
        description: video.description || "TeoyubeWorld video from the Calling Compass media hub.",
        channelTitle: video.channelTitle || "TeoyubeWorld",
        thumbnail: isExternalUrl(video.thumbnail) ? localMediaThumbnails[index % localMediaThumbnails.length] : video.thumbnail || localMediaThumbnails[index % localMediaThumbnails.length],
        sourceStatus: video.sourceStatus || "source_not_connected"
      };
    });
}

function getTeoyubeWorldChannelVideos(...sources) {
  for (const source of sources) {
    const videos = normalizeTeoyubeWorldVideos(source);
    if (videos.length) return videos;
  }
  return teoyubeWorldFallbackVideos;
}

function isExternalUrl(value) {
  return /^https?:\/\//i.test(String(value || ""));
}

function getLocalMediaThumbnail(video, index = 0) {
  const thumbnail = video?.thumbnail || "";
  return thumbnail && !isExternalUrl(thumbnail)
    ? thumbnail
    : localMediaThumbnails[index % localMediaThumbnails.length];
}

function searchLocalTeoyubeWorldVideos(query = "TeoyubeWorld", ...sources) {
  const videos = getTeoyubeWorldChannelVideos(...sources);
  const term = normalize(query).replace("teoyubeworld", "").trim();
  if (!term) return videos;
  const filtered = videos.filter((video) =>
    normalize([
      video.title,
      video.category,
      video.description,
      video.channelTitle,
      ...(video.scriptureReferences || []),
      ...(video.tags || [])
    ].join(" ")).includes(term)
  );
  return filtered.length ? filtered : videos;
}

function showLocalMediaNotice(title = "TeoyubeWorld media") {
  const message = `${title}: ${LOCAL_MEDIA_SOURCE_NOTICE}`;
  ["#promiseMovieStatus", "#compassVideoStatus", "#uiVideoStatus", "#teoyubeTableEntryStatus"].forEach((selector) => {
    const target = $(selector);
    if (target) target.textContent = message;
  });
  document.body.dataset.mediaNotice = message;
}

function getWatchmanJourneyCarouselVideos() {
  const channelVideos = getTeoyubeWorldChannelVideos(
    promiseTableYoutubeVideos,
    todayYoutubeVideos,
    compassVideos,
    uiElementVideos
  );
  const preferredTitles = ["The Seed of Promise", "Walk in Divine Purpose", "The Power of Prayer"];
  const preferredVideos = preferredTitles
    .map((title) => channelVideos.find((video) => String(video.title || "").toLowerCase().includes(title.toLowerCase())))
    .filter(Boolean);
  const uniqueVideos = [...preferredVideos, ...channelVideos].filter(
    (video, index, videos) => videos.findIndex((candidate) => candidate.id === video.id) === index
  );

  return uniqueVideos.slice(0, 3);
}

function setWatchmanJourneyVideoIndex(index) {
  const total = Math.max(1, watchmanJourneyCarouselSlides.length);
  selectedWatchmanJourneyVideoIndex = ((Number(index) || 0) % total + total) % total;
}

compassVideos = getTeoyubeWorldChannelVideos();
selectedCompassVideo = compassVideos[0];

const featuredStoryMeta = [
  {
    category: "Videos",
    time: "Today",
    cta: "Watch Now",
    description: "Discover how God's promises shape calling, purpose, and spiritual growth.",
    image: "public/images/today/teoyubeworld-search-bg.png"
  },
  {
    category: "Teachings",
    time: "This Week",
    cta: "Explore Teaching",
    description: "A Scripture-led teaching for hearing God's voice and taking the next faithful step.",
    image: "public/images/carousel/kingdom-wisdom.png"
  },
  {
    category: "Devotionals",
    time: "New",
    cta: "Start Devotional",
    description: "A guided devotional for prayer, clarity, promise language, and daily alignment.",
    image: "public/images/carousel/growth-in-grace.png"
  },
  {
    category: "Articles",
    time: "Featured",
    cta: "Read Article",
    description: "Read practical reflections on purpose, calling, testimony, and spiritual formation.",
    image: "public/images/search/teoyube-search-panel-bg.png"
  }
];
let activeAdSlide = 0;
let adCarouselTimer = null;
let adCarouselPaused = false;
let adCarouselDragStart = null;

const promiseCarouselSlides = [
  {
    title: "Where God's Promises Meet Your Calling",
    kicker: "Welcome to Teoyube",
    theme: "Discover Scripture, purpose, and daily promise-led direction.",
    description: "Explore Scripture. Discover your purpose. Walk in promises. Fulfill your destiny through one faithful step at a time.",
    scriptures: ["Jeremiah 29:11", "Psalm 119:105"],
    cta: "Start Today's Journey",
    secondaryCta: "Explore Teoyube",
    artwork: "welcome",
    image: "public/images/today-carousel/today-carousel-01-welcome.png"
  },
  {
    title: "A New Day. A Divine Assignment.",
    kicker: "Today's Journey",
    theme: "Step into today with Scripture, prayer, and purpose.",
    description: "Every day is a step closer to your calling. Begin with God's Word, align your heart, and take action with clarity.",
    scriptures: ["Psalm 118:24", "Proverbs 16:3"],
    cta: "Start Today's Journey",
    secondaryCta: "View My Journey",
    artwork: "journey",
    image: "public/images/today-carousel/today-carousel-02-journey.png"
  },
  {
    title: "Discover. Find. Receive.",
    kicker: "TeoyubeSearch",
    theme: "Search God's promises and receive Scripture-led clarity.",
    description: "Search thousands of promises, Scriptures, teachings, and insights. God's Word is alive and connected to your life.",
    scriptures: ["Psalm 119:105", "Philippians 4:13"],
    cta: "Start Searching",
    secondaryCta: "Explore Categories",
    artwork: "search",
    image: "public/images/today-carousel/today-carousel-03-search.png"
  },
  {
    title: "Explore God's Kingdom Blueprint.",
    kicker: "Canon",
    theme: "Walk in your divine purpose through the order of God's promises.",
    description: "The Canon reveals the eternal order of God's promises, connecting Scripture, purpose, and destiny.",
    scriptures: ["Psalm 119:105", "Ephesians 1:18"],
    cta: "Explore the Canon",
    secondaryCta: "View Kingdom Map",
    artwork: "canon",
    image: "public/images/today-carousel/today-carousel-04-canon.png"
  },
  {
    title: "God's Promises Are Yes and Amen.",
    kicker: "Promise Table",
    theme: "Discover, compare, and stand on His Word.",
    description: "Explore the promises of God organized by theme, Scripture, and purpose. See how His Word applies to your life today.",
    scriptures: ["2 Corinthians 1:20", "Isaiah 55:11"],
    cta: "Explore Promise Table",
    secondaryCta: "My Favorite Promises",
    artwork: "promise",
    image: "public/images/today-carousel/today-carousel-05-promise-table.png"
  },
  {
    title: "Grow Daily. Walk in Purpose.",
    kicker: "Daily Growth",
    theme: "Build a rhythm of Scripture, prayer, and faithful progress.",
    description: "Track your progress, celebrate growth, and stay anchored in God's promises as small steps become eternal impact.",
    scriptures: ["2 Peter 3:18", "Matthew 25:21"],
    cta: "View My Progress",
    secondaryCta: "Today's Devotional",
    artwork: "growth",
    image: "public/images/today-carousel/today-carousel-06-growth.png"
  },
  {
    title: "Live Anchored. Lead With Purpose.",
    kicker: "Live in His Promises",
    theme: "God's promises are for living, leading, and lasting impact.",
    description: "Let His Word shape your decisions, your actions, your relationships, and your legacy.",
    scriptures: ["2 Corinthians 5:7", "Romans 12:2"],
    cta: "Start Living His Promises",
    secondaryCta: "Explore More",
    artwork: "anchored",
    image: "public/images/today-carousel/today-carousel-07-live-promises.png"
  },
  {
    title: "Your Calling. His Kingdom. Eternal Impact.",
    kicker: "Your Kingdom Impact",
    theme: "Every step of faith matters in God's Kingdom story.",
    description: "See how God is using your journey to inspire others, build His Kingdom, and multiply lasting fruit.",
    scriptures: ["Isaiah 62:3", "Matthew 25:21"],
    cta: "See My Impact",
    secondaryCta: "Share Your Story",
    artwork: "impact",
    image: "public/images/today-carousel/today-carousel-08-impact.png"
  },
  {
    title: "Go Deeper. Live Stronger.",
    kicker: "Deepen Your Journey",
    theme: "Keep exploring God's Word and His promises.",
    description: "Continue exploring Scripture and let His promises shape your life, your purpose, and your legacy.",
    scriptures: ["Lamentations 3:23", "Philippians 4:13"],
    cta: "Continue My Journey",
    secondaryCta: "My Favorites",
    artwork: "deeper",
    image: "public/images/today-carousel/today-carousel-09-deeper.png"
  },
  {
    title: "Finish Well. Leave a Legacy.",
    kicker: "Complete Your Journey",
    theme: "Your faithfulness today builds tomorrow's legacy.",
    description: "Keep going. Finish with joy, steward your calling, and impact generations through faithful obedience.",
    scriptures: ["2 Timothy 4:7", "Matthew 25:21"],
    cta: "Complete My Journey",
    secondaryCta: "Invite & Inspire Others",
    artwork: "legacy",
    image: "public/images/today-carousel/today-carousel-10-legacy.png"
  },
  {
    title: "Stay Focused. Walk in Faith.",
    kicker: "Strengthen Your Faith",
    theme: "Daily promises, prayer, and purpose keep you anchored.",
    description: "Let God's truth focus your heart, strengthen your faith, and remind you that He is faithful every step of the way.",
    scriptures: ["Hebrews 10:23", "Psalm 145:18"],
    cta: "Strengthen My Faith",
    secondaryCta: "Join the Journey",
    artwork: "faith",
    image: "public/images/today-carousel/today-carousel-11-faith.png"
  },
  {
    title: "God Guides Every Faithful Step.",
    kicker: "Promises Meet Your Calling",
    theme: "Begin with Scripture. Walk with clarity. Move with purpose.",
    description: "Your calling is not distant. It is discovered through Scripture, prayer, obedience, and the next faithful step.",
    scriptures: ["Proverbs 3:5-6", "Ephesians 1:18"],
    cta: "Generate Today's Journey",
    secondaryCta: "Open Guardrails",
    artwork: "overlook",
    image: "public/images/today-carousel/today-carousel-12-overlook.png"
  }
];

const teoyubeAds = [
  ["Divine Direction", "God guides every faithful step.", ["Proverbs 3:5-6", "Psalm 32:8"], "Start Journey", "direction", "public/images/ads/divine-direction.png"],
  ["Strength for Today", "Renewed strength for today's journey.", ["Isaiah 40:31", "Philippians 4:13"], "Receive Strength", "strength", "public/images/ads/strength-for-today.png"],
  ["Growth in Grace", "Grow deeper in Christ every day.", ["2 Peter 3:18", "Ephesians 4:15"], "Begin Devotional", "growth", "public/images/ads/growth-in-grace.png"],
  ["Peace & Protection", "Rest under His perfect peace.", ["John 14:27", "Psalm 91:4"], "Open Prayer", "peace", "public/images/ads/peace-protection.png"],
  ["Purpose Fulfilled", "Your calling is prepared by God.", ["Jeremiah 29:11", "Romans 8:28"], "Discover Purpose", "purpose", "public/images/ads/purpose-fulfilled.png"],
  ["Abundant Life", "Live the abundant life Jesus promised.", ["John 10:10", "Galatians 5:22-23"], "Explore Promise", "abundance", "public/images/ads/abundant-life.png"],
  ["Faith in Action", "Step out in faith and make an impact.", ["Hebrews 11:1", "James 2:17"], "Activate Path", "faith", "public/images/ads/faith-in-action.png"],
  ["Kingdom Wisdom", "Wisdom for every decision you make.", ["James 1:5", "Psalm 119:105"], "Study Scripture", "wisdom", "public/images/ads/kingdom-wisdom.png"]
].map(([title, description, scriptures, cta, theme, image], index) => ({
  id: `ad-${String(index + 1).padStart(2, "0")}`,
  title,
  description,
  scriptures,
  cta,
  theme,
  image,
  reviews: [128, 96, 74, 112, 88, 103, 67, 91][index]
}));

const promiseSearchSeeds = [
  {
    thumbnail: localMediaThumbnails[0],
    href: "#",
    description:
      "The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints, -Ephesians 1:18-",
    title: "TEOYUBE; TYMAKWITHOHIS, CAWTROTGLOHINITS"
  },
  {
    thumbnail: localMediaThumbnails[1],
    href: "#",
    description: "We then, as workers together with him, beseech you also that ye receive not the grace of God in vain. -2Corinthians 6:1-",
    title: "WETAWTWHIBYATYRNTGOGODIV"
  },
  {
    thumbnail: localMediaThumbnails[2],
    href: "#",
    description:
      "(For he saith, I have heard thee in a time accepted, and in the day of salvation have I succored thee: behold, now is the day of salvation.) -2Corinthians 6:2-",
    title: "FOHSIHAHTIATAAITDOSHISTBNITDOS"
  },
  {
    thumbnail: localMediaThumbnails[3],
    href: "#",
    description: "Giving no offense in any thing, that the mininstry be not blamed: -2Corinthians 6:3-",
    title: "GNOIATTTMBNB"
  },
  {
    thumbnail: localMediaThumbnails[4],
    href: "#",
    description:
      "But in all things approving ourselves as the misnisters of God, in much patience, in afflictions, in necessities, in distresses, -2Corinthians 6:4-",
    title: "BIATAOATMOGODIMPIAINID"
  },
  {
    thumbnail: localMediaThumbnails[5],
    href: "#",
    description: "In stripes, in imprisonments, in tum-ults, in labours, in watchings, in fastings, -2Corinthians 6:5-",
    title: "ISIIMITILIWIF"
  },
  {
    thumbnail: localMediaThumbnails[6],
    href: "#",
    description: "By pureness, by knowledge, by long-suffering, by kindness, by the Holy Ghost, by love unfeigned, -2Corinthians 6:6-",
    title: "BPBKBLSBKBTHGBLU"
  },
  {
    thumbnail: localMediaThumbnails[7],
    href: "#",
    description:
      "By the word of truth, by the power of God, by the armour of righteousness on the right hand and on the left, -2Corinthians 6:7-",
    title: "BTWOTBTPOGODBTAOROTRHAOTL"
  }
];

const clientsPromiseRows = [
  {
    name: "Teoyube; Tymakwithohis, Cawtrotglohinits",
    description:
      "The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints,",
    video: localMediaThumbnails[2],
    position: "Eph-1:18",
    tone: "success"
  },
  {
    name: "Wetawtwhi, Byatyrntgogodiv",
    description: "We then, as workers together with him, beseech you also that ye receive not the grace of God in vain.",
    video: localMediaThumbnails[1],
    position: "2Cor-6:1",
    tone: "success"
  },
  {
    name: "Fohsihahtiata, Aitdoshistbnitdos",
    description:
      "(For he saith, I have heard thee in a time accepted, and in the day of salvation have I succored thee: behold, now is the day of salvation.)",
    video: localMediaThumbnails[2],
    position: "2Cor-6:2",
    tone: "warning"
  },
  {
    name: "Gnoiatttmbnb",
    description: "Giving no offense in any thing, that the mininstry be not blamed:",
    video: localMediaThumbnails[3],
    position: "2Cor-6:3",
    tone: "success"
  },
  {
    name: "Biataoatmogod, Impiainid",
    description:
      "But in all things approving ourselves as the misnisters of God, in much patience, in afflictions, in necessities, in distresses,",
    position: "2Cor-6:4",
    tone: "warning"
  },
  {
    name: "Isiimitiliwif",
    description: "In stripes, in imprisonments, in tum-ults, in labours, in watchings, in fastings,",
    position: "2Cor-6:5",
    tone: "warning"
  },
  {
    name: "Bpbkblsbk, Btholyghostblu",
    description: "By pureness, by knowledge, by long-suffering, by kindness, by the Holy Ghost, by love unfeigned,",
    position: "2Cor-6:6",
    tone: "success"
  },
  {
    name: "Btwotbtpogod, Btaorotrhaotl",
    description: "By the word of truth, by the power of God, by the armour of righteousness on the right hand and on the left,",
    position: "2Cor-6:7",
    tone: "success"
  },
  {
    name: "Bhadberagradayt",
    description: "By honour and dishonour, by evil report and good report: as deceivers, and yet true;",
    position: "2Cor-6:8",
    tone: "danger"
  },
  {
    name: "Auaywadabwlacank",
    description: "As unknown, and yet wellknown; as dying, and behold, we live; as chastened, and not killed,",
    position: "2Cor-6:9",
    tone: "warning"
  },
  {
    name: "Asyarapymmrahnaypat",
    description: "As sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, and yet possessing all things.",
    position: "2Cor-6:10",
    tone: "success"
  },
  {
    name: "Yansiubyasiyob",
    description: "O ye Prince, our mouth is open unto you, our heart is enlarged.",
    position: "2Cor-6:11",
    tone: "warning"
  },
  {
    name: "Nfarisisaumcbyae",
    description: "Now for a recompense in the same, (I speak as unto my children,) be ye also enlarged.",
    position: "2Cor-6:13",
    tone: "success"
  },
  {
    name: "Bynuytwbfwfhrwuawchlwd",
    description: "Be ye not unequally yoked together with believers: for what fellowship hath righteousness with unrighteouness? and what communion hath light with darkness?",
    video: localMediaThumbnails[4],
    position: "2Cor-6:14",
    tone: "success"
  },
  {
    name: "Awbafuyaysbmsadstla",
    description: "And will be a Father unto you, and ye shall be my sons and daughters, saith the Lord Almighty.",
    position: "2Cor-6:18",
    tone: "warning"
  }
];

const defaultState = {
  profile: {
    name: "",
    age: "",
    gifts: "Teaching, encouragement",
    talents: "Writing, strategy",
    passions: "Discipleship, purpose",
    burdens: "People needing direction",
    challenge: "I feel confused about my purpose.",
    prayer: "I need wisdom and courage for the next faithful step."
  },
  clusterIndex: 0,
  generatedWord: {
    word: "TIDUILOVP",
    pronunciation: "tee-doo-ee-loh-vp",
    meaning: "A prayer-memory key for Trust, instruction, direction, order, voice, path."
  },
  calling: {},
  completedAssignments: 0,
  book: [],
  testimonies: [],
  chat: [
    {
      role: "teo",
      text:
        "Welcome. Based on the Teoyube guardrails, I will keep guidance rooted in Scripture, cautious in calling language, and connected to one faithful next step."
    }
  ]
};

let state = loadState();

function loadState() {
  return seedState(defaultState);
}

function mergeState(base, saved) {
  const savedWord = saved.generatedWord || {};
  const generatedWord =
    savedWord.word === "TIDOVAP" ? base.generatedWord : { ...base.generatedWord, ...savedWord };
  const seededDefaults = seedState(base);
  return {
    ...base,
    ...saved,
    profile: { ...base.profile, ...(saved.profile || {}) },
    generatedWord,
    book: saved.book || base.book,
    testimonies: saved.testimonies?.length ? saved.testimonies : seededDefaults.testimonies,
    chat: saved.chat || base.chat
  };
}

function seedState(base) {
  const seeded = structuredClone(base);
  seeded.calling = analyzeCalling(seeded.profile);
  const firstCluster = promiseClusters[0];
  seeded.book = [
    {
      type: "Promise Discovery",
      title: `First Promise Cluster: ${getClusterTitle(firstCluster)}`,
      content:
        "The journey begins with a promise cluster for direction, wisdom, and faithful next steps.",
      references: getClusterScriptures(firstCluster),
      date: new Date().toISOString()
    }
  ];
  seeded.testimonies = [
    {
      title: "God's Peace in the Storm",
      content:
        "In the middle of uncertainty, God gave me a peace that surpasses all understanding and reminded me that His presence was steady.",
      category: "Faith",
      status: "Public",
      references: ["Psalm 121:7", "Philippians 4:7"],
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      title: "A New Beginning",
      content:
        "After years of struggle, God gave me a fresh start and renewed my purpose with grace, clarity, and courage for the next faithful step.",
      category: "Grace",
      status: "Private",
      references: ["2 Corinthians 5:17", "Isaiah 43:19"],
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      title: "Walking in Faith",
      content:
        "God has been teaching me to trust Him in every step of my journey, even when I only understand the next move.",
      category: "Obedience",
      status: "Draft",
      seededDraftPlaceholder: true,
      references: ["Hebrews 11:1", "Proverbs 3:5-6"],
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
  return seeded;
}

function saveState() {
  state.sessionScope = SESSION_STATE_SCOPE;
  state.sessionUpdatedAt = new Date().toISOString();
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function normalize(text) {
  return (text || "").toLowerCase();
}

function pickCluster(profile) {
  const haystack = normalize(
    `${profile.challenge} ${profile.prayer} ${profile.passions} ${profile.burdens}`
  );

  let best = { index: 0, score: -1 };
  promiseClusters.forEach((cluster, index) => {
    const triggers = getClusterSearchTerms(cluster);
    const score = triggers.reduce((sum, trigger) => {
      return sum + (haystack.includes(trigger) ? 1 : 0);
    }, 0);
    if (score > best.score) best = { index, score };
  });

  return best.index;
}

function generateTeoyubeWord(cluster) {
  const initials = cluster.keywords.map((keyword) => keyword[0]).join("");
  const vowels = cluster.keywords
    .map((keyword) => keyword.match(/[aeiou]/i)?.[0] || "a")
    .join("");
  const word = `${initials.slice(0, 3)}${vowels.slice(0, 2)}${initials.slice(3, 6)}`.toUpperCase();
  const refined = word.replace(/[^A-Z]/g, "").slice(0, 8);
  const meaning = cluster.keywords
    .map((keyword, index) => (index === 0 ? keyword : keyword.toLowerCase()))
    .join(", ");

  return {
    word: refined || "TEOYUBE",
    pronunciation: refined.toLowerCase().replace(/([aeiou])/g, "$1-").replace(/-$/g, ""),
    meaning: `${refined} is a prayer-memory key for ${meaning}.`
  };
}

function analyzeCalling(profile) {
  const text = normalize(
    `${profile.gifts} ${profile.talents} ${profile.passions} ${profile.burdens} ${profile.challenge}`
  );

  const scores = archetypes
    .map((archetype) => ({
      ...archetype,
      score: archetype.signals.reduce((sum, signal) => sum + (text.includes(signal) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);

  const top = scores[0].score ? scores.slice(0, 3) : [archetypes[0], archetypes[1], archetypes[2]];
  const creativeSignals = ["design", "creative", "film", "music", "writing", "story"];
  const leadershipSignals = ["lead", "strategy", "business", "organize", "community"];
  const missionSignals = ["mission", "evangel", "outreach", "discipleship", "church"];

  const calling = textIncludesAny(text, creativeSignals)
    ? "Creative Digital Ministry"
    : textIncludesAny(text, leadershipSignals)
      ? "Leadership and Purpose Stewardship"
      : textIncludesAny(text, missionSignals)
        ? "Discipleship and Mission"
        : "Teaching and Purpose Guidance";

  const confidenceScore = Math.min(5, Math.max(1, top.reduce((sum, item) => sum + item.score, 0)));
  const confidenceLabels = [
    "Signal Detected",
    "Emerging Direction",
    "Strong Pattern",
    "Confirmed Direction",
    "Active Assignment"
  ];

  return {
    primary: calling,
    secondary: top[1]?.name === "Bezalel" ? "Creative Calling" : "Spiritual Calling",
    emerging: top[2]?.name === "Joseph" ? "Career Calling" : "Kingdom Service",
    confidence: confidenceLabels[confidenceScore - 1],
    archetypes: top.map((item) => item.name),
    archetypeThemes: top.map((item) => `${item.name}: ${item.themes}`),
    gifts: profile.gifts || "Teaching, encouragement",
    growth: "Consistency, wise counsel, Scripture grounding",
    burdens: profile.burdens || "People needing direction"
  };
}

function textIncludesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function generateJourney() {
  const clusterIndex = pickCluster(state.profile);
  const cluster = promiseClusters[clusterIndex];
  const word = generateTeoyubeWord(cluster);
  const calling = analyzeCalling(state.profile);

  state.clusterIndex = clusterIndex;
  state.generatedWord = word;
  state.calling = calling;
  state.book.unshift({
    type: "Generated Journey",
    title: `${getClusterTitle(cluster)}: ${word.word}`,
    content: `${cluster.summary} Declaration: ${getClusterPrayer(cluster)}`,
    references: getClusterScriptures(cluster),
    date: new Date().toISOString()
  });
  saveState();
  render();
}

function getDailyAssignment(cluster) {
  const scriptures = getClusterScriptures(cluster);
  return [
    `Scripture: Read ${scriptures[0]} and ${scriptures[1] || scriptures[0]}.`,
    `Prayer: Pray this framework: "${getClusterPrayer(cluster)}"`,
    `Calling: Name one gift, burden, or skill that connects to ${state.calling.primary || "your calling"}.`,
    `Action: ${cluster.divine_assignment || "Take one small step of obedience and record what you notice."}`
  ];
}

function completeAssignment() {
  const reflection = $("#reflectionInput").value.trim();
  const cluster = promiseClusters[state.clusterIndex];
  state.completedAssignments += 1;
  state.book.unshift({
    type: "Daily Divine Assignment",
    title: `${getClusterTitle(cluster)} assignment completed`,
    content: reflection || "Assignment completed. Reflection can be added later.",
    references: getClusterScriptures(cluster),
    date: new Date().toISOString()
  });
  $("#reflectionInput").value = "";
  saveState();
  render();
}

function saveAssessment(event) {
  event.preventDefault();
  state.profile = {
    name: $("#nameInput").value.trim(),
    age: $("#ageInput").value.trim(),
    gifts: $("#giftsInput").value.trim(),
    talents: $("#talentsInput").value.trim(),
    passions: $("#passionsInput").value.trim(),
    burdens: $("#burdensInput").value.trim(),
    challenge: $("#challengeInput").value.trim(),
    prayer: $("#prayerInput").value.trim()
  };
  state.calling = analyzeCalling(state.profile);
  generateJourney();
  $("#assessmentDialog").close();
}

function addManualEntry() {
  const content = prompt("What reflection should be added to the Book of the Saint?");
  if (!content) return;
  state.book.unshift({
    type: "Reflection",
    title: "Manual reflection",
    content,
    references: getClusterScriptures(promiseClusters[state.clusterIndex]),
    date: new Date().toISOString()
  });
  saveState();
  render();
}

function addTestimony(event) {
  event.preventDefault();
  const title = $("#testimonyTitle").value.trim();
  const content = $("#testimonyBody").value.trim();
  const category = $("#testimonyCategory")?.value || "Faith";
  if (!title || !content) return;

  const testimony = {
    title,
    content,
    category,
    references: getClusterScriptures(promiseClusters[state.clusterIndex]),
    date: new Date().toISOString()
  };

  state.testimonies.unshift(testimony);
  state.book.unshift({
    type: "Testimony",
    title,
    content,
    category,
    references: testimony.references,
    date: testimony.date
  });

  event.target.reset();
  saveState();
  render();
}

function askTeo(event) {
  event.preventDefault();
  const input = $("#chatInput").value.trim();
  if (!input) return;
  state.chat.push({ role: "user", text: input });
  state.chat.push({ role: "teo", text: buildTeoResponse(input) });
  $("#chatInput").value = "";
  saveState();
  renderChat();
}

function buildTeoResponse(input) {
  const profile = { ...state.profile, challenge: input, prayer: input };
  const cluster = promiseClusters[pickCluster(profile)];
  const assignment = getDailyAssignment(cluster)[3];
  return `Based on biblical principles and your profile, this may point toward the ${getClusterTitle(cluster)} promise cluster. Start with ${getClusterScriptures(cluster).slice(0, 2).join(" and ")}. ${cluster.summary} Next step: ${assignment} For major decisions, pray, seek wise counsel, examine fruit, and move with wisdom.`;
}

function getStaticRouteView(rawView = "") {
  const view = String(rawView || "").replace(/^#/, "").trim();
  const allowedViews = new Set([
    "today",
    "roadmap",
    "search",
    "canon",
    "table",
    "calling",
    "book",
    "lexicon",
    "testimony",
    "guide",
    "ui-elements",
    "teoyube-tables"
  ]);
  return allowedViews.has(view) ? view : "today";
}

function setView(viewId, options = {}) {
  const nextView = getStaticRouteView(viewId);
  document.body.dataset.view = nextView;
  $all(".view").forEach((view) => view.classList.toggle("active", view.id === nextView));
  $all(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === nextView));
  const labels = {
    today: "Today's Promise Animation",
    roadmap: "Implementation Roadmap",
    search: "TeoyubeSearch",
    canon: "Teoyube Canon",
    table: "Promise Table",
    calling: "Calling Compass",
    book: "Book of the Saint",
    lexicon: "Teoyube Lexicon",
    testimony: "Testimony Archive",
    guide: "Teo Guide",
    "ui-elements": "UI Elements",
    "teoyube-tables": "Teoyube Tables"
  };
  $("#viewTitle").textContent = labels[nextView];
  if (!options.skipHash && window.location.hash !== `#${nextView}`) {
    history.pushState(null, "", `#${nextView}`);
  }
}

function getPromiseSlideArtwork(slide, index = 0) {
  const image = slide.image || (slide.artwork === "gate" || slide.artwork === "river" || slide.artwork === "tree"
    ? "public/images/teoyube-carousel-9-wide.png"
    : "public/images/teoyube-carousel-5-wide.png");
  const slideClass = `slide-${normalize(slide.title).replace(/\s+/g, "-")}`;
  const isFirstSlide = index === 0;
  return `
    <div class="slide-artwork banner-art ${escapeHtml(slide.artwork)} ${escapeHtml(slideClass)}" aria-hidden="true">
      <img src="${escapeHtml(image)}" alt="" loading="${isFirstSlide ? "eager" : "lazy"}" decoding="async" ${isFirstSlide ? 'fetchpriority="high"' : ""} />
      <span class="art-glow"></span>
      <span class="art-symbol"></span>
    </div>
  `;
}

function getPromisePreviewRail(activeIndex) {
  const previewSlides = [
    {
      title: "Divine Direction",
      theme: "God guides every faithful step.",
      image: "public/images/ads/divine-direction.png",
      position: "center"
    },
    {
      title: "Strength for Today",
      theme: "Renewed strength for today's journey.",
      image: "public/images/ads/strength-for-today.png",
      position: "center"
    },
    {
      title: "Growth in Grace",
      theme: "Grow deeper in Christ every day.",
      image: "public/images/ads/growth-in-grace.png",
      position: "center"
    },
    {
      title: "Blending the Human Experience with the Digital Frontier",
      theme: "Connecting tomorrow.",
      image: "public/images/teoyube-carousel-5-wide.png",
      position: "72% center"
    },
    {
      title: "Crafting Tomorrow's Digital Narratives",
      theme: "Envisioning the future.",
      image: "public/images/teoyube-carousel-5-wide.png",
      position: "100% center"
    }
  ];
  return `
    <div class="carousel-preview-rail" aria-hidden="true">
      ${previewSlides
        .map(
          (slide, offset) => `
            <article class="preview-card">
              <span>${String(offset + 1).padStart(2, "0")}</span>
              <img src="${escapeHtml(slide.image)}" alt="" loading="lazy" style="object-position: ${escapeHtml(slide.position)};" />
              <h4>${escapeHtml(slide.title)}</h4>
              <p>${escapeHtml(slide.theme)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPromiseCarousel() {
  const track = $("#promiseCarouselTrack");
  const dots = $("#promiseCarouselDots");
  if (!track || !dots) return;
  const activeSlide = promiseCarouselSlides[activePromiseSlide];

  track.style.setProperty("--carousel-offset", "0%");
  track.style.removeProperty("transform");
  track.innerHTML = promiseCarouselSlides
    .map(
      (slide, index) => `
        <article class="carousel-slide ${index === activePromiseSlide ? "active" : ""}" aria-hidden="${index === activePromiseSlide ? "false" : "true"}">
          <div class="carousel-copy">
            <span class="slide-number">${String(index + 1).padStart(2, "0")} / ${String(promiseCarouselSlides.length).padStart(2, "0")}</span>
            <p class="eyebrow">${escapeHtml(slide.kicker)}</p>
            <h3>${escapeHtml(slide.title)}</h3>
            <p>${escapeHtml(slide.description)}</p>
            <div class="scripture-strip">${slide.scriptures
              .map((scripture) => `<span class="scripture-pill">${escapeHtml(scripture)}</span>`)
              .join("")}</div>
            <div class="carousel-cta-row">
              <button class="primary action-icon-button" type="button">${renderActionButtonContent(slide.cta)}</button>
              <button class="secondary action-icon-button" type="button">${renderActionButtonContent(slide.secondaryCta || "Learn More")}</button>
            </div>
          </div>
          ${getPromiseSlideArtwork(slide, index)}
        </article>
      `
    )
    .join("");

  if (!$("#promisePreviewRail")) {
    track.insertAdjacentHTML("afterend", `<div id="promisePreviewRail">${getPromisePreviewRail(activePromiseSlide)}</div>`);
  } else {
    $("#promisePreviewRail").innerHTML = getPromisePreviewRail(activePromiseSlide);
  }

  dots.innerHTML = promiseCarouselSlides
    .map(
      (slide, index) => `
        <button class="${index === activePromiseSlide ? "active" : ""}" type="button" data-slide-index="${index}" aria-current="${index === activePromiseSlide ? "true" : "false"}" aria-label="Go to ${escapeHtml(slide.title)} slide"></button>
      `
    )
    .join("");

  if ($("#dailyTheme") && activeSlide) {
    $("#dailyTheme").textContent = activeSlide.title;
    $("#dailySummary").textContent = activeSlide.theme;
    $("#dailyScriptures").innerHTML = activeSlide.scriptures
      .map((scripture) => `<span class="scripture-pill">${escapeHtml(scripture)}</span>`)
      .join("");
  }
}

function goToPromiseSlide(index) {
  activePromiseSlide = (index + promiseCarouselSlides.length) % promiseCarouselSlides.length;
  renderPromiseCarousel();
}

function startPromiseCarousel() {
  clearInterval(promiseCarouselTimer);
  promiseCarouselTimer = setInterval(() => {
    const now = Date.now();
    if (promiseCarouselPaused || now - lastPromiseCarouselAdvance < 7000) return;
    lastPromiseCarouselAdvance = now;
    goToPromiseSlide(activePromiseSlide + 1);
  }, 8000);
}

function renderAdCarousel() {
  const track = $("#teoyubeAdTrack");
  const dots = $("#teoyubeAdDots");
  if (!track || !dots) return;

  const carouselItems = [...teoyubeAds, ...teoyubeAds];

  track.innerHTML = carouselItems
    .map(
      (ad, index) => {
        const sourceIndex = index % teoyubeAds.length;
        const distance = Math.abs(sourceIndex - activeAdSlide);
        const loopDistance = Math.min(distance, teoyubeAds.length - distance);
        const focusClass = sourceIndex === activeAdSlide ? "active" : loopDistance === 1 ? "near" : "far";

        return `
        <article class="teoyube-ad-card ${focusClass}" aria-current="${sourceIndex === activeAdSlide ? "true" : "false"}">
          <div class="ad-art ${escapeHtml(ad.theme)}">
            <img src="${escapeHtml(ad.image)}" alt="${escapeHtml(ad.title)} Teoyube promise card" loading="lazy" />
            <span class="teoyube-badge">TEOYUBE</span>
            <h5>${escapeHtml(ad.title)}</h5>
            <p>${escapeHtml(ad.description)}</p>
          </div>
          <div class="ad-card-body">
            <div class="ad-stars" aria-label="Five star devotional rating">★★★★★ <span>(${ad.reviews} Reviews)</span></div>
            <div class="sequence-row">${ad.scriptures.map((scripture) => `<span class="scripture-pill">${escapeHtml(scripture)}</span>`).join("")}</div>
            <div class="ad-card-actions">
              <button class="secondary" type="button">${escapeHtml(ad.cta)}</button>
              <button class="ad-icon-button" type="button" aria-label="Open ${escapeHtml(ad.title)} guide">▣</button>
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");

  dots.innerHTML = teoyubeAds
    .map((ad, index) => `<button class="${index === activeAdSlide ? "active" : ""}" type="button" data-ad-index="${index}" aria-label="Show ${escapeHtml(ad.title)}"></button>`)
    .join("");

  requestAnimationFrame(centerActiveAdCard);
}

function centerActiveAdCard() {
  const track = $("#teoyubeAdTrack");
  const viewport = track?.parentElement;
  const activeCard = track?.children?.[activeAdSlide];
  if (!track || !viewport || !activeCard) return;

  if (document.body.dataset.view === "roadmap") {
    track.style.transform = "";
    return;
  }

  const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
  const targetOffset = activeCard.offsetLeft - (viewport.clientWidth - activeCard.clientWidth) / 2;
  const clampedOffset = Math.min(Math.max(targetOffset, 0), maxOffset);
  track.style.transform = `translateX(-${clampedOffset}px)`;
}

function goToAdSlide(index) {
  activeAdSlide = (index + teoyubeAds.length) % teoyubeAds.length;
  renderAdCarousel();
}

function startAdCarousel() {
  clearInterval(adCarouselTimer);
  adCarouselTimer = null;
}

function render() {
  const profile = state.profile;
  const cluster = promiseClusters[state.clusterIndex];
  const calling = state.calling.primary ? state.calling : analyzeCalling(profile);
  const stageIndex = Math.min(purposeStages.length - 1, Math.floor(state.completedAssignments / 2));
  const [stageName, stageDescription, stageProgress] = purposeStages[stageIndex];

  $("#sidebarName").textContent = profile.name || "Saint";
  $("#sidebarCalling").textContent = calling.primary
    ? `${calling.primary} - ${calling.confidence}`
    : "Complete the purpose assessment to generate your first calling profile.";

  $("#dailyTheme").textContent = getClusterTitle(cluster);
  $("#dailySummary").textContent = cluster.summary;
  $("#dailyScriptures").innerHTML = getClusterScriptures(cluster)
    .map((scripture) => `<span class="scripture-pill">${scripture}</span>`)
    .join("");
  $("#dailyWord").textContent = "TIDUILOVP";
  $("#dailyMeaning").innerHTML = "A prayer-memory key for Trust, instruction,<br>direction, order, voice, path.";
  $("#assignmentList").innerHTML = getDailyAssignment(cluster)
    .map((item) => `<li>${item}</li>`)
    .join("");
  renderPromiseCarousel();

  $("#clusterTitle").textContent = getClusterTitle(cluster);
  $("#clusterSummary").textContent = cluster.summary;
  $("#journeyStatuses").innerHTML = journeyStatuses
    .map((status, index) => {
      const activeIndex = Math.min(journeyStatuses.length - 1, Math.floor(state.completedAssignments / 1.5));
      return `<span class="status-pill ${index <= activeIndex ? "active" : ""}">${status}</span>`;
    })
    .join("");

  $("#compassCenter").textContent = calling.primary;
  $("#purposeStage").textContent = stageName;
  $("#purposeProgress").value = stageProgress;
  $("#purposeDescription").textContent = stageDescription;
  $("#bookCount").textContent = `${state.book.length} ${state.book.length === 1 ? "entry" : "entries"}`;
  $("#testimonyCount").textContent = `${state.testimonies.length} ${state.testimonies.length === 1 ? "testimony" : "testimonies"}`;

  renderBook();
  renderLexicon();
  renderLanguageGrammar();
  renderCanon();
  renderTkos(calling, cluster);
  renderAdCarousel();
  renderTechArchitecture();
  renderProjectStructureRoadmap();
  renderMvpCodeStarterFiles();
  renderMvpSeedFiles();
  renderMvpUiPages();
  renderMvpBrandIdentity();
  renderMvpLaunchPlan();
  renderLaunch1StaticMvpPackage();
  renderPromiseMoviePanel();
  renderFeaturedStoryCarousel();
  renderClientsPromiseTable();
  renderCompassVideos();
  renderRoadmapKpis();
  renderPromiseClusterNavigation();
  renderSearchResults(runTeoyubeSearch($("#teoyubeSearchInput")?.value || "purpose"));
  renderTestimonies();
  renderChat();
  renderPromiseTableSearchFeed();
  renderUiElementsVideos();
  renderTeoyubeTablesPage();
}

function runTeoyubeSearch(query) {
  const rawQuery = (query || "").trim();
  const searchText = normalize(rawQuery || "purpose");
  const selectedCategory = $("#teoyubeSearchCategory")?.value || "All";
  const profile = { ...state.profile, challenge: rawQuery, prayer: rawQuery };
  const cluster = promiseClusters[pickCluster(profile)];
  const matchedWords = coreWords
    .map((word) => ({
      ...word,
      score: scoreVocabularyWord(word, searchText, selectedCategory)
    }))
    .filter((word) => word.score > 0)
    .sort((a, b) => b.score - a.score);

  const topWords = matchedWords.length
    ? matchedWords.slice(0, 3)
    : coreWords
        .filter((word) => ["WISDORA", "TEOYUBE", "KLESIS"].includes(word.word))
        .slice(0, 3);

  return topWords.map((word, index) => buildSearchResult(rawQuery, cluster, word, index));
}

function scoreVocabularyWord(word, searchText, selectedCategory) {
  const categoryMatches =
    selectedCategory === "All" ||
    selectedCategory === "Teoyube Word" ||
    normalize(word.category).includes(normalize(selectedCategory)) ||
    normalize(word.promise_category).includes(normalize(selectedCategory));

  const haystack = normalize(
    [
      word.word,
      word.meaning,
      word.category,
      word.promise_category,
      word.prayer_use,
      word.animation_symbol,
      ...(word.scripture_sources || []),
      ...(word.related_words || [])
    ].join(" ")
  );

  const terms = searchText.split(/\s+/).filter(Boolean);
  const termScore = terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
  const wordScore = normalize(word.word) === searchText ? 10 : normalize(word.word).includes(searchText) ? 6 : 0;
  const categoryScore = categoryMatches ? 1 : -4;
  return termScore + wordScore + categoryScore;
}

function buildSearchResult(query, cluster, word, index) {
  const scriptureReferences = [...new Set([...(word.scripture_sources || []), ...getClusterScriptures(cluster)])].slice(
    0,
    5
  );
  const intent = detectSearchIntent(query);
  const level = index === 0 ? "A + B + C" : index === 1 ? "B + C" : "C";
  const constitutionLanguage =
    theologyConstitution?.promise_levels?.find((item) => item.level === "C")?.language ||
    "Based on Scripture and your profile, this may guide your next step.";

  return {
    title: `${word.word} - ${word.meaning}`,
    search_intent: intent,
    promise_category: word.promise_category || cluster.promise_category || cluster.theme,
    scripture_references: scriptureReferences,
    promise_level: level,
    short_explanation: `${constitutionLanguage} ${cluster.summary}`,
    calling_connection: `This connects to ${state.calling.primary || "your emerging calling"} through ${word.promise_category || cluster.theme}.`,
    teoyube_word: word.word,
    pronunciation: word.pronunciation,
    meaning: word.meaning,
    prayer: `Father, according to Your Word, guide me through ${word.meaning.toLowerCase()} with humility, wisdom, and obedience.`,
    assignment:
      intent.includes("Calling")
        ? "Write down three gifts, three burdens, and one step you can take today toward your calling."
        : getDailyAssignment(cluster)[3].replace("Action: ", ""),
    animation_prompt: word.animation_symbol || `A Saint moves from search to promise as ${word.word} appears in light.`
  };
}

function detectSearchIntent(query) {
  const text = normalize(query);
  if (/\b(ephesians|john|romans|psalm|proverbs|isaiah|james|matthew|mark|luke|acts)\b/.test(text)) {
    return "Scripture Search";
  }
  if (coreWords.some((word) => normalize(word.word) === text)) return "Teoyube Word Search";
  if (text.includes("pray") || text.includes("prayer")) return "Prayer Search";
  if (text.includes("call") || text.includes("purpose") || text.includes("teach")) {
    return "Life Problem + Calling";
  }
  if (text.includes("testimony") || text.includes("answered")) return "Testimony Search";
  return "Promise Search";
}

function renderSearchResults(results) {
  const target = $("#teoyubeSearchResults");
  if (!target) return;
  const artwork = [
    "public/images/search/suggested-journey-01.png",
    "public/images/search/suggested-journey-02.png",
    "public/images/search/suggested-journey-03.png"
  ];

  target.innerHTML = results
    .map(
      (result, index) => `
      <article class="search-result-card">
        <div class="thumbnail" aria-label="Promise animation preview" style="background-image: linear-gradient(180deg, rgba(0, 39, 31, 0.08), rgba(0, 39, 31, 0.38)), url('${artwork[index % artwork.length]}')">
          <button class="search-bookmark" type="button" aria-label="Bookmark ${escapeHtml(result.title)}">▱</button>
        </div>
        <p class="eyebrow">${escapeHtml(result.search_intent)} + Calling + Level ${escapeHtml(result.promise_level)}</p>
        <h3>${escapeHtml(result.title)}</h3>
        <p><b>Promise category:</b> ${escapeHtml(result.promise_category)}</p>
        <div class="scripture-strip">${result.scripture_references
          .map((reference) => `<span class="scripture-pill">${escapeHtml(reference)}</span>`)
          .join("")}</div>
        <p>${escapeHtml(result.short_explanation)}</p>
        <div class="search-progress"><span style="width:${Math.min(96, 42 + index * 14)}%"></span></div>
        <div class="result-actions">
          <button class="secondary search-save-book icon-only" data-result-index="${index}" aria-label="Save to Book">▱</button>
          <button class="secondary search-add-table" data-result-index="${index}">Add to Promise Table</button>
          <button class="secondary search-generate-prayer" data-result-index="${index}">Explore Journey</button>
        </div>
      </article>
    `
    )
    .join("");

  target.dataset.results = JSON.stringify(results);
}

function renderPromiseClusterNavigation() {
  const target = $("#promiseClusterNavigation");
  if (!target) return;

  target.innerHTML = promiseClusterNavigation
    .map(
      (item) => `
      <button class="secondary prompt-chip cluster-nav-chip" data-query="${escapeHtml(item.label)}">
        ${escapeHtml(item.label)}
      </button>
    `
    )
    .join("");
}

function getBookEntryKind(type = "") {
  const text = normalize(type);
  if (text.includes("assignment")) return "assignment";
  if (text.includes("discovery") || text.includes("promise")) return "discovery";
  return "journey";
}

function getBookEntryTime(entry) {
  const time = Date.parse(entry?.date || "");
  return Number.isNaN(time) ? 0 : time;
}

function getBookEntriesSince(days) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return state.book.filter((entry) => getBookEntryTime(entry) >= cutoff).length;
}

function getBookDayKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getBookReflectionStreak() {
  const entryDays = new Set(
    state.book
      .map((entry) => getBookEntryTime(entry))
      .filter(Boolean)
      .map((time) => getBookDayKey(new Date(time)))
  );
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (entryDays.has(getBookDayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return Math.max(streak, state.completedAssignments || 0);
}

function getBookJourneyMetrics() {
  const totalEntries = state.book.length;
  const completedAssignments = state.completedAssignments || 0;
  const weekEntries = getBookEntriesSince(7);
  const monthEntries = getBookEntriesSince(30);
  return [
    {
      icon: "week",
      value: 8 + Math.max(0, weekEntries - 1),
      label: "This Week Reflections"
    },
    {
      icon: "month",
      value: 24 + Math.max(0, monthEntries - 1),
      label: "This Month Reflections"
    },
    {
      icon: "streak",
      value: Math.max(32 + completedAssignments, getBookReflectionStreak()),
      label: "Streak Days"
    },
    {
      icon: "milestones",
      value: Math.min(7, 3 + Math.floor(Math.max(0, totalEntries + completedAssignments - 1) / 3)),
      label: "Milestones Unlocked"
    }
  ];
}

function renderBookJourneyOverview() {
  const metricTarget = $("#bookJourneyMetrics");
  const timelineTarget = $("#bookWeekTimeline");
  if (!metricTarget || !timelineTarget) return;

  metricTarget.innerHTML = getBookJourneyMetrics()
    .map(
      (metric) => `
      <article class="book-journey-metric" data-icon="${escapeHtml(metric.icon)}">
        <span class="book-journey-metric-icon" aria-hidden="true"></span>
        <strong>${metric.value}</strong>
        <small>${escapeHtml(metric.label)}</small>
      </article>
    `
    )
    .join("");

  const todayIndex = (new Date().getDay() + 6) % 7;
  const labels = ["Prayer", "Reflection", "Promise", "Scripture", "Wisdom", "Calling", "Grace"];
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  timelineTarget.innerHTML = days
    .map((day, index) => {
      const status = index < todayIndex ? "completed" : index === todayIndex ? "current" : "upcoming";
      const statusLabel = status === "completed" ? "Completed" : status === "current" ? "Reflecting" : index === days.length - 1 ? "Waiting" : "Pending";
      return `
        <span class="book-week-step ${status}">
          <b aria-hidden="true"></b>
          <strong>${day}</strong>
          <small>${statusLabel}</small>
          <em>${labels[index]}</em>
        </span>
      `;
    })
    .join("");
}

function renderBook() {
  renderBookJourneyOverview();

  $("#bookTimeline").innerHTML =
    state.book
      .map((entry) => {
        const entryKind = getBookEntryKind(entry.type);
        return `
        <article class="timeline-entry book-entry-${entryKind}">
          <time>${formatDate(entry.date)}</time>
          <h4>${escapeHtml(entry.title)}</h4>
          <p>${escapeHtml(entry.content)}</p>
          <div class="scripture-strip">${entry.references
            .map((reference) => `<span class="scripture-pill">${escapeHtml(reference)}</span>`)
            .join("")}</div>
        </article>
      `;
      })
      .join("") || emptyState("No book entries yet. Generate a journey or complete an assignment.");
}

function getLexiconItemSources(item) {
  return item.scripture_sources || item.scriptureReferences || item.references || [];
}

function getLexiconItemPart(item) {
  return item.part_of_speech || item.partOfSpeech || item.speech || item.category || "Noun";
}

function getLexiconItemCategory(item) {
  return item.promise_category || item.category || "Core";
}

function getLexiconDescription(item) {
  return item.prayer_use || item.description || item.scripture_theme || item.animation_symbol || "A Scripture-rooted word connected to promise, prayer, and calling.";
}

function getLexiconItems() {
  const userWord = {
    ...state.generatedWord,
    category: "Generated Prayer Aid",
    scripture_sources: getClusterScriptures(promiseClusters[state.clusterIndex]),
    promise_category: getClusterTitle(promiseClusters[state.clusterIndex]),
    prayer_use: "Generated from the current promise cluster as a Scripture-linked memory aid."
  };
  return [userWord, ...coreWords].filter((item) => item && item.word);
}

function getFilteredLexiconItems(items) {
  const query = normalize(lexiconSearchQuery);
  return items.filter((item) => {
    const category = getLexiconItemCategory(item);
    const speech = getLexiconItemPart(item);
    const sources = getLexiconItemSources(item);
    const haystack = normalize(
      [
        item.word,
        item.pronunciation,
        item.meaning,
        category,
        speech,
        getLexiconDescription(item),
        formatSources(sources),
        item.symbol,
        item.animation_symbol,
        item.related_words ? formatSources(item.related_words) : ""
      ].join(" ")
    );
    if (query && !haystack.includes(query)) return false;
    if (lexiconCategoryFilter !== "all" && normalize(category) !== lexiconCategoryFilter) return false;
    if (lexiconSpeechFilter !== "all" && normalize(speech) !== lexiconSpeechFilter) return false;
    if (activeLexiconAlpha !== "all" && !normalize(item.word).startsWith(activeLexiconAlpha)) return false;
    return true;
  });
}

function syncLexiconFilters(items) {
  const categorySelect = $("#lexiconCategoryFilter");
  const speechSelect = $("#lexiconSpeechFilter");
  if (categorySelect) {
    const categories = [...new Set(items.map(getLexiconItemCategory).filter(Boolean))].sort();
    categorySelect.innerHTML = `<option value="all">All Categories</option>${categories
      .map((category) => `<option value="${escapeHtml(normalize(category))}" ${normalize(category) === lexiconCategoryFilter ? "selected" : ""}>${escapeHtml(category)}</option>`)
      .join("")}`;
  }
  if (speechSelect) {
    const speechParts = [...new Set(items.map(getLexiconItemPart).filter(Boolean))].sort();
    speechSelect.innerHTML = `<option value="all">All Parts of Speech</option>${speechParts
      .map((speech) => `<option value="${escapeHtml(normalize(speech))}" ${normalize(speech) === lexiconSpeechFilter ? "selected" : ""}>${escapeHtml(speech)}</option>`)
      .join("")}`;
  }
}

function renderLexiconStats(items) {
  const statsGrid = $("#lexiconStatsGrid");
  if (!statsGrid) return;
  const sources = items.flatMap(getLexiconItemSources);
  const categories = new Set(items.map(getLexiconItemCategory).filter(Boolean));
  const languages = new Set(items.map((item) => item.language || item.origin_language || item.origin).filter(Boolean));
  const mostUsed = items.find((item) => normalize(item.word).includes("grace")) || items[0];
  const cards = [
    ["Total Words", items.length, "+12 this month", "book"],
    ["Scripture References", sources.length || items.length, "+24 this month", "scripture"],
    ["Categories", categories.size || 1, "Core themes", "folder"],
    ["Languages", Math.max(3, languages.size || 3), "Hebrew, Greek, Aramaic", "globe"],
    ["Most Used", mostUsed?.word || "GRACE", `${getLexiconItemSources(mostUsed || {}).length || 156} references`, "star"]
  ];
  statsGrid.innerHTML = cards
    .map(
      ([label, value, note, icon]) => `
      <article class="lexicon-stat-card" data-icon="${escapeHtml(icon)}">
        <span aria-hidden="true"></span>
        <div>
          <small>${escapeHtml(label)}</small>
          <strong>${escapeHtml(value)}</strong>
          <em>${escapeHtml(note)}</em>
        </div>
      </article>
    `
    )
    .join("");
}

function renderLexiconFeature(items) {
  const card = $("#lexiconWordDay");
  if (!card) return;
  const featured = items.find((item) => normalize(item.word).includes("grace")) || items[0];
  if (!featured) return;
  const sources = getLexiconItemSources(featured);
  card.innerHTML = `
    <div>
      <p class="eyebrow">Word of the Day</p>
      <h4>${escapeHtml(featured.word)} <button type="button" aria-label="Hear ${escapeHtml(featured.word)} pronunciation"></button></h4>
      <span>${escapeHtml(featured.pronunciation || getLexiconItemPart(featured))}</span>
      <p>${escapeHtml(featured.meaning || getLexiconDescription(featured))}</p>
      <small>${escapeHtml(sources[0] || featured.promise_category || "Ephesians 2:8")}</small>
    </div>
    <div class="lexicon-word-day-actions">
      <button class="secondary lexicon-action-button lexicon-explore-word-button" type="button">
        <span aria-hidden="true"></span>
        Explore Word
        <span aria-hidden="true"></span>
      </button>
      <button class="lexicon-icon-button lexicon-share-word-button" type="button" aria-label="Share ${escapeHtml(featured.word)}"></button>
      <button class="lexicon-icon-button lexicon-save-word-button" type="button" aria-label="Save ${escapeHtml(featured.word)}"></button>
    </div>
  `;
}

function renderLexiconRail(items, filteredItems) {
  const overview = $("#lexiconOverviewCard");
  const topCategories = $("#lexiconTopCategories");
  const recentlyViewed = $("#lexiconRecentlyViewed");
  const explored = Math.min(items.length, Math.max(filteredItems.length, Math.round(items.length * 0.78)));
  const remaining = Math.max(0, items.length - explored);
  const percent = items.length ? Math.round((explored / items.length) * 100) : 0;
  if (overview) {
    overview.innerHTML = `
      <div class="lexicon-overview-premium" style="--lexicon-progress:${percent}; --lexicon-progress-offset:${100 - percent}; --lexicon-progress-deg:${percent * 3.6}deg">
        <div class="lexicon-overview-head">
          <span class="lexicon-overview-icon" data-lexicon-icon="book" aria-hidden="true"></span>
          <div>
            <h4>Lexicon Overview</h4>
            <p>Your journey through the Teoyube Language</p>
          </div>
        </div>
        <div class="lexicon-overview-progress" role="img" aria-label="Lexicon overview ${percent}% explored">
          <div class="lexicon-overview-ring">
            <svg viewBox="0 0 220 220" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="lexiconOverviewStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00533f"></stop>
                  <stop offset="52%" stop-color="#0e8b66"></stop>
                  <stop offset="100%" stop-color="#d8b85b"></stop>
                </linearGradient>
              </defs>
              <circle class="lexicon-overview-track" cx="110" cy="110" r="82"></circle>
              <circle class="lexicon-overview-fill" cx="110" cy="110" r="82" pathLength="100"></circle>
            </svg>
            <div>
              <strong>${percent}%</strong>
              <span aria-hidden="true"></span>
              <b>Explored</b>
            </div>
          </div>
        </div>
        <div class="lexicon-overview-stats">
          <article>
            <span data-lexicon-icon="open-book" aria-hidden="true"></span>
            <div>
              <strong>${explored}</strong>
              <b>Explored Words</b>
              <small>Words you have discovered</small>
            </div>
          </article>
          <article>
            <span data-lexicon-icon="sprout" aria-hidden="true"></span>
            <div>
              <strong>${remaining}</strong>
              <b>Remaining Words</b>
              <small>Words left to explore</small>
            </div>
          </article>
        </div>
        <p class="lexicon-overview-footer">Every word you explore unlocks deeper understanding.</p>
      </div>
    `;
  }
  if (topCategories) {
    const categoryGroups = items.reduce((groups, item) => {
      const label = getLexiconItemCategory(item) || "Core";
      groups[label] = groups[label] || [];
      groups[label].push(item);
      return groups;
    }, {});
    const categoryCounts = Object.entries(categoryGroups)
      .map(([label, words]) => [label, words.length])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    topCategories.innerHTML = `
      <h4>Top Categories</h4>
      <div class="lexicon-category-list">
        ${categoryCounts
          .map(([label, count]) => `<p><span aria-hidden="true"></span><b>${escapeHtml(label)}</b><strong>${count}</strong></p>`)
          .join("")}
      </div>
      <a href="#lexicon">View All Categories &rarr;</a>
    `;
  }
  if (recentlyViewed) {
    recentlyViewed.innerHTML = `
      <h4>Recently Viewed</h4>
      <div class="lexicon-recent-list">
        ${items
          .slice(0, 5)
          .map((item, index) => `<p><span aria-hidden="true"></span><b>${escapeHtml(item.word)}</b><small>Viewed ${index ? `${index * 15} min ago` : "2 min ago"}</small></p>`)
          .join("")}
      </div>
      <a href="#lexicon">View All History &rarr;</a>
    `;
  }
}

function renderLexiconAlphaTabs() {
  const tabs = $("#lexiconAlphaTabs");
  if (!tabs) return;
  const letters = ["all", ..."abcdefghijklmnopqrstuvwxyz"];
  tabs.setAttribute("role", "listbox");
  tabs.setAttribute("aria-label", "Filter Lexicon words by first letter");
  tabs.innerHTML = letters
    .map((letter) => {
      const isActive = activeLexiconAlpha === letter;
      const label = letter === "all" ? "All" : letter.toUpperCase();
      const ariaLabel = letter === "all" ? "Show all Lexicon words" : `Show Lexicon words starting with ${label}`;
      return `<button class="${isActive ? "active" : ""}" type="button" data-lexicon-alpha="${letter}" role="option" aria-selected="${isActive}" aria-pressed="${isActive}" aria-label="${ariaLabel}">${label}</button>`;
    })
    .join("");
}

function renderLexicon() {
  const items = getLexiconItems();
  syncLexiconFilters(items);
  renderLexiconStats(items);
  renderLexiconFeature(items);
  renderLexiconAlphaTabs();
  const filteredItems = getFilteredLexiconItems(items);
  renderLexiconRail(items, filteredItems);
  const grid = $("#lexiconGrid");
  if (!grid) return;
  grid.innerHTML = filteredItems
    .map(
      (item) => `
      <article class="lexicon-item">
        <div class="lexicon-card-head">
          <div>
            <strong>${escapeHtml(item.word)}</strong>
            <span>${escapeHtml(getLexiconItemPart(item))}</span>
          </div>
          <button type="button" aria-label="Hear ${escapeHtml(item.word)} pronunciation"></button>
        </div>
        <p><b>${escapeHtml(item.meaning || getLexiconItemCategory(item))}</b></p>
        <p>${escapeHtml(getLexiconDescription(item))}</p>
        <div class="lexicon-card-footer">
          <span>${escapeHtml(getLexiconItemSources(item)[0] || item.promise_category || "Scripture Linked")}</span>
          <button type="button" aria-label="Save ${escapeHtml(item.word)} to favorites"></button>
        </div>
      </article>
    `
    )
    .join("") || emptyState("No Lexicon words match the current filters.");
}

function renderLanguageGrammar() {
  const panel = $("#grammarPanel");
  const layerGrid = $("#languageLayerGrid");
  if (!panel || !layerGrid || !languageGrammar) return;

  panel.innerHTML = `
    <div>
      <p class="eyebrow">Phase ${escapeHtml(languageGrammar.phase)} - Promise Language</p>
      <h3>${escapeHtml(languageGrammar.name)}</h3>
      <p>${escapeHtml(languageGrammar.core_principle)}</p>
    </div>
    <div class="scripture-strip">
      ${(languageGrammar.grammar_basis || [])
        .map((item) => `<span class="scripture-pill">${escapeHtml(item)}</span>`)
        .join("")}
    </div>
    <div>
      <p class="eyebrow">Sentence Structure</p>
      <h3>${escapeHtml(languageGrammar.teoyube_sentence_structure)}</h3>
      <p><b>${escapeHtml(languageGrammar.example_sentence?.teoyube || "")}</b> - ${escapeHtml(languageGrammar.example_sentence?.meaning || "")}</p>
    </div>
    <div class="formula-grid">
      ${(languageGrammar.formulas || [])
        .map(
          (formula) => `
          <article class="formula-card">
            <p class="eyebrow">${escapeHtml(formula.name)}</p>
            <code>${escapeHtml(formula.structure)}</code>
            <strong>${escapeHtml(formula.example)}</strong>
            <p>${escapeHtml(formula.meaning)}</p>
          </article>
        `
        )
        .join("")}
    </div>
    <div class="rank-grid">
      ${(languageGrammar.ranks || [])
        .map(
          (rank) => `
          <article class="rank-card">
            <p class="eyebrow">Rank ${escapeHtml(rank.rank)}</p>
            <strong>${escapeHtml(rank.meaning)}</strong>
          </article>
        `
        )
        .join("")}
    </div>
  `;

  const layers = groupBy(promiseLanguageLexicon, "layer");
  layerGrid.innerHTML = Object.entries(layers)
    .map(
      ([layer, words]) => `
      <article class="layer-card">
        <p class="eyebrow">${escapeHtml(layer)} Layer</p>
        <strong>${escapeHtml(words.map((word) => word.word).join(", "))}</strong>
        <p>${escapeHtml(words.map((word) => `${word.word}: ${word.meaning}`).join("; "))}</p>
        <p><b>Symbols:</b> ${escapeHtml(words.map((word) => `${word.word} - ${word.symbol}`).join("; "))}</p>
      </article>
    `
    )
    .join("");
}

function getCanonStatus(index, progress) {
  if (progress >= 100) return ["Completed", "completed"];
  if (index % 7 === 0) return ["On Hold", "on-hold"];
  if (index % 5 === 0) return ["Review", "review"];
  if (index % 3 === 0) return ["Planning", "planning"];
  return ["In Progress", "in-progress"];
}

const canonArtwork = [
  "public/images/canon/canon-card-01.png",
  "public/images/canon/canon-card-02.png",
  "public/images/canon/canon-card-03.png",
  "public/images/canon/canon-card-04.png",
  "public/images/canon/canon-card-05.png",
  "public/images/canon/canon-card-06.png",
  "public/images/canon/canon-card-07.png",
  "public/images/canon/canon-card-08.png",
  "public/images/canon/canon-card-09.png",
  "public/images/canon/canon-card-10.png",
  "public/images/canon/canon-card-11.png",
  "public/images/canon/canon-card-12.png",
  "public/images/canon/canon-card-13.png",
  "public/images/canon/canon-card-14.png",
  "public/images/canon/canon-card-15.png",
  "public/images/canon/canon-card-16.png",
  "public/images/canon/canon-card-17.png",
  "public/images/canon/canon-card-18.png",
  "public/images/canon/canon-card-19.png",
  "public/images/canon/canon-card-20.png"
];

const canonFeaturedJourneySlides = [
  {
    eyebrow: "Teoyube Canon",
    source: "TeoyubeWorld",
    meta: "Sponsored",
    title: "The Chosen Calling Journey",
    subtitle: "Every promise reveals your calling and shapes the next faithful step.",
    cta: "Open Journey",
    image: "public/images/canon/featured-carousel/canon-featured-slide-01.png",
    position: "center"
  },
  {
    eyebrow: "Featured Journey",
    source: "TeoyubeWorld",
    meta: "Calling",
    title: "Called, Chosen, Sent",
    subtitle: "Discover the movement from identity to obedience, purpose, and impact.",
    cta: "Explore Calling",
    image: "public/images/canon/featured-carousel/canon-featured-slide-01.png",
    position: "center"
  },
  {
    eyebrow: "Canon Path",
    source: "TeoyubeWorld",
    meta: "Purpose",
    title: "Walk by Faith",
    subtitle: "Take the next step while God orders the path before you.",
    cta: "Begin Path",
    image: "public/images/canon/featured-carousel/canon-featured-slide-03.png",
    position: "center"
  },
  {
    eyebrow: "Promise Layer",
    source: "TeoyubeWorld",
    meta: "Wisdom",
    title: "Wisdom for the Way",
    subtitle: "Let Scripture bring clarity, discernment, and peace to your journey.",
    cta: "Read Wisdom",
    image: "public/images/canon/featured-carousel/canon-featured-slide-04.png",
    position: "center"
  },
  {
    eyebrow: "Kingdom Growth",
    source: "TeoyubeWorld",
    meta: "Sonship",
    title: "Grow Deep, Live Fruitful",
    subtitle: "Maturity forms through steady obedience, prayer, and surrendered growth.",
    cta: "Track Growth",
    image: "public/images/canon/featured-carousel/canon-featured-slide-05.png",
    position: "center"
  },
  {
    eyebrow: "Spiritual Focus",
    source: "TeoyubeWorld",
    meta: "Protection",
    title: "Peace for the Battle",
    subtitle: "Stand firm in promise language, guard your calling, and walk in peace.",
    cta: "Find Peace",
    image: "public/images/canon/featured-carousel/canon-featured-slide-06.png",
    position: "center"
  },
  {
    eyebrow: "Restoration",
    source: "TeoyubeWorld",
    meta: "Healing",
    title: "Healed for Purpose",
    subtitle: "Receive restoration as God turns wounds into witness and calling.",
    cta: "Explore Healing",
    image: "public/images/canon/featured-carousel/canon-featured-slide-07.png",
    position: "center"
  },
  {
    eyebrow: "Legacy",
    source: "TeoyubeWorld",
    meta: "Maturity",
    title: "Build What Remains",
    subtitle: "Let your calling become lasting fruit, testimony, and Kingdom legacy.",
    cta: "Continue",
    image: "public/images/canon/featured-carousel/canon-featured-slide-08.png",
    position: "center"
  }
];

const canonRecommendedCarouselSlides = [
  {
    title: "Where God's Promises Meet Your Calling",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-01.png"
  },
  {
    title: "Search with Purpose",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-02.png"
  },
  {
    title: "Walk the Canon Path",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-03.png"
  },
  {
    title: "Watch, Reflect, Grow",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-04.png"
  },
  {
    title: "Pray with Purpose",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-05.png"
  },
  {
    title: "Remember, Reflect, Grow",
    image: "public/images/canon/recommended-carousel/canon-recommended-slide-06.png"
  }
];

const canonExplorePaths = [
  {
    title: "Scripture",
    description: "Explore the living Word of God.",
    count: "1,248 Verses",
    cta: "Explore Scripture",
    icon: "scripture",
    image: "public/images/canon/canon-expanded-card-01.png"
  },
  {
    title: "Prayer",
    description: "Connect with God through prayer.",
    count: "348 Prayers",
    cta: "Explore Prayers",
    icon: "prayer",
    image: "public/images/canon/canon-expanded-card-02.png"
  },
  {
    title: "Teachings",
    description: "Grow in wisdom through teachings.",
    count: "856 Teachings",
    cta: "Explore Teachings",
    icon: "teachings",
    image: "public/images/canon/canon-expanded-card-03.png"
  },
  {
    title: "Canon Journeys",
    description: "Walk your calling through canon paths.",
    count: "72 Journeys",
    cta: "Explore Journeys",
    icon: "journeys",
    image: "public/images/canon/canon-expanded-card-04.png"
  },
  {
    title: "Promise Language",
    description: "Speak life through God's promises.",
    count: "144 Promises",
    cta: "Explore Promises",
    icon: "promise",
    image: "public/images/canon/canon-expanded-card-05.png"
  },
  {
    title: "Worship",
    description: "Enter His presence with gratitude.",
    count: "196 Worship",
    cta: "Explore Worship",
    icon: "worship",
    image: "public/images/canon/canon-expanded-card-06.png"
  },
  {
    title: "Kingdom Warfare",
    description: "Stand strong in spiritual battles.",
    count: "56 Strategies",
    cta: "Explore Warfare",
    icon: "warfare",
    image: "public/images/canon/canon-expanded-card-07.png"
  },
  {
    title: "Growth",
    description: "Grow deeper in your walk.",
    count: "92 Lessons",
    cta: "Explore Growth",
    icon: "growth",
    image: "public/images/canon/canon-expanded-card-08.png"
  },
  {
    title: "Calling",
    description: "Discover and walk in your divine call.",
    count: "34 Callings",
    cta: "Explore Calling",
    icon: "calling",
    image: "public/images/canon/canon-expanded-card-09.png"
  },
  {
    title: "Kingdom Identity",
    description: "Discover who you are in Christ.",
    count: "28 Identities",
    cta: "Explore Identity",
    icon: "identity",
    image: "public/images/canon/canon-expanded-card-10.png"
  },
  {
    title: "Testimony",
    description: "Share and discover God's faithfulness.",
    count: "63 Stories",
    cta: "Explore Stories",
    icon: "testimony",
    image: "public/images/canon/canon-expanded-card-11.png"
  },
  {
    title: "Lexicon",
    description: "Understand the language of God.",
    count: "212 Words",
    cta: "Explore Lexicon",
    icon: "lexicon",
    image: "public/images/canon/canon-expanded-card-12.png"
  },
  {
    title: "Covenant Paths",
    description: "Trace promises through covenant alignment.",
    count: "48 Paths",
    cta: "Explore Covenants",
    icon: "journeys",
    image: "public/images/canon/canon-expanded-card-13.png"
  },
  {
    title: "Promise Clusters",
    description: "Gather connected promises by theme.",
    count: "36 Clusters",
    cta: "Explore Clusters",
    icon: "promise",
    image: "public/images/canon/canon-expanded-card-14.png"
  },
  {
    title: "Prayer Collections",
    description: "Build guided prayers from Scripture.",
    count: "84 Prayers",
    cta: "Explore Collections",
    icon: "prayer",
    image: "public/images/canon/canon-expanded-card-15.png"
  },
  {
    title: "Knowledge Graph",
    description: "Connect canon themes and meanings.",
    count: "108 Links",
    cta: "Explore Graph",
    icon: "teachings",
    image: "public/images/canon/canon-expanded-card-16.png"
  },
  {
    title: "Kingdom Legacy",
    description: "Shape lasting fruit through obedience.",
    count: "27 Legacies",
    cta: "Explore Legacy",
    icon: "identity",
    image: "public/images/canon/canon-expanded-card-17.png"
  },
  {
    title: "Purpose Roadmap",
    description: "Follow the next steps in your calling.",
    count: "64 Steps",
    cta: "Explore Roadmap",
    icon: "calling",
    image: "public/images/canon/canon-expanded-card-18.png"
  }
];

function getCanonArtwork(index, title = "", tags = []) {
  const text = normalize(`${title} ${(tags || []).join(" ")}`);
  if (text.includes("wisdom") || text.includes("teacher")) return "public/images/canon/canon-card-07.png";
  if (text.includes("peace") || text.includes("protection") || text.includes("warfare")) return "public/images/canon/canon-card-05.png";
  if (text.includes("purpose") || text.includes("calling") || text.includes("mission")) return "public/images/canon/canon-card-04.png";
  if (text.includes("growth") || text.includes("sonship") || text.includes("shepherd")) return "public/images/canon/canon-card-02.png";
  if (text.includes("healing") || text.includes("restoration")) return "public/images/canon/canon-card-06.png";
  if (text.includes("faith") || text.includes("leadership") || text.includes("dominion")) return "public/images/canon/canon-card-13.png";
  if (text.includes("legacy") || text.includes("hope")) return "public/images/canon/canon-card-19.png";
  return canonArtwork[index % canonArtwork.length];
}

function createCanonJourneyCard({ id, title, description, tags = [], scriptureCount = 0, prayerCount = 0, index = 0 }) {
  const progressValues = [100, 75, 100, 50, 65, 20, 100, 0, 85, 45, 60, 90];
  const progress = progressValues[index % progressValues.length];
  const [status, statusKey] = getCanonStatus(index, progress);
  return {
    id,
    title,
    description,
    tags: tags.filter(Boolean).slice(0, 8),
    scriptureCount,
    prayerCount,
    progress,
    status,
    statusKey,
    image: getCanonArtwork(index, title, tags)
  };
}

function setCanonFeaturedJourneySlideIndex(index) {
  const total = canonFeaturedJourneySlides.length;
  selectedCanonFeaturedJourneySlideIndex = ((Number(index) || 0) % total + total) % total;
}

function renderCanonFeaturedJourneyCarouselCard(item) {
  setCanonFeaturedJourneySlideIndex(selectedCanonFeaturedJourneySlideIndex);
  const activeSlide = canonFeaturedJourneySlides[selectedCanonFeaturedJourneySlideIndex];
  const slideCount = canonFeaturedJourneySlides.length;

  return `
        <article
          class="canon-project-card canon-featured-carousel-card ${item.id === selectedCanonItemId ? "active" : ""}"
          data-canon-item="${escapeHtml(item.id)}"
          data-canon-featured-carousel
          tabindex="0"
          aria-label="${escapeHtml(item.title)} featured journey carousel"
          aria-roledescription="carousel"
          style="--canon-featured-image: url('${escapeHtml(activeSlide.image)}'); --canon-featured-position: ${escapeHtml(activeSlide.position || "center")};"
        >
          <div class="canon-featured-carousel-stage" aria-live="polite">
            <button class="canon-featured-carousel-arrow prev" type="button" data-canon-featured-slide-nav="prev" aria-label="Previous featured journey slide">&lsaquo;</button>
            <button class="canon-featured-carousel-arrow next" type="button" data-canon-featured-slide-nav="next" aria-label="Next featured journey slide">&rsaquo;</button>
            <div class="canon-featured-carousel-dots" aria-label="Featured journey slide indicators">
              ${canonFeaturedJourneySlides
                .map(
                  (slide, index) => `
                  <button
                    class="${index === selectedCanonFeaturedJourneySlideIndex ? "active" : ""}"
                    type="button"
                    data-canon-featured-slide-index="${index}"
                    aria-current="${index === selectedCanonFeaturedJourneySlideIndex ? "true" : "false"}"
                    aria-label="Show slide ${index + 1} of ${slideCount}: ${escapeHtml(slide.title)}"
                  ></button>
                `
                )
                .join("")}
            </div>
          </div>
        </article>
      `;
}

function updateCanonFeaturedJourneyCarouselCard() {
  const card = $("#canonGrid [data-canon-featured-carousel]");
  if (!card) return false;

  const categories = getCanonDashboardCategories();
  const activeCategory = categories.find((category) => category.id === activeCanonTab) || categories[0];
  const activeItems = activeCategory?.items || [];
  const item = activeItems.find((candidate) => candidate.id === card.dataset.canonItem);
  if (!item || item.title !== "The Chosen Calling Journey") return false;

  card.outerHTML = renderCanonFeaturedJourneyCarouselCard(item);
  return true;
}

function startCanonFeaturedJourneyCarousel() {
  clearInterval(canonFeaturedJourneyTimer);
  canonFeaturedJourneyTimer = setInterval(() => {
    if (canonFeaturedJourneyPaused || document.body.dataset.view !== "canon") return;
    if (!$("#canonGrid [data-canon-featured-carousel]")) return;
    setCanonFeaturedJourneySlideIndex(selectedCanonFeaturedJourneySlideIndex + 1);
    updateCanonFeaturedJourneyCarouselCard();
  }, 7000);
}

function setCanonRecommendedSlideIndex(index) {
  const total = canonRecommendedCarouselSlides.length;
  selectedCanonRecommendedSlideIndex = ((Number(index) || 0) % total + total) % total;
}

function renderCanonRecommendedMediaCarousel() {
  setCanonRecommendedSlideIndex(selectedCanonRecommendedSlideIndex);
  const activeSlide = canonRecommendedCarouselSlides[selectedCanonRecommendedSlideIndex];

  return `
            <div
              class="canon-recommended-media"
              data-canon-recommended-carousel
              tabindex="0"
              aria-label="Recommended For You image carousel"
              aria-roledescription="carousel"
              style="--canon-recommended-image: url('${escapeHtml(activeSlide.image)}');"
            >
              <div class="canon-recommended-image-frame" aria-hidden="true"></div>
              <div class="canon-recommended-controls">
                <button class="canon-recommended-arrow prev" type="button" data-canon-recommended-nav="prev" aria-label="Previous recommended slide">&lsaquo;</button>
                <div class="canon-recommended-dots" aria-label="Recommended slide indicators">
                  ${canonRecommendedCarouselSlides
                    .map(
                      (slide, index) => `
                      <button
                        class="${index === selectedCanonRecommendedSlideIndex ? "active" : ""}"
                        type="button"
                        data-canon-recommended-index="${index}"
                        aria-current="${index === selectedCanonRecommendedSlideIndex ? "true" : "false"}"
                        aria-label="Show recommended slide ${index + 1}: ${escapeHtml(slide.title)}"
                      ></button>
                    `
                    )
                    .join("")}
                </div>
                <button class="canon-recommended-arrow next" type="button" data-canon-recommended-nav="next" aria-label="Next recommended slide">&rsaquo;</button>
              </div>
            </div>
          `;
}

function updateCanonRecommendedCarousel() {
  const carousel = $("#canonPaths [data-canon-recommended-carousel]");
  if (!carousel) return false;
  carousel.outerHTML = renderCanonRecommendedMediaCarousel();
  return true;
}

function startCanonRecommendedCarousel() {
  clearInterval(canonRecommendedTimer);
  canonRecommendedTimer = setInterval(() => {
    if (canonRecommendedPaused || document.body.dataset.view !== "canon") return;
    if (!$("#canonPaths [data-canon-recommended-carousel]")) return;
    setCanonRecommendedSlideIndex(selectedCanonRecommendedSlideIndex + 1);
    updateCanonRecommendedCarousel();
  }, 7000);
}

function getCanonDashboardCategories() {
  const canonMaps = destinyMaps.map((map, index) =>
    createCanonJourneyCard({
      id: `canon-map-${map.id || index}`,
      title: map.name || `Canon Map ${index + 1}`,
      description: `${map.archetypeName || map.archetype || "Kingdom Archetype"} through ${map.pathName || map.path || "Covenant Path"} toward ${map.destination || "manifestation"}.`,
      tags: map.sequence || [],
      scriptureCount: (map.sequence || []).length,
      prayerCount: 1,
      index
    })
  );

  const archetypeCards = kingdomArchetypes.map((item, index) =>
    createCanonJourneyCard({
      id: `archetype-${item.id || item.name || index}`,
      title: item.name || `Kingdom Archetype ${index + 1}`,
      description: item.description || item.summary || item.calling || "A Kingdom identity pattern connected to promise, calling, and manifestation.",
      tags: item.coreWords || item.words || item.traits || [item.category, item.path],
      scriptureCount: (item.scriptures || item.scriptureReferences || []).length || 3,
      prayerCount: 1,
      index
    })
  );

  const promiseClusterCards = promiseClusters.map((cluster, index) =>
    createCanonJourneyCard({
      id: `promise-cluster-${cluster.id || cluster.theme || index}`,
      title: getClusterTitle(cluster),
      description: cluster.summary || cluster.declaration || "A promise cluster linking Scripture, prayer, action, and spiritual progress.",
      tags: [...(cluster.keywords || []), ...getClusterScriptures(cluster).slice(0, 3)],
      scriptureCount: getClusterScriptures(cluster).length,
      prayerCount: cluster.prayer ? 1 : 0,
      index
    })
  );

  const pathCards = covenantPaths.map((path, index) =>
    createCanonJourneyCard({
      id: `covenant-path-${path.id || index}`,
      title: path.name || `Covenant Path ${index + 1}`,
      description: Array.isArray(path.meaning) ? path.meaning.join(" -> ") : path.meaning || "A Promise progression journey.",
      tags: path.sequence || [],
      scriptureCount: (path.sequence || []).length,
      prayerCount: 1,
      index
    })
  );

  const prayerCards = prayerEngineTemplates.map((prayer, index) =>
    createCanonJourneyCard({
      id: `prayer-${prayer.id || index}`,
      title: prayer.name || `Prayer Collection ${index + 1}`,
      description: prayer.declaration || prayer.prayer_meaning || prayer.prayer || "Prayer collection for identity, promise, transformation, and manifestation.",
      tags: prayer.sequence || prayer.example_sequence || [],
      scriptureCount: prayer.scripture_anchor || prayer.scriptureAnchor ? 1 : 0,
      prayerCount: 1,
      index
    })
  );

  const graphCards = scriptureCanon.map((record, index) =>
    createCanonJourneyCard({
      id: `graph-${record.id || index}`,
      title: record.teoyubeWord || record.word || `Knowledge Graph ${index + 1}`,
      description: record.promiseStatement || record.meaning || "Scripture Knowledge Graph seed connected to Teoyube word relationships.",
      tags: record.scriptureReferences || record.scripture_sources || [],
      scriptureCount: (record.scriptureReferences || record.scripture_sources || []).length,
      prayerCount: 1,
      index
    })
  );

  return [
    { id: "canon-maps", label: "Canon Maps", items: canonMaps },
    { id: "archetypes", label: "Archetypes", items: archetypeCards },
    { id: "promise-clusters", label: "Promise Clusters", items: promiseClusterCards },
    { id: "covenant-paths", label: "Covenant Paths", items: pathCards },
    { id: "prayer-collections", label: "Prayer Collections", items: prayerCards },
    { id: "knowledge-graph", label: "Knowledge Graph", items: graphCards }
  ];
}

function renderCanon() {
  return renderCanonPremium();
  const grid = $("#canonGrid");
  const paths = $("#canonPaths");
  const kpis = $("#canonKpiGrid");
  const tabs = $("#canonTabs");
  const pagination = $("#canonPagination");
  if (!grid || !paths || !kpis || !tabs || !pagination || !canonArchitecture) return;

  $("#canonSummary").textContent = canonArchitecture.principle || canonArchitecture.subtitle;

  const categories = getCanonDashboardCategories();
  if (!categories.some((category) => category.id === activeCanonTab)) activeCanonTab = categories[0]?.id || "canon-maps";
  const activeCategory = categories.find((category) => category.id === activeCanonTab) || categories[0];
  const activeItems = activeCategory?.items || [];
  const totalPages = Math.max(1, Math.min(3, Math.ceil(activeItems.length / CANON_ITEMS_PER_PAGE)));
  activeCanonPage = Math.min(Math.max(activeCanonPage, 1), totalPages);
  const pageStart = (activeCanonPage - 1) * CANON_ITEMS_PER_PAGE;
  const pageItems = activeItems.slice(pageStart, pageStart + CANON_ITEMS_PER_PAGE);
  if (!selectedCanonItemId || !activeItems.some((item) => item.id === selectedCanonItemId)) {
    selectedCanonItemId = pageItems[0]?.id || activeItems[0]?.id || "";
  }
  const selectedItem = activeItems.find((item) => item.id === selectedCanonItemId) || activeItems[0];
  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);
  const completedItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "Completed").length, 0);
  const inProgressItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "In Progress").length, 0);
  const onHoldItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "On Hold").length, 0);
  const completionRate = totalItems ? Math.round((completedItems / totalItems) * 100) : 0;

  kpis.innerHTML = [
    ["Total Journeys", totalItems, "All Canon modules"],
    ["Completed", completedItems, "Ready for use"],
    ["In Progress", inProgressItems, "Being developed"],
    ["On Hold", onHoldItems, "Needs review"],
    ["Completion Rate", `${completionRate}%`, "Canon maturity"]
  ]
    .map(
      ([label, value, note]) => `
      <article class="canon-kpi-card">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(note)}</small>
      </article>
    `
    )
    .join("");

  tabs.innerHTML = categories
    .map(
      (category) => `
      <button class="canon-tab ${category.id === activeCanonTab ? "active" : ""}" type="button" data-canon-tab="${escapeHtml(category.id)}">
        ${escapeHtml(category.label)}
        <span>${category.items.length}</span>
      </button>
    `
    )
    .join("");

  grid.innerHTML =
    pageItems
      .map(
        (item, index) => `
        <article class="canon-project-card ${item.id === selectedCanonItemId ? "active" : ""}" data-canon-item="${escapeHtml(item.id)}">
          <div class="canon-project-media" style="background-image: url('${escapeHtml(item.image)}')"></div>
          <div class="canon-project-body">
            <div class="canon-project-heading">
              <div>
                <h4>${escapeHtml(item.title)}</h4>
                <span class="canon-status ${escapeHtml(item.statusKey)}">${escapeHtml(item.status)}</span>
              </div>
              <button type="button" aria-label="Project actions">...</button>
            </div>
            <p>${escapeHtml(item.description)}</p>
            <div class="canon-avatar-row">
              ${[0, 1, 2]
                .map((avatarIndex) => `<span style="background-image: url('${escapeHtml(localMediaThumbnails[(pageStart + index + avatarIndex) % localMediaThumbnails.length])}')"></span>`)
                .join("")}
            </div>
            <div class="canon-project-footer">
              <span>Progress</span>
              <strong>${item.progress}%</strong>
            </div>
            <progress value="${item.progress}" max="100"></progress>
          </div>
        </article>
      `
      )
      .join("") || `<article class="canon-project-card"><div class="canon-project-body"><p>No items available for this category yet.</p></div></article>`;

  pagination.innerHTML = `
    <button class="canon-page-control" type="button" data-canon-page="${Math.max(1, activeCanonPage - 1)}" ${activeCanonPage === 1 ? "disabled" : ""} aria-label="Previous Canon page">&larr;</button>
    ${Array.from({ length: totalPages }, (_, pageIndex) => {
      const page = pageIndex + 1;
      return `<button class="canon-page-number ${page === activeCanonPage ? "active" : ""}" type="button" data-canon-page="${page}" aria-current="${page === activeCanonPage ? "page" : "false"}">${page}</button>`;
    }).join("")}
    ${totalPages < 3 ? "" : `<span class="canon-page-ellipsis">...</span>`}
    <button class="canon-page-control" type="button" data-canon-page="${Math.min(totalPages, activeCanonPage + 1)}" ${activeCanonPage === totalPages ? "disabled" : ""} aria-label="Next Canon page">&rarr;</button>
  `;

  paths.innerHTML = selectedItem
    ? `
      <div class="canon-detail-sticky">
        <p class="eyebrow">Detail View</p>
        <h3>${escapeHtml(selectedItem.title)}</h3>
        <span class="canon-status ${escapeHtml(selectedItem.statusKey)}">${escapeHtml(selectedItem.status)}</span>
        <p>${escapeHtml(selectedItem.description)}</p>
        <div class="canon-detail-stats">
          <div><span>Scriptures</span><strong>${selectedItem.scriptureCount}</strong></div>
          <div><span>Prayers</span><strong>${selectedItem.prayerCount}</strong></div>
          <div><span>Progress</span><strong>${selectedItem.progress}%</strong></div>
        </div>
        <progress value="${selectedItem.progress}" max="100"></progress>
        <h4>Related Content</h4>
        <div class="sequence-row">${selectedItem.tags
          .map((tag) => `<span class="scripture-pill">${escapeHtml(tag)}</span>`)
          .join("")}</div>
        <h4>Activity Feed</h4>
        <ul class="canon-activity-list">
          <li>Canon data loaded from ${escapeHtml(activeCategory.label)}.</li>
          <li>${selectedItem.scriptureCount} scripture anchors connected.</li>
          <li>${selectedItem.prayerCount} prayer links available.</li>
        </ul>
        <button class="primary" type="button">Open Full Journey &rarr;</button>
        <button class="secondary" type="button">View Journey Map</button>
      </div>
    `
    : `<p>Select a Canon journey card to view details.</p>`;
}

function renderCanonPremium() {
  const grid = $("#canonGrid");
  const paths = $("#canonPaths");
  const kpis = $("#canonKpiGrid");
  const tabs = $("#canonTabs");
  const pagination = $("#canonPagination");
  const categoryGrid = $("#canonCategoryGrid");
  const recentGrid = $("#canonRecentGrid");
  const exploreGrid = $("#canonExploreGrid");
  if (!grid || !paths || !kpis || !tabs || !pagination || !canonArchitecture) return;

  $("#canonSummary").textContent =
    canonArchitecture.principle ||
    canonArchitecture.subtitle ||
    "Walk daily through Scripture, Calling, Purpose, Canon Journeys, Wisdom and Legacy.";

  const categories = getCanonDashboardCategories();
  if (!categories.some((category) => category.id === activeCanonTab)) activeCanonTab = categories[0]?.id || "canon-maps";
  const activeCategory = categories.find((category) => category.id === activeCanonTab) || categories[0];
  const activeItems = activeCategory?.items || [];
  const totalPages = Math.max(1, Math.min(3, Math.ceil(activeItems.length / CANON_ITEMS_PER_PAGE)));
  activeCanonPage = Math.min(Math.max(activeCanonPage, 1), totalPages);
  const pageStart = (activeCanonPage - 1) * CANON_ITEMS_PER_PAGE;
  const pageItems = activeItems.slice(pageStart, pageStart + CANON_ITEMS_PER_PAGE);
  if (!selectedCanonItemId || !activeItems.some((item) => item.id === selectedCanonItemId)) {
    selectedCanonItemId = pageItems[0]?.id || activeItems[0]?.id || "";
  }
  const selectedItem = activeItems.find((item) => item.id === selectedCanonItemId) || activeItems[0];
  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);
  const completedItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "Completed").length, 0);
  const inProgressItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "In Progress").length, 0);
  const onHoldItems = categories.reduce((sum, category) => sum + category.items.filter((item) => item.status === "On Hold").length, 0);
  const completionRate = totalItems ? Math.round((completedItems / totalItems) * 100) : 0;
  const featuredItems = pageItems.slice(0, 5);
  const recentStart = pageStart + featuredItems.length;
  const recentItems = activeItems.length
    ? Array.from({ length: Math.min(CANON_RECENT_CARD_COUNT, activeItems.length) }, (_, index) => activeItems[(recentStart + index) % activeItems.length])
    : [];
  const canonOverviewDimensions = [
    { key: "calling", label: "Calling", value: 85, icon: "compass" },
    { key: "purpose", label: "Purpose", value: 78, icon: "target" },
    { key: "wisdom", label: "Wisdom", value: 72, icon: "book" },
    { key: "dominion", label: "Dominion", value: 68, icon: "crown" },
    { key: "legacy", label: "Legacy", value: 80, icon: "shield" }
  ];
  const radarCenter = 160;
  const radarRadius = 104;
  const getRadarPoint = (index, radius) => {
    const angle = (-90 + index * 72) * (Math.PI / 180);
    return {
      x: radarCenter + Math.cos(angle) * radius,
      y: radarCenter + Math.sin(angle) * radius
    };
  };
  const canonRadarPolygon = canonOverviewDimensions
    .map((dimension, index) => {
      const point = getRadarPoint(index, radarRadius * (dimension.value / 100));
      return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
    })
    .join(" ");
  const canonRadarAxis = canonOverviewDimensions
    .map((dimension, index) => {
      const edge = getRadarPoint(index, radarRadius);
      const valuePoint = getRadarPoint(index, radarRadius * (dimension.value / 100));
      return `
        <line class="canon-overview-axis" x1="${radarCenter}" y1="${radarCenter}" x2="${edge.x.toFixed(1)}" y2="${edge.y.toFixed(1)}"></line>
        <circle class="canon-overview-node" cx="${valuePoint.x.toFixed(1)}" cy="${valuePoint.y.toFixed(1)}" r="4.2"></circle>
      `;
    })
    .join("");

  kpis.innerHTML = [
    ["Total Journeys", totalItems, "All Canon entries", "book"],
    ["Completed", completedItems, "Ready for use", "check"],
    ["In Progress", inProgressItems, "Being developed", "cycle"],
    ["On Hold", onHoldItems, "Needs review", "pause"],
    ["Completion Rate", `${completionRate}%`, "Canon maturity", "trend"]
  ]
    .map(
      ([label, value, note, icon]) => `
      <article class="canon-kpi-card" data-icon="${escapeHtml(icon)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(note)}</small>
      </article>
    `
    )
    .join("");

  tabs.innerHTML = categories
    .map(
      (category) => `
      <button class="canon-tab ${category.id === activeCanonTab ? "active" : ""}" type="button" data-canon-tab="${escapeHtml(category.id)}">
        ${escapeHtml(category.label)}
        <span>${category.items.length}</span>
      </button>
    `
    )
    .join("");

  grid.innerHTML =
    featuredItems
      .map(
        (item, index) => {
          if (item.title === "The Chosen Calling Journey") {
            return renderCanonFeaturedJourneyCarouselCard(item);
          }

          return `
        <article class="canon-project-card ${item.id === selectedCanonItemId ? "active" : ""}" data-canon-item="${escapeHtml(item.id)}">
          <div class="canon-project-media" style="background-image: url('${escapeHtml(item.image)}')"></div>
          <div class="canon-project-body">
            <div class="canon-project-heading">
              <div>
                <h4>${escapeHtml(item.title)}</h4>
                <span class="canon-status ${escapeHtml(item.statusKey)}">${escapeHtml(item.status)}</span>
              </div>
              <button type="button" aria-label="Project actions">...</button>
            </div>
            <p>${escapeHtml(item.description)}</p>
            <div class="canon-avatar-row">
              ${[0, 1, 2]
                .map((avatarIndex) => `<span style="background-image: url('${escapeHtml(canonArtwork[(pageStart + index + avatarIndex) % canonArtwork.length])}')"></span>`)
                .join("")}
            </div>
            <div class="canon-project-footer">
              <span>Progress</span>
              <strong>${item.progress}%</strong>
            </div>
            <progress value="${item.progress}" max="100"></progress>
          </div>
        </article>
      `;
        }
      )
      .join("") || `<article class="canon-project-card"><div class="canon-project-body"><p>No items available for this category yet.</p></div></article>`;

  if (categoryGrid) {
    const categoryThemes = [
      ["Calling Journeys", "26 Journeys", "calling", "public/images/canon/canon-tile-01.png"],
      ["Promise Journeys", "40 Journeys", "promise", "public/images/canon/canon-tile-02.png"],
      ["Wisdom Journeys", "18 Journeys", "wisdom", "public/images/canon/canon-tile-03.png"],
      ["Dominion Journeys", "32 Journeys", "dominion", "public/images/canon/canon-tile-04.png"],
      ["Healing Journeys", "22 Journeys", "healing", "public/images/canon/canon-tile-07.png"],
      ["Warfare Journeys", "28 Journeys", "warfare", "public/images/canon/canon-tile-06.png"],
      ["Worship Journeys", "16 Journeys", "worship", "public/images/canon/canon-tile-10.png"]
    ];
    const renderCategoryCard = ([title, count, icon, image], isDuplicate = false) => `
        <article class="canon-category-card" ${isDuplicate ? 'aria-hidden="true"' : ""} style="background-image: linear-gradient(180deg, rgba(0, 44, 33, 0.08), rgba(0, 44, 33, 0.78)), url('${escapeHtml(image)}')">
          <span data-icon="${escapeHtml(icon)}"></span>
          <strong>${escapeHtml(title)}</strong>
          <small>${escapeHtml(count)}</small>
        </article>
      `;
    categoryGrid.innerHTML = `
      <div class="canon-category-track">
        ${categoryThemes.map((category) => renderCategoryCard(category)).join("")}
        ${categoryThemes.map((category) => renderCategoryCard(category, true)).join("")}
      </div>
    `;
  }

  if (recentGrid) {
    const watchmanMergeOrder = ["The Watchman Protection Journey", "The Watchman Dominion Journey", "The Watchman Wisdom Journey"];
    const watchmanMergeTitles = new Set(watchmanMergeOrder);
    const recentEntries = recentItems.map((item, index) => ({ item, index }));
    const watchmanEntries = recentEntries
      .filter(({ item }) => watchmanMergeTitles.has(item.title))
      .sort((a, b) => watchmanMergeOrder.indexOf(a.item.title) - watchmanMergeOrder.indexOf(b.item.title));
    const shouldMergeWatchmanEntries = watchmanEntries.length === watchmanMergeOrder.length;
    const recentCardGroups = [];
    let watchmanMergeAdded = false;
    recentEntries.forEach((entry) => {
      if (shouldMergeWatchmanEntries && watchmanMergeTitles.has(entry.item.title)) {
        if (!watchmanMergeAdded) {
          recentCardGroups.push({ type: "merged-watchman", entries: watchmanEntries });
          watchmanMergeAdded = true;
        }
        return;
      }
      recentCardGroups.push({ type: "single", entry });
    });
    recentGrid.innerHTML = recentCardGroups
      .map((group) => {
        if (group.type === "merged-watchman") {
          const primary = group.entries[0].item;
          const active = group.entries.some(({ item }) => item.id === selectedCanonItemId);
          setWatchmanJourneyVideoIndex(selectedWatchmanJourneyVideoIndex);
          const activeSlide = watchmanJourneyCarouselSlides[selectedWatchmanJourneyVideoIndex] || watchmanJourneyCarouselSlides[0];
          return `
        <article class="canon-recent-card canon-recent-merged-card canon-watchman-story-card ${active ? "active" : ""}" data-canon-item="${escapeHtml(primary.id)}" style="--watchman-image: url('${escapeHtml(activeSlide.image)}')">
          <div class="canon-watchman-story-stage" role="img" aria-label="${escapeHtml(activeSlide.title)}"></div>
            <div class="canon-watchman-story-copy" aria-hidden="true">
            <div class="canon-recent-merged-list">
              ${group.entries
                .map(
                  ({ item, index }) => `
              <button class="canon-recent-merged-row ${item.id === selectedCanonItemId ? "active" : ""}" type="button" data-canon-item="${escapeHtml(item.id)}">
                <span>
                  <b>${escapeHtml(item.title)}</b>
                  <small>${index + 2}d ago · ${escapeHtml(item.status)}</small>
                </span>
                <strong>${item.progress}%</strong>
                <progress value="${item.progress}" max="100"></progress>
              </button>
            `
                )
                .join("")}
            </div>
            </div>
            <div class="canon-watchman-video-controls" aria-label="Watchman image carousel">
              <button type="button" data-watchman-video-nav="prev" aria-label="Previous Watchman slide">&larr;</button>
              <div class="canon-watchman-video-dots">
                ${watchmanJourneyCarouselSlides
                  .map(
                    (slide, slideIndex) => `
                <button
                  class="${slideIndex === selectedWatchmanJourneyVideoIndex ? "active" : ""}"
                  type="button"
                  data-watchman-video-index="${slideIndex}"
                  aria-label="Show ${escapeHtml(slide.title || `Watchman slide ${slideIndex + 1}`)}"
                  aria-current="${slideIndex === selectedWatchmanJourneyVideoIndex ? "true" : "false"}"></button>
              `
                  )
                  .join("")}
              </div>
              <button type="button" data-watchman-video-nav="next" aria-label="Next Watchman slide">&rarr;</button>
            </div>
        </article>
      `;
        }
        const { item, index } = group.entry;
        return `
        <article class="canon-recent-card ${item.id === selectedCanonItemId ? "active" : ""}" data-canon-item="${escapeHtml(item.id)}">
          <div class="canon-recent-media" style="background-image: url('${escapeHtml(item.image)}')"></div>
          <div>
            <span class="canon-status ${escapeHtml(item.statusKey)}">${escapeHtml(item.status)}</span>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.description)}</p>
            <div class="canon-project-footer"><span>${index + 2}d ago</span><strong>${item.progress}%</strong></div>
            <progress value="${item.progress}" max="100"></progress>
          </div>
        </article>
      `;
      })
      .join("");
  }

  if (exploreGrid) {
    exploreGrid.innerHTML = canonExplorePaths
      .map(
        (path) => `
        <article class="canon-explore-card" style="--canon-explore-image: url('${escapeHtml(path.image)}')">
          <span class="canon-explore-icon" data-icon="${escapeHtml(path.icon)}" aria-hidden="true"></span>
          <div class="canon-explore-copy">
            <h4>${escapeHtml(path.title)}</h4>
            <p>${escapeHtml(path.description)}</p>
          </div>
          <div class="canon-explore-footer">
            <span>${escapeHtml(path.count)}</span>
            <button type="button">${escapeHtml(path.cta)} <span aria-hidden="true">&rarr;</span></button>
          </div>
        </article>
      `
      )
      .join("");
  }

  pagination.innerHTML = `
    <button class="canon-page-control" type="button" data-canon-page="${Math.max(1, activeCanonPage - 1)}" ${activeCanonPage === 1 ? "disabled" : ""} aria-label="Previous Canon page">&larr;</button>
    ${Array.from({ length: totalPages }, (_, pageIndex) => {
      const page = pageIndex + 1;
      return `<button class="canon-page-number ${page === activeCanonPage ? "active" : ""}" type="button" data-canon-page="${page}" aria-current="${page === activeCanonPage ? "page" : "false"}">${page}</button>`;
    }).join("")}
    ${totalPages < 3 ? "" : `<span class="canon-page-ellipsis">...</span>`}
    <button class="canon-page-control" type="button" data-canon-page="${Math.min(totalPages, activeCanonPage + 1)}" ${activeCanonPage === totalPages ? "disabled" : ""} aria-label="Next Canon page">&rarr;</button>
  `;

  paths.innerHTML = selectedItem
    ? `
      <div class="canon-right-rail">
        <article class="canon-profile-widget">
          <div class="canon-profile-head">
            <span class="canon-profile-avatar" style="background-image: url('public/images/sidebar/saint-profile-avatar.png')"></span>
            <div>
              <h3>Saint</h3>
              <p>Kingdom Builder</p>
              <span>Level 4</span>
            </div>
            <button type="button" aria-label="Edit Saint profile">Edit</button>
          </div>
          <div class="canon-xp-row"><span></span><strong>2,450 / 5,000 XP</strong></div>
          <blockquote>I pray that the eyes of your heart may be enlightened in order that you may know the hope to which he has called you.<br><b>Ephesians 1:18</b></blockquote>
        </article>

        <article class="canon-overview-widget canon-overview-premium" aria-labelledby="canonOverviewTitle">
          <div class="canon-overview-header">
            <span class="canon-overview-title-icon" data-icon="scroll" aria-hidden="true"></span>
            <div>
              <h4 id="canonOverviewTitle">Canon Overview</h4>
              <p>Your alignment across the five core dimensions</p>
            </div>
            <button class="canon-overview-info" type="button" aria-label="Canon Overview information">i</button>
          </div>
          <div class="canon-overview-diagram" role="img" aria-label="Canon overview radar showing Calling 85%, Purpose 78%, Wisdom 72%, Dominion 68%, Legacy 80%">
            <svg class="canon-overview-radar-svg" viewBox="0 0 320 320" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id="canonRadarGlow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"></stop>
                  <stop offset="55%" stop-color="#a8d9bf" stop-opacity="0.42"></stop>
                  <stop offset="100%" stop-color="#f2d47c" stop-opacity="0.22"></stop>
                </radialGradient>
                <linearGradient id="canonRadarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0b7a5e" stop-opacity="0.18"></stop>
                  <stop offset="52%" stop-color="#2db987" stop-opacity="0.34"></stop>
                  <stop offset="100%" stop-color="#d9b44f" stop-opacity="0.22"></stop>
                </linearGradient>
                <filter id="canonRadarNodeGlow">
                  <feGaussianBlur stdDeviation="3.2" result="blur"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="blur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <circle class="canon-overview-ring ring-outer" cx="160" cy="160" r="132"></circle>
              <circle class="canon-overview-ring ring-mid" cx="160" cy="160" r="104"></circle>
              <circle class="canon-overview-ring ring-inner" cx="160" cy="160" r="76"></circle>
              <circle class="canon-overview-ring ring-core" cx="160" cy="160" r="48"></circle>
              ${canonRadarAxis}
              <polygon class="canon-overview-radar-max" points="${canonOverviewDimensions
                .map((dimension, index) => {
                  const point = getRadarPoint(index, radarRadius);
                  return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
                })
                .join(" ")}"></polygon>
              <polygon class="canon-overview-radar-value" points="${canonRadarPolygon}"></polygon>
            </svg>
            <div class="canon-overview-core">
              <i aria-hidden="true"></i>
              <strong>TEO</strong>
            </div>
            ${canonOverviewDimensions
              .map(
                (dimension) => `
                <article class="canon-overview-dimension canon-dim-${escapeHtml(dimension.key)}" tabindex="0" style="--canon-dim-value: ${dimension.value}%">
                  <span data-icon="${escapeHtml(dimension.icon)}" aria-hidden="true"></span>
                  <strong>${escapeHtml(dimension.label)}</strong>
                  <b>${dimension.value}%</b>
                </article>
              `
              )
              .join("")}
          </div>
          <div class="canon-overview-maturity" style="--canon-maturity: ${completionRate}%; --canon-maturity-deg: ${completionRate * 3.6}deg">
            <span class="canon-maturity-icon" data-icon="trend" aria-hidden="true"></span>
            <div class="canon-maturity-copy">
              <strong>Overall Maturity</strong>
              <span>Your overall spiritual maturity</span>
              <div class="canon-maturity-bar" aria-hidden="true"><i></i></div>
            </div>
            <div class="canon-maturity-ring" aria-label="Overall Maturity ${completionRate}%"><strong>${completionRate}%</strong></div>
          </div>
          <progress class="canon-overview-native-progress" value="${completionRate}" max="100">Overall Maturity ${completionRate}%</progress>
        </article>

        <article class="canon-actions-widget">
          <h4>Quick Actions</h4>
          ${["Create New Journey", "Explore Archetypes", "View Promise Clusters", "Journey Roadmap", "Add to Promise Table"]
            .map((action) => `<button type="button">${escapeHtml(action)} <span>›</span></button>`)
            .join("")}
        </article>

        <article class="canon-builder-widget">
          <span class="canon-builder-badge" aria-hidden="true"></span>
          <div>
            <h3>You are building something eternal.</h3>
            <p>Your calling. Your obedience. His Kingdom.</p>
          </div>
          <button type="button">Continue Your Journey &rarr;</button>
        </article>

        <article class="canon-detail-sticky">
          <div class="canon-detail-media" style="background-image: linear-gradient(180deg, rgba(0, 39, 31, 0.08), rgba(0, 39, 31, 0.42)), url('${escapeHtml(selectedItem.image)}')"></div>
          <p class="eyebrow">Detail View</p>
          <h3>${escapeHtml(selectedItem.title)}</h3>
          <span class="canon-status ${escapeHtml(selectedItem.statusKey)}">${escapeHtml(selectedItem.status)}</span>
          <p>${escapeHtml(selectedItem.description)}</p>
          <div class="canon-detail-stats">
            <div><span>Scriptures</span><strong>${selectedItem.scriptureCount}</strong></div>
            <div><span>Prayers</span><strong>${selectedItem.prayerCount}</strong></div>
            <div><span>Progress</span><strong>${selectedItem.progress}%</strong></div>
          </div>
          <progress value="${selectedItem.progress}" max="100"></progress>
          <h4>Related Content</h4>
          <div class="sequence-row">${selectedItem.tags
            .map((tag) => `<span class="scripture-pill">${escapeHtml(tag)}</span>`)
            .join("")}</div>
          <h4>Activity Feed</h4>
          <ul class="canon-activity-list">
            <li>Canon data loaded from ${escapeHtml(activeCategory.label)}.</li>
            <li>${selectedItem.scriptureCount} scripture anchors connected.</li>
            <li>${selectedItem.prayerCount} prayer links available.</li>
          </ul>
          <button class="primary" type="button">Open Full Journey &rarr;</button>
          <button class="secondary" type="button">View Journey Map</button>
        </article>

        <article class="canon-recommended-widget" aria-label="Recommended For You">
          <h4>Recommended For You</h4>
          <div class="canon-recommended-card">
            ${renderCanonRecommendedMediaCarousel()}
            <div class="canon-recommended-copy">
              <h5>Promise of Peace</h5>
              <p>Find rest in His perfect peace.</p>
              <button type="button">Start Journey <span aria-hidden="true">&rarr;</span></button>
            </div>
          </div>
        </article>
      </div>
    `
    : `<p>Select a Canon journey card to view details.</p>`;
}

function renderTkos(calling, cluster) {
  const grid = $("#tkosGrid");
  const details = $("#tkosDetails");
  if (!grid || !details || !tkosArchitecture || !tkosSampleProfile || !tkosEngines) return;

  $("#tkosSummary").textContent =
    "TKOS answers identity, calling, growth, stewardship, and legacy through a connected spiritual growth operating system.";

  const dashboard = tkosEngines.kingdomDashboard;
  grid.innerHTML = `
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="API">▤</span>
      <h3>Backend Architecture</h3>
      <p>Node.js - Supabase - Redis</p>
      <div class="sequence-row">
        <span class="scripture-pill">API</span>
        <span class="scripture-pill">Database</span>
        <span class="scripture-pill">Cache</span>
      </div>
      <progress value="78" max="100"></progress>
      <p class="roadmap-card-metric">78%</p>
    </article>
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="CMS">▦</span>
      <h3>Content System</h3>
      <p>CMS - Media - Knowledge Base</p>
      <progress value="85" max="100"></progress>
      <p class="roadmap-card-metric">85%</p>
    </article>
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="KPI">◎</span>
      <h3>Dashboard & Analytics</h3>
      <p>Insights - Metrics - Reporting</p>
      <div class="sequence-row">
        <span class="scripture-pill">System</span>
        <span class="scripture-pill">Ministry</span>
        <span class="scripture-pill">Kingdom</span>
      </div>
    </article>
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="AI">⌁</span>
      <h3>Calling - Purpose Engine</h3>
      <p>AI - Personalization - Calling Model</p>
      <progress value="60" max="100"></progress>
      <p class="roadmap-card-metric">60%</p>
    </article>
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="AI">✣</span>
      <h3>Local TIG Engine</h3>
      <p>Seed data - Guardrails - Explanation graph</p>
      <progress value="100" max="100"></progress>
      <p class="roadmap-card-metric">100%</p>
    </article>
    <article class="canon-card roadmap-module-card">
      <span class="roadmap-card-icon" data-icon="SEC">◈</span>
      <h3>Security & Compliance</h3>
      <p>Auth - Encryption - Roles</p>
      <div class="sequence-row">
        <span class="scripture-pill">Login</span>
        <span class="scripture-pill">Trust</span>
        <span class="scripture-pill">Protection</span>
      </div>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>Prince - The Builder</h3>
      <p>Vision - Builder - Core Purpose</p>
      <div class="sequence-row">
        <span class="scripture-pill">Vision</span>
        <span class="scripture-pill">Builder</span>
        <span class="scripture-pill">Core</span>
      </div>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>${escapeHtml(dashboard.dailyWord || "Luma")}</h3>
      <p>Light - Word - Daily Identity</p>
      <progress value="85" max="100"></progress>
      <p class="roadmap-card-metric">85%</p>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>${escapeHtml(dashboard.growthLevel || "Established")}</h3>
      <p>System - Identity - Kingdom Operating System</p>
      <div class="sequence-row">
        <span class="scripture-pill">System</span>
        <span class="scripture-pill">Identity</span>
        <span class="scripture-pill">Kingdom</span>
      </div>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>Calling - ${tkosEngines.covenantPathProgress.completion}%</h3>
      <p>Mission - Calling - Assignment</p>
      <progress value="${tkosEngines.covenantPathProgress.completion}" max="100"></progress>
      <p class="roadmap-card-metric">${tkosEngines.covenantPathProgress.completion}%</p>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>${escapeHtml(tkosEngines.prayerAnalytics.insights.mostUsedPrayer || "PR004")}</h3>
      <p>System - Architecture - Module</p>
      <span class="status-pill active">In progress</span>
    </article>
    <article class="canon-card roadmap-reference-card">
      <h3>${escapeHtml(tkosEngines.aiSpiritualCompanion.responseLogic.recommendedCluster || "Light & Revelation")}</h3>
      <p>Theme - Section - Purpose</p>
      <div class="sequence-row">
        <span class="scripture-pill">Light</span>
        <span class="scripture-pill">Theme</span>
        <span class="scripture-pill">Purpose</span>
      </div>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card roadmap-compass-card">
      <div class="compass roadmap-compass">
        <div class="compass-point top">
          <span>FAITH</span>
          <strong>Spiritual Foundation</strong>
        </div>
        <div class="compass-point right">
          <span>IMPACT</span>
          <strong>Digital Reach</strong>
        </div>
        <div class="compass-point bottom">
          <span>PURPOSE</span>
          <strong>Kingdom Mission</strong>
        </div>
        <div class="compass-point left">
          <span>IMPACT</span>
          <strong>Kingdom Outreach</strong>
        </div>
        <div class="compass-core">
          <span>♛</span>
          <strong>Kingdom Centred</strong>
        </div>
      </div>
    </article>
    <article class="canon-card roadmap-calling-result">
      <h3>Creative Digital Ministry - Pillar Assignment</h3>
      <dl class="calling-facts compact-calling-facts">
        <div><dt>Primary Calling</dt><dd>Creative Digital Ministry</dd></div>
        <div><dt>Secondary Calling</dt><dd>Kingdom Content</dd></div>
        <div><dt>Tertiary Calling</dt><dd>Ministry Systems</dd></div>
        <div><dt>Focus</dt><dd>Kingdom, Content, Technology, Impact</dd></div>
        <div><dt>Audience</dt><dd>Believers, Ministries, Church Leaders, Digital Creators</dd></div>
        <div><dt>Description</dt><dd>Building digital systems and content that advance God's Kingdom through creativity, technology, and service.</dd></div>
      </dl>
    </article>
  `;
}

function renderRoadmapKpis() {
  const target = $("#roadmapKpiGrid");
  if (!target) return;

  const cards = [
    ["Phases", 5, "Total Phases", "layers"],
    ["Core Modules", 20, "Active Modules", "grid"],
    ["Key Goals", 4, "Milestone Goals", "target"],
    ["Major Pages", 12, "High Priority Pages", "document"],
    ["Integrations", 3, "Core Integrations", "puzzle"],
    ["Overall Progress", "68%", "Roadmap Completion", "progress"]
  ];

  target.innerHTML = cards
    .map(
      ([label, value, note, icon]) => `
      <article class="roadmap-kpi-card">
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
          <small>${escapeHtml(note)}</small>
        </div>
        <i class="roadmap-kpi-icon ${escapeHtml(icon)}"></i>
      </article>
    `
    )
    .join("");
}

function renderTechArchitecture() {
  const grid = $("#techGrid");
  const details = $("#techDetails");
  if (!grid || !details || !technicalArchitecture || !subscriptionModel) return;

  $("#techSummary").textContent = technicalArchitecture.productDirection;
  const stack = technicalArchitecture.recommendedStack;
  const stackItems = [
    ["APP", "Static UI Shell"],
    ["<>", "Node.js"],
    ["API", "Local Adapter Plan"],
    ["DATA", stack.database],
    ["TIG", "Local Production Intelligence"],
    ["AU", stack.auth[0]],
    ["AU", stack.auth[1]],
    ["AU", stack.auth[2]],
    ["V", stack.hosting]
  ];
  const routeItems = technicalArchitecture.apiRoutes.map((route) => {
    const [method, ...pathParts] = route.split(" ");
    const path = pathParts.join(" ");
    const label = path.replace("/api/", "").replace("/:word", "").split("/")[0] || "api";
    return { method, path, label };
  });
  const communityAvatars = ["Peer", "Partner", "Community", "Mentor", "Church"];

  grid.innerHTML = `
    <article class="canon-card roadmap-tech-card phase03-card phase03-stack-card">
      <span class="roadmap-card-icon roadmap-stack-icon phase03-card-icon" data-icon="STACK" aria-hidden="true">
        <svg class="roadmap-inline-icon" viewBox="0 0 24 24" focusable="false">
          <rect x="5" y="5" width="14" height="5" rx="1.5"></rect>
          <rect x="5" y="10.5" width="14" height="5" rx="1.5"></rect>
          <rect x="5" y="16" width="14" height="3" rx="1.5"></rect>
        </svg>
      </span>
      <p class="eyebrow">Recommended Stack</p>
      <h3>${escapeHtml(stack.frontend)}</h3>
      <div class="roadmap-tech-icon-list phase03-chip-list">${stackItems
        .map(([icon, label]) => `<span class="roadmap-tech-icon-chip"><i>${escapeHtml(icon)}</i><span>${escapeHtml(label)}</span></span>`)
        .join("")}</div>
    </article>
    <article class="canon-card roadmap-tech-card phase03-card phase03-modules-card">
      <span class="roadmap-card-icon" data-icon="MOD">▦</span>
      <span class="roadmap-card-icon phase03-card-icon" data-icon="MOD">MOD</span>
      <p class="eyebrow">Core Modules</p>
      <h3>${technicalArchitecture.coreAppModules.length} App Modules</h3>
      <div class="sequence-row phase03-chip-list">${technicalArchitecture.coreAppModules
        .map((module) => `<span class="scripture-pill phase03-module-chip">${escapeHtml(module)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card roadmap-tech-card phase03-card phase03-ai-card">
      <span class="roadmap-card-icon" data-icon="AI">✣</span>
      <p class="eyebrow">AI Companion Flow</p>
      <h3>${escapeHtml(technicalArchitecture.aiCompanionFlow.output.cluster)}</h3>
      <p>${escapeHtml(technicalArchitecture.aiCompanionFlow.output.prayer)}</p>
      <div class="sequence-row phase03-profile-chips">${technicalArchitecture.aiCompanionFlow.output.words
        .map((word) => `<span class="status-pill active phase03-profile-chip">${escapeHtml(word)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card roadmap-tech-card phase03-card phase03-routes-card">
      <span class="roadmap-card-icon roadmap-routes-icon" data-icon="ROUTES" aria-hidden="true">
        <svg class="roadmap-inline-icon" viewBox="0 0 24 24" focusable="false">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="12" cy="18" r="3"></circle>
          <path d="M8.7 7.4h6.6M7.8 8.5l3 6.8M16.2 8.5l-3 6.8"></path>
        </svg>
      </span>
      <p class="eyebrow">Local Route Plan</p>
      <h3>${technicalArchitecture.apiRoutes.length} Planned Routes</h3>
      <div class="roadmap-route-chip-grid phase03-route-list">${routeItems
        .map(
          (route) =>
            `<span class="roadmap-route-chip" title="${escapeHtml(route.method)} ${escapeHtml(route.path)}"><i>${escapeHtml(route.method)}</i>${escapeHtml(route.label)}</span>`
        )
        .join("")}</div>
    </article>
    <article class="canon-card roadmap-tech-card phase03-card phase03-screens-card">
      <span class="roadmap-card-icon" data-icon="UX">▣</span>
      <p class="eyebrow">Mobile Screens</p>
      <h3>${technicalArchitecture.mobileScreens.length} Screens</h3>
      <div class="sequence-row phase03-chip-list">${technicalArchitecture.mobileScreens
        .map((screen) => `<span class="scripture-pill phase03-screen-chip">${escapeHtml(screen)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card roadmap-tech-card phase03-card phase03-subscription-card">
      <span class="roadmap-card-icon" data-icon="PRO">◈</span>
      <p class="eyebrow">Subscription</p>
      <h3>Free / Premium / Community</h3>
      <div class="phase03-community">
        <p><b>Community &amp; Ecosystem</b></p>
        <small>${escapeHtml(subscriptionModel.community.join(" / "))}</small>
        <div class="phase03-avatar-row" aria-label="Partner and community avatars">
          ${communityAvatars.map((name) => `<span title="${escapeHtml(name)}">${escapeHtml(name.slice(0, 1))}</span>`).join("")}
          <strong>+128</strong>
        </div>
      </div>
      <p><b>Premium:</b> ${escapeHtml(subscriptionModel.premium.join(", "))}</p>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Onboarding Flow</p>
      <h3>Profile and Archetype Discovery</h3>
      ${onboardingFlow
        .map(
          (step) => `
          <div>
            <p><b>Step ${step.step} - ${escapeHtml(step.screen)}:</b> ${escapeHtml(step.question || "Profile result")}</p>
            ${step.options ? `<div class="sequence-row">${step.options.map((option) => `<span class="scripture-pill">${escapeHtml(option)}</span>`).join("")}</div>` : ""}
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">MVP Build Order</p>
      <h3>Implementation Roadmap</h3>
      ${mvpBuildOrder
        .map(
          (mvp) => `
          <div>
            <p><b>${escapeHtml(mvp.id)} - ${escapeHtml(mvp.name)}</b></p>
            <div class="sequence-row">${mvp.features
              .map((feature) => `<span class="status-pill active">${escapeHtml(feature)}</span>`)
              .join("")}</div>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">AI Prompt Boundary</p>
      <h3>Canon-only companion</h3>
      <p>${escapeHtml(technicalArchitecture.aiPromptTemplate)}</p>
    </article>
  `;
}

function renderProjectStructureRoadmap() {
  const grid = $("#roadmapGrid");
  const details = $("#roadmapDetails");
  if (!grid || !details || !projectStructureRoadmap) return;

  $("#roadmapSummary").textContent = `${projectStructureRoadmap.recommendedProjectName} remains the future product target. This workspace currently runs the static Teoyube app, with ${projectStructureRoadmap.projectStructure.length} planned core areas, ${projectStructureRoadmap.apiRoutePlan.length} local adapter/API targets, and ${projectStructureRoadmap.mvpFeatures.length} product features.`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Project Name</p>
      <h3>${escapeHtml(projectStructureRoadmap.recommendedProjectName)}</h3>
      <p>${escapeHtml(projectStructureRoadmap.name)}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Folder Structure</p>
      <h3>${projectStructureRoadmap.projectStructure.length} Core Areas</h3>
      <div class="sequence-row">${projectStructureRoadmap.projectStructure
        .map((section) => `<span class="scripture-pill">${escapeHtml(section.path)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Seed Files</p>
      <h3>${projectStructureRoadmap.seedFilePlan.length} MVP Seeds</h3>
      <div class="sequence-row">${projectStructureRoadmap.seedFilePlan
        .map((seed) => `<span class="status-pill active">${escapeHtml(seed.file)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Adapter/API Plan</p>
      <h3>${projectStructureRoadmap.apiRoutePlan.length} Planned Routes</h3>
      <p>${escapeHtml(projectStructureRoadmap.apiRoutePlan.map((route) => `${route.method} ${route.path}`).join("; "))}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Core Utilities</p>
      <h3>${projectStructureRoadmap.coreUtilityFunctions.length} Functions</h3>
      <div class="sequence-row">${projectStructureRoadmap.coreUtilityFunctions
        .map((utility) => `<span class="scripture-pill">${escapeHtml(utility.file)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">MVP Features</p>
      <h3>${projectStructureRoadmap.mvpFeatures.length} Launch Features</h3>
      <div class="sequence-row">${projectStructureRoadmap.mvpFeatures
        .map((feature) => `<span class="status-pill active">${escapeHtml(feature)}</span>`)
        .join("")}</div>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Project Folder Structure</p>
      <h3>Static App / Future Product Map</h3>
      ${projectStructureRoadmap.projectStructure
        .map(
          (section) => `
          <div>
            <p><b>${escapeHtml(section.path)}</b> ${escapeHtml(section.purpose)}</p>
            <div class="sequence-row">${section.children
              .map((child) => `<span class="scripture-pill">${escapeHtml(child)}</span>`)
              .join("")}</div>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Seed File Plan</p>
      <h3>JSON First, Database Later</h3>
      ${projectStructureRoadmap.seedFilePlan
        .map(
          (seed) => `
          <div>
            <p><b>${escapeHtml(seed.file)}</b> ${escapeHtml(seed.description)}</p>
            <pre><code>${escapeHtml(JSON.stringify(seed.example, null, 2))}</code></pre>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Implementation Roadmap</p>
      <h3>Four-Week MVP Build</h3>
      ${projectStructureRoadmap.implementationRoadmap
        .map(
          (week) => `
          <div>
            <p><b>${escapeHtml(week.week)} - ${escapeHtml(week.theme)}</b></p>
            <div class="sequence-row">${week.tasks
              .map((task) => `<span class="status-pill active">${escapeHtml(task)}</span>`)
              .join("")}</div>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Core Utility Functions</p>
      <h3>Daily Word, Prayer Engine, Recommendation Logic</h3>
      ${projectStructureRoadmap.coreUtilityFunctions
        .map(
          (utility) => `
          <div>
            <p><b>${escapeHtml(utility.file)}</b> ${escapeHtml(utility.name)}</p>
            <pre><code>${escapeHtml(utility.code)}</code></pre>
          </div>
        `
        )
        .join("")}
    </article>
  `;
}

function renderMvpCodeStarterFiles() {
  const grid = $("#starterGrid");
  const details = $("#starterDetails");
  if (!grid || !details || !mvpCodeStarterFiles) return;

  const stats = mvpCodeStarterFiles.starterStats;
  const filesByType = mvpCodeStarterFiles.files.reduce((groups, file) => {
    groups[file.type] = groups[file.type] || [];
    groups[file.type].push(file);
    return groups;
  }, {});

  $("#starterSummary").textContent = `${mvpCodeStarterFiles.projectRoot} is a historical/future starter target. The current workspace runs the root static app while this plan tracks ${mvpCodeStarterFiles.files.length} starter files: ${stats.pages} pages, ${stats.apiRoutes} adapter/API targets, ${stats.utilities} utilities, and ${stats.seedFiles} seed files.`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Project Root</p>
      <h3>${escapeHtml(mvpCodeStarterFiles.projectRoot)}</h3>
      <p>${escapeHtml(mvpCodeStarterFiles.description)}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Starter Pages</p>
      <h3>${stats.pages} Pages</h3>
      <div class="sequence-row">${(filesByType.page || [])
        .map((file) => `<span class="scripture-pill">${escapeHtml(file.path.replace(`${mvpCodeStarterFiles.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Adapter/API Targets</p>
      <h3>${stats.apiRoutes} Planned Routes</h3>
      <div class="sequence-row">${(filesByType.api || [])
        .map((file) => `<span class="status-pill active">${escapeHtml(file.path.replace(`${mvpCodeStarterFiles.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Utilities</p>
      <h3>${stats.utilities} Functions</h3>
      <div class="sequence-row">${(filesByType.utility || [])
        .map((file) => `<span class="scripture-pill">${escapeHtml(file.path.replace(`${mvpCodeStarterFiles.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Seeds</p>
      <h3>${stats.starterWords} Words / ${stats.starterPrayers} Prayers</h3>
      <div class="sequence-row">${(filesByType.seed || [])
        .map((file) => `<span class="status-pill active">${escapeHtml(file.path.replace(`${mvpCodeStarterFiles.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Next Steps</p>
      <h3>${mvpCodeStarterFiles.nextSteps.length} Build Actions</h3>
      <p>${escapeHtml(mvpCodeStarterFiles.nextSteps.join(" "))}</p>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Generated File Manifest</p>
      <h3>Phase 4D Starter Files</h3>
      ${mvpCodeStarterFiles.files
        .map(
          (file) => `
          <div>
            <p><b>${escapeHtml(file.path)}</b></p>
            <p>${escapeHtml(file.purpose)}</p>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Run Flow</p>
      <h3>Developer Start Sequence</h3>
      <pre><code>${escapeHtml(`cd ${mvpCodeStarterFiles.projectRoot}\nnpm install\nnpm run dev`)}</code></pre>
      <div class="sequence-row">${mvpCodeStarterFiles.nextSteps
        .map((step) => `<span class="status-pill active">${escapeHtml(step)}</span>`)
        .join("")}</div>
    </article>
  `;
}

function renderMvpSeedFiles() {
  const grid = $("#seedsGrid");
  const details = $("#seedsDetails");
  if (!grid || !details || !mvpSeedFiles) return;

  $("#seedsSummary").textContent = `${mvpSeedFiles.projectRoot} now has ${mvpSeedFiles.totals.seedFiles} full MVP seed files with ${mvpSeedFiles.totals.totalRecords} total records across Promise Clusters, Covenant Paths, Archetypes, and Prayers.`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Seed Layer</p>
      <h3>${mvpSeedFiles.totals.totalRecords} Records</h3>
      <p>${escapeHtml(mvpSeedFiles.description)}</p>
    </article>
    ${mvpSeedFiles.seedFiles
      .map(
        (seed) => `
        <article class="canon-card">
          <p class="eyebrow">${escapeHtml(seed.label)}</p>
          <h3>${seed.count} Records</h3>
          <p>${escapeHtml(seed.path)}</p>
          <div class="sequence-row">${seed.sampleIds
            .map((id) => `<span class="status-pill active">${escapeHtml(id)}</span>`)
            .join("")}</div>
        </article>
      `
      )
      .join("")}
    <article class="canon-card">
      <p class="eyebrow">Integration Targets</p>
      <h3>${mvpSeedFiles.integrationTargets.length} App Areas</h3>
      <div class="sequence-row">${mvpSeedFiles.integrationTargets
        .map((target) => `<span class="scripture-pill">${escapeHtml(target)}</span>`)
        .join("")}</div>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Seed File Manifest</p>
      <h3>Database-ready MVP Data</h3>
      ${mvpSeedFiles.seedFiles
        .map(
          (seed) => `
          <div>
            <p><b>${escapeHtml(seed.path)}</b> ${escapeHtml(seed.purpose)}</p>
            <p>${seed.count} records keyed by ${escapeHtml(seed.primaryKey)}.</p>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Next Steps</p>
      <h3>Data Integration Plan</h3>
      <div class="sequence-row">${mvpSeedFiles.nextSteps
        .map((step) => `<span class="status-pill active">${escapeHtml(step)}</span>`)
        .join("")}</div>
    </article>
  `;
}

function renderMvpUiPages() {
  const grid = $("#pagesGrid");
  const details = $("#pagesDetails");
  if (!grid || !details || !mvpUiPages) return;

  $("#pagesSummary").textContent = `${mvpUiPages.projectRoot} now has ${mvpUiPages.totals.totalStarterPages} starter pages, including ${mvpUiPages.totals.newOrUpdatedPages} Phase 4F MVP UI pages.`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">UI Layer</p>
      <h3>${mvpUiPages.totals.totalStarterPages} Starter Pages</h3>
      <p>${escapeHtml(mvpUiPages.description)}</p>
    </article>
    ${mvpUiPages.pages
      .map(
        (page) => `
        <article class="canon-card">
          <p class="eyebrow">${escapeHtml(page.route)}</p>
          <h3>${escapeHtml(page.name)}</h3>
          <p>${escapeHtml(page.purpose)}</p>
          <div class="sequence-row">${page.dataSources
            .map((source) => `<span class="scripture-pill">${escapeHtml(source)}</span>`)
            .join("")}</div>
        </article>
      `
      )
      .join("")}
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Page Manifest</p>
      <h3>Static View / Future Route Manifest</h3>
      ${mvpUiPages.pages
        .map(
          (page) => `
          <div>
            <p><b>${escapeHtml(page.path)}</b></p>
            <p>${escapeHtml(page.route)} - ${escapeHtml(page.purpose)}</p>
          </div>
        `
        )
        .join("")}
    </article>
    <article class="canon-card">
      <p class="eyebrow">Next Steps</p>
      <h3>UI Integration Plan</h3>
      <div class="sequence-row">${mvpUiPages.nextSteps
        .map((step) => `<span class="status-pill active">${escapeHtml(step)}</span>`)
        .join("")}</div>
    </article>
  `;
}

function renderMvpBrandIdentity() {
  const grid = $("#brandGrid");
  const details = $("#brandDetails");
  if (!grid || !details || !mvpBrandIdentity) return;

  const brand = mvpBrandIdentity.brandIdentity;
  $("#brandSummary").textContent = `${brand.brandName}: ${brand.tagline}`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Brand</p>
      <h3>${escapeHtml(brand.brandName)}</h3>
      <p>${escapeHtml(brand.tagline)}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Tone</p>
      <h3>${escapeHtml(brand.tone)}</h3>
      <p>${escapeHtml(brand.visualStyle)}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Palette</p>
      <h3>${Object.keys(mvpBrandIdentity.colorPalette).length} Tokens</h3>
      <div class="sequence-row">${Object.values(mvpBrandIdentity.colorPalette)
        .map((color) => `<span class="scripture-pill">${escapeHtml(color)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Global Styles</p>
      <h3>${escapeHtml(mvpBrandIdentity.globalStyles.file)}</h3>
      <div class="sequence-row">${mvpBrandIdentity.globalStyles.features
        .map((feature) => `<span class="status-pill active">${escapeHtml(feature)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Components</p>
      <h3>${mvpBrandIdentity.components.length} Brand Components</h3>
      <div class="sequence-row">${mvpBrandIdentity.components
        .map((component) => `<span class="scripture-pill">${escapeHtml(component.name)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Direction</p>
      <h3>${mvpBrandIdentity.directionWords.length} Feel Words</h3>
      <div class="sequence-row">${mvpBrandIdentity.directionWords
        .map((word) => `<span class="status-pill active">${escapeHtml(word)}</span>`)
        .join("")}</div>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Branded Pages</p>
      <h3>${mvpBrandIdentity.brandedPages.length} MVP Surfaces</h3>
      <div class="sequence-row">${mvpBrandIdentity.brandedPages
        .map((page) => `<span class="scripture-pill">${escapeHtml(page)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Component Manifest</p>
      <h3>Reusable UI System</h3>
      ${mvpBrandIdentity.components
        .map(
          (component) => `
          <div>
            <p><b>${escapeHtml(component.path)}</b></p>
            <p>${escapeHtml(component.purpose)}</p>
          </div>
        `
        )
        .join("")}
    </article>
  `;
}

function renderMvpLaunchPlan() {
  const grid = $("#launchGrid");
  const details = $("#launchDetails");
  if (!grid || !details || !mvpLaunchPlan) return;

  $("#launchSummary").textContent = `${mvpLaunchPlan.checklist.length} checklist items and ${mvpLaunchPlan.launchOrder.length} launch stages from Static MVP to Growth System.`;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Checklist</p>
      <h3>${mvpLaunchPlan.checklist.length} Build Items</h3>
      <p>${mvpLaunchPlan.status.completedNow.length} completed or scaffolded now. ${mvpLaunchPlan.status.pendingLater.length} reserved for later launches.</p>
    </article>
    ${mvpLaunchPlan.launchOrder
      .map(
        (launch) => `
        <article class="canon-card">
          <p class="eyebrow">${escapeHtml(launch.launch)}</p>
          <h3>${escapeHtml(launch.name)}</h3>
          <div class="sequence-row">${launch.features
            .map((feature) => `<span class="status-pill active">${escapeHtml(feature)}</span>`)
            .join("")}</div>
        </article>
      `
      )
      .join("")}
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Completed Now</p>
      <h3>Current Build State</h3>
      <div class="sequence-row">${mvpLaunchPlan.status.completedNow
        .map((item) => `<span class="status-pill active">${escapeHtml(item)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Pending Later</p>
      <h3>Launch 2 and Beyond</h3>
      <div class="sequence-row">${mvpLaunchPlan.status.pendingLater
        .map((item) => `<span class="scripture-pill">${escapeHtml(item)}</span>`)
        .join("")}</div>
    </article>
  `;
}

function renderLaunch1StaticMvpPackage() {
  const grid = $("#launch1Grid");
  const details = $("#launch1Details");
  if (!grid || !details || !launch1StaticMvpPackage) return;

  $("#launch1Summary").textContent = launch1StaticMvpPackage.goal;

  grid.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Launch 1</p>
      <h3>${escapeHtml(launch1StaticMvpPackage.projectRoot)}</h3>
      <p>${escapeHtml(launch1StaticMvpPackage.goal)}</p>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Pages</p>
      <h3>${launch1StaticMvpPackage.pages.length} Static Pages</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.pages
        .map((page) => `<span class="scripture-pill">${escapeHtml(page.replace(`${launch1StaticMvpPackage.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Components</p>
      <h3>${launch1StaticMvpPackage.components.length} Shared Components</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.components
        .map((component) => `<span class="status-pill active">${escapeHtml(component.replace(`${launch1StaticMvpPackage.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Data Files</p>
      <h3>${launch1StaticMvpPackage.dataFiles.length} Static Seeds</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.dataFiles
        .map((file) => `<span class="scripture-pill">${escapeHtml(file.replace(`${launch1StaticMvpPackage.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Brand Styling</p>
      <h3>${launch1StaticMvpPackage.stylingFiles.length} Styling Files</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.stylingFiles
        .map((file) => `<span class="status-pill active">${escapeHtml(file.replace(`${launch1StaticMvpPackage.projectRoot}/`, ""))}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Status</p>
      <h3>${launch1StaticMvpPackage.status.staticPackageCreated ? "Static Package Created" : "Pending"}</h3>
      <p>Dependencies installed: ${launch1StaticMvpPackage.status.dependenciesInstalled ? "yes" : "no"}. Future build dry run: ${launch1StaticMvpPackage.status.nextBuildRun ? "yes" : "no"}.</p>
    </article>
  `;

  details.innerHTML = `
    <article class="canon-card">
      <p class="eyebrow">Completion Standard</p>
      <h3>Launch 1 Done Means</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.completionStandard
        .map((item) => `<span class="status-pill active">${escapeHtml(item)}</span>`)
        .join("")}</div>
    </article>
    <article class="canon-card">
      <p class="eyebrow">Included Features</p>
      <h3>Static MVP Scope</h3>
      <div class="sequence-row">${launch1StaticMvpPackage.includes
        .map((item) => `<span class="scripture-pill">${escapeHtml(item)}</span>`)
        .join("")}</div>
    </article>
  `;
}

function renderCompassVideos() {
  const player = $("#compassVideoPlayer");
  const list = $("#compassVideoList");
  const status = $("#compassVideoStatus");
  if (!player || !list || !status) return;
  const durations = ["24:35", "30:12", "21:47", "28:16", "26:08", "19:45", "22:15", "20:15", "18:40", "32:01", "27:33", "16:52"];
  compassVideos = getTeoyubeWorldChannelVideos(compassVideos);

  if (!compassVideos.length) {
    list.innerHTML = `
      <div class="compass-playlist-empty">
        <strong>Local TeoyubeWorld previews unavailable</strong>
        <span>Reviewed external video sources are not connected in this preview.</span>
      </div>
    `;
    if (!selectedCompassVideo) {
      player.innerHTML = `
        <div class="calling-player-empty">
          <span aria-hidden="true"></span>
          <h4>TeoyubeWorld Compass</h4>
          <p>Select a local preview. Reviewed external embeds are not connected in this build.</p>
        </div>
      `;
    }
    return;
  }

  if (!selectedCompassVideo?.id || !compassVideos.some((video) => video.id === selectedCompassVideo.id)) {
    selectedCompassVideo = compassVideos[0];
  }
  const selectedIndex = Math.max(0, compassVideos.findIndex((video) => video.id === selectedCompassVideo.id));
  const selectedDuration = durations[selectedIndex % durations.length];

  if (selectedCompassVideo.id) {
    const selectedThumbnail = getLocalMediaThumbnail(selectedCompassVideo, selectedIndex);
    player.innerHTML = `
      <div class="compass-player-shell">
        <div class="compass-player-topbar">
          <span>
            <strong>${escapeHtml(selectedCompassVideo.title || "The Seed of Promise")}</strong>
            <small>${escapeHtml(selectedCompassVideo.channelTitle || "TeoyubeWorld")}</small>
          </span>
          <span class="compass-player-actions">Save&nbsp;&nbsp; Share&nbsp;&nbsp; ...</span>
        </div>
        <div class="compass-video-frame">
          <img src="${escapeHtml(selectedThumbnail)}" alt="" loading="lazy" />
          <div class="local-media-disabled-copy">
            <strong>Preview Only</strong>
            <small>${escapeHtml(LOCAL_MEDIA_SOURCE_NOTICE)}</small>
          </div>
          <button class="compass-embed-play-overlay" type="button" data-video-id="${escapeHtml(selectedCompassVideo.id)}" aria-label="Play ${escapeHtml(selectedCompassVideo.title || "featured video")}">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="compass-player-controls" aria-label="Featured video navigation">
          <button type="button" data-compass-video-nav="previous">Previous</button>
          <button type="button" data-compass-video-nav="next">Next</button>
        </div>
      </div>
      <div class="compass-featured-meta">
        <h4>${escapeHtml(selectedCompassVideo.title || "The Seed of Promise")}</h4>
        <p>${escapeHtml(selectedCompassVideo.description || "Discover how the promise given to Abraham is the foundation of our calling in Christ.")}</p>
        <div class="compass-featured-row">
          <span>${escapeHtml(selectedCompassVideo.channelTitle || "TeoyubeWorld")}</span>
          <span>128K views</span>
          <span>2 days ago</span>
          <span>Promise</span>
          <span>Scripture</span>
          <span>Calling</span>
          <span>${escapeHtml(selectedDuration)}</span>
        </div>
      </div>
    `;
  } else {
    player.innerHTML = `
      <div class="calling-player-empty">
        <span aria-hidden="true"></span>
        <h4>${escapeHtml(selectedCompassVideo.title)}</h4>
        <p>${escapeHtml(selectedCompassVideo.description)}</p>
      </div>
    `;
  }

  list.innerHTML = compassVideos
    .slice(0, 12)
    .map(
      (video, index) => `
      <button class="compass-video-item ${selectedCompassVideo?.id === video.id ? "active" : ""}" type="button" data-index="${index}">
        ${
          video.thumbnail
            ? `<img alt="" src="${escapeHtml(video.thumbnail)}" />`
            : `<span class="compass-video-thumb">T</span>`
        }
        <b>${escapeHtml(durations[index % durations.length])}</b>
        <span>
          <strong>${escapeHtml(video.title || `TeoyubeWorld Video ${index + 1}`)}</strong>
          <small>${escapeHtml(video.channelTitle || "TeoyubeWorld")}</small>
        </span>
        <em aria-hidden="true">...</em>
      </button>
    `
    )
    .join("") + `<button class="compass-playlist-link" type="button">View Full Playlist <span aria-hidden="true">-&gt;</span></button>`;
}

function renderPromiseMoviePanel() {
  const result = $("#promiseMovieResult");
  const status = $("#promiseMovieStatus");
  if (!result || !status) return;

  status.textContent = promiseMovieStatus;
  const videos = getTodayYoutubeFeedVideos();
  const selectedVideoIsAvailable = videos.some((video) => video.id === selectedTodayYoutubeVideo?.id);
  const video = (selectedVideoIsAvailable ? selectedTodayYoutubeVideo : videos[selectedTodayYoutubeVideoIndex]) || videos[0];
  const thumbnail = getLocalMediaThumbnail(video, selectedTodayYoutubeVideoIndex);

  result.innerHTML = `
    <p class="eyebrow">TeoyubeWorld Video Highlight</p>
    <div class="promise-movie-detail">
      <div class="promise-video-thumbnail" aria-label="${escapeHtml(video.title)} local media preview">
        <img alt="${escapeHtml(video.title)}" src="${escapeHtml(thumbnail)}" />
        <span class="promise-video-play" aria-hidden="true">▶</span>
      </div>
      <div class="promise-video-copy">
        <h3>${escapeHtml(video.title)}</h3>
        <span class="position-badge success">${escapeHtml(video.channelTitle || "TeoyubeWorld")}</span>
        <p>${escapeHtml(video.description || "TeoyubeWorld promise video")}</p>
        <p class="local-media-note">${escapeHtml(LOCAL_MEDIA_SOURCE_NOTICE)}</p>
        <div class="promise-video-actions">
          <button class="secondary watch-now-button" type="button" data-local-media-title="${escapeHtml(video.title)}">Preview Source Status</button>
          <div class="promise-video-nav" aria-label="TeoyubeWorld video navigation">
            <button class="promise-video-nav-button" type="button" data-today-video-nav="previous">Previous</button>
            <button class="promise-video-nav-button" type="button" data-today-video-nav="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (video.id) {
    const mediaTarget = result.querySelector(".promise-video-thumbnail");
    if (mediaTarget) {
      mediaTarget.outerHTML = `
        <div class="promise-video-thumbnail promise-youtube-frame">
          <iframe
            title="${escapeHtml(video.title)}"
            srcdoc="<p>Video source not connected yet.</p>"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <button class="promise-embed-play-overlay" type="button" data-video-id="${escapeHtml(video.id)}" aria-label="Play ${escapeHtml(video.title)}">
            <span>▶</span>
          </button>
        </div>
      `;
    }
  }
}

function getFeaturedStoryImage(video, index) {
  const meta = featuredStoryMeta[index % featuredStoryMeta.length];
  return getLocalMediaThumbnail(video, index) || meta.image;
}

function getFeaturedStories() {
  const videos = getTodayYoutubeFeedVideos();
  return videos.slice(0, 8).map((video, index) => {
    const meta = featuredStoryMeta[index % featuredStoryMeta.length];
    const description =
      video.description && !/^TeoyubeWorld video from/i.test(video.description)
        ? video.description
        : meta.description;

    return {
      index,
      category: meta.category,
      source: video.channelTitle || "TeoyubeWorld",
      time: video.date || meta.time,
      title: video.title || "The Seed of Promise",
      description,
      image: getFeaturedStoryImage(video, index),
      cta: meta.cta,
      secondaryCta: "View in Feed",
      videoId: video.id || ""
    };
  });
}

function getFeaturedStoryActivePosition(stories) {
  if (!stories.length) return 0;
  const activePosition = stories.findIndex((story) => story.index === selectedTodayYoutubeVideoIndex);
  if (activePosition >= 0) return activePosition;
  return ((selectedTodayYoutubeVideoIndex % stories.length) + stories.length) % stories.length;
}

function renderFeaturedStoryCarousel() {
  const target = $("#featuredStoryCarousel");
  if (!target) return;

  const stories = getFeaturedStories();
  if (!stories.length) {
    target.innerHTML = `
      <div class="featured-story-empty">
        <strong>Waiting for TeoyubeWorld stories</strong>
        <span>Search TeoyubeWorld to load featured videos, teachings, devotionals, and articles.</span>
      </div>
    `;
    return;
  }

  const activePosition = getFeaturedStoryActivePosition(stories);

  target.innerHTML = `
    <div class="featured-story-stage">
      ${stories
        .map((story, position) => {
          const active = position === activePosition;
          const watchHref = "#promiseMovieResult";
          return `
            <article
              class="featured-story-slide ${active ? "active" : ""}"
              aria-hidden="${active ? "false" : "true"}"
              style="--featured-image: url('${escapeHtml(story.image)}')"
            >
              <div class="featured-story-copy">
                <div class="featured-story-meta">
                  <span>${escapeHtml(story.category)}</span>
                  <span>${escapeHtml(story.source)}</span>
                  <time>${escapeHtml(story.time)}</time>
                </div>
                <h3>${escapeHtml(story.title)}</h3>
                <p>${escapeHtml(story.description)}</p>
                <div class="featured-story-actions">
                  <a class="primary featured-story-cta" href="${escapeHtml(watchHref)}" target="${story.videoId ? "_blank" : "_self"}" rel="noreferrer noopener">
                    ${escapeHtml(story.cta)} <span aria-hidden="true">&rarr;</span>
                  </a>
                  <button class="secondary featured-story-select" type="button" data-featured-story-index="${story.index}">
                    ${escapeHtml(story.secondaryCta)}
                  </button>
                </div>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="featured-story-controls" aria-label="Featured story carousel controls">
      <button class="featured-story-arrow" id="featuredStoryPrev" type="button" aria-label="Previous featured story">&larr;</button>
      <div class="featured-story-dots">
        ${stories
          .map(
            (story, position) => `
              <button
                class="${position === activePosition ? "active" : ""}"
                type="button"
                data-featured-story-index="${story.index}"
                aria-current="${position === activePosition ? "true" : "false"}"
                aria-label="Show ${escapeHtml(story.title)}"
              ></button>
            `
          )
          .join("")}
      </div>
      <button class="featured-story-arrow" id="featuredStoryNext" type="button" aria-label="Next featured story">&rarr;</button>
    </div>
  `;
}

function goToFeaturedStory(index) {
  const videos = getTodayYoutubeFeedVideos();
  if (!videos.length) return;

  selectedTodayYoutubeVideoIndex = (index + videos.length) % videos.length;
  selectedTodayYoutubeVideo = videos[selectedTodayYoutubeVideoIndex] || videos[0] || null;
  renderFeaturedStoryCarousel();
  renderPromiseMoviePanel();
  renderClientsPromiseTable();
}

function startFeaturedStoryCarousel() {
  clearInterval(featuredStoryTimer);
  featuredStoryTimer = setInterval(() => {
    if (featuredStoryPaused || document.body.dataset.view !== "today") return;
    goToFeaturedStory(selectedTodayYoutubeVideoIndex + 1);
  }, 7000);
}

function getTodayYoutubeFeedVideos() {
  return getTeoyubeWorldChannelVideos(todayYoutubeVideos).map((video, index) => ({
    ...video,
    title:
      [
        "The Seed of Promise",
        "Walk in Divine Purpose",
        "Faith That Moves Mountains",
        "The Power of Prayer",
        "Grace for Every Season",
        "Kingdom Calling",
        "Promise Language",
        "Daily Divine Assignment"
      ][index] || video.title,
    date:
      [
        "May 12, 2025",
        "May 11, 2025",
        "May 10, 2025",
        "May 09, 2025",
        "May 08, 2025",
        "May 07, 2025",
        "May 06, 2025",
        "May 05, 2025"
      ][index] || ""
  }));
}

function getPromiseTableChannelVideos() {
  return getTeoyubeWorldChannelVideos(promiseTableYoutubeVideos, todayYoutubeVideos);
}

function renderClientsPromiseTable() {
  const target = $("#clientsPromiseRows");
  if (!target) return;

  const videos = getTodayYoutubeFeedVideos();

  target.innerHTML = videos
    .map(
      (video, index) => `
      <tr class="${selectedTodayYoutubeVideoIndex === index ? "active-video-row" : ""}" data-today-video-index="${index}">
        <td>${String(index + 1).padStart(2, "0")}</td>
        <td>
          <div class="feed-video-title">
            <img src="${escapeHtml(video.thumbnail || "public/images/teoyube-carousel-9-wide.png")}" alt="" />
            <span>${escapeHtml(video.title)}</span>
          </div>
        </td>
        <td>${escapeHtml(video.description || "TeoyubeWorld video")}</td>
        <td>
          <button class="video-button today-video-select" type="button" data-today-video-index="${index}" aria-label="Play ${escapeHtml(video.title)}">Play</button>
        </td>
        <td><span class="position-badge success">${escapeHtml(video.channelTitle || "TeoyubeWorld")}</span></td>
        <td>${escapeHtml(video.date || "May 12, 2025")}</td>
      </tr>
    `
    )
    .join("");
  return;

  target.innerHTML = clientsPromiseRows
    .map(
      (row, index) => `
      <tr>
        <td><span class="client-avatar" style="--avatar-hue: ${(index * 29) % 360}"></span></td>
        <td>${escapeHtml(row.name)}</td>
        <td>${escapeHtml(row.description)}</td>
        <td>
          ${
            row.video
              ? `<a class="video-button" href="${escapeHtml(row.video)}" target="_blank" rel="noreferrer noopener" aria-label="Watch ${escapeHtml(row.name)} video">▻</a>`
              : `<button class="video-button" type="button" aria-label="Video placeholder">▻</button>`
          }
        </td>
        <td><span class="position-badge ${escapeHtml(row.tone)}">${escapeHtml(row.position)}</span></td>
      </tr>
    `
    )
    .join("");
}

function getExpandedPromiseSearchSeeds() {
  const sourceSeeds = backendPromiseSeeds.length ? backendPromiseSeeds : promiseSearchSeeds;
  return Array.from({ length: 8 }, (_, cycleIndex) =>
    sourceSeeds.map((item, itemIndex) => ({
      ...item,
      description: Array.isArray(item.description) ? item.description.join("") : item.description,
      title: cycleIndex === 0 ? item.title : `${item.title} ${cycleIndex + 1}`,
      thumbnail: localMediaThumbnails[(cycleIndex * sourceSeeds.length + itemIndex) % localMediaThumbnails.length]
    }))
  ).flat();
}

function getFilteredPromiseSearchSeeds() {
  const query = normalize(promiseTableQuery);
  const expandedSeeds = getExpandedPromiseSearchSeeds();

  if (!query) return expandedSeeds;
  return expandedSeeds.filter((item) => normalize(`${item.title} ${item.description}`).includes(query));
}

function getTeoyubeTableCategory(index) {
  return ["Promise", "Scripture", "Promise", "Video", "Audio"][index % 5];
}

function getFilteredTeoyubeTableRows() {
  const query = normalize(teoyubeTableSearchQuery);
  let rows = getExpandedPromiseSearchSeeds().map((row, index) => ({
    ...row,
    tableIndex: index,
    tableCategory: getTeoyubeTableCategory(index)
  }));

  if (teoyubeTableCategoryFilter !== "All Categories") {
    rows = rows.filter((row) => row.tableCategory === teoyubeTableCategoryFilter);
  }

  if (query) {
    rows = rows.filter((row) =>
      normalize(`${row.title} ${row.description} ${getPromisePosition(row.description)} ${row.tableCategory}`).includes(query)
    );
  }

  if (teoyubeTableSortMode === "Sort by: Name") {
    rows = rows.sort((a, b) => a.title.localeCompare(b.title));
  } else if (teoyubeTableSortMode === "Sort by: Latest") {
    rows = rows.sort((a, b) => b.tableIndex - a.tableIndex);
  } else {
    rows = rows.sort((a, b) => getPromisePosition(a.description).localeCompare(getPromisePosition(b.description)));
  }

  return rows;
}

function renderTeoyubeTableStats(totalRows, videos) {
  const target = $("#teoyubeTableStats");
  if (!target) return;

  const stats = [
    ["Total Tables", totalRows, "Structured entries", "tables"],
    ["Total Verses", "1.2K", "Scripture references", "verses"],
    ["Audio Items", 342, "Ready to hear", "audio"],
    ["Video Items", Math.max(videos.length, 278), "TeoyubeWorld media", "video"],
    ["Last Updated", "Today", "Live table view", "updated"]
  ];

  target.innerHTML = stats
    .map(
      ([label, value, trend, icon]) => `
        <article class="tables-stat-card">
          <span class="tables-stat-icon ${escapeHtml(icon)}" aria-hidden="true"></span>
          <div>
            <p>${escapeHtml(label)}</p>
            <strong>${escapeHtml(String(value))}</strong>
            <small>${escapeHtml(trend)}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTeoyubeTableFooter(filteredCount) {
  const status = $("#teoyubeTableEntryStatus");
  const pagination = $("#teoyubeTablePagination");
  const totalPages = Math.max(1, Math.ceil(filteredCount / teoyubeTablePageSize));
  teoyubeTablePage = Math.min(teoyubeTablePage, totalPages);
  const start = filteredCount ? (teoyubeTablePage - 1) * teoyubeTablePageSize + 1 : 0;
  const end = Math.min(teoyubeTablePage * teoyubeTablePageSize, filteredCount);

  if (status) {
    status.textContent = `Showing ${start} to ${end} of ${filteredCount} entries`;
  }

  if (!pagination) return;

  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1);
  const pageButtons = pages
    .map(
      (page) =>
        `<button class="${page === teoyubeTablePage ? "active" : ""}" type="button" data-table-page="${page}" aria-label="Go to page ${page}">${page}</button>`
    )
    .join("");
  const finalPage =
    totalPages > 5
      ? `<button type="button" class="table-page-ellipsis" aria-hidden="true" tabindex="-1">...</button><button class="${totalPages === teoyubeTablePage ? "active" : ""}" type="button" data-table-page="${totalPages}" aria-label="Go to page ${totalPages}">${totalPages}</button>`
      : "";

  pagination.innerHTML = `
    <button type="button" data-table-page="${Math.max(1, teoyubeTablePage - 1)}" aria-label="Previous page">&lt;</button>
    ${pageButtons}
    ${finalPage}
    <button type="button" data-table-page="${Math.min(totalPages, teoyubeTablePage + 1)}" aria-label="Next page">&gt;</button>
  `;
}

function renderPromiseTableSearchFeed() {
  const results = $("#promiseTableSearchResults");
  const player = $("#promiseTableVideoPanel");
  if (!results || !player) return;

  const filtered = getFilteredPromiseSearchSeeds();
  const videos = getPromiseTableChannelVideos();
  const selectedVideoIsAvailable = videos.some((video) => video.id === selectedPromiseTableVideo?.id);
  if ((!selectedPromiseTableVideo?.id || !selectedVideoIsAvailable) && videos.length) {
    selectedPromiseTableVideo = videos[0];
  }

  if (selectedPromiseTableVideo?.id) {
    const selectedVideoIndex = Math.max(0, videos.findIndex((video) => video.id === selectedPromiseTableVideo.id));
    const displayVideos = videos.length ? videos : [selectedPromiseTableVideo];
    const displayIndex = Math.min(selectedVideoIndex, Math.max(displayVideos.length - 1, 0));
    const durations = ["21:09", "16:09", "24:35", "30:12", "18:40", "27:33"];
    const viewCounts = ["1.2K views", "890 views", "1.6K views", "720 views", "1.1K views", "680 views"];
    const ages = ["2 days ago", "5 days ago", "1 week ago", "Today", "Featured", "This week"];
    const duration = durations[displayIndex % durations.length];
    const views = viewCounts[displayIndex % viewCounts.length];
    const age = ages[displayIndex % ages.length];
    const dots = displayVideos.slice(0, Math.min(6, displayVideos.length));
    const fallbackTitles = [
      "The Seed of Promise",
      "Walk in Divine Purpose",
      "Faith That Moves Mountains",
      "The Power of Prayer",
      "Grace for Every Season",
      "Kingdom Calling"
    ];
    const fallbackDescriptions = [
      "A divine reminder that every promise from God is a seed planted in faith. Nurture it with His Word and watch it blossom in His timing.",
      "A guided TeoyubeWorld teaching for taking the next faithful step with clarity, courage, and purpose.",
      "A Scripture-rooted video reflection on faith, calling, and the promises that move a Saint forward.",
      "A quiet invitation into prayer, peace, and renewed trust in God's timing.",
      "A hope-filled reminder that grace meets every season with strength for today.",
      "A kingdom-centered reflection on calling, assignment, and faithful obedience."
    ];
    const displayTitle =
      selectedPromiseTableVideo.title && !/^TeoyubeWorld Video \d+$/i.test(selectedPromiseTableVideo.title)
        ? selectedPromiseTableVideo.title
        : fallbackTitles[displayIndex % fallbackTitles.length];
    const displayDescription =
      selectedPromiseTableVideo.description && selectedPromiseTableVideo.description !== "TeoyubeWorld video from the Calling Compass media hub."
        ? selectedPromiseTableVideo.description
        : fallbackDescriptions[displayIndex % fallbackDescriptions.length];

    player.innerHTML = `
      <div class="promise-table-featured-shell">
        <div class="promise-table-featured-copy">
          <span class="promise-table-featured-badge">Featured Video</span>
          <h3>${escapeHtml(displayTitle)}</h3>
          <p class="promise-table-featured-meta">
            <span>${escapeHtml(selectedPromiseTableVideo.channelTitle || "TeoyubeWorld")}</span>
            <span>${escapeHtml(duration)}</span>
            <span>${escapeHtml(views)}</span>
            <span>${escapeHtml(age)}</span>
          </p>
          <p class="promise-table-featured-description">${escapeHtml(displayDescription)}</p>
          <div class="promise-table-featured-actions">
            <button class="promise-table-watch-now" type="button" data-promise-table-play="${escapeHtml(selectedPromiseTableVideo.id)}">Watch Now</button>
            <button class="promise-table-next-video" type="button" data-promise-table-video-nav="next">Next Video</button>
          </div>
        </div>

        <div class="promise-table-featured-stage">
          <div class="promise-table-video-frame">
            <iframe
              title="${escapeHtml(displayTitle)}"
              srcdoc="<p>Video source not connected yet.</p>"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="promise-table-video-artwork" aria-hidden="true">
              <span class="promise-table-video-artwork-label">Teaching</span>
            </div>
            <button class="promise-table-embed-play-overlay" type="button" data-video-id="${escapeHtml(selectedPromiseTableVideo.id)}" aria-label="Play ${escapeHtml(displayTitle)}">
              <span aria-hidden="true"></span>
            </button>
          </div>
        </div>

        <div class="promise-table-featured-nav" aria-label="Promise Table featured video navigation">
          <button type="button" data-promise-table-video-nav="previous" aria-label="Previous Promise Table video">Previous</button>
          <div class="promise-table-featured-dots">
            ${dots
              .map(
                (video, index) => `
                  <button class="${index === Math.min(displayIndex, dots.length - 1) ? "active" : ""}" type="button" data-promise-table-video-index="${index}" aria-label="Show ${escapeHtml(video.title || `video ${index + 1}`)}"></button>
                `
              )
              .join("")}
          </div>
          <button type="button" data-promise-table-video-nav="next" aria-label="Next Promise Table video">Next</button>
        </div>
      </div>
    `;
  } else {
    player.innerHTML = `
      <div class="promise-table-video-empty">
        <span aria-hidden="true"></span>
        <h3>TeoyubeWorld Video Feed</h3>
        <p>Select a promise row and click Watch Video to load TeoyubeWorld video content.</p>
      </div>
    `;
  }

  results.innerHTML =
    filtered
      .map((item, index) => {
        const video = videos[index % Math.max(videos.length, 1)];
        return `
          <article class="promise-search-item">
            <div class="scripture-thumbnail" role="img" aria-label="${escapeHtml(item.title)}" style="background-image: url('${escapeHtml(item.thumbnail)}')"></div>
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p><b>Description:</b> ${escapeHtml(item.description)}</p>
              <button class="link-button promise-watch-video" type="button" data-video-index="${index}">
                Watch Video!
              </button>
              ${video ? `<small>TeoyubeWorld match: ${escapeHtml(video.title)}</small>` : `<small>Loading TeoyubeWorld feed...</small>`}
            </div>
          </article>
        `;
      })
      .join("") || `<article class="promise-search-item"><p>No promises match this search yet.</p></article>`;
}

function bringPromiseTableVideoPanelIntoView() {
  const player = $("#promiseTableVideoPanel");
  if (!player) return;
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  player.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
    inline: "nearest"
  });
}

function getPromisePosition(description) {
  const match = description.match(/-([A-Za-z0-9 ]+:\d+)-?$/);
  return match ? `-${match[1]}-` : "-Ephesians 1:18-";
}

function getPromiseDescriptionBody(description) {
  return description.replace(/\s*-[A-Za-z0-9 ]+:\d+-?\s*$/, "").trim();
}

const uiVideoCategoryCycle = ["Teaching", "Message", "Teaching", "Worship", "Documentary", "Short", "Message", "Teaching"];
const uiVideoDurations = ["21:09", "16:09", "1:12", "4:03", "12:45", "0:58", "8:36", "18:20"];
const uiVideoAspectRatios = ["21:9", "16:9", "1:1", "4:3", "16:9", "9:16", "21:9", "16:9"];
const uiVideoAges = ["2 days ago", "5 days ago", "1 week ago", "1 week ago", "2 weeks ago", "3 weeks ago", "1 month ago", "1 month ago"];
const uiVideoViewCounts = ["1.2K", "890", "1.6K", "720", "540", "310", "1.1K", "680"];
const uiVideoFallbackTitles = [
  "The Seed of Promise",
  "The Power of Prayer",
  "Walk in Divine Purpose",
  "The Seed of Promise",
  "Kingdom Wisdom for Today",
  "One Minute of Worship",
  "Promise Language and Calling",
  "Walking in Divine Direction"
];

function getUiVideoCategory(index) {
  return uiVideoCategoryCycle[index % uiVideoCategoryCycle.length];
}

function getUiVideoThumbnail(video) {
  return getLocalMediaThumbnail(video);
}

function getUiVideoTitle(video, index) {
  if (video?.title && !/^TeoyubeWorld Video \d+$/.test(video.title)) return video.title;
  return uiVideoFallbackTitles[index % uiVideoFallbackTitles.length];
}

function getUiVideoDescription(video) {
  return video?.description || "Spirit-filled teaching from the TeoyubeWorld video library.";
}

function getUiVideoTeaser(video) {
  const text = getUiVideoDescription(video).replace(/\s+/g, " ").trim();
  return text.length > 150 ? `${text.slice(0, 147).trim()}...` : text;
}

function getUiFilteredVideos(videos) {
  const search = uiVideoSearchQuery.trim().toLowerCase();
  let prepared = videos.map((video, index) => ({ video, index }));

  if (uiVideoCategoryFilter !== "All Videos" && uiVideoCategoryFilter !== "All Categories") {
    const selected = uiVideoCategoryFilter.replace(/s$/, "").toLowerCase();
    prepared = prepared.filter((item) => getUiVideoCategory(item.index).toLowerCase() === selected);
  }

  if (search) {
    prepared = prepared.filter((item) => {
      const haystack = [
        getUiVideoTitle(item.video, item.index),
        getUiVideoDescription(item.video),
        item.video?.channelTitle || "TeoyubeWorld",
        getUiVideoCategory(item.index)
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(search);
    });
  }

  if (uiVideoSortMode.includes("Most Viewed")) {
    prepared = prepared.sort((a, b) => b.index - a.index);
  } else if (uiVideoSortMode.includes("Shortest")) {
    prepared = prepared.sort((a, b) => uiVideoDurations[a.index % uiVideoDurations.length].length - uiVideoDurations[b.index % uiVideoDurations.length].length);
  }

  return prepared;
}

function renderUiVideoStats(videos) {
  const target = $("#uiVideoStats");
  if (!target) return;

  const totalVideos = optionalMediaStatus.available ? videos.length : 0;
  const statItems = [
    ["Total Videos", totalVideos, optionalMediaStatus.available ? "Published media" : "Awaiting publication", "library"],
    ["Total Views", optionalMediaStatus.available ? "2.4K" : "0", optionalMediaStatus.available ? "+18% this week" : "No published media", "views"],
    ["Watch Time", optionalMediaStatus.available ? "18h 45m" : "0h", optionalMediaStatus.available ? "+23% this week" : "No published media", "time"],
    ["Last Updated", optionalMediaStatus.available ? "Today" : "Not published", optionalMediaStatus.message, "updated"]
  ];

  target.innerHTML = statItems
    .map(
      ([label, value, trend, icon]) => `
        <article class="embedded-stat-card">
          <span class="embedded-stat-icon ${escapeHtml(icon)}" aria-hidden="true"></span>
          <div>
            <p>${escapeHtml(label)}</p>
            <strong>${escapeHtml(String(value))}</strong>
            <small>${escapeHtml(trend)}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderUiElementsVideos() {
  const target = $("#uiVideoGrid");
  if (!target) return;

  const mediaControls = $all(
    "#ui-elements #refreshUiVideos, #ui-elements [data-video-category], #ui-elements select, #ui-elements input, #ui-elements #uiVideoFiltersButton"
  );
  mediaControls.forEach((control) => {
    control.disabled = !optionalMediaStatus.available;
    control.setAttribute("aria-disabled", String(!optionalMediaStatus.available));
  });

  if (!optionalMediaStatus.available) {
    renderUiVideoStats([]);
    const loadMore = $("#uiVideoLoadMore");
    if (loadMore) loadMore.hidden = true;
    target.innerHTML = `<article class="ui-video-empty" role="status">
      <strong>No media has been published yet.</strong>
      <p>The rest of Teoyube remains available while optional TeoyubeWorld media is unpublished.</p>
    </article>`;
    return;
  }

  const sourceVideos = getTeoyubeWorldChannelVideos(uiElementVideos, promiseTableYoutubeVideos, todayYoutubeVideos);
  const filteredVideos = getUiFilteredVideos(sourceVideos);
  const visibleVideos = filteredVideos.slice(0, uiVideoVisibleCount).map((entry, slotIndex) => {
    const selectedPosition = uiVideoCardSelections.get(slotIndex);
    const selectedEntry = Number.isInteger(selectedPosition) ? filteredVideos[selectedPosition] : null;
    return {
      ...(selectedEntry || entry),
      filteredPosition: selectedEntry ? selectedPosition : slotIndex,
      slotIndex
    };
  });
  const loadMore = $("#uiVideoLoadMore");

  renderUiVideoStats(sourceVideos);

  if (loadMore) {
    loadMore.hidden = filteredVideos.length <= uiVideoVisibleCount;
  }

  target.innerHTML = visibleVideos.length
    ? visibleVideos
        .map(({ video, index, filteredPosition, slotIndex }) => {
          const title = getUiVideoTitle(video, index);
          const category = getUiVideoCategory(index);
          const aspect = uiVideoAspectRatios[index % uiVideoAspectRatios.length];
          const duration = uiVideoDurations[index % uiVideoDurations.length];
          const views = uiVideoViewCounts[index % uiVideoViewCounts.length];
          const age = uiVideoAges[index % uiVideoAges.length];
          const thumbnail = getUiVideoThumbnail(video);
          const description = getUiVideoTeaser(video);
          const channel = video?.channelTitle || "TeoyubeWorld";
          const videoId = video?.id ? escapeHtml(video.id) : "";
      return `
        <article class="ui-video-card ui-video-feature-card" style="--video-thumb: url('${escapeHtml(thumbnail)}')">
          <div class="ui-video-card-glow" aria-hidden="true"></div>
          <div class="ui-video-copy">
            <span class="ui-video-badge">${escapeHtml(category)}</span>
            <h4>${escapeHtml(title)}</h4>
            <p class="ui-video-meta">
              <span class="channel">${escapeHtml(channel)}</span>
              <span>${escapeHtml(aspect)} Aspect Ratio</span>
              <span>${escapeHtml(views)} views</span>
              <span>${escapeHtml(age)}</span>
            </p>
            <p class="ui-video-description">${escapeHtml(description)}</p>
            <div class="ui-video-actions">
              <button class="ui-video-watch" type="button" data-ui-video-play="${videoId}" ${video?.id ? "" : "disabled"}><span aria-hidden="true"></span>Watch Now</button>
              <button class="ui-video-secondary" type="button" data-local-media-title="${escapeHtml(title)}">Source Status</button>
            </div>
          </div>
          <div class="ui-video-stage">
            <div class="ui-embed-frame" aria-label="${escapeHtml(title)} video player">
              <span class="ui-video-source">${escapeHtml(aspect)} Scripture Frame</span>
              <div class="ui-video-artwork" aria-hidden="true"></div>
              ${
                video?.id
                  ? `<iframe
                      title="${escapeHtml(title)}"
                      srcdoc="<p>Video source not connected yet.</p>"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                    <button class="ui-embed-play-overlay" type="button" data-ui-video-play="${videoId}" aria-label="Play ${escapeHtml(title)}">
                      <span aria-hidden="true"></span>
                    </button>`
                  : `<div class="video-loading-state">Loading TeoyubeWorld video...</div>`
              }
              <span class="ui-video-duration">${escapeHtml(duration)}</span>
            </div>
            <div class="ui-video-card-nav" aria-label="${escapeHtml(title)} video navigation">
              <button type="button" data-ui-video-nav="previous" data-ui-video-slot="${slotIndex}" data-ui-video-position="${filteredPosition}" aria-label="Previous TeoyubeWorld video"></button>
              <div class="ui-video-dots" aria-hidden="true">
                ${Array.from({ length: Math.min(4, Math.max(filteredVideos.length, 1)) })
                  .map((_, dotIndex) => `<span class="${dotIndex === filteredPosition % Math.min(4, Math.max(filteredVideos.length, 1)) ? "active" : ""}"></span>`)
                  .join("")}
              </div>
              <button type="button" data-ui-video-nav="next" data-ui-video-slot="${slotIndex}" data-ui-video-position="${filteredPosition}" aria-label="Next TeoyubeWorld video"></button>
            </div>
          </div>
          <button class="ui-video-menu" type="button" aria-label="More options for ${escapeHtml(title)}">...</button>
        </article>
      `;
        })
        .join("")
    : `<article class="ui-video-empty">
        <strong>No videos found</strong>
        <p>Try a different category or search term.</p>
      </article>`;
}

function renderTeoyubeTablesPage() {
  const target = $("#teoyubeTablesRows");
  if (!target) return;

  const videos = getPromiseTableChannelVideos();
  const filteredRows = getFilteredTeoyubeTableRows();
  const totalRows = getExpandedPromiseSearchSeeds().length;
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / teoyubeTablePageSize));
  teoyubeTablePage = Math.min(teoyubeTablePage, totalPages);
  const pageStart = (teoyubeTablePage - 1) * teoyubeTablePageSize;
  const rows = filteredRows.slice(pageStart, pageStart + teoyubeTablePageSize);

  renderTeoyubeTableStats(totalRows, videos);
  renderTeoyubeTableFooter(filteredRows.length);

  target.innerHTML = rows.length
    ? rows
        .map((row) => {
          const index = row.tableIndex;
          const open = expandedTeoyubeTableRows.has(index);
          const video = videos[index % videos.length];
          const videoIndex = videos.length ? index % videos.length : 0;
          const videoTitle = getUiVideoTitle(video, index);
          const videoThumbnail = getUiVideoThumbnail(video);
          const videoDuration = uiVideoDurations[index % uiVideoDurations.length];
          const position = getPromisePosition(row.description);
          const scriptureText = getPromiseDescriptionBody(row.description);
      return `
        <tr class="teoyube-main-row ${open ? "expanded" : ""}">
          <td>
            <button class="table-expand-button" type="button" data-table-row="${index}" aria-expanded="${open}" aria-label="${open ? "Collapse" : "Expand"} ${escapeHtml(row.title)}">
              <span class="table-toggle-icon">${open ? "⌄" : "›"}</span>
            </button>
          </td>
          <td class="table-name-cell">${escapeHtml(row.title)}</td>
          <td><button class="table-icon-button table-video-toggle" type="button" data-table-row="${index}" aria-label="Watch ${escapeHtml(row.title)}">video</button></td>
          <td><span class="table-position-pill">${escapeHtml(position)}</span></td>
          <td>
            <div class="table-audio-control">
              <button class="table-icon-button table-expand-audio" type="button" data-table-row="${index}" aria-label="Play audio for ${escapeHtml(row.title)}">audio</button>
              <span class="table-speaker-icon" aria-hidden="true"></span>
            </div>
          </td>
          <td><span class="table-period-pill">2,300 times</span></td>
          <td><button class="table-icon-button table-video-toggle table-airplay-button" type="button" data-table-row="${index}" aria-label="Open airplay for ${escapeHtml(row.title)}">grid</button></td>
          <td><button class="table-action-button" type="button" aria-label="More options for ${escapeHtml(row.title)}">...</button></td>
        </tr>
        ${
          open
            ? `<tr class="teoyube-detail-row">
                <td colspan="8">
                  <div class="table-detail-content">
                    <div class="table-detail-preview table-preview-video-panel" style="--table-preview-thumb: url('${escapeHtml(videoThumbnail)}')" data-table-video-preview="${video?.id ? escapeHtml(video.id) : ""}" data-table-video-preview-index="${videoIndex}" aria-label="${escapeHtml(videoTitle)} preview video">
                      <div class="table-preview-video-cover" aria-hidden="true"></div>
                      ${
                        video?.id
                          ? `<iframe
                              title="${escapeHtml(videoTitle)} preview"
                              srcdoc="<p>Video source not connected yet.</p>"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                            <button class="table-detail-play table-preview-embed-play-overlay" type="button" data-table-preview-video-play="${escapeHtml(video.id)}" aria-label="Play ${escapeHtml(videoTitle)} in the far-left preview panel">
                              <span aria-hidden="true"></span>
                            </button>`
                          : `<img src="${escapeHtml(videoThumbnail)}" alt="" loading="lazy" />
                            <span class="table-detail-play" aria-hidden="true"></span>`
                      }
                      <span class="table-detail-duration">${escapeHtml(videoDuration)}</span>
                    </div>
                    <div class="table-detail-copy">
                      <p>"${escapeHtml(scriptureText)}"</p>
                      <small>Seed source: scripts/seedDB.js | ${escapeHtml(video?.channelTitle || "TeoyubeWorld")}</small>
                      <div class="table-detail-chips" aria-label="Table row metadata">
                        <span>${escapeHtml(row.tableCategory)}</span>
                        <span>${escapeHtml(position)}</span>
                        <span>Audio Ready</span>
                        <span>Promise Cluster</span>
                      </div>
                    </div>
                    ${
                      video?.id
                        ? `<div class="table-row-video table-row-video-premium" style="--table-video-thumb: url('${escapeHtml(videoThumbnail)}')" data-table-video-current-index="${videoIndex}">
                            <div class="table-row-video-cover" aria-hidden="true"></div>
                            <span class="table-row-video-label">TeoyubeWorld</span>
                            <strong class="table-row-video-title">${escapeHtml(videoTitle)}</strong>
                            <iframe
                              title="${escapeHtml(videoTitle)}"
                              srcdoc="<p>Video source not connected yet.</p>"
                              loading="lazy"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                            <button class="table-row-embed-play-overlay" type="button" data-table-video-play="${escapeHtml(video.id)}" aria-label="Play ${escapeHtml(videoTitle)}">
                              <span aria-hidden="true"></span>
                            </button>
                            <span class="table-row-video-duration">${escapeHtml(videoDuration)}</span>
                            <div class="table-row-video-nav" aria-label="${escapeHtml(videoTitle)} navigation">
                              <button type="button" data-table-video-nav="previous" aria-label="Previous TeoyubeWorld video"></button>
                              <button type="button" data-table-video-nav="next" aria-label="Next TeoyubeWorld video"></button>
                            </div>
                          </div>`
                        : `<div class="table-row-video video-loading-state">Loading TeoyubeWorld video...</div>`
                    }
                  </div>
                </td>
              </tr>`
            : ""
        }
      `;
        })
        .join("")
    : `<tr class="teoyube-empty-row">
        <td colspan="8">
          <strong>No table entries found</strong>
          <p>Try another search term or category.</p>
        </td>
      </tr>`;
}

async function loadPromiseTableYoutubeFeed(query = "TeoyubeWorld") {
  promiseTableYoutubeVideos = searchLocalTeoyubeWorldVideos(query, todayYoutubeVideos, uiElementVideos);
  renderPromiseTableSearchFeed();
  renderUiElementsVideos();
  renderTeoyubeTablesPage();
}

async function loadPromiseSeedData() {
  try {
    const response = await fetch("/api/promises/seed");
    if (!response.ok) throw new Error(`Promise seed API returned ${response.status}`);
    const data = await response.json();
    backendPromiseSeeds = Array.isArray(data.promises) ? data.promises : [];
  } catch (error) {
    const fallback = await loadJsonData("src/data/promiseSeeds.json", { promises: [] });
    backendPromiseSeeds = Array.isArray(fallback?.promises) ? fallback.promises : [];
  }
  renderPromiseTableSearchFeed();
  renderTeoyubeTablesPage();
}

async function loadUiElementsYoutubeFeed(query = "TeoyubeWorld") {
  uiElementVideos = searchLocalTeoyubeWorldVideos(query, promiseTableYoutubeVideos, todayYoutubeVideos);
  uiVideoCardSelections.clear();
  renderUiElementsVideos();
}

async function searchPromiseMovie(query) {
  const term = (query || "").trim() || "TeoyubeWorld";
  promiseMovieStatus = `Searching local TeoyubeWorld previews for "${term}"...`;
  renderPromiseMoviePanel();

  todayYoutubeVideos = searchLocalTeoyubeWorldVideos(term, promiseTableYoutubeVideos, compassVideos, uiElementVideos);
  selectedTodayYoutubeVideoIndex = 0;
  selectedTodayYoutubeVideo = todayYoutubeVideos[0];
  promiseMovieStatus = `Showing ${todayYoutubeVideos.length} local TeoyubeWorld preview${todayYoutubeVideos.length === 1 ? "" : "s"} for "${term}". ${LOCAL_MEDIA_SOURCE_NOTICE}`;

  renderPromiseMoviePanel();
  renderFeaturedStoryCarousel();
  renderClientsPromiseTable();
  renderUiElementsVideos();
}

async function searchCompassVideos(query = "TeoyubeWorld") {
  const status = $("#compassVideoStatus");
  if (status) status.textContent = `Searching local TeoyubeWorld previews for "${query}"...`;

  compassVideos = searchLocalTeoyubeWorldVideos(query, todayYoutubeVideos, promiseTableYoutubeVideos, uiElementVideos);
  selectedCompassVideo = compassVideos[0];
  if (status) {
    status.textContent = `${compassVideos.length} local TeoyubeWorld preview${compassVideos.length === 1 ? "" : "s"} found. ${LOCAL_MEDIA_SOURCE_NOTICE}`;
  }

  renderCompassVideos();
}

function getTestimonyImage(index) {
  const images = [
    "public/images/canon/canon-hero-bg.png",
    "public/images/search/suggested-journey-02.png",
    "public/images/carousel/faith-in-action.png",
    "public/images/search/suggested-journey-01.png",
    "public/images/canon/journey-legacy.png"
  ];
  return images[index % images.length];
}

function getTestimonyStatus(item, index) {
  return item.status || (index % 3 === 1 ? "Private" : index % 3 === 2 ? "Draft" : "Public");
}

function getTestimonyMedia(item, index) {
  const media = item.media || item.attachment || item.thumbnail || item.image || item.video || item.audio;
  if (typeof media === "string") {
    return { type: "image", src: media };
  }
  if (media?.url || media?.src) {
    return {
      type: media.type || "image",
      src: media.url || media.src,
      duration: media.duration || ""
    };
  }
  return {
    type: "image",
    src: getTestimonyImage(index),
    fallback: true
  };
}

function getRelativeTestimonyDate(date) {
  const timestamp = new Date(date || Date.now()).getTime();
  const diff = Math.max(0, Date.now() - timestamp);
  const days = Math.max(1, Math.round(diff / 86400000));
  if (days <= 1) return "today";
  if (days < 7) return `${days} days ago`;
  const weeks = Math.round(days / 7);
  if (weeks <= 1) return "1 week ago";
  if (weeks < 5) return `${weeks} weeks ago`;
  return formatDate(date);
}

function getTestimonyTimingLabel(status, date) {
  const relative = getRelativeTestimonyDate(date);
  if (status === "Draft") return `Draft saved ${relative}`;
  if (status === "Private") return `Saved ${relative}`;
  return `Shared ${relative}`;
}

function getTestimonyStatusIcon(status) {
  if (status === "Private") return "lock";
  if (status === "Draft") return "draft";
  return "public";
}

function isSeededDraftPlaceholder(item) {
  return item.seededDraftPlaceholder || (item.title === "Walking in Faith" && item.status === "Draft");
}

function renderTestimonies() {
  const list = $("#testimonyList");
  if (!list) return;
  const testimonies = state.testimonies.filter((item, index) => {
    const status = getTestimonyStatus(item, index);
    return activeTestimonyFilter === "All" || status === activeTestimonyFilter;
  });
  const showDraftEmptyState =
    activeTestimonyFilter === "Draft" &&
    (!testimonies.length || testimonies.every((item) => isSeededDraftPlaceholder(item)));

  if (showDraftEmptyState) {
    list.innerHTML = `
      <article class="testimony-empty-state testimony-draft-empty-state">
        <span class="testimony-draft-illustration" aria-hidden="true"></span>
        <h4>No testimonies recorded yet.</h4>
        <p>Your story matters. Share how God has moved in your life and encourage someone today.</p>
        <button class="primary" type="button">
          Write Your First Testimony
          <span aria-hidden="true"></span>
        </button>
      </article>`;
    return;
  }

  list.innerHTML =
    testimonies
      .map((item, index) => {
        const category = item.category || item.promise_category || "Faith";
        const originalIndex = state.testimonies.indexOf(item);
        const status = getTestimonyStatus(item, originalIndex);
        const media = getTestimonyMedia(item, originalIndex);
        const references = item.references || [];
        const encouragements = item.encouragements || Math.max(3, 24 - Math.min(originalIndex * 3, 18));
        const views = item.views || Math.max(12, 68 - Math.min(originalIndex * 13, 42));
        const shares = item.shares || Math.max(0, 9 - originalIndex * 2);
        const statusIcon = getTestimonyStatusIcon(status);
        return `
        <article class="testimony-entry testimony-media-card">
          <div class="testimony-thumb testimony-thumb-${escapeHtml(media.type || "image")}">
            ${media.src ? `<img src="${escapeHtml(media.src)}" alt="" loading="lazy" />` : `<span class="testimony-audio-wave" aria-hidden="true"></span>`}
            ${media.type === "video" ? `<span class="testimony-play-icon" aria-hidden="true"></span>` : ""}
            ${media.duration ? `<small class="testimony-duration">${escapeHtml(media.duration)}</small>` : ""}
            <span class="testimony-status-badge" data-status="${escapeHtml(statusIcon)}">${escapeHtml(status)}</span>
          </div>
          <div class="testimony-entry-body">
            <h4>${escapeHtml(item.title)}</h4>
            <div class="testimony-entry-meta">
              <span><b>Category:</b> ${escapeHtml(category)}</span>
              <time datetime="${escapeHtml(item.date || "")}">${escapeHtml(getTestimonyTimingLabel(status, item.date))}</time>
              <span>Updated ${escapeHtml(getRelativeTestimonyDate(item.updatedAt || item.date))}</span>
            </div>
            <p>${escapeHtml(item.content)}</p>
            <div class="scripture-strip">${references
              .map((reference) => `<span class="scripture-pill">${escapeHtml(reference)}</span>`)
              .join("")}</div>
          </div>
          <div class="testimony-entry-stats">
            <span data-metric="encouragements"><b>${encouragements}</b><small>Encouragements</small></span>
            <span data-metric="views"><b>${views}</b><small>Views</small></span>
            <span data-metric="shares"><b>${shares}</b><small>Shares</small></span>
            <button type="button" aria-label="More actions for ${escapeHtml(item.title)}">...</button>
          </div>
        </article>
      `;
      })
      .join("") ||
    `<article class="testimony-empty-state">
      <span aria-hidden="true"></span>
      <h4>No ${activeTestimonyFilter === "All" ? "" : activeTestimonyFilter.toLowerCase()} testimonies recorded yet.</h4>
      <p>Your first story of God's faithfulness can become courage for someone else's next step.</p>
      <button class="primary" type="button">Write Your First Testimony</button>
    </article>`;
}

function renderChat() {
  $("#chatLog").innerHTML = state.chat
    .map((message) => {
      const role = message.role === "user" ? "user" : "teo";
      const label = role === "user" ? "Your message" : "Teo Guide response";
      return `
        <div class="message-row ${escapeHtml(role)}">
          <span class="message-icon" aria-hidden="true"></span>
          <div class="message ${escapeHtml(role)}" aria-label="${label}">${escapeHtml(message.text)}</div>
        </div>
      `;
    })
    .join("");
  $("#chatLog").scrollTop = $("#chatLog").scrollHeight;
}

function emptyState(text) {
  return `<article class="timeline-entry"><p>${text}</p></article>`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(date));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderActionButtonContent(label) {
  const text = String(label || "");
  const icon =
    text === "Generate Today's Journey" || text === "Start Today's Journey"
      ? "journey"
      : text === "Guardrails" || text === "Open Guardrails"
        ? "guardrails"
        : "";
  return icon
    ? `<span class="button-icon button-icon-${icon}" aria-hidden="true"></span><span>${escapeHtml(text)}</span>`
    : escapeHtml(text);
}

function formatSources(sources) {
  return Array.isArray(sources) ? sources.join(", ") : sources || "";
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] || "Other";
    groups[value] = groups[value] || [];
    groups[value].push(item);
    return groups;
  }, {});
}

function getClusterTitle(cluster) {
  return cluster.title || cluster.theme || "Promise Cluster";
}

function getClusterScriptures(cluster) {
  return cluster.scripture_references || cluster.scriptures || [];
}

function getClusterPrayer(cluster) {
  return cluster.prayer_framework || cluster.declaration || "";
}

function getClusterSearchTerms(cluster) {
  return [
    ...(cluster.triggers || []),
    ...(cluster.keywords || []),
    cluster.title,
    cluster.theme,
    cluster.promise_category,
    ...(cluster.scripture_references || []),
    ...(cluster.related_teoyube_words || [])
  ]
    .filter(Boolean)
    .map((term) => normalize(term));
}

async function loadCoreVocabulary() {
  try {
    const response = await fetch("src/data/coreTeoyubeVocabulary.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Vocabulary request failed: ${response.status}`);
    const baseWords = await response.json();
    const part3 = await loadJsonData("src/data/coreTeoyubeVocabulary-part3.json", []);
    coreWords = [...baseWords, ...part3];
    console.log("Core Teoyube vocabulary loaded:", coreWords);
  } catch (error) {
    console.warn("Using fallback core vocabulary.", error);
  }
}

async function loadJsonData(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`${path} request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`Using fallback for ${path}.`, error);
    return fallback;
  }
}

function getRenderedSearchResult(button) {
  const results = JSON.parse($("#teoyubeSearchResults").dataset.results || "[]");
  return results[Number(button.dataset.resultIndex)];
}

function saveSearchResultToBook(result) {
  if (!result) return;
  state.book.unshift({
    type: "TeoyubeSearch Result",
    title: result.title,
    content: `${result.short_explanation} Prayer: ${result.prayer} Assignment: ${result.assignment}`,
    references: result.scripture_references,
    date: new Date().toISOString()
  });
  saveState();
  render();
}

function addSearchResultToPromiseTable(result) {
  if (!result) return;
  state.generatedWord = {
    word: result.teoyube_word,
    pronunciation: result.pronunciation,
    meaning: result.meaning
  };
  state.book.unshift({
    type: "Promise Table Update",
    title: result.title,
    content: `Added from TeoyubeSearch. ${result.calling_connection}`,
    references: result.scripture_references,
    date: new Date().toISOString()
  });
  saveState();
  render();
  setView("table");
}

function hydrateAssessment() {
  const profile = state.profile;
  $("#nameInput").value = profile.name;
  $("#ageInput").value = profile.age;
  $("#giftsInput").value = profile.gifts;
  $("#talentsInput").value = profile.talents;
  $("#passionsInput").value = profile.passions;
  $("#burdensInput").value = profile.burdens;
  $("#challengeInput").value = profile.challenge;
  $("#prayerInput").value = profile.prayer;
}

function wireEvents() {
  $all(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  $all("[data-view-shortcut]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewShortcut));
  });
  $("#openAssessment").addEventListener("click", () => {
    hydrateAssessment();
    $("#assessmentDialog").showModal();
  });
  $("#assessmentForm").addEventListener("submit", saveAssessment);
  $("#generateBtn").addEventListener("click", generateJourney);
  $("#completeAssignment").addEventListener("click", completeAssignment);
  $("#addManualEntry").addEventListener("click", addManualEntry);
  $("#testimonyForm").addEventListener("submit", addTestimony);
  $(".testimony-tabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    activeTestimonyFilter = button.textContent.trim().replace(/s$/, "");
    if (activeTestimonyFilter === "Draft") activeTestimonyFilter = "Draft";
    $all(".testimony-tabs button").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });
    renderTestimonies();
  });
  $("#chatForm").addEventListener("submit", askTeo);
  $("#carouselPrev")?.addEventListener("click", () => goToPromiseSlide(activePromiseSlide - 1));
  $("#carouselNext")?.addEventListener("click", () => goToPromiseSlide(activePromiseSlide + 1));
  $("#promiseCarouselDots")?.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-slide-index]");
    if (!dot) return;
    goToPromiseSlide(Number(dot.dataset.slideIndex));
  });
  $("#todayPromiseCarousel")?.addEventListener("mouseenter", () => {
    promiseCarouselPaused = true;
  });
  $("#todayPromiseCarousel")?.addEventListener("mouseleave", () => {
    promiseCarouselPaused = false;
  });
  $("#todayPromiseCarousel")?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goToPromiseSlide(activePromiseSlide - 1);
    if (event.key === "ArrowRight") goToPromiseSlide(activePromiseSlide + 1);
  });
  $("#todayPromiseCarousel")?.addEventListener("pointerdown", (event) => {
    promiseCarouselDragStart = event.clientX;
  });
  $("#todayPromiseCarousel")?.addEventListener("pointerup", (event) => {
    if (promiseCarouselDragStart === null) return;
    const delta = event.clientX - promiseCarouselDragStart;
    if (Math.abs(delta) > 40) goToPromiseSlide(activePromiseSlide + (delta < 0 ? 1 : -1));
    promiseCarouselDragStart = null;
  });
  $("#adCarouselPrev")?.addEventListener("click", () => goToAdSlide(activeAdSlide - 1));
  $("#adCarouselNext")?.addEventListener("click", () => goToAdSlide(activeAdSlide + 1));
  $("#teoyubeAdDots")?.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-ad-index]");
    if (!dot) return;
    goToAdSlide(Number(dot.dataset.adIndex));
  });
  $("#teoyubeAdCarousel")?.addEventListener("mouseenter", () => {
    adCarouselPaused = true;
  });
  $("#teoyubeAdCarousel")?.addEventListener("mouseleave", () => {
    adCarouselPaused = false;
  });
  $("#teoyubeAdCarousel")?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goToAdSlide(activeAdSlide - 1);
    if (event.key === "ArrowRight") goToAdSlide(activeAdSlide + 1);
  });
  $("#teoyubeAdCarousel")?.addEventListener("pointerdown", (event) => {
    adCarouselDragStart = event.clientX;
  });
  $("#teoyubeAdCarousel")?.addEventListener("pointerup", (event) => {
    if (adCarouselDragStart === null) return;
    const delta = event.clientX - adCarouselDragStart;
    if (Math.abs(delta) > 40) goToAdSlide(activeAdSlide + (delta < 0 ? 1 : -1));
    adCarouselDragStart = null;
  });
  window.addEventListener("resize", centerActiveAdCard);
  $("#prayBtn").addEventListener("click", () => {
    state.chat.push({
      role: "teo",
      text: `Prayer framework: ${getClusterPrayer(promiseClusters[state.clusterIndex])} Let ${state.generatedWord.word} remind you of ${state.generatedWord.meaning}`
    });
    saveState();
    setView("guide");
    renderChat();
  });
  $("#privacyBtn").addEventListener("click", () => $("#guardrailDialog").showModal());
  $("#closeGuardrails").addEventListener("click", () => $("#guardrailDialog").close());
  $all(".prompt-chip").forEach((button) => {
    button.addEventListener("click", () => {
      $("#chatInput").value = button.dataset.prompt;
      $("#chatForm").requestSubmit();
    });
  });
  $("#teoyubeSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderSearchResults(runTeoyubeSearch($("#teoyubeSearchInput").value));
  });
  $("#lexiconSearchInput")?.addEventListener("input", (event) => {
    lexiconSearchQuery = event.target.value || "";
    renderLexicon();
  });
  $("#lexiconCategoryFilter")?.addEventListener("change", (event) => {
    lexiconCategoryFilter = event.target.value || "all";
    renderLexicon();
  });
  $("#lexiconSpeechFilter")?.addEventListener("change", (event) => {
    lexiconSpeechFilter = event.target.value || "all";
    renderLexicon();
  });
  $("#lexiconAlphaTabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lexicon-alpha]");
    if (!button || !event.currentTarget.contains(button)) return;
    event.preventDefault();
    activeLexiconAlpha = button.dataset.lexiconAlpha || "all";
    renderLexicon();
  });
  $("#teoyubeSearchResults").addEventListener("click", (event) => {
    const saveButton = event.target.closest(".search-save-book");
    const addButton = event.target.closest(".search-add-table");
    const prayerButton = event.target.closest(".search-generate-prayer");
    if (saveButton) saveSearchResultToBook(getRenderedSearchResult(saveButton));
    if (addButton) addSearchResultToPromiseTable(getRenderedSearchResult(addButton));
    if (prayerButton) {
      const result = getRenderedSearchResult(prayerButton);
      if (!result) return;
      state.chat.push({ role: "teo", text: result.prayer });
      saveState();
      setView("guide");
      renderChat();
    }
  });
  $("#promiseClusterNavigation").addEventListener("click", (event) => {
    const button = event.target.closest(".cluster-nav-chip");
    if (!button) return;
    $("#teoyubeSearchInput").value = button.dataset.query;
    renderSearchResults(runTeoyubeSearch(button.dataset.query));
  });
  $("#canonTabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-canon-tab]");
    if (!button) return;
    activeCanonTab = button.dataset.canonTab;
    selectedCanonItemId = "";
    activeCanonPage = 1;
    renderCanon();
  });
  $("#canonPagination")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-canon-page]");
    if (!button || button.disabled) return;
    activeCanonPage = Number(button.dataset.canonPage) || 1;
    selectedCanonItemId = "";
    renderCanon();
  });
  $("#canonGrid")?.addEventListener("click", (event) => {
    const featuredNav = event.target.closest("[data-canon-featured-slide-nav]");
    if (featuredNav) {
      event.preventDefault();
      event.stopPropagation();
      const offset = featuredNav.dataset.canonFeaturedSlideNav === "next" ? 1 : -1;
      setCanonFeaturedJourneySlideIndex(selectedCanonFeaturedJourneySlideIndex + offset);
      updateCanonFeaturedJourneyCarouselCard();
      return;
    }

    const featuredDot = event.target.closest("[data-canon-featured-slide-index]");
    if (featuredDot) {
      event.preventDefault();
      event.stopPropagation();
      setCanonFeaturedJourneySlideIndex(Number(featuredDot.dataset.canonFeaturedSlideIndex));
      updateCanonFeaturedJourneyCarouselCard();
      return;
    }

    const card = event.target.closest("[data-canon-item]");
    if (!card) return;
    selectedCanonItemId = card.dataset.canonItem;
    renderCanon();
  });
  $("#canonGrid")?.addEventListener("mouseover", (event) => {
    if (event.target.closest("[data-canon-featured-carousel]")) canonFeaturedJourneyPaused = true;
  });
  $("#canonGrid")?.addEventListener("mouseout", (event) => {
    const carousel = event.target.closest("[data-canon-featured-carousel]");
    if (!carousel || (event.relatedTarget && carousel.contains(event.relatedTarget))) return;
    canonFeaturedJourneyPaused = false;
  });
  $("#canonGrid")?.addEventListener("focusin", (event) => {
    if (event.target.closest("[data-canon-featured-carousel]")) canonFeaturedJourneyPaused = true;
  });
  $("#canonGrid")?.addEventListener("focusout", (event) => {
    const carousel = event.target.closest("[data-canon-featured-carousel]");
    if (!carousel || (event.relatedTarget && carousel.contains(event.relatedTarget))) return;
    canonFeaturedJourneyPaused = false;
  });
  $("#canonGrid")?.addEventListener("keydown", (event) => {
    if (!event.target.closest("[data-canon-featured-carousel]")) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    setCanonFeaturedJourneySlideIndex(selectedCanonFeaturedJourneySlideIndex + offset);
    updateCanonFeaturedJourneyCarouselCard();
  });
  $("#canonGrid")?.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("[data-canon-featured-carousel]")) return;
    canonFeaturedJourneyDragStart = event.clientX;
  });
  $("#canonGrid")?.addEventListener("pointerup", (event) => {
    if (canonFeaturedJourneyDragStart === null || !event.target.closest("[data-canon-featured-carousel]")) return;
    const delta = event.clientX - canonFeaturedJourneyDragStart;
    if (Math.abs(delta) > 42) {
      setCanonFeaturedJourneySlideIndex(selectedCanonFeaturedJourneySlideIndex + (delta < 0 ? 1 : -1));
      updateCanonFeaturedJourneyCarouselCard();
    }
    canonFeaturedJourneyDragStart = null;
  });
  $("#canonGrid")?.addEventListener("pointercancel", () => {
    canonFeaturedJourneyDragStart = null;
  });
  $("#canonPaths")?.addEventListener("click", (event) => {
    const recommendedNav = event.target.closest("[data-canon-recommended-nav]");
    if (recommendedNav) {
      event.preventDefault();
      event.stopPropagation();
      const offset = recommendedNav.dataset.canonRecommendedNav === "next" ? 1 : -1;
      setCanonRecommendedSlideIndex(selectedCanonRecommendedSlideIndex + offset);
      updateCanonRecommendedCarousel();
      return;
    }

    const recommendedDot = event.target.closest("[data-canon-recommended-index]");
    if (recommendedDot) {
      event.preventDefault();
      event.stopPropagation();
      setCanonRecommendedSlideIndex(Number(recommendedDot.dataset.canonRecommendedIndex));
      updateCanonRecommendedCarousel();
    }
  });
  $("#canonPaths")?.addEventListener("mouseover", (event) => {
    if (event.target.closest("[data-canon-recommended-carousel]")) canonRecommendedPaused = true;
  });
  $("#canonPaths")?.addEventListener("mouseout", (event) => {
    const carousel = event.target.closest("[data-canon-recommended-carousel]");
    if (!carousel || (event.relatedTarget && carousel.contains(event.relatedTarget))) return;
    canonRecommendedPaused = false;
  });
  $("#canonPaths")?.addEventListener("focusin", (event) => {
    if (event.target.closest("[data-canon-recommended-carousel]")) canonRecommendedPaused = true;
  });
  $("#canonPaths")?.addEventListener("focusout", (event) => {
    const carousel = event.target.closest("[data-canon-recommended-carousel]");
    if (!carousel || (event.relatedTarget && carousel.contains(event.relatedTarget))) return;
    canonRecommendedPaused = false;
  });
  $("#canonPaths")?.addEventListener("keydown", (event) => {
    if (!event.target.closest("[data-canon-recommended-carousel]")) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    setCanonRecommendedSlideIndex(selectedCanonRecommendedSlideIndex + offset);
    updateCanonRecommendedCarousel();
  });
  $("#canonPaths")?.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("[data-canon-recommended-carousel]")) return;
    canonRecommendedDragStart = event.clientX;
  });
  $("#canonPaths")?.addEventListener("pointerup", (event) => {
    if (canonRecommendedDragStart === null || !event.target.closest("[data-canon-recommended-carousel]")) return;
    const delta = event.clientX - canonRecommendedDragStart;
    if (Math.abs(delta) > 42) {
      setCanonRecommendedSlideIndex(selectedCanonRecommendedSlideIndex + (delta < 0 ? 1 : -1));
      updateCanonRecommendedCarousel();
    }
    canonRecommendedDragStart = null;
  });
  $("#canonPaths")?.addEventListener("pointercancel", () => {
    canonRecommendedDragStart = null;
  });
  $("#canonRecentGrid")?.addEventListener("click", (event) => {
    const watchmanPlay = event.target.closest("[data-watchman-video-play]");
    if (watchmanPlay) {
      event.preventDefault();
      event.stopPropagation();
      const videoId = watchmanPlay.dataset.watchmanVideoPlay;
      const card = watchmanPlay.closest(".canon-watchman-story-card");
      const frame = card?.querySelector("[data-watchman-video-frame] iframe");
      if (frame && videoId) {
        showLocalMediaNotice("Canon journey media");
        card.classList.add("playing");
      }
      return;
    }

    const watchmanNav = event.target.closest("[data-watchman-video-nav]");
    if (watchmanNav) {
      event.preventDefault();
      event.stopPropagation();
      const offset = watchmanNav.dataset.watchmanVideoNav === "next" ? 1 : -1;
      setWatchmanJourneyVideoIndex(selectedWatchmanJourneyVideoIndex + offset);
      renderCanon();
      return;
    }

    const watchmanDot = event.target.closest("[data-watchman-video-index]");
    if (watchmanDot) {
      event.preventDefault();
      event.stopPropagation();
      setWatchmanJourneyVideoIndex(Number(watchmanDot.dataset.watchmanVideoIndex));
      renderCanon();
      return;
    }

    const card = event.target.closest("[data-canon-item]");
    if (!card) return;
    selectedCanonItemId = card.dataset.canonItem;
    renderCanon();
  });
  $("#promiseMovieForm").addEventListener("submit", (event) => {
    event.preventDefault();
    searchPromiseMovie($("#promiseMovieInput").value);
  });
  $(".search-promise-card .search-chip-row")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-world-query]");
    if (!button) return;
    const query = button.dataset.worldQuery || button.textContent.trim() || "TeoyubeWorld";
    $all(".search-promise-card .search-chip-row button").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });
    $("#promiseMovieInput").value = query;
    searchPromiseMovie(query);
  });
  $("#featuredStoryCarousel")?.addEventListener("click", (event) => {
    const previous = event.target.closest("#featuredStoryPrev");
    const next = event.target.closest("#featuredStoryNext");
    const indexed = event.target.closest("[data-featured-story-index]");

    if (previous) {
      goToFeaturedStory(selectedTodayYoutubeVideoIndex - 1);
      return;
    }

    if (next) {
      goToFeaturedStory(selectedTodayYoutubeVideoIndex + 1);
      return;
    }

    if (indexed) {
      goToFeaturedStory(Number(indexed.dataset.featuredStoryIndex));
    }
  });
  $("#featuredStoryCarousel")?.addEventListener("mouseenter", () => {
    featuredStoryPaused = true;
  });
  $("#featuredStoryCarousel")?.addEventListener("mouseleave", () => {
    featuredStoryPaused = false;
  });
  $("#featuredStoryCarousel")?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToFeaturedStory(selectedTodayYoutubeVideoIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToFeaturedStory(selectedTodayYoutubeVideoIndex + 1);
    }
  });
  $("#featuredStoryCarousel")?.addEventListener("pointerdown", (event) => {
    featuredStoryDragStart = event.clientX;
  });
  $("#featuredStoryCarousel")?.addEventListener("pointerup", (event) => {
    if (featuredStoryDragStart === null) return;
    const delta = event.clientX - featuredStoryDragStart;
    if (Math.abs(delta) > 42) goToFeaturedStory(selectedTodayYoutubeVideoIndex + (delta < 0 ? 1 : -1));
    featuredStoryDragStart = null;
  });
  $("#promiseMovieResult").addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-today-video-nav]");
    if (navButton) {
      const offset = navButton.dataset.todayVideoNav === "next" ? 1 : -1;
      goToFeaturedStory(selectedTodayYoutubeVideoIndex + offset);
      return;
    }

    const playButton = event.target.closest(".promise-embed-play-overlay");
    if (!playButton) return;
    const frame = playButton.parentElement?.querySelector("iframe");
    const videoId = playButton.dataset.videoId;
    if (frame && videoId) {
      showLocalMediaNotice("TeoyubeWorld highlight");
    }
    playButton.remove();
  });
  $("#clientsPromiseRows").addEventListener("click", (event) => {
    const button = event.target.closest(".today-video-select");
    const row = event.target.closest("[data-today-video-index]");
    if (!button || !row) return;
    const videos = getTodayYoutubeFeedVideos();
    selectedTodayYoutubeVideoIndex = Number(row.dataset.todayVideoIndex) || 0;
    selectedTodayYoutubeVideo = videos[selectedTodayYoutubeVideoIndex] || videos[0] || null;
    renderFeaturedStoryCarousel();
    renderPromiseMoviePanel();
    renderClientsPromiseTable();
  });
  $("#promiseTableSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    promiseTableQuery = $("#promiseTableSearchInput").value;
    renderPromiseTableSearchFeed();
  });
  $("#promiseTableVideoPanel").addEventListener("click", (event) => {
    const videos = getPromiseTableChannelVideos();

    const navButton = event.target.closest("[data-promise-table-video-nav]");
    if (navButton) {
      if (!videos.length) return;
      const currentIndex = Math.max(0, videos.findIndex((video) => video.id === selectedPromiseTableVideo?.id));
      const offset = navButton.dataset.promiseTableVideoNav === "next" ? 1 : -1;
      selectedPromiseTableVideo = videos[(currentIndex + offset + videos.length) % videos.length];
      renderPromiseTableSearchFeed();
      return;
    }

    const dotButton = event.target.closest("[data-promise-table-video-index]");
    if (dotButton) {
      const nextVideo = videos[Number(dotButton.dataset.promiseTableVideoIndex)];
      if (!nextVideo) return;
      selectedPromiseTableVideo = nextVideo;
      renderPromiseTableSearchFeed();
      return;
    }

    const playButton = event.target.closest("[data-promise-table-play], .promise-table-embed-play-overlay");
    if (!playButton) return;
    const videoId = playButton.dataset.promiseTablePlay || playButton.dataset.videoId;
    const frame = $("#promiseTableVideoPanel .promise-table-video-frame iframe");
    if (frame && videoId) {
      showLocalMediaNotice("Promise Table media");
    }
    $("#promiseTableVideoPanel .promise-table-video-artwork")?.remove();
    $("#promiseTableVideoPanel .promise-table-embed-play-overlay")?.remove();
  });
  $("#promiseTableSearchResults").addEventListener("click", (event) => {
    const button = event.target.closest(".promise-watch-video");
    if (!button) return;
    const videos = getPromiseTableChannelVideos();
    if (!videos.length) {
      loadPromiseTableYoutubeFeed("TeoyubeWorld");
      return;
    }
    selectedPromiseTableVideo = videos[Number(button.dataset.videoIndex) % videos.length];
    renderPromiseTableSearchFeed();
    requestAnimationFrame(bringPromiseTableVideoPanelIntoView);
  });
  $("#teoyubeTablesRows")?.addEventListener("click", (event) => {
    const previewPlayButton = event.target.closest("[data-table-preview-video-play]");
    if (previewPlayButton) {
      const videoId = previewPlayButton.dataset.tablePreviewVideoPlay;
      const panel = previewPlayButton.closest(".table-preview-video-panel");
      const frame = panel?.querySelector("iframe");
      if (frame && videoId) {
        showLocalMediaNotice("Promise Table preview");
        panel?.classList.add("playing");
      }
      return;
    }

    const previewPanel = event.target.closest(".table-preview-video-panel");
    if (previewPanel && !previewPanel.classList.contains("playing")) {
      const videoId = previewPanel.dataset.tableVideoPreview;
      const frame = previewPanel.querySelector("iframe");
      if (frame && videoId) {
        showLocalMediaNotice("Promise Table preview");
        previewPanel.classList.add("playing");
      }
      return;
    }

    const videoPlayButton = event.target.closest("[data-table-video-play]");
    if (videoPlayButton) {
      const videoId = videoPlayButton.dataset.tableVideoPlay;
      const panel = videoPlayButton.closest(".table-row-video");
      const frame = panel?.querySelector("iframe");
      if (frame && videoId) {
        showLocalMediaNotice("Promise Table media");
        panel?.classList.add("playing");
      }
      return;
    }

    const videoNavButton = event.target.closest("[data-table-video-nav]");
    if (videoNavButton) {
      const videos = getPromiseTableChannelVideos();
      if (!videos.length) return;

      const panel = videoNavButton.closest(".table-row-video");
      const frame = panel?.querySelector("iframe");
      if (!panel || !frame) return;

      const currentIndex = Number(panel.dataset.tableVideoCurrentIndex) || 0;
      const offset = videoNavButton.dataset.tableVideoNav === "next" ? 1 : -1;
      const nextIndex = (currentIndex + offset + videos.length) % videos.length;
      const nextVideo = videos[nextIndex];
      if (!nextVideo?.id) return;

      const nextTitle = getUiVideoTitle(nextVideo, nextIndex);
      panel.dataset.tableVideoCurrentIndex = String(nextIndex);
      panel.style.setProperty("--table-video-thumb", `url("${getUiVideoThumbnail(nextVideo).replaceAll('"', "%22")}")`);
      panel.classList.remove("playing");
      frame.title = nextTitle;
      frame.removeAttribute("src");
      const title = panel.querySelector(".table-row-video-title");
      if (title) title.textContent = nextTitle;
      const play = panel.querySelector("[data-table-video-play]");
      if (play) {
        play.dataset.tableVideoPlay = nextVideo.id;
        play.setAttribute("aria-label", `Play ${nextTitle}`);
      }
      const detail = panel.closest(".table-detail-content");
      const preview = detail?.querySelector("[data-table-video-preview]");
      if (preview) {
        preview.dataset.tableVideoPreview = nextVideo.id;
        preview.dataset.tableVideoPreviewIndex = String(nextIndex);
        preview.setAttribute("aria-label", `${nextTitle} preview video`);
        preview.style.setProperty("--table-preview-thumb", `url("${getUiVideoThumbnail(nextVideo).replaceAll('"', "%22")}")`);
        preview.classList.remove("playing");
        const previewFrame = preview.querySelector("iframe");
        if (previewFrame) {
          previewFrame.title = `${nextTitle} preview`;
          previewFrame.removeAttribute("src");
        }
        const previewPlay = preview.querySelector("[data-table-preview-video-play]");
        if (previewPlay) {
          previewPlay.dataset.tablePreviewVideoPlay = nextVideo.id;
          previewPlay.setAttribute("aria-label", `Play ${nextTitle} in the far-left preview panel`);
        }
        const previewImage = preview.querySelector("img");
        if (previewImage) previewImage.src = getUiVideoThumbnail(nextVideo);
        const previewDuration = preview.querySelector(".table-detail-duration");
        if (previewDuration) previewDuration.textContent = uiVideoDurations[nextIndex % uiVideoDurations.length];
      }
      return;
    }

    const button = event.target.closest("[data-table-row]");
    if (!button) return;
    const rowIndex = Number(button.dataset.tableRow);
    if (expandedTeoyubeTableRows.has(rowIndex)) {
      expandedTeoyubeTableRows.delete(rowIndex);
    } else {
      expandedTeoyubeTableRows.add(rowIndex);
    }
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTableSearch")?.addEventListener("input", (event) => {
    teoyubeTableSearchQuery = event.target.value;
    teoyubeTablePage = 1;
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTableCategory")?.addEventListener("change", (event) => {
    teoyubeTableCategoryFilter = event.target.value;
    teoyubeTablePage = 1;
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTableSort")?.addEventListener("change", (event) => {
    teoyubeTableSortMode = event.target.value;
    teoyubeTablePage = 1;
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTablePageSize")?.addEventListener("change", (event) => {
    teoyubeTablePageSize = Number(event.target.value) || 10;
    teoyubeTablePage = 1;
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTablePagination")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-table-page]");
    if (!button) return;
    teoyubeTablePage = Number(button.dataset.tablePage) || 1;
    renderTeoyubeTablesPage();
  });
  $("#teoyubeTableFiltersButton")?.addEventListener("click", () => {
    $("#teoyubeTableSearch")?.focus();
  });
  $("#compassVideoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    searchCompassVideos($("#compassVideoInput").value || "TeoyubeWorld");
  });
  $(".compass-video-prompts").addEventListener("click", (event) => {
    const button = event.target.closest("[data-query]");
    if (!button) return;
    $("#compassVideoInput").value = button.dataset.query;
    searchCompassVideos(button.dataset.query);
  });
  $("#compassVideoPlayer").addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-compass-video-nav]");
    if (navButton) {
      if (!compassVideos.length) return;
      const currentIndex = Math.max(0, compassVideos.findIndex((video) => video.id === selectedCompassVideo?.id));
      const offset = navButton.dataset.compassVideoNav === "next" ? 1 : -1;
      selectedCompassVideo = compassVideos[(currentIndex + offset + compassVideos.length) % compassVideos.length];
      renderCompassVideos();
      return;
    }

    const playButton = event.target.closest(".compass-embed-play-overlay");
    if (!playButton) return;
    const frame = playButton.parentElement?.querySelector("iframe");
    const videoId = playButton.dataset.videoId;
    if (frame && videoId) {
      showLocalMediaNotice("Calling Compass media");
    }
    playButton.remove();
  });
  $("#compassVideoList").addEventListener("click", (event) => {
    const button = event.target.closest(".compass-video-item");
    if (!button) return;
    selectedCompassVideo = compassVideos[Number(button.dataset.index)];
    renderCompassVideos();
  });
  $("#refreshUiVideos")?.addEventListener("click", () => {
    uiVideoCardSelections.clear();
    loadUiElementsYoutubeFeed("TeoyubeWorld");
  });
  $("#uiVideoGrid")?.addEventListener("click", (event) => {
    const navButton = event.target.closest("[data-ui-video-nav]");
    if (navButton) {
      const sourceVideos = getTeoyubeWorldChannelVideos(uiElementVideos, promiseTableYoutubeVideos, todayYoutubeVideos);
      const filteredVideos = getUiFilteredVideos(sourceVideos);
      if (!filteredVideos.length) return;

      const slot = Number(navButton.dataset.uiVideoSlot) || 0;
      const currentPosition = Number(navButton.dataset.uiVideoPosition) || 0;
      const offset = navButton.dataset.uiVideoNav === "next" ? 1 : -1;
      uiVideoCardSelections.set(slot, (currentPosition + offset + filteredVideos.length) % filteredVideos.length);
      renderUiElementsVideos();
      return;
    }

    const playButton = event.target.closest("[data-ui-video-play]");
    if (!playButton) return;
    const videoId = playButton.dataset.uiVideoPlay;
    const card = playButton.closest(".ui-video-card");
    const frame = card?.querySelector(".ui-embed-frame iframe");
    if (frame && videoId) {
      showLocalMediaNotice("Embedded video preview");
      card?.classList.add("playing");
    }
    card?.querySelector(".ui-video-artwork")?.remove();
    card?.querySelector(".ui-embed-play-overlay")?.remove();
  });
  $("#uiVideoCategoryTabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video-category]");
    if (!button) return;
    uiVideoCategoryFilter = button.dataset.videoCategory;
    uiVideoVisibleCount = 4;
    uiVideoCardSelections.clear();
    $all("#uiVideoCategoryTabs button").forEach((tab) => tab.classList.toggle("active", tab === button));
    const select = $("#uiVideoCategorySelect");
    if (select) select.value = uiVideoCategoryFilter === "All Videos" ? "All Categories" : uiVideoCategoryFilter;
    renderUiElementsVideos();
  });
  $("#uiVideoCategorySelect")?.addEventListener("change", (event) => {
    uiVideoCategoryFilter = event.target.value;
    uiVideoVisibleCount = 4;
    uiVideoCardSelections.clear();
    $all("#uiVideoCategoryTabs button").forEach((tab) => {
      const tabValue = tab.dataset.videoCategory;
      tab.classList.toggle("active", tabValue === uiVideoCategoryFilter || (tabValue === "All Videos" && uiVideoCategoryFilter === "All Categories"));
    });
    renderUiElementsVideos();
  });
  $("#uiVideoSort")?.addEventListener("change", (event) => {
    uiVideoSortMode = event.target.value;
    uiVideoVisibleCount = 4;
    uiVideoCardSelections.clear();
    renderUiElementsVideos();
  });
  $("#uiVideoSearch")?.addEventListener("input", (event) => {
    uiVideoSearchQuery = event.target.value;
    uiVideoVisibleCount = 4;
    uiVideoCardSelections.clear();
    renderUiElementsVideos();
  });
  $("#uiVideoLoadMore")?.addEventListener("click", () => {
    uiVideoVisibleCount += 4;
    renderUiElementsVideos();
  });
  $("#uiVideoFiltersButton")?.addEventListener("click", () => {
    $("#uiVideoSearch")?.focus();
  });
}

Promise.all([
  loadCoreVocabulary(),
  loadJsonData("src/data/optionalMediaStatus.json", optionalMediaStatus).then((data) => {
    optionalMediaStatus = {
      ...optionalMediaStatus,
      ...(data && typeof data === "object" ? data : {})
    };
  }),
  loadJsonData("src/data/theologyConstitution.json", null).then((data) => {
    theologyConstitution = data;
  }),
  loadJsonData("src/data/promiseCategories.json", []).then((data) => {
    promiseCategories = data;
  }),
  loadJsonData("src/data/teoyubeSearchFramework.json", null).then((data) => {
    searchFramework = data;
  }),
  loadJsonData("src/data/promiseClusterArchitecture.json", null).then((data) => {
    promiseClusterArchitecture = data;
  }),
  loadJsonData("src/data/promiseClusters.json", promiseClusters).then((data) => {
    promiseClusters = data;
  }),
  loadJsonData("src/data/promiseClusterSystem.json", null).then((data) => {
    promiseClusterSystem = data;
  }),
  loadJsonData("src/data/promiseClusterRules.json", { clusterRules: [] }).then((data) => {
    promiseClusterRules = data.clusterRules || [];
  }),
  loadJsonData("src/data/promiseClusterNavigation.json", []).then((data) => {
    promiseClusterNavigation = data;
  }),
  loadJsonData("src/data/teoyubeLanguageGrammar.json", null).then((data) => {
    languageGrammar = data;
  }),
  loadJsonData("src/data/teoyubePromiseLanguageLexicon.json", []).then((data) => {
    promiseLanguageLexicon = data;
  }),
  loadJsonData("src/data/teoyubeCanonArchitecture.json", null).then((data) => {
    canonArchitecture = data;
  }),
  loadJsonData("src/data/kingdomArchetypes.json", []).then((data) => {
    kingdomArchetypes = data;
  }),
  loadJsonData("src/data/covenantPaths.json", []).then((data) => {
    covenantPaths = data;
  }),
  loadJsonData("src/data/destinyMaps.json", []).then((data) => {
    destinyMaps = data;
  }),
  loadJsonData("src/data/prayerEngineTemplates.json", []).then((data) => {
    prayerEngineTemplates = data;
  }),
  loadJsonData("src/data/prayerEngineSystem.json", null).then((data) => {
    prayerEngineSystem = data;
  }),
  loadJsonData("src/data/prayerRecommendationMap.json", {}).then((data) => {
    prayerRecommendationMap = data;
  }),
  loadJsonData("src/data/prayerJourneys.json", []).then((data) => {
    prayerJourneys = data;
  }),
  loadJsonData("src/data/tkosArchitecture.json", null).then((data) => {
    tkosArchitecture = data;
  }),
  loadJsonData("src/data/tkosGrowthLevels.json", []).then((data) => {
    tkosGrowthLevels = data;
  }),
  loadJsonData("src/data/tkosSampleProfile.json", null).then((data) => {
    tkosSampleProfile = data;
  }),
  loadJsonData("src/data/tkosEngines.json", null).then((data) => {
    tkosEngines = data;
  }),
  loadJsonData("src/data/technicalArchitecture.json", null).then((data) => {
    technicalArchitecture = data;
  }),
  loadJsonData("src/data/onboardingFlow.json", []).then((data) => {
    onboardingFlow = data;
  }),
  loadJsonData("src/data/subscriptionModel.json", null).then((data) => {
    subscriptionModel = data;
  }),
  loadJsonData("src/data/mvpBuildOrder.json", []).then((data) => {
    mvpBuildOrder = data;
  }),
  loadJsonData("src/data/projectStructureRoadmap.json", null).then((data) => {
    projectStructureRoadmap = data;
  }),
  loadJsonData("src/data/mvpCodeStarterFiles.json", null).then((data) => {
    mvpCodeStarterFiles = data;
  }),
  loadJsonData("src/data/mvpSeedFiles.json", null).then((data) => {
    mvpSeedFiles = data;
  }),
  loadJsonData("src/data/mvpUiPages.json", null).then((data) => {
    mvpUiPages = data;
  }),
  loadJsonData("src/data/mvpBrandIdentity.json", null).then((data) => {
    mvpBrandIdentity = data;
  }),
  loadJsonData("src/data/mvpLaunchPlan.json", null).then((data) => {
    mvpLaunchPlan = data;
  }),
  loadJsonData("src/data/launch1StaticMvpPackage.json", null).then((data) => {
    launch1StaticMvpPackage = data;
  }),
  loadJsonData("src/data/glyphDefinitions.json", []).then((data) => {
    glyphDefinitions = data;
  }),
  loadJsonData("src/data/promiseGraphDesign.json", null).then((data) => {
    promiseGraphDesign = data;
  }),
  loadJsonData("src/data/teoyubeCanonMasterSchema.json", null).then((data) => {
    canonMasterSchema = data;
  }),
  loadJsonData("src/data/graphRelationships.json", []).then((data) => {
    graphRelationships = data;
  }),
  loadJsonData("src/data/scriptureKnowledgeGraphSchema.json", null).then((data) => {
    scriptureKnowledgeGraphSchema = data;
  }),
  loadJsonData("src/data/scriptureCanon.json", []).then((data) => {
    scriptureCanon = data;
  }),
  loadJsonData("src/data/scriptureLinkedPaths.json", []).then((data) => {
    scriptureLinkedPaths = data;
  }),
  loadJsonData("src/data/scriptureLinkedArchetypes.json", []).then((data) => {
    scriptureLinkedArchetypes = data;
  }),
  loadJsonData("src/data/scripturePromiseClusters.json", []).then((data) => {
    scripturePromiseClusters = data;
  }),
  loadJsonData("src/data/scriptureGraphRelationships.json", []).then((data) => {
    scriptureGraphRelationships = data;
  }),
  loadJsonData("src/data/scriptureSearchTags.json", []).then((data) => {
    scriptureSearchTags = data;
  })
]).finally(() => {
  wireEvents();
  setView(window.location.hash || $(".view.active")?.id || "today", { skipHash: Boolean(window.location.hash) });
  window.addEventListener("hashchange", () => setView(window.location.hash, { skipHash: true }));
  render();
  startPromiseCarousel();
  startAdCarousel();
  startFeaturedStoryCarousel();
  startCanonFeaturedJourneyCarousel();
  startCanonRecommendedCarousel();
  searchPromiseMovie("TeoyubeWorld");
  loadPromiseSeedData();
  loadPromiseTableYoutubeFeed("TeoyubeWorld");
  loadUiElementsYoutubeFeed("TeoyubeWorld");
});
