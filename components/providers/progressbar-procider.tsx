'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import React from 'react'

const ProgressbarProvider = ({
   children
}: {
   children: React.ReactNode
}) => {
  return (
   <>
   {children}
      <ProgressBar
         height="4px"
         color="#47b7fc"
         options={{ showSpinner: false }}
         shallowRouting
      />
   </>
  )
}

export default ProgressbarProvider