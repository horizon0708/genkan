import React from 'react';
import './App.css';
import './main.css';
import { KanbanPage } from './pages/kanban';
import { Provider } from "react-redux";
import { store } from './state';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <KanbanPage />
      </Provider>
    </div>
  );
}

export default App;
