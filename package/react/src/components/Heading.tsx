/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
   fontFamily: '$default',
   lineHeight: '$shorter',
   margin: 0,
   color: '$gray100',

   variants: {
      size: {
         sm: { fontSize: '$xl' },
         md: { fontSize: '$xl' },
         lg: { fontSize: '$xl' },
         '2xl': { fontSize: '$xl' },
         '3xl': { fontSize: '$xl' }
      },
   },

   defaultVariants: {
      size: 'md',
   },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
   as?: ElementType
}

Heading.displayName = 'Heading'