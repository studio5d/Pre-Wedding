const imageNames = [
  ...Array.from({ length: 67 }, (_, index) => `0O5A${1610 + index}.jpg`),
  ...Array.from({ length: 64 }, (_, index) => `IMG_${6870 + index}.jpg`)
];
const musicTracks = [1, 3, 5, 7, 9];
const images = imageNames.map((name, index) => ({
  name,
  path: `img/Select/${name}`,
  number: index + 1,
  music: `music/track${musicTracks[index % musicTracks.length]}.mp3`
}));
