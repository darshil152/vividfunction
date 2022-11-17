import Header from './Header';
import Sidebar from './Sidebar';

export default function UserLayout(props) {
  const removeLayer = () => {
    document.getElementById("root").classList.remove("dash-main-class-add")
  }

  return (
    <>
      <Header />
      <Sidebar />
      {props.children}
      <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
    </>
  )

}

