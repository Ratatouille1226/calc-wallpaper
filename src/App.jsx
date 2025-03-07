import { MainPage, CalcWallpaper } from './pages/index';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/calc-wallpaper' element={<CalcWallpaper />} />
      </Routes>
    </>
  )
}

export default App
