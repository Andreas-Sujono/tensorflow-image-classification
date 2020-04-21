let VGGmodel;
( async function(){
    VGGmodel = await tf.loadLayersModel('http://localhost:3000/VGG16Model/model.json')
})();

let mobileModel;
( async function(){
    mobileModel = await tf.loadLayersModel('http://localhost:3000/MobileNetModel/model.json')
})();