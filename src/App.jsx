import { Route, Routes } from '@solidjs/router';
import { Layout, MobileNav, NavDrawer, MainContent } from './layouts';
import { HomePage, NewPage, CountPage, ResultPage } from './pages';
import './assets/style.scss';
import { Navbar } from './components';
import BallotProvider from './contexts/BallotContext';

export default function App() {
  return (
    <BallotProvider>
      <Layout>
        <MobileNav />
        <NavDrawer>
          <Navbar />
        </NavDrawer>
        <MainContent>
          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/new" component={NewPage} />
            <Route path="/count" component={CountPage} />
            <Route path="/result" component={ResultPage} />
          </Routes>
        </MainContent>
      </Layout>
    </BallotProvider>
  );
}
