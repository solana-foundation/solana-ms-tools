import { create } from 'storybook/theming'

export const darkCustomTheme = create({
  base: 'dark',
  brandTitle: 'Solana MS scaffold kit',
  brandImage: '/logoDark.svg',
})

export const lightCustomTheme = create({
  base: 'light',
  brandTitle: 'Solana MS scaffold kit',
  brandImage: '/logoLight.svg',
})
