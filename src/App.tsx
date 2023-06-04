import type { Component } from 'solid-js';
import Router from "@/Router";

const App: Component = () => {
  return (
    <div class='h-screen flex flex-col'>
      <Router />
    </div>
  );
};

export default App;
