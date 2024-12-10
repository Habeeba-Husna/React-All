import React, { Suspense } from 'react';

// Lazy-load the Profile component
const Profile = React.lazy(() => import('./Profile'));

function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Profile component only loads when it's needed */}
        <Profile />
      </Suspense>
    </div>
  );
}

export default App;
