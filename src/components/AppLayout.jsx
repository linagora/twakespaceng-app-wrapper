import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import { TwakeSpaceNg } from '@/components/Icons/TwakeSpaceNg'
import { TwakeSpaceNgText } from '@/components/Icons/TwakeSpaceNgText'

export const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={TwakeSpaceNg}
        appTextIcon={TwakeSpaceNgText}
        componentsProps={{
          CozyTheme: {
            type: 'auto'
          }
        }}
      />
      <Outlet />
    </>
  )
}
