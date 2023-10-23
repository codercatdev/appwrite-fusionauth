<script>
  // Web SDK
  import { Client, Account } from "appwrite";

  const client = new Client()
    .setEndpoint("http://localhost/v1") // Your API Endpoint
    .setProject("6536fc4083fb541ceaf0"); // Your project ID

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
