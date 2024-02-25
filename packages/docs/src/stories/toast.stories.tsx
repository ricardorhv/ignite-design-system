import { Button, Toast, ToastProps } from '@ricardorhv-ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    children: <Button>Agendar</Button>,
    defaultOpen: false,
  },
  argTypes: {
    children: {
      description: 'Componente trigger que irá abrir o Toast',
      control: {
        type: 'null',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Opened: StoryObj<ToastProps> = {
  args: {
    defaultOpen: true,
  },
}
