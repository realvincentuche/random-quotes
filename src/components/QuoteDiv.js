import { AnimatePresence, motion } from "framer-motion";
import { colors } from "./Colors";
import QuoteSvg from "./QuoteSvg";

const QuoteDiv = ({ indexa, indexb, quote, controls }) => {
  return (
    <AnimatePresence>
      <motion.div
        id="screenshotdiv"
        className={`invisible relative rounded-xl p-6 pb-8
					bg-gradient-to-tl from-${colors[indexa]}-200 via-${colors[indexb]}-200 to-${colors[indexa]}-200
					dark:from-${colors[indexa]}-600 dark:to-${colors[indexb]}-600
					mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 fill-gray-700 dark:text-gray-200 dark:fill-gray-200 z-0`}
        animate={controls}
      >
        <QuoteSvg />
        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl">
          {quote.author}
        </p>
        <p className="mt-4 max-w-2xl text-xl lg:mx-auto">{quote.content}</p>
        <div
          id="reflink"
          className="invisible hidden italic mt-3 text-right text-sm"
        >
          {window.location.hostname}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteDiv;
