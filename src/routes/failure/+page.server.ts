/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  return {error: url.searchParams.get('error') };
}