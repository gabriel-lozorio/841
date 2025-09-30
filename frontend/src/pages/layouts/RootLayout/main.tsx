import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary The main layout for the application, including header, main content, and footer.
 * @type layout-component
 * @category layout
 */
export const RootLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <span className="font-bold">Counter App</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with modern frontend architecture.
          </p>
        </div>
      </footer>
    </div>
  );
};
