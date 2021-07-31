export interface CategoryResponse {
    data:  Datum[];
    meta:  CategoryResponseMeta;
    links: CategoryResponseLinks;
}

export interface Datum {
    id:            string;
    type:          Type;
    links:         DatumLinks;
    attributes:    Attributes;
    relationships: Relationships;
}

export interface Attributes {
    createdAt:       Date;
    updatedAt:       Date;
    title:           string;
    description:     null | string;
    totalMediaCount: number;
    slug:            string;
    nsfw:            boolean;
    childCount:      number;
    image:           Image | null;
}

export interface Image {
    tiny:     string;
    small:    string;
    medium:   string;
    large:    string;
    original: string;
    meta:     ImageMeta;
}

export interface ImageMeta {
    dimensions: Dimensions;
}

export interface Dimensions {
    tiny:   Large;
    small:  Large;
    medium: Large;
    large:  Large;
}

export interface Large {
    width:  null;
    height: null;
}

export interface DatumLinks {
    self: string;
}

export interface Relationships {
    parent: Anime;
    anime:  Anime;
    drama:  Anime;
    manga:  Anime;
}

export interface Anime {
    links: AnimeLinks;
}

export interface AnimeLinks {
    self:    string;
    related: string;
}

export enum Type {
    Categories = "categories",
}

export interface CategoryResponseLinks {
    first: string;
    next:  string;
    last:  string;
}

export interface CategoryResponseMeta {
    count: number;
}
