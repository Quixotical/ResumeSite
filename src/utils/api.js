import axios from 'axios';

export const getGithubInfo = async () => {

  let user = await axios.get('https://api.github.com/users/quixotical');
  let repos = await axios.get('https://api.github.com/users/quixotical/repos');
  return [user.data, repos.data];
}

export const getBitBucketInfo = async () => {

  let user = await axios.get('https://api.bitbucket.org/2.0/users/quixotical');
  let repos = await axios.get('https://api.bitbucket.org/2.0/repositories/quixotical');

  return [user.data, repos.data];
}
