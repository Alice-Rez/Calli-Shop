import React, { useState } from "react";
import StyledFigure from "../styledComponents/StyledFigure";

export default function OrderStepper(props) {
  const page = props.page;

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-5 -2 177.201 47.0647"
        className="desktop"
      >
        <g transform="translate(-21.3908 -242.6328)">
          <circle
            cx="32.1446"
            cy="251.4271"
            r="7.9689"
            fill={page >= 2 ? "#4d0000" : "#fff"}
            className="circle1"
            fillOpacity=".9412"
            stroke={page >= 1 ? "#4d0000" : "#000"}
            strokeWidth={page >= 1 ? "1.25" : "0.9"}
          />
          <text
            x="29.8473"
            y="253.7854"
            fontWeight="400"
            fontSize="8.5405"
            fontFamily="sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2135"
            fill={page < 2 ? "#000" : "transparent"}
          >
            <tspan
              x="29.8473"
              y="253.7854"
              fontWeight="700"
              fontFamily="Raleway"
            >
              1
            </tspan>
          </text>
          <circle
            cx="105.1864"
            cy="251.4275"
            r="7.9689"
            className="circle2"
            fill={page >= 3 ? "#4d0000" : "#fff"}
            fillOpacity=".9412"
            stroke={page >= 2 ? "#4d0000" : "#000"}
            strokeWidth={page >= 2 ? "1.5" : "0.9"}
          />
          <text
            x="102.8281"
            y="254.0908"
            fontWeight="400"
            fontSize="8.5405"
            fontFamily="sans-serif"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2135"
            fill={page < 3 ? "#000" : "transparent"}
          >
            <tspan
              x="102.8281"
              y="254.0908"
              fontWeight="700"
              fontFamily="Raleway"
            >
              2
            </tspan>
          </text>
          <path
            d="M30.917 254.9358c-.121-.0447-.161-.0718-.2853-.1918-.1576-.1523-.2278-.264-.4951-.788-.5958-1.1678-1.1806-2.118-1.6213-2.6343-.0591-.0692-.1014-.1321-.0938-.1395.0137-.0138.4562-.202.5014-.2142.0367-.009.3479.2495.6434.5362.4743.4599.8535.9027 1.1076 1.2932.236.3626.1822.3746.4113-.0924.7212-1.4698 1.7015-2.8985 2.7886-4.064.5718-.613 1.1114-1.082 1.7502-1.5213l.2167-.149.145.1983.145.1984-.4084.3991c-.497.486-.838.8671-1.2604 1.409-1.1385 1.4607-2.0337 3.1964-2.5238 4.894-.0939.3252-.1973.5331-.338.6794-.1908.1987-.4554.271-.6829.187z"
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
            transform="translate(86.9875 108.447) scale(.80697)"
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
            transform="translate(.0579 149.0142) scale(.80697)"
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
            d="M39.9748 251.2678l56.4795-.395"
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
            d="M113.8802 250.8103l56.4796-.395"
            id="path106-3"
            fill="none"
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
            x="31.6189"
            y="272.2695"
            fontWeight={page === 1 ? "700" : "500"}
            fontSize="5.1243"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            strokeWidth=".2135"
            fill={page === 1 ? "#4d0000" : "#000"}
          >
            <tspan x="31.6189" y="272.2695" textAnchor="middle">
              Personal
            </tspan>
            <tspan x="31.6189" y="278.6748" textAnchor="middle">
              Data
            </tspan>
          </text>
          <text
            className="text2"
            x="105.1658"
            y="271.5441"
            fontWeight={page === 2 ? "700" : "500"}
            fontSize="5.1243"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            textAnchor="middle"
            strokeWidth=".2135"
            fill={page === 2 ? "#4d0000" : "#000"}
          >
            <tspan x="105.1658" y="271.5441">
              Payment
            </tspan>
            <tspan x="105.1658" y="277.9495">
              &amp;
            </tspan>
            <tspan x="105.1658" y="284.3548">
              Shipping
            </tspan>
          </text>
          <text
            className="text3"
            x="179.4227"
            y="271.6595"
            fontWeight={page === 3 ? "700" : "500"}
            fontSize="5.1243"
            fontFamily="Raleway"
            letterSpacing="0"
            wordSpacing="0"
            textAnchor="middle"
            strokeWidth=".2135"
            fill={page === 3 ? "#4d0000" : "#000"}
          >
            <tspan x="179.4227" y="271.6595">
              Finish
            </tspan>
            <tspan x="179.4227" y="278.0648">
              Order
            </tspan>
          </text>
          <path
            d="M104.0082 254.9358c-.1211-.0447-.161-.0718-.2854-.1918-.1576-.1523-.2277-.264-.495-.788-.5959-1.1678-1.1807-2.118-1.6213-2.6343-.0592-.0692-.1014-.1321-.0938-.1395.0137-.0138.4562-.202.5013-.2142.0367-.009.348.2495.6435.5362.4743.4599.8535.9027 1.1076 1.2932.236.3626.1821.3746.4113-.0924.7211-1.4698 1.7015-2.8985 2.7886-4.064.5717-.613 1.1114-1.082 1.7501-1.5213l.2168-.149.145.1983.145.1984-.4084.3991c-.497.486-.838.8671-1.2604 1.409-1.1385 1.4607-2.0337 3.1964-2.5239 4.894-.0938.3252-.1972.5331-.3379.6794-.1908.1987-.4555.271-.683.187z"
            id="path2165-4"
            className="tick2"
            fill={page >= 3 ? "#fff" : "transparent"}
            fillOpacity="1"
            strokeWidth=".0194"
          />
          <path
            d="M177.6191 254.9358c-.121-.0447-.161-.0718-.2853-.1918-.1576-.1523-.2278-.264-.495-.788-.596-1.1678-1.1807-2.118-1.6214-2.6343-.059-.0692-.1014-.1321-.0938-.1395.0137-.0138.4562-.202.5014-.2142.0367-.009.3479.2495.6435.5362.4742.4599.8534.9027 1.1076 1.2932.2359.3626.182.3746.4113-.0924.721-1.4698 1.7014-2.8985 2.7885-4.064.5718-.613 1.1114-1.082 1.7502-1.5213l.2167-.149.145.1983.145.1984-.4083.3991c-.497.486-.838.8671-1.2605 1.409-1.1385 1.4607-2.0336 3.1964-2.5238 4.894-.0938.3252-.1973.5331-.338.6794-.1908.1987-.4554.271-.6829.187z"
            id="path2165-2"
            className="tick3"
            fill={page === 4 ? "#fff" : "transparent"}
            fillOpacity="1"
            strokeWidth=".0194"
          />
        </g>
      </svg>
    </StyledFigure>
  );
}
