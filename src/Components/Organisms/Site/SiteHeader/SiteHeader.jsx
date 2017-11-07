import React, { Component } from 'react'
import { Title } from '@/Components/Atoms'

class SiteHeader extends Component {
  render () {
    return (
      <header className='p-4 border-b border-grey-lightgit '>
        <Title text='Site Header' />
      </header>
    )
  }
}

export default SiteHeader
