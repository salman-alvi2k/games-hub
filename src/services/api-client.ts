import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: "346a4e36c6a44822b0d2f10b273196f3",
});
