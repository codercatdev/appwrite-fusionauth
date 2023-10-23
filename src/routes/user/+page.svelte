<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { Client, Account, type Models } from "appwrite";
  import { onMount } from "svelte";
  import Logout from "$lib/Logout.svelte";
  const client = new Client()
    .setEndpoint("http://localhost/v1") // Your API Endpoint
    .setProject("6536fc4083fb541ceaf0"); // Your project ID
  const account = new Account(client);
  const session: Writable<undefined | Models.Session> = writable(undefined);

  onMount(async () => {
    const userSession = await account.getSession("current");
    console.log(userSession);
    session.set(userSession);
  });
</script>

{#if $session}
  <Logout />
  <div class="column">
    {#each Object.entries($session) as [k, v]}
      <div class="row">
        {k}:{v}
      </div>
    {/each}
  </div>
{:else}
  Fetching User...
{/if}
