// lib/slugify.js
export default function slugify(string) {
    return string
      .toString()
      .toLowerCase()
      .trim()
      .replace(/&/g, '-and-')
      .replace(/[\s\W-]+/g, '-');
  }
  