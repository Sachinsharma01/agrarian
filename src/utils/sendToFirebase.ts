import axios from "axios";const sendToFirebase = (data: any) => {    axios.post('https://sheet.best/api/sheets/06e9fc34-f560-4e31-89fa-5ec102afc653',        {            ...data        }).then((res) => console.log(res))}export default sendToFirebase;