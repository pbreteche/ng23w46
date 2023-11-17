export class Song {
  id = 0;
  title = '';
  artist = '';
  year?: number;
}

export class Playlist {
  uuid = '';
  name = '';
  songs: Song[] = [];
}
