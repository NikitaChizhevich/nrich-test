import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginPage } from './pages/login/login.page';
import { Header } from './shared/components/header/header';
import { MainPage } from './pages/main/main.page';
import { ProfilePage } from './pages/profile/profile.page';
import { NewsPage } from './pages/news/news.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
