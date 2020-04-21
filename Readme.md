# image Classification using Tensorflow.js

client side machine learning

we will use VGG16 and mobilenet for comparison


## initialize

to install dependencies:

    npm install

you need to download the model of VGG16 and mobilenet and put it inside **/static/VGG16Model** and ** /static/MobileNetModel**

#### How?

* create the folder named **VGG16Model** and **MobileNetModel** inside **static** folder
* run the python script ( **downloadModel.py** ) to download the VGG16 and mobileNet model. ps: it is taking a while to download it as VGG16 is around 550 Mb
  * you run python script using bash. just run

             python downloadModel.py



## script

to start the express app:

     npm start