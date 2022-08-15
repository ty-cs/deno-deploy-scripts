import { ConnInfo, serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request, connInfo: ConnInfo) {
  const addr = connInfo.remoteAddr as Deno.NetAddr;
  const ip = addr.hostname;
  const json = JSON.stringify({ip});

  return new Response(json, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
  });
}

serve(handler);
