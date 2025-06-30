import { createFileRoute } from '@tanstack/react-router'
import PropertyScreen from '../pages/property-screen/property-screen'

export const Route = createFileRoute('/cities_/$name/$id')({
  component: PropertyScreen,
})


