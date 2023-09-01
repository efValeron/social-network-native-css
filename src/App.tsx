import styled from "styled-components";
import {Header} from "./components/Header/Header.tsx";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {router} from "./router.tsx";
import {RouterProvider} from "react-router-dom";

export const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <Sidebar/>
      <RouterProvider router={router}/>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100svh;
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr;
  grid-template-columns: 15rem 1fr;
`