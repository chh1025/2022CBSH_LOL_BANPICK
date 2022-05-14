import champs from '../img/champ_img'
import idToChamp from './idToChamp'
import idToName from './idToName'

function Ban(props) {
    let { side, banNum, data } = props
    function getImg() {
        return champs[idToChamp[data[side][banNum].ban.id]]
    }
    function isDoing() {
        return data[side][banNum].ban.isDoing
    }
    function isNotSelected() {
        //return true
        return parseInt(data[side][banNum].ban.id) === -1
    }

    function getChampName() {
        return idToChamp[data[side][banNum].ban.id] != "None" ? idToChamp[data[side][banNum].ban.id] : ""
    }
    
    function getKorChampName() {
        return idToName[data.common.lang][data[side][banNum].ban.id]
    }

    return (
        <div className={props.side + " ban"}>
            <div className={"ban-child champ-img" + (isNotSelected() ? " not-selected" : "")}>
                <img src={getImg()} alt="" />
                
                <div className="pick-child champ-info">
                    <div className="info-child top-blank"></div>
                    <div className="info-child ban-champ-name-div">
                        {/* <div className={"ban-champ-name"}>{getKorChampName()}</div> */}
                    </div>
                </div>

            </div>
            <div className={"ban-child now" + (isDoing() ? " doing" : "")}>
                <div className="blink"></div>
                <div className="dark"></div>
            </div>
        </div>
    )
}

export default Ban;