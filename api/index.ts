// Vercel Edge Function entrypoint.
// Re-exports the SSR worker handler built by Vite (`bun run build`).
// The worker uses standard Web Fetch API (Request/Response) and is
// fully compatible with Vercel's Edge runtime.
//
// Static files in `dist/client/assets/*` are served directly by Vercel
// (they take priority over the rewrite to /api). All other paths are
// routed here so TanStack Start handles SSR + deep links + refresh.

// @ts-expect-error — built artifact, no types
import handler from "../dist/server/index.js";

export const config = {
  runtime: "nodejs20.x",
};

export default function fetch(request: Request, ctx: unknown) {
  return (handler as { fetch: (req: Request, env: unknown, ctx: unknown) => Response | Promise<Response> })
    .fetch(request, {}, ctx);
}
