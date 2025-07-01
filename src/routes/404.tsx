import { createFileRoute } from '@tanstack/react-router'
import PageNotFound from '../pages/page-not-found/page-not-found'

export const Route = createFileRoute('/404')({
  component: PageNotFound,
})

