const form = document.forms.namedItem("videos-form");
const output = document.getElementById("output-link");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const list = form.elements.namedItem("videos-list");
  const links = list.value.trim().split(/\n+|\s+/g);
  const videoIDs = [];

  for (const link of links) {
    const { pathname, searchParams } = new URL(link.trim());
    const id = searchParams.get("v") || pathname.substring(1);
    videoIDs.push(id);
  }

  if (videoIDs) {
    const playlistLink = new URL("https://www.youtube.com/watch_videos");
    playlistLink.searchParams.set("video_ids", videoIDs.join(","));
    output.textContent = output.href = playlistLink.href;
  }
});
