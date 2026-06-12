import { render, screen } from '@testing-library/react'
import React from 'react'

import { App, DEMO_URL } from './App'

describe('App', () => {
  it('renders the iframe pointing at the bundled Space NG demo', () => {
    render(<App />)

    const iframe = screen.queryByTestId('embedded-app')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', DEMO_URL)
  })
})
