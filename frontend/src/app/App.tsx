import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary The root component of the application, which composes the providers and the router.
 * @type ui-component
 * @category core
 */
function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
