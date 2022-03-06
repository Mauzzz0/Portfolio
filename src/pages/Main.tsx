import React from 'react';
import MainLayout from '../components/Layouts/MainLayout';
import PersonalData from '../components/Data/PersonalData';
// import Body from '../components/Body/Body';

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <PersonalData />
      {/*<SideMenu />*/}
      {/*<Main>*/}
      {/*  <Switch>*/}
      {/*    <Route exact path={`/main`}>*/}
      {/*      <Dashboard />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/add-new-client">*/}
      {/*      <AddNewClient />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/portal-branding">*/}
      {/*      <PortalBranding />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/clients">*/}
      {/*      <Customers />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/attack-history">*/}
      {/*      <AttackHistory />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/attack-history/:attackType/:id">*/}
      {/*      <ViewingHistory />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/protected-objects">*/}
      {/*      <ProtectedObject />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/logs">*/}
      {/*      <Logs />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/profile">*/}
      {/*      <ProfilePartner />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/notifications">*/}
      {/*      <NotificationSettings />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/main/resources">*/}
      {/*      <Resources />*/}
      {/*    </Route>*/}
      {/*    <Route path="*">*/}
      {/*      <Redirect to="/main" />*/}
      {/*    </Route>*/}
      {/*  </Switch>*/}
      {/*</Main>*/}
    </MainLayout>
  );
};

export default MainPage;
