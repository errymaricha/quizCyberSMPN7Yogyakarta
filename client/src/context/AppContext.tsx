import { createContext, type ReactNode, useContext, useEffect, useState } from 'react';

interface AppContextValue {
  appName: string;
  appSubtitle: string;
  allowedDomain: string;
  /** Configured base URL for phones; empty means use the current origin. */
  publicUrl: string;
  /** Full display string */
  displayName: string;
  /** Short brand string */
  brandName: string;
}

const DEFAULT_APP_NAME = 'Quis SMP Negri 12 Yogyakarta Voxpayana';
const DEFAULT_SUBTITLE = 'Cyber Challenge: Klik atau Skip? — Think Before You Click!';

const AppContext = createContext<AppContextValue>({
  appName: DEFAULT_APP_NAME,
  appSubtitle: DEFAULT_SUBTITLE,
  allowedDomain: '',
  publicUrl: '',
  displayName: DEFAULT_APP_NAME,
  brandName: 'SMPN 12 VOXPAYANA',
});

function buildDisplay(
  appName: string,
  appSubtitle: string,
  allowedDomain: string,
  publicUrl: string,
): AppContextValue {
  const trimmed = appName.trim() || DEFAULT_APP_NAME;
  return {
    appName: trimmed,
    appSubtitle: appSubtitle.trim() || DEFAULT_SUBTITLE,
    allowedDomain: allowedDomain.trim(),
    publicUrl: publicUrl.trim(),
    displayName: trimmed,
    brandName: trimmed,
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<AppContextValue>(buildDisplay('', '', '', ''));

  useEffect(() => {
    fetch('/api/public')
      .then((r) => r.json())
      .then(
        ({
          appName,
          appSubtitle,
          allowedDomain,
          publicUrl,
        }: {
          appName: string;
          appSubtitle: string;
          allowedDomain?: string;
          publicUrl?: string;
        }) =>
          setValue(buildDisplay(appName, appSubtitle ?? '', allowedDomain ?? '', publicUrl ?? '')),
      )
      .catch(() => {});
  }, []);

  // Keep browser tab title in sync
  useEffect(() => {
    document.title = value.displayName;
  }, [value.displayName]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
