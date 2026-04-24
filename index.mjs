import fetch from "node-fetch";
import xml2js from "xml2js";

async function get(url){
    const res = await fetch(url);
    const text = await res.text();
    const data = await xml2js.parseStringPromise(text);
    return data.urlset.url.map((entry) => entry.loc[0]);
}

export function getBrowse(){
    return get('https://www.skillshare.com/sitemap/browse/1')
}
export function getClasses(){
    return get('https://www.skillshare.com/sitemap/classes/1')
}
export function getTeachers(){
    return get('https://www.skillshare.com/sitemap/teachers/1')
}
export function getWorkshops(){
    return get('https://www.skillshare.com/sitemap/workshops/1')
}
export function getLists(){
    return get('https://www.skillshare.com/sitemap/lists/1')
}