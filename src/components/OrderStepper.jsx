import React, { useState } from "react";
import StyledFigure from "../styledComponents/StyledFigure";

export default function OrderStepper() {
  const [page, setPage] = useState(4);

  return (
    <StyledFigure stepper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 -4 183 58"
        className="mobile"
      >
        <g transform="translate(-12.5494 -236.2829)">
          <circle
            cx="26.3569"
            cy="247.6621"
            r="9.8751"
            fill={page >= 2 ? "#4d0000" : "#fff"}
            className="circle1"
            fillOpacity=".9412"
            stroke={page >= 1 ? "#4d0000" : "#000"}
            strokeWidth={page >= 1 ? "1.55" : "1"}
          />
          <text
            className="number1"
            x="23.5101"
            y="250.5845"
            fontWeight="400"
            fontSize="10.5833"
            fontFamily="sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2646"
            fill={page < 2 ? "#000" : "transparent"}
          >
            <tspan
              x="23.5101"
              y="250.5845"
              fontWeight="700"
              fontFamily="Raleway"
            >
              1
            </tspan>
          </text>
          <circle
            cx="100.4661"
            cy="247.6626"
            r="9.8751"
            className="circle2"
            fill={page >= 3 ? "#4d0000" : "#fff"}
            fillOpacity=".9412"
            stroke={page >= 2 ? "#4d0000" : "#000"}
            strokeWidth={page >= 2 ? "1.55" : "1"}
          />
          <text
            className="number2"
            x="97.5437"
            y="250.963"
            fontWeight="400"
            fontSize="10.5833"
            fontFamily="sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2646"
            fill={page < 3 ? "#000" : "transparent"}
          >
            <tspan
              x="97.5437"
              y="250.963"
              fontWeight="700"
              fontFamily="Raleway"
            >
              2
            </tspan>
          </text>
          <path
            d="M24.8357 252.01c-.15-.0555-.1995-.089-.3536-.2377-.1953-.1888-.2822-.3272-.6135-.9764-.7384-1.4473-1.463-2.6248-2.0091-3.2646-.0733-.0858-.1256-.1637-.1163-.1728.017-.017.5654-.2504.6213-.2655.0455-.0114.4312.3093.7974.6644.5877.57 1.0577 1.1187 1.3726 1.6026.2923.4494.2257.4643.5097-.1145.8936-1.8214 2.1084-3.5918 3.4556-5.036.7085-.7596 1.3772-1.341 2.1687-1.8853l.2686-.1847.1797.2458.1796.2459-.506.4946c-.6159.602-1.0384 1.0744-1.5619 1.746-1.4108 1.81-2.52 3.961-3.1275 6.0645-.1163.403-.2445.6607-.4187.842-.2365.2462-.5645.3358-.8464.2317z"
            fill={page >= 2 ? "#fff" : "transparent"}
            className="tick1"
          />
          <circle
            cx="113.7708"
            cy="177.1815"
            r="9.8751"
            className="circle3"
            fill={page === 4 ? "#4d0000" : "#fff"}
            fillOpacity=".9412"
            stroke={page >= 3 ? "#4d0000" : "#000"}
            strokeWidth={page >= 3 ? "1.55" : "1"}
            transform="translate(61.9125 70.481)"
          />
          <text
            y="129.3804"
            x="218.5413"
            className="number3"
            fontWeight="400"
            fontSize="10.5833"
            fontFamily="sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2646"
            transform="translate(-45.8107 120.752)"
            fill={page < 4 ? "#000" : "transparent"}
          >
            <tspan
              y="129.3804"
              x="218.5413"
              fontWeight="700"
              fontFamily="Raleway"
            >
              3
            </tspan>
          </text>
          <path
            d="M36.588 247.6363l54.0507-.378"
            id="path106"
            fill="none"
            className="line1"
            stroke={page >= 2 ? "#4d0000" : "#000"}
            strokeWidth={page >= 2 ? "1.165" : "0.9"}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeDasharray="none"
            strokeOpacity="1"
          />
          <path
            d="M111.2384 247.0693l54.0506-.378"
            id="path106-3"
            fill="none"
            className="line2"
            stroke={page >= 3 ? "#4d0000" : "#000"}
            strokeWidth={page >= 3 ? "1.165" : "0.9"}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeDasharray="none"
            strokeOpacity="1"
          />
          <text
            className="text1"
            x="25.7055"
            y="273.4898"
            fontWeight={page === 1 ? "700" : "500"}
            fontSize="6.35"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2646"
            fill={page === 1 ? "#4d0000" : "#000"}
          >
            <tspan x="25.7055" y="273.4898" textAnchor="middle">
              Personal
            </tspan>
            <tspan x="25.7055" y="281.4273" textAnchor="middle">
              Data
            </tspan>
          </text>
          <text
            className="text2"
            x="100.4405"
            y="272.5909"
            fontWeight={page === 2 ? "700" : "500"}
            fontSize="6.35"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            textAnchor="middle"
            strokeWidth=".2646"
            fill={page === 2 ? "#4d0000" : "#000"}
          >
            <tspan x="100.4405" y="272.5909">
              Payment
            </tspan>
            <tspan x="100.4405" y="280.5284">
              &amp;
            </tspan>
            <tspan x="100.4405" y="288.4659">
              Shipping
            </tspan>
          </text>
          <text
            className="text3"
            x="176.4582"
            y="272.7339"
            fontWeight={page === 3 ? "700" : "500"}
            fontSize="6.35"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            textAnchor="middle"
            strokeWidth=".2646"
            fill={page === 3 ? "#4d0000" : "#000"}
          >
            <tspan x="176.4582" y="272.7339">
              Finish
            </tspan>
            <tspan x="176.4582" y="280.6714">
              Order
            </tspan>
          </text>
          <path
            d="M99.0062 252.01c-.15-.0555-.1995-.089-.3536-.2377-.1953-.1888-.2823-.3272-.6135-.9764-.7384-1.4473-1.463-2.6248-2.0091-3.2646-.0733-.0858-.1257-.1637-.1163-.1728.017-.017.5654-.2504.6213-.2655.0455-.0114.4312.3093.7974.6644.5877.57 1.0576 1.1187 1.3725 1.6026.2924.4494.2257.4643.5098-.1145.8936-1.8214 2.1084-3.5918 3.4556-5.036.7085-.7596 1.3772-1.341 2.1687-1.8853l.2686-.1847.1797.2458.1796.2459-.506.4946c-.6159.602-1.0384 1.0744-1.5619 1.746-1.4108 1.81-2.52 3.961-3.1275 6.0645-.1163.403-.2445.6607-.4188.842-.2364.2462-.5644.3358-.8463.2317z"
            id="path2165-4"
            className="tick2"
            fill={page >= 3 ? "#fff" : "transparent"}
            fillOpacity="1"
            strokeWidth=".0241"
          />
          <path
            d="M174.2232 252.01c-.15-.0555-.1995-.089-.3536-.2377-.1953-.1888-.2822-.3272-.6135-.9764-.7384-1.4473-1.463-2.6248-2.0091-3.2646-.0733-.0858-.1256-.1637-.1163-.1728.017-.017.5654-.2504.6213-.2655.0455-.0114.4312.3093.7974.6644.5877.57 1.0577 1.1187 1.3726 1.6026.2923.4494.2257.4643.5097-.1145.8936-1.8214 2.1084-3.5918 3.4556-5.036.7085-.7596 1.3772-1.341 2.1687-1.8853l.2686-.1847.1797.2458.1796.2459-.506.4946c-.6159.602-1.0384 1.0744-1.5619 1.746-1.4108 1.81-2.52 3.961-3.1275 6.0645-.1163.403-.2445.6607-.4187.842-.2365.2462-.5645.3358-.8464.2317z"
            id="path2165-2"
            className="tick3"
            fill={page === 4 ? "#fff" : "transparent"}
            fillOpacity="1"
            strokeWidth=".0241"
          />
        </g>
      </svg>
    </StyledFigure>
  );
}
