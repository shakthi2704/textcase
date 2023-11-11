import React from "react"

const TextStats = ({ text }) => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length

  const lines = text.split(/\r\n|\r|\n/).filter((line) => line !== "").length

  return (
    <div className=" flex">
      <div className=" flex-col text-base text-white justify-center container flex gap-4 md:text-sm">
        <p>
          Total Words: <b>{words}</b>
        </p>
        <p>
          Total Characters: <b>{text.length}</b>
        </p>
        <p>
          Total Lines: <b>{lines}</b>
        </p>
      </div>
    </div>
  )
}

export default TextStats
