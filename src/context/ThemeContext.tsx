import React, { createContext, useContext, useReducer, useEffect } from 'react';

type Theme = 'dark' | 'light';

type ThemeState = {
  theme: Theme;
  systemTheme: Theme;
};

type ThemeAction = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_SYSTEM_THEME'; payload: Theme };

const ThemeContext = createContext<ThemeState | undefined>(undefined);
const ThemeDispatchContext = createContext<((action: ThemeAction) => void) | undefined>(undefined);

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return { ...state, theme: newTheme };
    case 'SET_SYSTEM_THEME':
      localStorage.setItem('theme', action.payload);
      return { ...state, theme: action.payload, systemTheme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'dark',
    systemTheme: 'dark'
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    
    if (savedTheme) {
      dispatch({ type: 'SET_SYSTEM_THEME', payload: savedTheme });
    } else {
      dispatch({ type: 'SET_SYSTEM_THEME', payload: systemTheme });
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeDispatch = () => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};