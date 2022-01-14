import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
  state: StateType
  dispatch: (action: any) => void
  store: StoreType
}

const App: React.FC<AppPropsType> = React.memo((props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar friends={props.state.dialogs.contactsData}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile store={props.store} />}/>
          <Route path='/messages' element={<DialogsContainer store={props.store}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  )
})

export default App;
