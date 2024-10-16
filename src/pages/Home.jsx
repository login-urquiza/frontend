import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
};
