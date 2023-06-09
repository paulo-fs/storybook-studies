import * as Checkbox from "@radix-ui/react-checkbox";
import { styled, keyframes } from "../../styles";

export const CheckboxContainer = styled(Checkbox.Root, {
   all: 'unset',
   width: 24,
   height: 24,
   backgroundColor: '$gray900',
   borderRadius: '$xs',
   lineHeight: 0,
   cursor: 'pointer',
   overflow: 'hidden',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   border: '2px solid $gray900',

   '&[data-state="checked"]': {
      backgroundColor: '$ignite300'
   },

   '&:focus': {
      border: '2px solid $ignite300',
   }
})

const slideIn = keyframes({
   from: {
      transform: 'translateY(-100%)',
   },
   to: {
      transform: 'translateY(0)'
   }
})

const slideOut = keyframes({
   from: {
      transform: 'translateY()',
   },
   to: {
      transform: 'translateY(-100%)'
   }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
   color: '$white',
   width: 16,
   height: 16,

   '&[data-state="checked"]': {
      animation: `${slideIn} 200ms ease-out`
   },

   '&[data-state="unchecked"]': {
      animation: `${slideOut} 200ms ease-out`
   }
})