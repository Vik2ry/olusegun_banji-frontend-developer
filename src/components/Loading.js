import React from "react"

export function Loading() {
  return (
    <>
      <div className="spinner">
        <article></article>
        <p className="text-white opacity-75 mt-5">
          The spinny thingy means it's loading
        </p>
      </div>
    </>
  )
}
