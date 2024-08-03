import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mx-auto mt-20 w-[70%] py-6">
            <div className="flex justify-between items-center px-10 py-3 rounded-full shadow-lg bg-black border border-gray-200">
                <div className="flex items-center">
                    <span className="text-sm text-white">© {currentYear} Solid-Components</span>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/AliSinaYOusofi/solid-components" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-all">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.23-.01-.82-.01-1.6-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0112 6.85c.85.004 1.71.114 2.51.334 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.56 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
