export interface StoreState {
  video?: Video;
  videoUrl?: string;
  sourceIndex?: number;
}

export interface Video {
  name: string;
  sources?: Source[];
}

export interface Source {
  type: string;
  values: SourceValues;
}

// TODO: Consider looking into pattern matching for this https://github.com/Microsoft/TypeScript/issues/165
// Match #1: { id: string }
// Match #2: { mp4?: string, ogg?: string, webm?: string }
export interface SourceValues {
  [valueName: string]: string;
}
