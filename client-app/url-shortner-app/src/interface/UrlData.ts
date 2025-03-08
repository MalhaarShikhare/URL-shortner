export interface UrlData {
    _id:string;
    fullUrl:string;
    shortUrl:string;
    clicks: { city?: string; country?: string; device?: string; timestamp?: Date }[];
    createdAt:Date;
    updatedAt:Date;
}