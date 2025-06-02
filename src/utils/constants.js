// Application constants
export const TERMINAL_OPTIONS = [
  { label: "bio", display: "bio" },
  { label: "projects", display: "projects" },
  { label: "resume", display: "resume" },
  { label: "archive", display: "archive" },
];

export const ARCHIVE_SECTIONS = [
  "cardgames",
  "recipes", 
  "media",
  "notes",
  "bookmarks"
];

// Simple asset URL helper for Vite
export const getAssetUrl = (path) => {
  return import.meta.env.BASE_URL + path;
};
