// 開発期間はローカルからとってる

import { AsyncStorage } from 'react-native'

import Facilities_Info from '../reducers/Facilities-Info.json'
import Health from '../reducers/Health.json'
import Subsidy from '../reducers/Subsidy.json'
import Welfare from '../reducers/Welfare.json'
import Facility from '../reducers/Facility.json'
import News from '../reducers/News.json'

export const fetchAndStoreData = () => {
  // ↓↓しばらくはローカルのjsonで代用する(linkdataにデータをアップするのが面倒だから)
  // axios.get('http://linkdata.org/api/1/rdf1s5226i/cosodate_mitaka_unofficial_rdf.json')
  //   .then(function (response) {console.log(response);})
  //   .catch(function (error) {console.log(error);});
  // Error: Network Errorの場合はinfo.plist(複数あるので注意)を見る

  localData = []

  localData["facilities-info"] = Facilities_Info
  localData["health"] = Health
  localData["subsidy"] = Subsidy
  localData["welfare"] = Welfare
  localData["facility"] = Facility
  localData["news"] = News

  return { type: "storeDataOnLocal", payload: localData }
}

export const openContentsMetaDataOnState = () => {
  return (dispatch) => {
    AsyncStorage.getItem('contentsMetaData') //当該のキーがなければ(catchされるのではなく)nullが返る
      .then(req => {
        dispatch({ type: "setContentsMetaData", payload: (req === null ? {} : JSON.parse(req)) })
      })
      .catch(error => console.log('error!'));
  }
}

export const setContentsMetaData2AsyncAndState = ( key ) => {
  return (dispatch) => {
    AsyncStorage.getItem('contentsMetaData') //当該のキーがなければ(catchされるのではなく)nullが返る
      .then(req => {
         if (req === null){ return }
         const contentsMetaData = JSON.parse(req) //req初期値はnull, またparse前は文字列

        if (typeof contentsMetaData[key] === "undefined") {
          contentsMetaData[key] = {
            privateImpressions: 0,
            lastBrowse: 0
          }
        }

        contentsMetaData[key]['privateImpressions'] += 1
        contentsMetaData[key]['lastBrowse'] = String(Date.now())
        dispatch({ type: "setContentsMetaData", payload: contentsMetaData })
        AsyncStorage.setItem('contentsMetaData', JSON.stringify(contentsMetaData));
    }).catch(error => console.log('error!'));
  }
}
