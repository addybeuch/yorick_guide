import './resolveTree.scss'
import runeList from './runeImages/runeList'

function Resolve() {
  return (
    <div className='resolveTree'>
      <img className='resolve-img' src={runeList.resolveIcon} alt='' />
      <div className='bigThree'>
        <img src={runeList.graspOfTheUndying} alt='' />
        <img className='greyed-out' src={runeList.aftershock} alt='' />
        <img className='greyed-out' src={runeList.guardian} alt='' />
      </div>
      <div className='smallRunes'>
        <div className='triple-stack'>
          <img src={runeList.demolish} alt='' />
          <img className='greyed-out' src={runeList.fontOfLife} alt='' />
          <img className='greyed-out' src={runeList.sheildBash} alt='' />
        </div>
        <div className='triple-stack'>
          <img src={runeList.conditioning} alt='' />
          <img className='greyed-out' src={runeList.secondWind} alt='' />
          <img className='greyed-out' src={runeList.bonePlating} alt='' />
        </div>
        <div className='triple-stack'>
          <img src={runeList.overgrowth} alt='' />
          <img className='greyed-out' src={runeList.revitalize} alt='' />
          <img className='greyed-out' src={runeList.unflinching} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Resolve
