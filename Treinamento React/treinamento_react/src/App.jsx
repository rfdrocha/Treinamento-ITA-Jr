import './App.css'
import React,{useState} from 'react'
import NavBar from './components/layout/NavBar/NavBar'
import Content from './components/Content/Content'
import Footer from './components/layout/Footer/Footer'
import { BrowserRouter as Router} from 'react-router-dom'
import DataContext, {data} from './data/DataContext'

const App = props => {
    const [state,setState] = useState(data)


    return(
        <DataContext.Provider value={{state,setState}}>
            <div className='App'>
                <Router>
                    <NavBar/>
                    <Content/>
                    <Footer/>  
                </Router>
            </div>
        </DataContext.Provider>
    )

}


export default App