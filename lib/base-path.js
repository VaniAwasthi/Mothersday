// Keep this in sync with `basePath` in `next.config.mjs`.
// Used to prefix raw asset URLs (e.g. <video src>) which Next.js does NOT
// rewrite automatically — only `next/image`, `next/link`, and Webpack-emitted
// asset paths get the basePath applied for free.

const REPO_BASE_PATH = "/Mothersday";

export const basePath =
  process.env.NODE_ENV === "production" ? REPO_BASE_PATH : "";

/**
 * Prefix an absolute path (must start with "/") with the configured basePath.
 *
 * @param {string} path
 * @returns {string}
 */
export function withBasePath(path) {
  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }
  return `${basePath}${path}`;
}
