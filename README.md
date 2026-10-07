# Next 16.4: `turbopackSharedRuntime` + nonce CSP + `cacheComponents` breaks hydration

```bash
npm install
npm run build
npm start
```

Open http://localhost:3000 and look at the console.

- **Default (`turbopackSharedRuntime` on):** two inline scripts in the prerendered shell have no `nonce` attribute: the Turbopack chunk-group bootstrap `<script id="_R_">` and React's `$RT` marker. The CSP blocks them, the client runtime never starts (`window.next` is undefined), and the counter button does nothing.
- **With `turbopackSharedRuntime: false`** (uncomment it in `next.config.ts`, then rebuild): the bootstrap is an external script allowed by `'self'`, the page hydrates, and the button works. React's `$RT` marker is still blocked, harmlessly.

The CSP comes from `proxy.ts`, following the Next.js CSP guide.
