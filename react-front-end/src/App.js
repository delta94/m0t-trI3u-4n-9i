import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Chat from './pages/chat'
import Home from './pages/home'
import PageView from './components/menu/PageView'
import LogoView from './components/menu/LogoView'
import history from './utils/history'

function LoginPage() {
    return (
        <LogoView>
            <Login />
        </LogoView>
    )
}

function SignUpPage({history}) {
    return (
        <LogoView>
            <SignUp history={history} />
        </LogoView>
    )
}

function HomePage() {
    return (
        <PageView>
            <Home />
        </PageView>
    )
}

function ChatPage() {
    return (
        <PageView>
            <Chat />
        </PageView>
    )
}

function App() {
    return (
        <Router history={history}>
            <div>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/sign-up' component={SignUpPage} />
                <Route path='/chat' component={ChatPage} />
            </div>
        </Router>
    )
}

export default App
