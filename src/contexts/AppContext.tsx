'use client'

import { createContext, useState } from 'react'
import type { AppContextValues, ChildrenInterface } from '@/interfaces/general'
import { DEFAULT_APP_CONTEXT_VALUES } from '@/constants/general'

export const AppContext = createContext<AppContextValues>(DEFAULT_APP_CONTEXT_VALUES)

export default function AppProvider ({ children }: ChildrenInterface) {
  const [navbarStatus, setNavbarStatus] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{
      navbarStatus,
      setNavbarStatus
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
