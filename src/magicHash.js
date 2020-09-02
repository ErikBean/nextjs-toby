export default function hashCode(str) {
  return Array.from(str).reduce(
    (a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0,
    0,
  );
}
