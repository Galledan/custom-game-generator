import React from 'react'
import PlayerList from '../../components/PlayerList/PlayerList'
import Filters from '../../components/Filters/Filters'

function PlayerListPage() {
  return (
    <div className='pl-page-container h-full flex flex-row gap-14'>
      <Filters />
      <PlayerList />
    </div>
  )
}

export default PlayerListPage