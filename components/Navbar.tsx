'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useSession, signOut } from 'next-auth/react';

export function FireworksLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
      {/* Center circle - Brick Red */}
      <circle cx="50" cy="50" r="8" fill="#B22222" />

      {/* Main rays - Brick Red */}
      <line x1="50" y1="10" x2="50" y2="30" stroke="#B22222" strokeWidth="3" />
      <line x1="50" y1="70" x2="50" y2="90" stroke="#B22222" strokeWidth="3" />
      <line x1="10" y1="50" x2="30" y2="50" stroke="#B22222" strokeWidth="3" />
      <line x1="70" y1="50" x2="90" y2="50" stroke="#B22222" strokeWidth="3" />

      {/* Diagonal rays - Orange */}
      <line x1="65" y1="20" x2="78" y2="33" stroke="#FF6600" strokeWidth="2" />
      <line x1="35" y1="80" x2="22" y2="67" stroke="#FF6600" strokeWidth="2" />
      <line x1="20" y1="35" x2="33" y2="22" stroke="#FF6600" strokeWidth="2" />
      <line x1="80" y1="65" x2="67" y2="78" stroke="#FF6600" strokeWidth="2" />

      {/* Sparkle dots - Gold */}
      <circle cx="50" cy="15" r="2" fill="#FFD700" />
      <circle cx="85" cy="50" r="2" fill="#FFD700" />
      <circle cx="50" cy="85" r="2" fill="#FFD700" />
      <circle cx="15" cy="50" r="2" fill="#FFD700" />
      <circle cx="75" cy="25" r="2" fill="#FFD700" />
      <circle cx="75" cy="75" r="2" fill="#FFD700" />
      <circle cx="25" cy="75" r="2" fill="#FFD700" />
      <circle cx="25" cy="25" r="2" fill="#FFD700" />
    </svg>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-cream border-b-4 border-brick-red sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo + SPARK */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <FireworksLogo />
            <span className="text-2xl font-bold text-dark-brown font-playfair">SPARK</span>
          </Link>

          {/* Center: Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/submit" className="font-bold text-brick-red hover:opacity-80 transition">
              {t('submit')}
            </Link>
            <Link href="/faq" className="text-brown hover:opacity-80 transition">
              {t('faq')}
            </Link>
            <Link href="/ground-rules" className="text-brown hover:opacity-80 transition">
              {t('groundRules')}
            </Link>
            <Link href="/papers" className="text-brown hover:opacity-80 transition">
              {t('browsePapers')}
            </Link>
          </div>

          {/* Right: Auth Links */}
          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                <Link href="/dashboard" className="text-brown hover:opacity-80 transition">
                  {session.user?.name}
                </Link>
                {(session.user as any)?.role === 'admin' && (
                  <Link href="/admin" className="text-brick-red font-semibold hover:opacity-80 transition">
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="btn-primary text-sm"
                >
                  {t('logout')}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login" className="btn-outline text-sm">
                  {t('login')}
                </Link>
                <Link href="/signup" className="btn-primary text-sm">
                  {t('signup')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 border-t border-soft-beige pt-4">
            <Link href="/submit" className="font-bold text-brick-red">
              {t('submit')}
            </Link>
            <Link href="/faq" className="text-brown">
              {t('faq')}
            </Link>
            <Link href="/ground-rules" className="text-brown">
              {t('groundRules')}
            </Link>
            <Link href="/papers" className="text-brown">
              {t('browsePapers')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
