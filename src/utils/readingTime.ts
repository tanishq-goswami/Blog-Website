export const readingTime = (text: string, wpm = 200) => {
const words = text.trim().split(/\s+/).length;
return Math.max(1, Math.ceil(words / wpm));
};