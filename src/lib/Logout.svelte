<script lang="ts">
  // Web SDK
  import { Client, Account } from "appwrite";

  const client = new Client()
    .setEndpoint("http://localhost/v1") // Your API Endpoint
    .setProject("6536fc4083fb541ceaf0"); // Your project ID

  const account = new Account(client);
</script>

<button
  on:click={() =>
    account.deleteSessions().then(() => (window.location.href = "/"))}
>
  Logout
</button>
