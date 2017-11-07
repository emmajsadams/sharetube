export interface StoreState {
  video?: Video;
  videoUrl?: string;
  sourceIndex?: number;
}

export interface Video {
  name: string;
  sources: Source[]
}

// TODO: This type does not include support for html5
export interface Source {
  type: string;
  id: string;
  name: string;
}
