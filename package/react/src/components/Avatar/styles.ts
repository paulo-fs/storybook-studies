import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
   borderRadius: '$full',
   display: 'inline-block',
   width: '48px',
   height: '48px',
   orverflow: 'hidden'
})

export const AvatarImage = styled(Avatar.Image, {
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   borderRadius: 'inherit'
})

export const AvatarFallBack = styled(Avatar.Fallback, {
   width: '100%',
   height: '100%',
   borderRadius: 'inherit',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '$gray600',
   color: '$gray800',

   svg: {
      width: '24px',
      height: '24px',
      color: '$gray100'
   }
})