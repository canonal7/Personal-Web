const assert = require('assert/strict');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf8');
assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
assert.match(html, /<link[^>]*rel="canonical"[^>]*href="https:\/\/can-onal\.com\/"[^>]*>/);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
for (const text of ['Can Önal', 'Software engineer', 'Amsterdam', 'TrainSense', 'Best Marketability Award', 'Open Policy Agent', 'mailto:jcanonal@gmail.com']) {
  assert.ok(html.includes(text), 'Missing pre-rendered content: ' + text);
}
assert.ok(!html.includes('<div id="root"></div>'), 'Production root is empty');
const match = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
assert.ok(match, 'Profile JSON-LD is missing');
const profile = JSON.parse(match[1]);
assert.equal(profile['@type'], 'ProfilePage');
assert.equal(profile.url, 'https://can-onal.com/');
assert.equal(profile.mainEntity['@type'], 'Person');
assert.equal(profile.mainEntity.name, 'Can Önal');
console.log('Production HTML passed content, canonical URL, and profile schema checks');
