![resized](https://user-images.githubusercontent.com/54185164/123970161-830f9f80-d9d6-11eb-9521-4597db17534a.png)


# hummigo

### About
***

Hummigo is a solution which comes in the form of a combination of an Android app and Webapp to make the lives of people suffering from prolonged diseases and chronic disorders easier, and to prevent lifestyle diseases in general. 

This project was created by us for the Google Developer Student Clubs Solution Challenge 2021. Google Developer Student Clubs Solution Challenge is an annual challenge hosted by Google developers, inviting college/university students from all over the world to learn & develop solutions for the given set of problems.

Every year a different set of problems is given which can improve the lifestyle of common people and creates a positive impact on the society. The problem statements for DSC Solution Challenge 2021 are 17 United Nations Sustainable Development Goals (SDGs).

We chose the "Good Health and Well-Being" United Nations Sustainable Development Goal to work upon.

### Why hummigo?
***
6 out of 10 people are suffering from Chronic Diseases. The same could have been prevented or controlled with some daily routine changes. As of today, we have around 10 doctors per 10,000 people on the planet. This is approximately 0.1% global coverage. Compare that with the worldwide internet reach, which stands at about 62% of today's global population. Lifestyle diseases stem from an imbalanced daily routine which personal routine improvements of an individual can effectively solve.

Additionally, people can learn from those who have gone through the same fate before, thus highlighting the need to bring them together. The pandemic taught us that even finding a health service nearby can be a herculean task. A solution leveraging the widespread availability of the internet is almost demanding to happen.

We believe that technological and medical advancements aim to improve the quality of human life by providing them with a physical, emotional, and mental support system. Even today, health concerns overshadow a significant part of financial prosperity in many developing developing countries. Surely, there is a technological vacancy waiting to be plugged in, and it was precisely this reason that motivated us to chose this specific goal. We try to bridge the gap between an ordinary person and their right to a healthier life.

### Requirements for working on this Project
***
* NodeJS Version 12 or higher
* MongoDB


### Setting up the Project for Development
***

Open git bash, and clone this repository by running the following command

##### `git clone https://github.com/abhineetpandey10/hummigo-web.git`
\
Now, open the command terminal, navigate into the directory where you cloned this repository using the **`cd`** command, and then hop into the **hummigo-web** directory by using the command **`cd hummigo-web`**
* Navigate into the **client** folder by using the command **`cd hummigo-web/client`**, and run the command **`npm install`**. This would install all the required dependencies for the client side of the project.
* Now, navigate into the **server** folder by using the command **`cd ../server`**, and run the command **`npm install`**. After that, navigate into the **server-2** folder by using the command **`cd ../server-2`**, and run the command **`npm install`**. This would install all the required dependencies for the server side of the project.


You need to create a firebase project and register this webapp on that firebase project. You may look [**here**](https://firebase.google.com/docs/web/setup) for more details on that. Once that is done, you'll get the details of your firebase config object.

Copy those details, and then in the **hummigo-web** directory, navigate to **client/src/services** and open the **firebase.js** file. In the **firebase.js** file, replace the firebase Config Object details with those of your own.

Now, go to [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) and create a free-tier cluster here. From here, you need the ***MongoDB Connection String***. You may look [here](https://docs.mongodb.com/guides/cloud/connectionstring/) to know more on how to get the 
***MongoDB Connection String***. Copy the connection string, and then on your local machine inside the **hummigo-web** folder, navigate to **server/db**, open the **connection.js** file. You'll see
**const URI=MONGO_DB_CONNECTION_STRING**. Replace **MONGO_DB_CONNECTION_STRING** with the connection string you've got. Do the same with the **connection.js** file contained in the **hummigo-web/server-2/db** folder.

***Congratulations! You've setup the project on your local machine for development.***

### Running and Testing the Project
***
* Open the command terminal, navigate into the **hummigo-web/client** directory, and run the **`npm start`** command to start the React Development server on PORT 3000.
* Open the command terminal, navigate into the **hummigo-web/server** directory, and run the **`npm start`** command to start the NodeJS Development server on default PORT 3001. The default port can be changed in the index.js file contained in the same folder.
* Open the command terminal, navigate into the **hummigo-web/server-2** directory, and run the **`npm start`** command to start the NodeJS Development server on default PORT 3002. The default port can be changed in the index.js file contained in the same folder.

### Features
***

#### 1. **Blogs and Stories**
Users can share and read Blogs and Stories about topics they are interested in. The Blogs and Stories displayed to a user are sorted in the order of their preferences, which are set according to the user's activity by analysing the content he read, upvotes or downvotes using a NLP based model.

![image](https://user-images.githubusercontent.com/54185164/123969530-f1079700-d9d5-11eb-985f-a2e9e8f1daea.png)


#### 2. **Hummigo apk and User Feedback**
Users can download the apk of the official Hummigo app through our website, and give their ratings and reviews about it, which helps us to iterate over our solution and improve it, and also motivates us to keep working in this direction.

![image](https://user-images.githubusercontent.com/54185164/123969387-ca496080-d9d5-11eb-8b84-478175d755a1.png)

#### 3.  **Partnerships** 
Organisations that provide healthcare services, both online and offline, and are interested in partnering with us, can apply through our Partners Page for exploring the possibilities of partnerships with us.

![image](https://user-images.githubusercontent.com/54185164/123969670-109ebf80-d9d6-11eb-9be4-6982481bb76a.png)

### Credits
***
The NLP based model used for finding out the user preferences in Blogs and Stories was created by [Varenya Srivastava](https://www.linkedin.com/in/varenya-srivastava-36438b204/). Varenya is pursuing his bachelor's in Computer Science and Engineering from IIT Kanpur. This Machine Learning Model works on the principle of a modified version of the Rapid Automatic Keyword Extraction[RAKE, Rose, et al.] called FRAKE[Salmasi, et al]. The research paper can be found at https://arxiv.org/abs/2104.04830.

### Deployment
***
View the deployment [here](https://hummigo.herokuapp.com/)

### Our contribution in creating a healthier and happier society
***

We believe that regular monitoring of daily health and abiding strictly to medication and exercise discipline can greatly improve the conditions of people suffering from chronic disorders or prolonged dieases like diabetes, Parkinson's, High Blood Pressure and can be extremely effective in preventing lifestyle diseases in individuals who are prone to them due to their unhealthy lifestyle or lack of adherence to medical discipline. Easier monitoring and better management of daily health can prevent or at the very least, delay the progression of such diseases into their advanced stages. And therefore, we have come up with a one-stop solution for monitoring and better management of daily health.

