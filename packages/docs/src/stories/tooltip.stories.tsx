import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    contentValue: '21 de outubro - Indisponível',
    children: (
      <Box as="button" css={{ cursor: 'pointer' }}>
        <Text>21</Text>
      </Box>
    ),
    open: false,
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
    open: {
      description: 'Controla se o tooltip é mostrado ou não.',
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'O componente tooltip mostra o conteúdo quando o usuário passar o mouse sobre o elemento.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Opened: StoryObj<TooltipProps> = {
  args: {
    open: true,
  },
}
