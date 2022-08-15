
addEventListener("fetch", (event) => {
  // Get the value of the header named `x-forwarded-for`.
  // The value can either be a IPv4 or IPv6 address.
  const addr = connInfo.remoteAddr as Deno.NetAddr;
  const ip = addr.hostname;
  const json = JSON.stringify({ip});

  event.respondWith(
    new Response(json, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }),
  );
});
