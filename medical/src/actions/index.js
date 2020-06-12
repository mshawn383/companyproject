export default function setBill(Billingname,Amount){
    console.log(Billingname,Amount)
    return {
        type:"HOME_CARE",
        payload:[{
            name:Billingname,
            price:Amount
        }]
    }

}