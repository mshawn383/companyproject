export default function setMedicalEquipment(Billingname,Amount){
    console.log(Billingname,Amount)
    return {
        type:"MEDICAL_EQUIPMENT",
        payload:[{
            name:Billingname,
            price:Amount
        }]
    }
}