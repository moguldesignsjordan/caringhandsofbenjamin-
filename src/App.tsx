import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import GetInvolved from './pages/GetInvolved'
import Home from './pages/Home'
import Leadership from './pages/Leadership'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
