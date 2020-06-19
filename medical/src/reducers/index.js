import initState from "../state";


export default function rootReducers(state=initState,action){
    console.log(action.payload)
  let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "HOME_CARE":
            stateCopy.name=action.payload[0].name
           stateCopy.price=action.payload[0].price
            stateCopy.homebill.push({name:action.payload[0].name,
                price:action.payload[0].price })
             console.log(stateCopy)

            return stateCopy

        case "CONCIERGE":
            stateCopy.name=action.payload[0].name
            stateCopy.price=action.payload[0].price
             stateCopy.conciergebill.push({name:action.payload[0].name,
                 price:action.payload[0].price })
              console.log(stateCopy)
 
             return stateCopy
 
            case "MEDICAL_EQUIPMENT":
                stateCopy.name=action.payload[0].name
                stateCopy.price=action.payload[0].price
                 stateCopy.medicalbill.push({name:action.payload[0].name,
                     price:action.payload[0].price })
                  console.log(stateCopy)
     
                 return stateCopy
     default:
         return state
    }
}