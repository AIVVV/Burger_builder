import Axios from "axios";
import { config, settings } from "./api-config";

const instance = Axios.create({
  baseURL: config.baseURL(settings.protocol, settings.serverTwo)
});

export default instance;
