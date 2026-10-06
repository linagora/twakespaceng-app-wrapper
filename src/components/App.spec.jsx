import { render, screen } from '@testing-library/react'
import React from 'react'
import I18n from 'twake-i18n'

import { App, DEMO_URL } from './App'

import en from '@/locales/en.json'

const renderApp = () =>
  render(
    <I18n lang="en" dictRequire={() => en}>
      <App />
    </I18n>
  )

describe('App', () => {
  it('renders the iframe pointing at the bundled Space NG demo', () => {
    renderApp()

    const iframe = screen.queryByTestId('embedded-app')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('title', 'Embedded Space NG demo')
    expect(iframe).toHaveAttribute('src', DEMO_URL)
  })
})
