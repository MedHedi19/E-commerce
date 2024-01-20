import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <div
        className={`min-w-[400px] p-5 bg-white   ${mobile({ width: "75%" })}`}
      >
        <h1 className="text-2xl font-light">SIGN IN</h1>
        <form className="flex flex-col">
          <input
            className="flex-1 min-w-[40%] my-2.5 mx-0 p-2.5"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 min-w-[40%] my-2.5 mx-0 p-2.5"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`w-[40%] border-none py-[15px] px-5 bg-[#008080] cursor-pointer mb-2.5 ${
              isFetching ? "text-[#008080] cursor-wait" : ""
            }`}
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <span className="text-[#ff3a3a]">something wrong</span>}
          <a className="my-[5px] mx-0 text-xs underline cursor-pointer">
            DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <Link
            to="/register"
            className="my-[5px] mx-0 text-xs underline cursor-pointer"
          >
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
