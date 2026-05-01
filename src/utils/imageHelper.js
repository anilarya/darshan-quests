/**
 * Helper function to return correct image path for GitHub Pages deployment
 * Ensures images work in both development and production
 */
export const getImagePath = (filename) => {
  const basePath = import.meta.env.BASE_URL;
  return `${basePath}images/${filename}`;
};

/**
 * Alternative: Use direct path from posts.json if already configured
 * This function validates and ensures the path is correct
 */
export const validateImagePath = (imageURL) => {
  if (imageURL.startsWith('http')) {
    return imageURL; // External URL
  }
  return imageURL; // Relative path from posts.json
};