import { useEffect, useState } from "react";

const useParts = (id) => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://lit-crag-63587.herokuapp.com/allparts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return [parts, setParts];
};

export default useParts;