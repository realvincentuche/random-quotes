import DownloadSvg from "./DownloadSvg";
import TwitterSvg from "./TwitterSvg";
import domtoimage from "dom-to-image";
import Swal from "sweetalert2";

const SocialDiv = ({ quote }) => {
  const download = () => {
    const reflink = document.getElementById("reflink");
    reflink.classList.remove("invisible", "hidden");
    domtoimage
      .toPng(document.getElementById("screenshotdiv"))
      .then((dataUrl) => {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "quote.png";
        a.click();
        reflink.classList.add("invisible", "hidden");
      })
      .catch((error) => {
        Swal.fire("Oops!", "Something went wrong!" + error, "error");
      });
  };
  const tags = quote.tags ? quote.tags : [];
  return (
    <div className="relative block sm:inline-block">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURI(
          quote.content + " - " + quote.author
        )}&hashtags=${["quote", ...tags].join(",")}&url=${
          window.location.href
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterSvg />
      </a>
      <DownloadSvg onClick={download} />
    </div>
  );
};

export default SocialDiv;
