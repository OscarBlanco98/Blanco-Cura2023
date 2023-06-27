import './menu.css';

function Menu(){
const logout=() =>{
  localStorage.removeItem("signUp")
  window.location.reload()
}

const deleteAccount=() =>{
  localStorage.clear("signUp")
  window.location.reload()
}

return(
      <div className="botones">
        <button onClick={logout} className='logout'>Logout</button>
        <button onClick={deleteAccount} className='delete'>Delete</button>
      </div>
  )
}
export default Menu;