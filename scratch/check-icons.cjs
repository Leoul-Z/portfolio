const si = require('react-icons/si');
const fa = require('react-icons/fa');

const queries = ['react', 'django', 'python', 'javascript', 'tailwind', 'postgres', 'node', 'express', 'docker'];

queries.forEach(q => {
  console.log('---', q, '---');
  console.log('SI:', Object.keys(si).filter(k => k.toLowerCase().includes(q)));
  console.log('FA:', Object.keys(fa).filter(k => k.toLowerCase().includes(q)));
});
