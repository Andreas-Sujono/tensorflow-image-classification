
$('#uploadFileInput').change( () => {
    console.log('changed')
    let reader = new FileReader();
    reader.onload = () => {
        let dataURL = reader.result
        $('#showFileImage').attr("src", dataURL)
    }
    let file = $('#uploadFileInput').prop('files')[0]
    reader.readAsDataURL(file)
})


$('#predictVGG').click( async () => {
    console.log('VGG clicked')
    let image = $('#showFileImage').get(0)
    let tensor = tf.browser.fromPixels(image)
		.resizeNearestNeighbor([224,224])
		.toFloat()
    
    let meanImageRGB = tf.tensor1d([123.68,116.779,103.939])
    let processedTensor = tensor.sub(meanImageRGB)
        .reverse(2)
        .expandDims()

    let prediction = await VGGmodel.predict(processedTensor).data()
    let top5 = Array.from(prediction)
        .map( (p,i) => ({
            probability:p,
            name:className[String(i)]
        }))
        .sort( (a,b) => b.probability - a.probability)
        .slice(0,5)

    $('#predictionContentVGG').empty()
    top5.forEach( item => {
        $('#predictionContentVGG').append(`<li>${item.name}: ${item.probability}</li>`)
    })
})

$('#predictMobile').click( async () => {
    console.log('mobileNet clicked')
    let image = $('#showFileImage').get(0)
    let tensor = tf.browser.fromPixels(image)
		.resizeNearestNeighbor([224,224])
		.toFloat()
    
    let offset = tf.scalar(127.5)
    let processedTensor = tensor.sub(offset)
        .div(offset)
        .expandDims()
    let prediction = await mobileModel.predict(processedTensor).data()
    let top5 = Array.from(prediction)
        .map( (p,i) => ({
            probability:p,
            name:className[String(i)]
        }))
        .sort( (a,b) => b.probability - a.probability)
        .slice(0,5)
    $('#predictionContentMobile').empty()
    top5.forEach( item => {
        $('#predictionContentMobile').append(`<li>${item.name}: ${item.probability}</li>`)
    })
})

