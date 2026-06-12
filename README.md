# Twake Space NG app wrapper

A Twake Workplace "shell" web application that ships the **Twake Space NG**
demo — a high-fidelity mockup of the next-generation Twake Space (feed, chat,
files, tasks, calendar, mail and AI under a single tab bar).

The application is a thin shell: it renders the Twake bar (through the
`cozy-bar` React components, **not** an inline script) and an iframe pointing to
the bundled demo.

## The bundled demo

Unlike the other Twake app wrappers, this app does **not** embed an external
service through a flag. The demo is fully self-contained and shipped inside the
app under `public/space-ng/` (copied to `/assets/space-ng/` at build time). The
iframe loads `/assets/space-ng/index.html`.

To update the demo, replace the files in `public/space-ng/`
(`index.html`, `styles.css`, `app.js`, `assets/`).

## Development

This project uses [Rsbuild](https://rsbuild.dev) through the shared
`rsbuild-config-cozy-app` preset. Node version is pinned in `.nvmrc`.

```sh
nvm use
yarn install
yarn start     # dev server served through a local Twake stack
yarn build     # production build into ./build
yarn lint      # eslint + stylint
yarn test      # jest
```

## Publication

Publication to the Twake application registry is automated through GitHub
Actions (`.github/workflows/ci-cd.yml`):

- a **push to `master`** publishes to the `dev` channel,
- a **tag `X.Y.Z`** publishes to the `stable` channel,
- a **tag `X.Y.Z-beta.N`** publishes to the `beta` channel.

Publication relies on `cozy-app-publish` and requires the following repository
secrets:

| Secret | Purpose |
| --- | --- |
| `REGISTRY_TOKEN` | Twake registry editor token |
| `DOWNCLOUD_SSH_KEY` | SSH key used to upload the build to downcloud |

To bump the version, run the **Create Bump PR** workflow
(`.github/workflows/create-bump-pr.yml`) which updates `package.json` and
`manifest.webapp` and opens a pull request.

## License

[AGPL-3.0](./LICENSE)
