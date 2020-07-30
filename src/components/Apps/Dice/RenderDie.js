import React from 'react'
import { InlineIcon, addIcon } from '@iconify/react'
import dice1 from '@iconify/icons-bi/dice-1'
import dice2 from '@iconify/icons-bi/dice-2'
import dice3 from '@iconify/icons-bi/dice-3'
import dice4 from '@iconify/icons-bi/dice-4'
import dice5 from '@iconify/icons-bi/dice-5'
import dice6 from '@iconify/icons-bi/dice-6'
import PropTypes from 'prop-types'

addIcon('one', dice1)
addIcon('two', dice2)
addIcon('three', dice3)
addIcon('four', dice4)
addIcon('five', dice5)
addIcon('six', dice6)

export default function RenderIcon(props) {
  const { value } = props
  return <InlineIcon icon={value} {...props} />
}

RenderIcon.propTypes = {
  iconname: PropTypes.string.isRequired,
}
