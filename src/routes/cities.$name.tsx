import { createFileRoute } from '@tanstack/react-router'
import MainScreen from '../pages/main-screen/main-screen'

export const Route = createFileRoute('/cities/$name')({
  component: MainScreen,
})

