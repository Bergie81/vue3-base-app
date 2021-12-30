// $store.state.app
const state = {
  text: "100 Cups of Coffee",
  isOpenMobileNav: true,
};
const mutations = {
  OPEN_MOBILE_MENU(state, isOpen) {
    state.isOpenMobileNav = isOpen;
  },
};
const actions = {
  openMobileMenu({ commit }, isOpen) {
    commit("OPEN_MOBILE_MENU", isOpen);
  },
};
const getters = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
