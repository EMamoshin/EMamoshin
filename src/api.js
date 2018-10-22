import Octokit from '@octokit/rest';

export default new Octokit({
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'TOCTEAM sample',
  },
  baseUrl: 'https://api.github.com'
});