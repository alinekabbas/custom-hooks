import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setErro(error);
      });
  }, []);
  return [data, isLoading, erro];
}
