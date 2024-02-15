const user = 'amandamachadodev';

export default async function getRepositories() {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);;
    const result = await response.json();
    return result;
}