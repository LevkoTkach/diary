import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotePage from './pages/NotePage';
import NoteListPage from './pages/NoteListPage';
import LoginPage from './pages/LoginPage';
import Settings from './pages/Settings';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [root] = useState(() => localStorage.getItem("getStarted") ? ("/main") : ("/login"));
  useEffect(() => {
    if (localStorage.getItem('dark-theme') === 'true') {
      document.body.classList.add("dark-theme");
    }
  });
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" exact={true} component={LoginPage} />
            <Route path="/main/:date?" exact={true} component={MainPage} />
            <Route path="/settings" exact={true} component={Settings} />
            <Route path="/note/:date/:id?" exact={true} component={NotePage} />
            <Route path="/note-list/:date" exact={true} component={NoteListPage} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
