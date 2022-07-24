const args = process.argv.slice(2);

const nome = args[0].split("=")[1];
const age = args[1].split("=")[1];

console.log(`O nome dele é ${nome} e ele tem ${age} anos!`);
