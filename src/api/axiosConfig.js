import axios from "axios";

export default axios.create({
  baseURL:
    "https://839c-2600-6c58-67f0-c20-6589-6a01-26a1-4df1.ngrok-free.app/", // Installation and Account setup required via Ngrok
  headers: { "ngrok-skip-browser-warning": "true" },
});
