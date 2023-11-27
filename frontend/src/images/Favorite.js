import React from "react"

function Icon({ color, filled }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209.13 195.048">
      <path
        fill={!filled ? "none" : color || "#fff"}
        stroke={color || "#228693"}
        strokeLinejoin="round"
        strokeWidth="8"
        d="M203.13 76.4h-75.684L104.565 6 81.684 76.4H6l61.6 42.242-23.761 70.4 60.723-44 60.723 44-23.761-70.4z"
      ></path>
    </svg>
  )
}

export default Icon



// import React from "react"

// function Icon({ color, filled,label="Favorited" }) {
//   return (
//     <div>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 209.13 195.048">
//       <path
//         fill={!filled ? "none" : color || "#fff"}
//         stroke={color || "#228693"}
//         strokeLinejoin="round"
//         strokeWidth="10"
//         d="M203.13 76.4h-75.684L104.565 6 81.684 76.4H6l61.6 42.242-23.761 70.4 60.723-44 60.723 44-23.761-70.4z"
//       ></path>
//     </svg>
//       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{ width: "50px", height: "50px" }}>
//       <circle cx="50" cy="50" r="40" fill={!filled ? "none" : color || "#fff"} stroke={color || "#228693"} strokeWidth="10" />
//       <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill={color || "#228693"} fontSize="18">{label}</text>
//     </svg> */}

//      </div>
//   )
// }

// export default Icon
