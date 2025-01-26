import React from 'react';

const ThemeSwitcher = () => {
  const themes = ["light", "dark", "cupcake"];

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save theme preference
  };

  React.useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
        <span className="hidden md:inline">Theme</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-52">
        {themes.map((theme) => (
          <li key={theme}>
            <button 
              onClick={() => changeTheme(theme)} 
              className="capitalize w-full text-left px-4 py-2 hover:bg-base-300"
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher; 