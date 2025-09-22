import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Lightweight in-app router without adding new deps
const routes = {
  home: '/',
  narrowAds: '/figma/narrow-ads',
  saleAds: '/figma/sale-ads',
  banners: '/figma/banners',
};

// Lazy import Figma screens to avoid initial bundle bloat
const LazyNarrowAds = React.lazy(() => import('./components/figmaScreens/NarrowAds'));
const LazySaleAds = React.lazy(() => import('./components/figmaScreens/SaleAds'));
const LazyBanners = React.lazy(() => import('./components/figmaScreens/Banners'));

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [path, setPath] = useState(window.location.pathname);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navigate = (to) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      setPath(to);
    }
  };

  const Nav = () => (
    <nav style={{ display: 'flex', gap: 12, marginTop: 20 }}>
      <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <button onClick={() => navigate(routes.home)}>Home</button>
      <button onClick={() => navigate(routes.narrowAds)}>Narrow Ads</button>
      <button onClick={() => navigate(routes.saleAds)}>Sale Ads</button>
      <button onClick={() => navigate(routes.banners)}>Banners</button>
    </nav>
  );

  const Home = () => (
    <header className="App-header">
      <Nav />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div style={{ marginTop: 24, fontSize: 14 }}>
        Quick Links to Figma screens:{" "}
        <a href={routes.narrowAds} onClick={(e)=>{e.preventDefault(); navigate(routes.narrowAds);}}>Narrow Ads</a>{" | "}
        <a href={routes.saleAds} onClick={(e)=>{e.preventDefault(); navigate(routes.saleAds);}}>Sale Ads</a>{" | "}
        <a href={routes.banners} onClick={(e)=>{e.preventDefault(); navigate(routes.banners);}}>Banners</a>
      </div>
    </header>
  );

  let Screen = Home;
  if (path === routes.narrowAds) {
    Screen = () => (
      <div className="App">
        <Nav />
        <React.Suspense fallback={<div style={{ padding: 20 }}>Loading Narrow Ads…</div>}>
          <LazyNarrowAds />
        </React.Suspense>
      </div>
    );
  } else if (path === routes.saleAds) {
    Screen = () => (
      <div className="App">
        <Nav />
        <React.Suspense fallback={<div style={{ padding: 20 }}>Loading Sale Ads…</div>}>
          <LazySaleAds />
        </React.Suspense>
      </div>
    );
  } else if (path === routes.banners) {
    Screen = () => (
      <div className="App">
        <Nav />
        <React.Suspense fallback={<div style={{ padding: 20 }}>Loading Banners…</div>}>
          <LazyBanners />
        </React.Suspense>
      </div>
    );
  }

  return <Screen />;
}

export default App;
