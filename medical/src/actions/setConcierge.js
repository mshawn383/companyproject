export default function setConcierge(Billingname,Amount){
    console.log(Billingname,Amount)
    return {
        type:"CONCIERGE",
        payload:[{
            name:Billingname,
            price:Amount
        }]
    }
}