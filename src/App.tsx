import styled from "styled-components";
import {Header} from "./components/Header/Header.tsx";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile.tsx";
import {Messages} from "./components/Messages/Messages.tsx";

export const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <Sidebar/>
      <ContentWrapper>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/messages/:userId'} element={<Messages/>}/>
        </Routes>
      </ContentWrapper>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  min-height: 100svh;
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 15rem 1fr;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  background-color: ${p => p.theme.background};
  color: ${p => p.theme.text};
`
const ContentWrapper = styled.div`
  border-radius: .75rem;
  padding: 2rem;
  box-sizing: border-box;

  background-color: ${p => p.theme.secondary};
`