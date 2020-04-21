import keras
import tensorflowjs as TFJS
vgg16 = keras.applications.vgg16.VGG16()
TFJS.converters.save_keras_model(vgg16, '/Users/andreassujono/Desktop/FOLDER/programming/data & Machine Learning/tensorflow project/image-classification/server/VGG16Model')

mobileNet = keras.applications.mobilenet_v2.MobileNetV2()
TFJS.converters.save_keras_model(mobileNet, '/Users/andreassujono/Desktop/FOLDER/programming/data & Machine Learning/tensorflow project/image-classification/server/MobileNetModel')