import dotenv from 'dotenv';
import path from 'path'
import fs from 'fs'

const { parsed: templateIt } = dotenv.config({ path: path.join(__dirname, 'template_it.env') });
const { parsed: templateEn } = dotenv.config({ path: path.join(__dirname, 'template_en.env') });

const template = {
    IT: templateIt,
    EN: templateEn
}

fs.writeFileSync(path.join(__dirname, '../out/template.json'), JSON.stringify(template));

console.log('[Done]: Compiled language pack')