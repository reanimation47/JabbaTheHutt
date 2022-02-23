import { removeVN } from './../functions/removeVN'

//Random imgur
function randomString() {
    var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringlength = 5; /* could be 6 or 7, but takes forever because there are lots of dead images */
    var text = '';
    for (var i = 0; i < stringlength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      text += chars.substring(rnum, rnum + 1);
    }
  
    let source = 'http://i.imgur.com/' + text + '.jpg';
    return source
  
  
  };
  
  let a = randomString();
  
  
  
  // Get img's metadata
  const probe = require('probe-image-size');
  async function getData(img: any) {
    let result = await probe(img);
    return result.url
  }
  
  
  
  //Get random valid imgur images
  async function valid() {
    let imgUrl
    let con = true
    while (con === true) {
      let rand = await randomString()
      imgUrl = await getData(rand)
      con = imgUrl.includes('removed')
      console.log(imgUrl)
  
    }
    return imgUrl
  
  
  
  }
module.exports = {
    name: 'randomImgur',
    description: 'as name.',
    execute(message){
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('pic')) {
            (async () => {
              const res = await valid()
              message.channel.send({ files: [res] });
            })();
        
        
          } 
    }
}