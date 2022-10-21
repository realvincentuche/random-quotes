import { useEffect, useRef, useState } from "react";
import axios from "../Axios";
import ArrowdownSvg from "./ArrowdownSvg";

const TagMenu = ({ tag, setTag }) => {
  const [sm, setSm] = useState(false);
  const catMenu = useRef(null);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const tagResponse = await axios.get("/tags");
      setTags(tagResponse.data);
      setTag("random");
    };
    fetch();
  }, []);
  document.addEventListener("mousedown", (e) => {
    if (
      catMenu.current &&
      sm &&
      !catMenu.current.contains(e.target) &&
      e.target.id !== "menu-button"
    )
      setSm(false);
  });
  return (
    <>
      <div className="inline-flex justify-center">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-5 py-3 font-medium text-gray-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setSm((prev) => !prev)}
        >
          Tag:{" "}
          {tag !== "" && tag !== "random"
            ? tag.charAt(0).toUpperCase() + tag.slice(1)
            : "Random"}
          <ArrowdownSvg />
        </button>
      </div>
      {sm && (
        <div
          className="absolute right-0 bottom-16 z-10 mt-2 max-h-60 overflow-y-scroll w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          ref={catMenu}
        >
          <div className="py-1" role="none">
            {tags.length > 0
              ? tags.map((item) => {
                  return (
                    <button
                      type="submit"
                      className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      key={item._id}
                      onClick={() => {
                        setTag(item.name);
                        setSm(false);
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </button>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default TagMenu;
