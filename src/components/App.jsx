import React from 'react'
import { useI18n } from 'twake-i18n'

/**
 * URL of the bundled Twake Space NG demo. The demo is a self-contained
 * mockup shipped inside the app (see public/space-ng), copied to
 * /assets/space-ng at build time.
 */
export const DEMO_URL = 'assets/space-ng/index.html'

export const App = () => {
  const { t } = useI18n()

  return (
    <iframe
      id="embeddedApp"
      data-testid="embedded-app"
      title={t('embeddedApp.title')}
      src={DEMO_URL}
      allow="clipboard-read; clipboard-write"
    />
  )
}
