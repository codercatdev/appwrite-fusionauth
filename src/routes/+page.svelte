<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { Client, Account, type Models } from "appwrite";
  import { onMount } from "svelte";
  import Login from "$lib/Login.svelte";
  import Logout from "$lib/Logout.svelte";

  import {
    PUBLIC_APPWRITE_ENDPOINT,
    PUBLIC_APPWRITE_PROJECT,
  } from "$env/static/public";

  const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(PUBLIC_APPWRITE_PROJECT); // Your project ID
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
  <Login />
  Login to see your user information
{/if}
