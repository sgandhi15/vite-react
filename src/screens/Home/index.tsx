import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/auth");
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click To Check Navigate</button>
      <button onClick={handleClick}>Click To Check Navigate</button>
    </div>
  );
}
