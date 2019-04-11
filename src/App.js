import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="demo-big-content">
      <Layout className="my-personal">
          <Header  className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
            <Navigation>
                
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/stack">Stack</Link>
                <Link to="/contacts">Contacts</Link>


            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/stack">Stack</Link>
            <Link to="/contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content >
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
