export interface Video {
  id: string;
  url: string;
  nombre: string;
  LeccionId: string;
}

export interface VideoState {
  videos: Video[];
  videoID: Video | null;
  loading: boolean;
  error: string | null;
}
