import { createFileRoute } from '@tanstack/react-router'
import LoginScreen from '../pages/login-screen/login-screen'

export const Route = createFileRoute('/login')({
  component: LoginScreen,
})
