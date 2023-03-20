import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBreeds } from "@store/breeds/breeds.slice.js";
import AppRouter from "@routes/Router.jsx";
import "@styles/main.scss";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  return <AppRouter />;
}
