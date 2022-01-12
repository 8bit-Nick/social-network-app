import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
  state: StateType
  dispatch: (action: any) => void

}

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar friends={props.state.dialogs.contactsData}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile postsData={props.state.profile.postsData}
                                                   dispatch={props.dispatch}
                                                   textData={props.state.profile.textData}
          />}/>
          <Route path='/messages' element={<Dialogs contactsData={props.state.dialogs.contactsData}
                                                    messagesData={props.state.dialogs.messagesData}
                                                    messageText={props.state.dialogs.messageText}
                                                    dispatch={props.dispatch}
          />}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
