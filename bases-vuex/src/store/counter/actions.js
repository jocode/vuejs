import getRandomInt from "../../helpers/getRandomInt";

// async incrementRandomInt(context)
export const incrementRandomInt = async ({ commit }) => {
  commit("setLoading", true);
  const randomInt = await getRandomInt();
  commit("incrementBy", randomInt);
  commit("setLoading", false);
};
