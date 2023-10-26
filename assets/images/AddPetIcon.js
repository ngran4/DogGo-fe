import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import { View } from "react-native"

const originalHeight = 64
const originalWidth = 64

const SvgComponent = (props) => (
  <View style={{width:"100%"}}>
    <Svg
      width='100%'
      height='100%'
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H64V64H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_33_24" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="image0_33_24"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  </View>
)
export default SvgComponent