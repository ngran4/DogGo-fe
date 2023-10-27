import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image, Circle } from 'react-native-svg'
import { View } from 'react-native'

const originalHeight = 24
const originalWidth = 25

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
        d="M8 14.5a3 3 0 01-6 0c0-.77.29-1.47.76-2a3.006 3.006 0 01.119-4.121A3 3 0 018 10.5c1.33.08 2.67.17 4 .17s2.67-.09 4-.17a3 3 0 016 0c0 .77-.29 1.47-.76 2a3.006 3.006 0 01-.119 4.121A3 3 0 0116 14.5c-1.33-.08-2.67-.17-4-.17s-2.67.09-4 .17z"
        fill="#C7C7C7"
      />
    </Svg>
  </View>
)
export default SvgComponent
