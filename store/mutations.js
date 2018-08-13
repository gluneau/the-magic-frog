export default {
  login(state, user) {
    state.user = user;
  },
  logout(state) {
    state.user = null;
  },
  setCurrentCommands(state, currentCommands) {
    state.currentCommands = currentCommands;
  },
  setStories(state, stories) {
    state.stories = stories;
  },
  setAllStoryPosts(state, allStoryPosts) {
    state.allStoryPosts = allStoryPosts;
  },
  setContributors(state, contributors) {
    state.contributors = contributors;
  },
  setDelegators(state, delegators) {
    state.delegators = delegators;
  },
  setCurators(state, curators) {
    state.curators = curators;
  },
  setRsharesToSBDFactor(state, rsharesToSBDFactor) {
    state.rsharesToSBDFactor = rsharesToSBDFactor;
  },
};
