import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import { View } from "react-native"

const originalHeight = 44
const originalWidth = 44

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
      <Path fill="url(#pattern0)" d="M0 0H44V44H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_310_1169" transform="scale(.00568)" />
        </Pattern>
        <Image
          id="image0_310_1169"
          width={176}
          height={176}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  </View>
)
export default SvgComponent