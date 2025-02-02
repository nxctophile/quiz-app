export default function Header() {
  const name = localStorage.getItem("name");
  const logout = () => {
    localStorage.removeItem("name");
    window.location.href = "/";
  };
  return (
    <div className="name-container">
      <div className="name">Hello {name}</div>
      <button onClick={logout} className="logout">
        Log out
      </button>
    </div>
  );
}
