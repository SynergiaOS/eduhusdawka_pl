'use client';

import { Disclosure, Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';

import { CtaPopoverButton } from './cta-popover-button';
import { navLinks, type NavLink, type NavLinkChild } from './data';

type SiteHeaderProps = {
  variant?: 'light' | 'dark';
};

type HeaderStyles = {
  wrapperClass: string;
  shellClass: string;
  navLinkClass: string;
  dropdownPanelClass: string;
  dropdownItemClass: string;
  phoneClass: string;
  panelWrapperClass: string;
  panelCardClass: string;
  panelLinkClass: string;
  panelGroupClass: string;
  panelGroupLabelClass: string;
  panelChildLinkClass: string;
  panelGroupChevronClass: string;
  panelCtaBorder: string;
};

const BASE_HEADER_STYLES: Pick<HeaderStyles, 'wrapperClass' | 'panelWrapperClass'> = {
  wrapperClass: 'sticky top-4 z-30 flex justify-center px-4 sm:px-6 lg:px-12',
  panelWrapperClass: 'space-y-4 px-5 pb-6 sm:px-6 lg:hidden',
};

const LIGHT_HEADER_THEME: Omit<HeaderStyles, 'wrapperClass' | 'panelWrapperClass'> = {
  shellClass:
    'w-full max-w-6xl rounded-3xl border border-[#c7ecfa] bg-white/85 backdrop-blur shadow-[0_18px_60px_rgba(71,176,217,0.35)]',
  navLinkClass: 'text-sm font-semibold text-[#0f3b52] transition hover:text-[#1ebaf1]',
  dropdownPanelClass:
    'absolute left-1/2 z-20 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-[#c7ecfa] bg-white p-4 shadow-[0_18px_45px_rgba(71,176,217,0.4)] backdrop-blur',
  dropdownItemClass: 'rounded-xl px-3 py-2 text-sm font-semibold text-[#0f3b52] transition hover:bg-[#e7f9ff]',
  phoneClass:
    'inline-flex items-center gap-2 rounded-full border border-[#bae7f3] px-5 py-2.5 text-sm font-semibold text-[#0f3b52] transition hover:bg-[#e7f9ff]',
  panelCardClass: 'flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-[0_18px_45px_rgba(112,198,224,0.35)]',
  panelLinkClass:
    'flex items-center justify-between rounded-2xl bg-[#e7f9ff] px-4 py-3 text-sm font-semibold text-[#0f3b52] transition hover:bg-white',
  panelGroupClass: 'flex flex-col gap-2 rounded-2xl bg-[#e7f9ff] p-4',
  panelGroupLabelClass: 'text-sm font-semibold text-[#0f3b52]',
  panelChildLinkClass: 'rounded-xl px-3 py-2 text-sm font-semibold text-[#0f3b52] transition hover:bg-white',
  panelGroupChevronClass: 'text-[#7ccde5]',
  panelCtaBorder: 'border-[#bae7f3] text-[#0f3b52] hover:bg-[#e7f9ff]',
};

const DARK_HEADER_THEME: Omit<HeaderStyles, 'wrapperClass' | 'panelWrapperClass'> = {
  shellClass: 'w-full max-w-[1200px] rounded-full border border-white/15 bg-[#052942]/80 backdrop-blur',
  navLinkClass: 'text-sm font-semibold text-white/75 transition hover:text-white',
  dropdownPanelClass:
    'absolute left-1/2 z-20 mt-4 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#043554]/95 p-4 shadow-[0_18px_45px_rgba(6,36,55,0.45)]',
  dropdownItemClass: 'rounded-xl px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10',
  phoneClass:
    'inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15',
  panelCardClass: 'flex flex-col gap-3 rounded-3xl bg-white/5 p-4',
  panelLinkClass:
    'flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10',
  panelGroupClass: 'flex flex-col gap-2 rounded-2xl bg-white/5 p-4',
  panelGroupLabelClass: 'text-sm font-semibold text-white/85',
  panelChildLinkClass: 'rounded-xl px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10',
  panelGroupChevronClass: 'text-white/40',
  panelCtaBorder: 'border-white/20 text-white hover:bg-white/10',
};

export function SiteHeader({ variant = 'light' }: SiteHeaderProps) {
  const isDark = variant === 'dark';
  const styles = getHeaderStyles(isDark);

  return (
    <header className={styles.wrapperClass}>
      <HeaderDisclosure isDark={isDark} styles={styles} />
    </header>
  );
}

type HeaderDisclosureProps = {
  isDark: boolean;
  styles: HeaderStyles;
};

function HeaderDisclosure({ isDark, styles }: HeaderDisclosureProps) {
  const { shellClass } = styles;

  return (
    <Disclosure as="div" className={shellClass}>
      {({ open }) => <HeaderInner isDark={isDark} styles={styles} open={open} />}
    </Disclosure>
  );
}

type HeaderInnerProps = {
  isDark: boolean;
  styles: HeaderStyles;
  open: boolean;
};

function HeaderInner({ isDark, styles, open }: HeaderInnerProps) {
  return (
    <>
      <HeaderTopRow isDark={isDark} styles={styles} open={open} />
      <MobilePanel isDark={isDark} styles={styles} />
    </>
  );
}

type HeaderTopRowProps = {
  isDark: boolean;
  styles: HeaderStyles;
  open: boolean;
};

function HeaderTopRow({ isDark, styles, open }: HeaderTopRowProps) {
  const { phoneClass } = styles;

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
      <HeaderBrand isDark={isDark} />
      <HeaderDesktopNav isDark={isDark} styles={styles} />
      <DesktopActions isDark={isDark} phoneClass={phoneClass} />
      <HeaderMobileToggle isDark={isDark} open={open} />
    </div>
  );
}

function HeaderDesktopNav({ isDark, styles }: { isDark: boolean; styles: HeaderStyles }) {
  const { navLinkClass, dropdownPanelClass, dropdownItemClass } = styles;

  return (
    <DesktopNavigation
      links={navLinks}
      navLinkClass={navLinkClass}
      dropdownPanelClass={dropdownPanelClass}
      dropdownItemClass={dropdownItemClass}
      isDark={isDark}
    />
  );
}

function HeaderMobileToggle({ isDark, open }: { isDark: boolean; open: boolean }) {
  return (
    <Disclosure.Button
      className={`inline-flex items-center justify-center rounded-full p-2 ${
        isDark ? 'bg-white/10 text-white' : 'bg-[#e7f9ff] text-[#0f3b52]'
      } lg:hidden`}
    >
      <span className="sr-only">Otwórz nawigację</span>
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Disclosure.Button>
  );
}

function HeaderBrand({ isDark }: { isDark: boolean }) {
  const logoContainerClass = `flex h-11 w-11 items-center justify-center rounded-2xl ${
    isDark ? 'bg-white/90' : 'bg-white shadow-[0_6px_20px_rgba(23,20,15,0.12)]'
  }`;

  return (
    <Link href="/" className="flex items-center gap-3">
      <BrandMark className={logoContainerClass} />
      <BrandText isDark={isDark} />
    </Link>
  );
}

function BrandMark({ className }: { className: string }) {
  return (
    <div className={className}>
      <Image src="/images/logo.svg" alt="EduHuśtawka" width={36} height={36} priority className="h-9 w-9 object-contain" />
    </div>
  );
}

function BrandText({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex flex-col leading-tight">
      <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#0f2134]'}`}>EduHuśtawka</span>
      <span className={`text-xs ${isDark ? 'text-white/65' : 'text-[#4a6a7a]'}`}>
        Empatyczne wsparcie w Białymstoku
      </span>
    </div>
  );
}

function DesktopActions({ isDark, phoneClass }: { isDark: boolean; phoneClass: string }) {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Link href="tel:+48531509008" className={phoneClass}>
        <Phone aria-hidden className="h-4 w-4" />
        +48 531 509 008
      </Link>
      <CtaPopoverButton label="Umów konsultację" tone={isDark ? 'dark' : 'light'} />
    </div>
  );
}

type MobilePanelProps = {
  isDark: boolean;
  styles: HeaderStyles;
};

function MobilePanel({ isDark, styles }: MobilePanelProps) {
  const {
    panelWrapperClass,
    panelCardClass,
    panelLinkClass,
    panelGroupClass,
    panelGroupLabelClass,
    panelChildLinkClass,
    panelGroupChevronClass,
    panelCtaBorder,
  } = styles;

  return (
    <Disclosure.Panel className={panelWrapperClass}>
      <div className={panelCardClass}>
        <MobileNavigationLinks
          links={navLinks}
          panelLinkClass={panelLinkClass}
          panelGroupClass={panelGroupClass}
          panelGroupLabelClass={panelGroupLabelClass}
          panelChildLinkClass={panelChildLinkClass}
          panelGroupChevronClass={panelGroupChevronClass}
        />
      </div>
      <MobileActions isDark={isDark} panelCtaBorder={panelCtaBorder} />
    </Disclosure.Panel>
  );
}

function MobileActions({ isDark, panelCtaBorder }: { isDark: boolean; panelCtaBorder: string }) {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="tel:+48531509008"
        className={`w-full rounded-full border px-5 py-3 text-center text-sm font-semibold transition ${panelCtaBorder}`}
      >
        Zadzwoń do mnie
      </Link>
      <CtaPopoverButton mobile label="Umów konsultację" tone={isDark ? 'dark' : 'light'} />
    </div>
  );
}

function getHeaderStyles(isDark: boolean): HeaderStyles {
  const theme = isDark ? DARK_HEADER_THEME : LIGHT_HEADER_THEME;
  return {
    ...BASE_HEADER_STYLES,
    ...theme,
  };
}

type DesktopNavigationProps = {
  links: NavLink[];
  navLinkClass: string;
  dropdownPanelClass: string;
  dropdownItemClass: string;
  isDark: boolean;
};

function DesktopNavigation({ links, navLinkClass, dropdownPanelClass, dropdownItemClass, isDark }: DesktopNavigationProps) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) =>
        link.children ? (
          <ServicesPopover
            key={link.label}
            label={link.label}
            items={link.children}
            navLinkClass={navLinkClass}
            dropdownPanelClass={dropdownPanelClass}
            dropdownItemClass={dropdownItemClass}
            isDark={isDark}
          />
        ) : (
          <Link key={link.label} href={link.href ?? '#'} className={navLinkClass}>
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}

type ServicesPopoverProps = {
  label: string;
  items: NavLinkChild[];
  navLinkClass: string;
  dropdownPanelClass: string;
  dropdownItemClass: string;
  isDark: boolean;
};

function ServicesPopover({ label, items, navLinkClass, dropdownPanelClass, dropdownItemClass, isDark }: ServicesPopoverProps) {
  const activeChevronClass = isDark ? 'text-white' : 'text-[#1ebaf1]';

  return (
    <Popover className="relative">
      {({ open }) => {
        const chevronClasses = open ? `rotate-180 ${activeChevronClass}` : '';

        return (
          <>
            <Popover.Button className={`${navLinkClass} inline-flex items-center gap-2 focus:outline-none`}>
              <span>{label}</span>
              <ChevronDown className={`h-4 w-4 transition ${chevronClasses}`} aria-hidden />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <Popover.Panel className={dropdownPanelClass}>
                <div className="flex flex-col gap-1">
                  {items.map((item) => (
                    <Link key={item.label} href={item.href} className={dropdownItemClass}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        );
      }}
    </Popover>
  );
}

type MobileNavigationLinksProps = {
  links: NavLink[];
  panelLinkClass: string;
  panelGroupClass: string;
  panelGroupLabelClass: string;
  panelChildLinkClass: string;
  panelGroupChevronClass: string;
};

function MobileNavigationLinks({
  links,
  panelLinkClass,
  panelGroupClass,
  panelGroupLabelClass,
  panelChildLinkClass,
  panelGroupChevronClass,
}: MobileNavigationLinksProps) {
  return (
    <>
      {links.map((link) =>
        link.children ? (
          <div key={link.label} className={panelGroupClass}>
            <div className="flex items-center justify-between">
              <span className={panelGroupLabelClass}>{link.label}</span>
              <ChevronRight className={`h-4 w-4 ${panelGroupChevronClass}`} aria-hidden />
            </div>
            <div className="flex flex-col gap-2">
              {link.children.map((child) => (
                <Link key={child.label} href={child.href} className={panelChildLinkClass}>
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={link.label} href={link.href ?? '#'} className={panelLinkClass}>
            <span>{link.label}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        )
      )}
    </>
  );
}
