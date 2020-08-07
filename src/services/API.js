const ENDPOINT = 'https://api.github.com/users/MargaritaBerjon/repos';

const getProjects = () => fetch(ENDPOINT)
  .then(response => response.json())
  .then(projects => projects)

export { getProjects };