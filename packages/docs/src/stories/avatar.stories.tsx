import { Avatar, AvatarProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ricardorhv.png',
    alt: 'Ricardo Vinciguerra',
  },
  argTypes: {
    src: {
      description: 'Caminho da imagem',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'Texto alternativo',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Quando a imagem não for carregada ou demorar para carregar será mostrado uma imagem como `fallback`',
      },
    },
  },
}
