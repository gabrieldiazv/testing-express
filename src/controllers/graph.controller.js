const axios = require("axios");

const tenant_id = process.env.TENANT_ID;
const endpoint = `https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token`;
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const graphEndpoint = "https://graph.microsoft.com";

const getToken = async () => {
  const data = {
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret,
    scope: `${graphEndpoint}/.default`,
  };

  console.log('data: ',data)

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    console.log(endpoint)
    const response = await axios.post(endpoint, data, { headers: headers });
    console.log(response.data);
    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.error(error);
  }
};

async function createUserInAzureAD(user) {
  try {
    const token = await getToken();
    // Create user using Microsoft Graph API
    const createUserResponse = await axios.post(
      `https://graph.microsoft.com/v1.0/users`,
      user,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return createUserResponse.data; // Returns the created user data
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getToken,
  createUserInAzureAD,
};
