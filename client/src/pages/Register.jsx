import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <Container>
      <div className={`w-[40%] p-5 bg-white ${mobile({ width: "75%" })}`}>
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="name"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="last name"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="username"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="email"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="password"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 mr-2.5 m-0 p-2.5"
            placeholder="confirm password"
          />
          <span className="text-[12px] my-5 mx-0">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            <br />
            <Link to="/login">already have an account?</Link>
          </span>
          <button className="w-[40%] border-none py-[15px] px-5 bg-[teal] text-white cursor-pointer">
            CREATE
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
