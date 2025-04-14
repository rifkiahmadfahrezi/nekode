'use client'
import { ProgressProvider  as ProgressBar } from '@bprogress/next/app';
import { progressBar } from '@/config/site';

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
         height={progressBar.height}
         color={progressBar.color}
         options={{ showSpinner: progressBar.spinner }}
         shallowRouting
      />
   </>
  )
}

export default ProgressbarProvider