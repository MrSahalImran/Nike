import React from "react"

const Button = ({ label, iconUrl, bgColor, brColor, textColor, fullWidth }) => {
  return (
    <button
      className={` flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgColor
          ? `${brColor} ${textColor}`
          : "border-coral-red bg-coral-red text-white"
      } ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button
