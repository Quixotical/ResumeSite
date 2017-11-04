export const setBitBucketInfo = (user, repos) => {
  return {
    type: "SET_BITBUCKET_INFO",
    payload: {
      bitBucketInfo: {
          user:{
            username: user.username,
            avatarUrl: user.links.avatar.href,
            url: user.links.html.href
          },
          repoCount:repos.values.length
      },
    }
  }
}
