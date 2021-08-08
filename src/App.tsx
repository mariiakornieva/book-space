import { Switch, Route, Redirect } from 'react-router-dom';
import { LibraryPage } from './features/Library';
import { Header } from './shared/Header';
import { Nav, NavItem } from './shared/Nav';

function App() {
  return (
    <div className="bg-white">
      <Header>
        <Nav>
          <NavItem path="/library" label="Library" />
          <NavItem path="/search" label="Search" />
          <NavItem path="/user" label="Profile" />
        </Nav>
      </Header>

      <Switch>
        <Route exact path="/">
          <LibraryPage />
        </Route>

        <Redirect path="/home" to="/" />

        {/* <PageNotFound /> */}
      </Switch>
    </div>
  );
}

export default App;
