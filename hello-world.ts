
addEventListener("fetch", (event) => {
  // Get the value of the header named `x-forwarded-for`.
  // The value can either be a IPv4 or IPv6 address.
  const ip = event.request.headers.get("x-forwarded-for");

  event.respondWith(
    new Response(`Hello, ${ip}`, {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  );
});
