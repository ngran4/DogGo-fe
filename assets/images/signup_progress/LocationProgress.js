import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image, Circle } from 'react-native-svg'
import { View } from 'react-native'

const originalWidth = 358
const originalHeight = 64

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
      <Path
        d='M31 47h297'
        stroke='#77C8E0'
        strokeWidth={4}
        strokeLinecap='round'
      />
      <Circle
        cx={30}
        cy={47}
        r={5}
        fill='#fff'
        stroke='#77C8E0'
        strokeWidth={2}
      />
      <Circle
        cx={129}
        cy={47}
        r={5}
        fill='#fff'
        stroke='#77C8E0'
        strokeWidth={2}
      />
      <Circle
        cx={228}
        cy={47}
        r={5}
        fill='#fff'
        stroke='#77C8E0'
        strokeWidth={2}
      />
      <Circle
        cx={327}
        cy={47}
        r={5}
        fill='#fff'
        stroke='#77C8E0'
        strokeWidth={2}
      />
      <Path
        transform='matrix(-1 0 0 1 64 0)'
        fill='url(#pattern0)'
        d='M0 0H64V64H0z'
      />
      <Defs>
        <Pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width={1}
          height={1}
        >
          <Use xlinkHref='#image0_1_36' transform='scale(.01563)' />
        </Pattern>
        <Image
          id='image0_1_36'
          width={64}
          height={64}
          xlinkHref='data:image/png;base64,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'
        />
      </Defs>
    </Svg>
  </View>
)
export default SvgComponent
