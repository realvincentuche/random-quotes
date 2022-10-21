import { useEffect, useState } from "react";
import axios from "./Axios";
import Swal from "sweetalert2";
import TagMenu from "./components/TagMenu";
import QuoteDiv from "./components/QuoteDiv";
import NewQuote from "./components/NewQuote";
import DarkMode from "./components/DarkMode";
import { colors } from "./components/Colors";
import { useAnimation } from "framer-motion";
import SocialDiv from "./components/SocialDiv";
import AutoCss from "./components/AutoCss";

function App() {
  const controls = useAnimation();
  const [quote, setQuote] = useState({});
  const [indexa, setIndexa] = useState(0);
  const [indexb, setIndexb] = useState(0);
  const [tag, setTag] = useState("");
  const fetchQuote = () => {
    controls.start({
      opacity: 0.1,
      transition: { duration: 0.5 },
    });
    axios
      .get("/random", tag !== "random" ? { params: { tags: tag } } : null)
      .then((response) => {
        setIndexa(Math.floor(Math.random() * colors.length));
        setIndexb(Math.floor(Math.random() * colors.length));
        setQuote(response.data);
      })
      .catch((error) =>
        Swal.fire(
          "Oops!",
          error.response
            ? error.response.data.statusMessage
            : error.message + " for " + tag + " tag",
          "error"
        )
      )
      .finally(() =>
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
          visibility: "visible",
        })
      );
  };
  useEffect(() => {
    if (tag !== "") fetchQuote();
  }, [tag]);

  return (
    <>
      <AutoCss />
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-9/12 text-center">
          <QuoteDiv
            quote={quote}
            indexa={indexa}
            indexb={indexb}
            controls={controls}
          />
          <div className="mt-8 md:flex md:flex-shrink-0 md:items-center md:justify-between relative">
            <SocialDiv quote={quote} />
            <div className="mt-4 relative inline-block sm:ml-2 md:mt-0">
              <NewQuote fetchQuote={fetchQuote} />
              <TagMenu tag={tag} setTag={setTag} />
            </div>
            <DarkMode />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
