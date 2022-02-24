import { Navbar, Sidebar } from '../../components/index'
import './home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="home_title">Js Online</div>
      <Navbar />
      <div className="home_content">
        <Sidebar />
        <div className="home_content_code"></div>
      </div>
    </div>
  )
}
