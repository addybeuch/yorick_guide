import './resolveTree.scss'
import runeList from './runeImages/runeList'

function Resolve() {
  return (
    <div className='resolveTree'>
      <img src={runeList.resolveIcon} alt='' />
      <div className='resolveRunes'>
        <div className='bigThree'>
          <img src={runeList.graspOfTheUndying} alt='' />
          <img src={runeList.aftershock} alt='' />
          <img src={runeList.guardian} alt='' />
        </div>
        <div className='smallRunes'>
          <img src={runeList.demolish} alt='' />
          <img src={runeList.fontOfLife} alt='' />
          <img src={runeList.sheildBash} alt='' />
          <img src={runeList.conditioning} alt='' />
          <img src={runeList.secondWind} alt='' />
          <img src={runeList.bonePlating} alt='' />
          <img src={runeList.overgrowth} alt='' />
          <img src={runeList.revitalize} alt='' />
          <img src={runeList.unflinching} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Resolve
