const videos = [
  ["local-seed-of-promise", "The Seed of Promise", "Teaching", "public/images/embed/embedded-videos-hero-bg.png", ["2 Corinthians 5:17", "Ephesians 1:18"]],
  ["local-power-of-prayer", "The Power of Prayer", "Message", "public/images/today/teoyubeworld-search-bg.png", ["Proverbs 3:5-6", "James 1:5"]],
  ["local-walk-in-purpose", "Walk in Divine Purpose", "Teaching", "public/images/table/calling-compass-panel-bg.png", ["Romans 8:28", "Joshua 1:9"]],
  ["local-rooted-in-truth", "Rooted in His Word", "Documentary", "public/images/search/search-purpose-hero.png", ["Psalm 119:105", "Ephesians 1:18"]],
  ["local-called-for-more", "Called for More", "Short", "public/images/canon/journey-calling.png", ["Ephesians 2:10", "Romans 8:28"]],
  ["local-strength-for-today", "Strength for Today", "Worship", "public/images/carousel/kingdom-wisdom.png", ["Isaiah 40:31"]]
].map(([id, title, category, thumbnail, scriptureReferences]) => ({
  id, title, category, thumbnail, scriptureReferences,
  channelTitle: "TeoyubeWorld",
  publishedAt: "",
  sourceStatus: "local_preview",
  description: "Local TeoyubeWorld preview data. External media lookup is disabled."
}));

module.exports = function handler(request, response) {
  const requestUrl = new URL(request.url || "/", "https://teoyube.invalid");
  const query = String(requestUrl.searchParams.get("q") || "").toLowerCase().replace("teoyubeworld", "").trim();
  const filtered = query ? videos.filter((video) => JSON.stringify(video).toLowerCase().includes(query)) : videos;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400");
  response.status(200).json({
    videos: filtered.length ? filtered : videos,
    sourceStatus: "local_preview",
    message: "Local TeoyubeWorld preview data only. External media lookup is disabled."
  });
};
