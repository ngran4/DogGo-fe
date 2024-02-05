import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'
import { View } from 'react-native'

const originalHeight = 44
const originalWidth = 44

const SvgComponent = (props) => (
  <View style={{ width: '100%' }}>
    <Svg
      width='100%'
      height='100%'
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <Path fill='url(#pattern0)' d='M0 0H44V44H0z' />
      <Defs>
        <Pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width={1}
          height={1}
        >
          <Use xlinkHref='#image0_239_1119' transform='scale(.00568)' />
        </Pattern>
        <Image
          id='image0_239_1119'
          width={176}
          height={176}
          xlinkHref='data:image/png;base64,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'
        />
      </Defs>
    </Svg>
  </View>
)
export default SvgComponent
