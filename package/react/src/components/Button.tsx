import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
   all: 'unset',
   borderRadius: '$sm',
   fontSize: '$sm',
   fontWeight: '$medium',
   fontFamily: '$default',
   textAlign: 'center',
   minWidth: 120,

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '$2',

   cursor: 'pointer',

   '&:disabled': {
      cursor: 'not-allowed'
   },

   svg: {
      width: 16,
      height: 16,
   },

   variants: {
      variant: {
         primary: {
            color: '$white',
            backgroundColor: '$ignite500',

            '&:not(:disabled):hover': {
               backgroundColor: '$ignite300'
            },

            '&:disabled': {
               backgroundColor: '$gray200',
            }
         },

         secondary: {
            color: '$ignite300',
            border: '2px solid $ignite500',

            '&:not(:disabled):hover': {
               backgroundColor: '$ignite500',
               color: '$white'
            },

            '&:disabled': {
               color: '$gray200',
               borderColor: '$gray200'
            }
         },

         tertiary: {
            color: '$gray100',

            '&:not(:disabled):hover': {
               color: '$white'
            },

            '&:disabled': {
               color: '$gray200',
               borderColor: '$gray600'
            }
         }
      },

      size: {
         sm: {
            padding: '0 $4',
            height: 38
         },

         md: {
            padding: '0 $4',
            height: 46
         }
      }
   },

   defaultVariants: {
      variant: 'primary',
      size: 'md'
   }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
   as?: ElementType
}

Button.displayName = 'Button'