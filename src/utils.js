import { path } from "express/lib/application";

export const getImageUrl = (path) => {
    return new URL ('assets/${path}', import.meta.url).href;
};