const axios = require("axios");
async function quickstart() {
  try {
    const res = await axios.post("https://172.16.20.27/api/v1/auth/tokens/", {
      grant_type: "password",
      username: "admin",
      connection: "",
      password: "Avalora2023..",
      domain: "",
      auth_domain: "",
      refresh_token_revoke_unused_in: 60,
      client_id: "837c840d-75dd-4b4f-a318-79cb16ca248d",
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = quickstart;
