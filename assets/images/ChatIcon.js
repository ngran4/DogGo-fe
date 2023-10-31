import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import { View } from "react-native"

const originalHeight = 64
const originalWidth = 64

const SvgComponent = (props) => (
  <View style={{width:"100%"}}>
    <Svg
      width='90%'
      height='90%'
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        d="M8.688 63.188c-.945.201-1.892.385-2.843.552-.289.049-.55-.083-.716-.322a.95.95 0 01-.1-.892h0c.357-.903.684-1.818.981-2.746h0l.003-.009.01-.038c.996-3.099 1.808-6.664 2.106-9.99l.01-.11-.076-.082C3.195 44.32.25 37.48.25 30.004.25 13.586 14.45.25 32 .25s31.75 13.336 31.75 29.754S49.55 59.758 32 59.758h0a33.715 33.715 0 01-9.32-1.302l-.097-.028-.09.049c-2.06 1.116-6.513 3.16-13.805 4.711zm0 0l.052.245-.052-.245s0 0 0 0zm1.34-4.554l-.116.413L32 55.722v.25s0 0 0 0c16.108 0 28.25-12.13 28.25-25.968C60.25 16.171 48.108 4.036 32 4.036S3.75 16.171 3.75 30.004c0 6.36 2.495 12.258 6.779 16.861.39.42.69.928.878 1.489.187.56.257 1.158.204 1.751-.28 2.89-.81 5.745-1.584 8.529z"
        fill="#8AC6DD"
        stroke="#000"
        strokeWidth={0.5}
      />
      <Path
        fill="url(#pattern0)"
        d="M10.4187 6.39999H58.0466V57.599990000000005H10.4187z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_9_21"
            transform="matrix(.0168 0 0 .01563 -.037 0)"
          />
        </Pattern>
        <Image
          id="image0_9_21"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  </View>
)
export default SvgComponent