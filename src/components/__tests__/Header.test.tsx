import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

// Mock wouter's useLocation hook
vi.mock('wouter', () => ({
  Link: ({ href, children, className, onClick, ...props }: any) => (
    <a href={href} className={className} onClick={onClick} {...props}>
      {children}
    </a>
  ),
  useLocation: () => ['/'],
}));

describe('Header', () => {
  describe('Component Rendering', () => {
    it('renders the SGT logo', () => {
      render(<Header />);
      expect(screen.getByText('SGT')).toBeInTheDocument();
      expect(screen.getByText('Infrastructure Consulting')).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
      render(<Header />);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];
      navItems.forEach(item => {
        const links = screen.getAllByText(item);
        expect(links.length).toBeGreaterThan(0);
      });
    });

    it('renders the "Get in Touch" button', () => {
      render(<Header />);
      const buttons = screen.getAllByText('Get in Touch');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('renders the skip to main content link', () => {
      render(<Header />);
      expect(screen.getByText('Skip to main content')).toBeInTheDocument();
    });
  });

  describe('Mobile Menu Interactions', () => {
    it('toggles mobile menu when hamburger button is clicked', async () => {
      const user = userEvent.setup();
      render(<Header />);

      // Mobile menu should not be visible initially
      const mobileMenuButton = screen.getByLabelText('Open navigation menu');
      expect(mobileMenuButton).toBeInTheDocument();

      // Click to open mobile menu
      await user.click(mobileMenuButton);

      // Check that mobile menu is now visible
      const mobileMenu = screen.getByRole('dialog', { name: 'Mobile navigation menu' });
      expect(mobileMenu).toBeInTheDocument();

      // Check for close button
      const closeButton = screen.getByLabelText('Close navigation menu');
      expect(closeButton).toBeInTheDocument();
    });

    it('closes mobile menu when menu item is clicked', async () => {
      const user = userEvent.setup();
      render(<Header />);

      // Open mobile menu
      const openButton = screen.getByLabelText('Open navigation menu');
      await user.click(openButton);

      // Verify menu is open
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Click on a navigation link in mobile menu
      const mobileMenu = screen.getByRole('dialog');
      const homeLink = mobileMenu.querySelector('a[href="/"]');
      expect(homeLink).toBeInTheDocument();

      if (homeLink) {
        await user.click(homeLink);
      }

      // Mobile menu should close (dialog should not be in document)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('closes mobile menu when Escape key is pressed', async () => {
      const user = userEvent.setup();
      render(<Header />);

      // Open mobile menu
      const openButton = screen.getByLabelText('Open navigation menu');
      await user.click(openButton);

      // Verify menu is open
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Press Escape key
      await user.keyboard('{Escape}');

      // Mobile menu should close
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Navigation Testing', () => {
    it('renders correct navigation links with proper hrefs', () => {
      render(<Header />);

      const expectedLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
      ];

      expectedLinks.forEach(({ name, href }) => {
        const links = screen.getAllByText(name);
        const linkWithHref = links.find(link =>
          link.closest('a')?.getAttribute('href') === href
        );
        expect(linkWithHref).toBeInTheDocument();
      });
    });

    it('highlights active navigation item', () => {
      // Mock useLocation to return current path
      vi.doMock('wouter', () => ({
        Link: ({ href, children, className }: any) => (
          <a href={href} className={className}>{children}</a>
        ),
        useLocation: () => ['/about'],
      }));

      render(<Header />);

      // The active link should have "text-primary" class
      const links = screen.getAllByText('About');
      const desktopLink = links.find(link => {
        const element = link.closest('a');
        return element?.className.includes('text-primary');
      });

      expect(desktopLink).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels on navigation', () => {
      render(<Header />);

      const nav = screen.getByRole('navigation', { name: 'Main navigation' });
      expect(nav).toBeInTheDocument();
    });

    it('has proper ARIA labels on mobile menu button', () => {
      render(<Header />);

      const button = screen.getByLabelText('Open navigation menu');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates ARIA attributes when mobile menu is toggled', async () => {
      const user = userEvent.setup();
      render(<Header />);

      const button = screen.getByLabelText('Open navigation menu');

      // Initially closed
      expect(button).toHaveAttribute('aria-expanded', 'false');

      // Click to open
      await user.click(button);

      const closeButton = screen.getByLabelText('Close navigation menu');
      expect(closeButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('sets aria-current on active page', () => {
      render(<Header />);

      // Find the home link (active since useLocation mock returns '/')
      const links = screen.getAllByText('Home');
      const activeLink = links.find(link =>
        link.closest('a')?.getAttribute('aria-current') === 'page'
      );

      expect(activeLink).toBeTruthy();
    });
  });
});
