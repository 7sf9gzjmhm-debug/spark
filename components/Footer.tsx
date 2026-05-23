'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-soft-beige border-t-4 border-brick-red mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About SPARK */}
          <div>
            <h3 className="font-bold text-dark-brown mb-3 font-playfair">About SPARK</h3>
            <p className="text-brown text-sm">{t('spark')}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-dark-brown mb-3 font-playfair">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-brown hover:text-brick-red transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/papers" className="text-brown hover:text-brick-red transition">
                  Browse Papers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-brown hover:text-brick-red transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-brown hover:text-brick-red transition">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-dark-brown mb-3 font-playfair">Contact</h3>
            <p className="text-brown text-sm">
              {t('wechat')}
              <span className="font-semibold">annihilate_0120</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brown/20 pt-8">
          <p className="text-center text-brown text-sm">
            {t('copyright').replace('2024', year.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
