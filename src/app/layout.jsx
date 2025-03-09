import '@mantine/core/styles.css';
import React from 'react';
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps
} from '@mantine/core';
import { theme } from '@config/theme';

export const metadata = {
  title: 'Qari',
  description:
    'Qari is a modern Quran player app that lets you listen to the Holy Quran with ease. Explore Surahs, choose from multiple reciters, and enjoy a seamless, immersive experience.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
