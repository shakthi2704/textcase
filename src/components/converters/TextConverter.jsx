import React, { useState } from "react"
import TextStats from "./TextStats"

const TextConverter = () => {
  const [inputText, setInputText] = useState("")
  const [convertedText, setConvertedText] = useState("")
  const [totalWords, setTotalWords] = useState(0)
  const [totalCharacters, setTotalCharacters] = useState(0)

  const handleInputChange = (e) => {
    const text = e.target.value
    setInputText(text)
    updateCount(text)
  }

  const updateCount = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean).length
    const characters = text.length
    setTotalWords(words)
    setTotalCharacters(characters)
  }

  const handleButtonClick = (action) => {
    let converted = ""
    switch (action) {
      case "uppercase":
        converted = inputText.toUpperCase()
        break
      case "lowercase":
        converted = inputText.toLowerCase()
        break
      case "titlecase":
        converted = inputText
          .toLowerCase()
          .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
        break
      case "sentencecase":
        converted = inputText.charAt(0).toUpperCase() + inputText.slice(1)
        break

      case "alternatingcase":
        converted = inputText
          .split("")
          .map((char, index) =>
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
          )
          .join("")
        break
      case "inversecase":
        converted = inputText
          .split("")
          .map((char) =>
            char === char.toUpperCase()
              ? char.toLowerCase()
              : char.toUpperCase()
          )
          .join("")
        break
      default:
        converted = inputText
    }

    setConvertedText(converted)
    updateCount(converted)
  }

  return (
    <div className="mt-10">
      <div className="mx-4 md:px-10 flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0">
        <textarea
          className="w-full h-32 p-4 border rounded-xl bg-slate-700"
          placeholder="Type or paste your content here"
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <div
          className="w-full h-32 p-4 border rounded-xl bg-slate-700 overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: convertedText }}
        ></div>
      </div>
      <div className="container text-white my-6 flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("uppercase")}
        >
          Convert to Uppercase
        </button>
        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("lowercase")}
        >
          Convert to Lowercase
        </button>
        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("titlecase")}
        >
          Convert to Title Case
        </button>
        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("sentencecase")}
        >
          Convert to Sentence Case
        </button>

        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("alternatingcase")}
        >
          Alternating Case
        </button>
        <button
          className="text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 "
          onClick={() => handleButtonClick("inversecase")}
        >
          Inverse Case
        </button>
      </div>
      <TextStats text={inputText} />
    </div>
  )
}

export default TextConverter
