import { render, screen } from './test-utils'
import '@testing-library/jest-dom/'

import App from '../components/App'

beforeEach(() => { render(<App />) })

test('"/" - it should render the homepage and layout elements', () => {
    const headerNode = screen.getByRole('banner')
    const todoTitleNode = screen.getByRole('heading', { name: /encuentra tu artista favorito/i })

    expect(headerNode).toBeInTheDocument()
    expect(todoTitleNode).toBeInTheDocument()
}) 


test('"/" - it should render the homepage and buttons', () => {
    const musicosButton = screen.getByRole('button', { name: /músicos/i })
    const escritoresButton = screen.getByRole('button', { name: /escritores/i })
    const actoresButton = screen.getByRole('button', { name: /actores/i })
    const pintoresButton = screen.getByRole('button', { name: /pintores/i })

    expect(musicosButton).toBeInTheDocument()
    expect(escritoresButton).toBeInTheDocument()
    expect(actoresButton).toBeInTheDocument()
    expect(pintoresButton).toBeInTheDocument()
}) 