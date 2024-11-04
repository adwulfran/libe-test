import fs from "fs";
import path from "path";

export function find(query: { title: string, format?: string }) {
    const filePath = path.join(process.cwd(), 'src', 'db', 'data.json');

    const datas: { title: string, format?: string }[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const title = query?.title as string | undefined
    const format = query?.format as string | undefined;
    const result = datas.filter((e) =>
        e.title.includes(title ? title : "") && (e.format ? e.format?.includes(format ? format : "") : true)
    );
    return result
    /* 
   
    POUR PAGINATION GARDE LE !!
    const limit = 5;
    if (query.page) {
        return result.slice(
            query.page*limit,
            query.page*limit + limit
        )
    }
     */
}
