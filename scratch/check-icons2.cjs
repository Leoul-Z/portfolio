const si = require('react-icons/si');
const fa = require('react-icons/fa');
const fi = require('react-icons/fi');

const queries = ['cplusplus', 'java', 'html5', 'css3', 'php', 'vercel', 'render', 'git', 'mysql', 'database'];

queries.forEach(q => {
  console.log('---', q, '---');
  console.log('SI:', Object.keys(si).filter(k => k.toLowerCase().includes(q)));
  console.log('FA:', Object.keys(fa).filter(k => k.toLowerCase().includes(q)));
});
