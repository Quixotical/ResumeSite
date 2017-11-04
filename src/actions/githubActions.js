export const setGitHubInfo = (user, repos) => {
  return {
    type: "SET_GITHUB_INFO",
    payload: {
      githubInfo: {
          user:{
            username: user.login,
            avatarUrl: user.avatar_url,
            url: user.url
          },
          repos:[{
              name: repos[4].name,
              url: repos[4].url,
            },
            {
              name: repos[2].name,
              url: repos[2].url,
            }
          ]
      },

    }
  }
}
