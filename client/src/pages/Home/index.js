import { Box, Heading, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutSuccess } from "../../redux/reducer/authReducer";

const Home = () => {
  const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box>
      <Box>
        <Heading>Welcome {isLogin ? user?.username : "Guest"}</Heading>
        {isLogin ? (
          <Button onClick={() => dispatch(logoutSuccess())}>Logout</Button>
        ) : (
          <Box>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
