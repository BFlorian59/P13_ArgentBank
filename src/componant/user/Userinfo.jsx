function Userinfo(firstName) {
    return(
      <div className="header">
        <h1>Welcome back<br />{firstName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
    )
}

export default Userinfo