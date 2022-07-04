const url ="https://random-word-api.herokuapp.com/word?length=7&number=12";


let dom = document.querySelector("#render_log");
const random =async()=>{
    let a = 'aaaa';
    let re = new RegExp(',')
    let res = await fetch(url);
    let data  = await res.json();
    let sendData =(data.toString().replace(/,/g, ' '));
    fetch(`https://api.telegram.org/bot5148011895:AAFCtU6GDEpnhB_8TlalbM_RzaKjv8nselE/sendMessage?chat_id=-788782285&text=${sendData}`).then(rs=>rs.json()).then(data=>{
     
        var h5 = document.createElement("h5");
        h5.innerText = `${data.ok==true?`Gửi thành công với nội dung ${data.result.text} `:"Gửi thất bại"} at ${new Date()}`;
        dom.append(h5)
    })
}

const sendMessage = ()=>{
    setInterval(random,30000)
}
sendMessage();