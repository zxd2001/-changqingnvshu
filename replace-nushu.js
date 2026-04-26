const fs = require('fs');

const filePath = 'e:\\常青女书网页\\app.js';

// Read the file as UTF-8
const content = fs.readFileSync(filePath, 'utf8');

// Find the nushu block boundaries
const nushuStartMarker = '  nushu: {';
const nushuEndMarker = '  }\n};';

const startIdx = content.indexOf(nushuStartMarker);
const endIdx = content.indexOf(nushuEndMarker, startIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find nushu block boundaries');
  process.exit(1);
}

console.log(`Found nushu block from position ${startIdx} to ${endIdx + nushuEndMarker.length - 1}`);

// The new nushu content
const newNushu = `  nushu: {

    nav_home: '𛆞𛇩', nav_convert: '𛅺𛈔𛋺𛊧', nav_gallery: '𛈤𛆖𛊀𛋂',
    nav_courses: '𛈆𛋙𛅳𛋰𛈆', nav_practice: '𛉟𛇈𛅰𛈏',

    hero_tag: '𛆓𛆄𛊄𛅰𛆁𛉾𛆂𛈤',
    hero_title_1: '𛆁𛇺𛊰', hero_title_2: '𛆉𛆥𛉘𛆁𛉾𛇓𛅺',
    hero_desc: '𛆁𛇺𛊰𛆱𛊜𛆁𛊭𛊾𛆂𛋁𛆂𛇓，𛉘𛇏𛋶𛊜𛆁𛇺𛊰𛇕𛆱𛊜𛋐𛆱𛊭𛆤𛇣𛊧。𛉟𛅰𛆅𛈤𛆖，𛋗𛆹𛅰𛋇𛆳𛆱𛇣𛅺𛆡𛉘𛉄𛆹。',
    hero_btn_convert: '𛇶𛇴𛋺𛊧', hero_btn_gallery: '𛈤𛆖𛊀𛋂',
    hero_card_label: '𛆁𛇺𛊰 · NUSHU',

    feat_convert_title: '𛅺𛈔𛋺𛊧', feat_convert_desc: '𛅺𛊛𛇺𛊰𛊰𛊧，𛆁𛇺𛊰𛇕𛆱𛊜𛋐𛆱𛊭𛆤𛇣𛊧𛋒𛆱，𛆈𛊀𛊧𛊰𛆁𛉾𛉘𛇏𛋶𛊜𛊰𛊧。',
    feat_gallery_title: '𛈤𛆖𛊀𛋂', feat_gallery_desc: '𛆁𛇺𛊰𛆱𛊜𛊽𛊜𛊰𛊜𛊽𛊜，𛆁𛉾𛇓𛅺𛊜𛉘𛇏𛋶𛊜𛆁𛇺𛊰𛇕𛆱，𛆱𛋍𛊧𛅳𛊜𛆱𛊰𛊧。',
    feat_courses_title: '𛈆𛋙𛅳𛋰𛈆', feat_courses_desc: '𛋉𛋻𛆹𛊘𛋰𛈆𛅱𛋁，𛈗𛇀𛈯𛅱𛋰𛈆𛉌𛇕𛆣𛆧𛇆𛆖𛋻𛋰𛈆，𛆃𛉅𛈆𛋙𛅳𛋰𛊧𛊰𛆱。',
    feat_practice_title: '𛉟𛇈𛅰𛈏', feat_practice_desc: '𛉟𛆤𛅰𛆘𛆁𛇺𛊰𛇇𛋍𛈏𛆓，𛆈𛈆𛈪𛉘𛇇𛋍𛇍𛉞，𛆱𛅻𛉊𛈌𛊤𛈆𛋙𛅳𛆁𛇺𛊰。',
    about_img_alt: '𛆁𛇺𛊰𛆂𛋁',
    feat_world_tag: '𛆁𛇺𛊰𛆓𛆄', feat_world_title: '𛆁𛇺𛊰 · 𛆂𛈤𛆷𛋪',
    feat_world_alt1: '𛆁𛇺𛊰𛉝𛇣1', feat_world_alt2: '𛆁𛇺𛊰𛉝𛇣2', feat_world_alt3: '𛆁𛇺𛊰𛉝𛇣3', feat_world_alt7: '𛆁𛇺𛊰𛉝𛇣7',
    about_img_alt: '𛆁𛇺𛊰𛆂𛋁',

    footer_about: '𛆁𛇌𛉘', footer_explore: '𛆱𛇓𛅽', footer_contact: '𛊽𛊜',
    footer_desc: '𛆁𛇺𛊰𛆱𛊜𛆁𛊭𛊾𛆂𛋁𛆂𛇓，𛉘𛇏𛋶𛊜𛆁𛇺𛊰𛇕𛆱𛊜𛋐𛆱𛊭𛆤𛇣𛊧。',
    footer_copyright: '© 2026 𛆁𛇺𛊰 · NUSHU · 𛆁𛇺𛊰𛆱𛊜𛊭𛊾𛆂𛇓𛊜𛉘𛋪 · 𛊜𛆱𛇕𛊜𛋗𛆱𛊽𛊜𛆁𛇺𛊰𛆂𛋁𛆂𛇓𛊜𛊰𛊧𛊜𛊽𛊜𛇕𛆱',
    footer_about_link: '𛆁𛇺𛊰𛆂𛋁', footer_features_link: '𛆃𛈷𛆄𛋙',
    footer_inheritor_link: '𛆁𛇺𛊰𛆱𛊜𛋍𛊧𛅳', footer_coop_link: '𛊜𛊭𛆱𛋽𛊜𛊍',
    aria_menu: '𛛈𛆘𛉘',
    meta_desc: 'changqingnvshu — 𛆁𛇺𛊰𛆂𛋁𛆂𛇓𛊜𛉘𛋪，𛉘𛇏𛋶𛊜𛆁𛇺𛊰𛇕𛆱𛊜𛋐𛆱𛊭𛆤𛇣𛊧，𛉘𛇏𛋶𛊜𛆁𛇺𛊰𛇕𛆱𛊜𛋐𛆱𛊭𛆤𛇣𛊧。',
    brand_name: '𛆁𛇺𛊰',
    brand_title_home: '𛆁𛇺𛊰 · Nushu Cultural Heritage',
    brand_title_convert: '𛅺𛈔𛋺𛊧 · 𛆁𛇺𛊰',
    brand_title_gallery: '𛈤𛆖𛊀𛋂 · 𛆁𛇺𛊰',
    brand_title_practice: '𛉟𛇈𛅰𛈏 · 𛆁𛇺𛊰',
    brand_title_courses: '𛈆𛋙𛅳𛋰𛈆 · 𛆁𛇺𛊰',
  }`;

// Construct the new content
const beforeNushu = content.substring(0, startIdx);
const afterNushu = content.substring(endIdx + nushuEndMarker.length - 1); // -1 because we include the closing brace

const newContent = beforeNushu + newNushu + afterNushu;

// Write back with UTF-8 encoding
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('Replacement completed successfully!');

// Verify by reading back
const verifyContent = fs.readFileSync(filePath, 'utf8');
const verifyStart = verifyContent.indexOf('  nushu: {');
const verifyEnd = verifyContent.indexOf('  }\n};', verifyStart);

if (verifyStart !== -1 && verifyEnd !== -1) {
  console.log('\n--- Replaced nushu block ---');
  console.log(verifyContent.substring(verifyStart, verifyEnd + 6));
  console.log('--- End of nushu block ---');
}
