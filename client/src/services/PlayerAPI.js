import API from "@/services/API";

export default {
  getPlayers() {
    return API().get("/players");
  }
};
