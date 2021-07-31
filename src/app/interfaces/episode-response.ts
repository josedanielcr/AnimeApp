export interface EpisodeResponse {
    data:  DatumEpisode[];
    meta:  EpisodeResponseMeta;
    links: EpisodeResponseLinks;
}

export interface DatumEpisode {
    id:            string;
    type:          Type;
    links:         DatumLinks;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt:      Date;
    updatedAt:      Date;
    synopsis:       string;
    description:    string;
    titles:         Titles;
    canonicalTitle: string;
    seasonNumber:   number;
    number:         number;
    relativeNumber: number;
    airdate:        Date;
    length:         number;
    thumbnail:      Thumbnail;
}

export interface Thumbnail {
    original: string;
    meta:     ThumbnailMeta;
}

export interface ThumbnailMeta {
    dimensions: Dimensions;
}

export interface Dimensions {
}

export interface Titles {
    en_jp: string;
    en_us: string;
    ja_jp: string;
}

export interface DatumLinks {
    self: string;
}

export interface Relationships {
    media:  Media;
    videos: Media;
}

export interface Media {
    links: MediaLinks;
}

export interface MediaLinks {
    self:    string;
    related: string;
}

export enum Type {
    Episodes = "episodes",
}

export interface EpisodeResponseLinks {
    first: string;
    next:  string;
    last:  string;
}

export interface EpisodeResponseMeta {
    count: number;
}
