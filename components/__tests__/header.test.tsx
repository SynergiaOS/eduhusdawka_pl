import { render, screen } from '@testing-library/react'
import Header from '../header'

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    
    const logo = screen.getByText('EduHustawka')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Strona główna')).toBeInTheDocument()
    expect(screen.getByText('Usługi')).toBeInTheDocument()
    expect(screen.getByText('O mnie')).toBeInTheDocument()
    expect(screen.getByText('Kontakt')).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    render(<Header />)
    
    const homeLink = screen.getByRole('link', { name: /strona główna/i })
    expect(homeLink).toHaveAttribute('href', '/')
    
    const servicesLink = screen.getByRole('link', { name: /usługi/i })
    expect(servicesLink).toHaveAttribute('href', '/uslugi')
    
    const aboutLink = screen.getByRole('link', { name: /o mnie/i })
    expect(aboutLink).toHaveAttribute('href', '/o-mnie')
  })

  it('renders contact button', () => {
    render(<Header />)
    
    const contactButton = screen.getByRole('link', { name: /kontakt/i })
    expect(contactButton).toBeInTheDocument()
    expect(contactButton).toHaveAttribute('href', '/rezerwacja')
  })
})
