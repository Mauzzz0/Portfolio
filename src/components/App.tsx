import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/Main';

const App = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      {/*<Route path="/" exact>*/}
      {/*  <ProtectedRoute component={MainPage} isAuth={auth.isAuth} />*/}
      {/*</Route>*/}
      {/*<Route path="*">*/}
      {/*  <ProtectedRoute component={MainPage} isAuth={auth.isAuth} />*/}
      {/*</Route>*/}
    </Switch>
  );
};

export default App;
