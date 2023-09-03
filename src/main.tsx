import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {ThemeProvider} from "styled-components";

const theme = {
  // text: "#290515",
  // background: "#fef6f9",
  // primary: "#ef827b",
  // secondary: "#fae8d1",
  // accent: "#e48d1b",

  // 'text': '#180715',
  // 'background': '#f9ebf7',
  // 'primary': '#8cde99',
  // 'secondary': '#c8e9ef',
  // 'accent': '#35b648',

  'text': 'rgb(0, 0, 0)',
  'background': 'rgb(234, 250, 245)',
  'primary': 'rgb(166, 155, 233)',
  'primary50': 'rgb(166, 155, 233, .5)',
  'secondary': 'rgb(246, 213, 225)',
  'accent': 'rgb(185, 209, 46)',

  // dark
  // text: "#fef6f9",
  // background: "#290515",
  // primary: "#ef827b",
  // secondary: "#2e1c05",
  // accent: "#f4d1a4",
};
// #f7eef2
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
