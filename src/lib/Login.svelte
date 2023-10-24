<script>
  // Web SDK
  import { Client, Account } from "appwrite";

  import {
    PUBLIC_APPWRITE_ENDPOINT,
    PUBLIC_APPWRITE_PROJECT,
  } from "$env/static/public";
  const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(PUBLIC_APPWRITE_PROJECT); // Your project ID

  const account = new Account(client);
</script>

<button
  on:click={() =>
    account.createOAuth2Session(
      "fusionauth",
      "http://localhost:5173",
      "http://localhost:5173/failure"
    )}
>
  Login
</button>
