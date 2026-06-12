import React from 'react'

/**
 * URL of the bundled Twake Space NG demo. The demo is a self-contained
 * mockup shipped inside the app (see public/space-ng), copied to
 * /assets/space-ng at build time.
 */
export const DEMO_URL = 'assets/space-ng/index.html'

export const App = () => {
  return (
    <iframe
      id="embeddedApp"
      data-testid="embedded-app"
      title="Space NG"
      src={DEMO_URL}
      allow="clipboard-read; clipboard-write"
    />
  )
}
