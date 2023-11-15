import {Song} from "../model/song";

export const songs: Map<number, Song> = new Map();

songs.set(5, {
  id: 5,
  title: 'Titre chanson',
  artist: 'Nom de scène',
  year: 1234,
});
songs.set(7, {
  id: 7,
  title: 'Autre titre',
  artist: 'Michel',
  year: 2015,
});
songs.set(8, {
  id: 8,
  title: 'Un titre un peu long',
  artist: 'Louise',
  year: 2020,
});
songs.set(11, {
  id: 11,
  title: 'A',
  artist: 'Blue Boy',
  year: 2025,
});
