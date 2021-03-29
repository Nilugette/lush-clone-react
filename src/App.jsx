import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Introduction from './components/introduction/Introduction'
import './App.scss'

const App = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Introduction />
        </div>  
    )
}

export default App