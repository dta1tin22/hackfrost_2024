# Storm Tracker
A website created by highschoolers in HUS High School for Gifted Students
## Inspiration
Few months ago, the second largest storm in the world this year, named Yagi, made landfall in northern Vietnam. Many areas suffered significant losses in both lives and property due to the lack of timely access to storm information. Witnessing villages flattened and families engulfed in sorrow, we decided to create this project to not only assist the people of Vietnam but also to ensure that people worldwide can access the fastest and most accurate information about such storms.
## How we built it
We use the Svelte and Svelte git framework for designing and creating the frontend. For the backend, we use the Expressjs framework to receive, store, process, and transmitting the data from Kestra to client. We use the MongoDB for the database to store the informations about the current and past storms
We use the Kestra to run on the code Nodejs to get the content and data from the GDACS website, cooperation framework between the United Nations, the European Commission and disaster managers worldwide that update informations about the nature disaster. Then we extract the data and sent it to the server. Kestra will run the Nodejs file hourly to update the latest news about the stormms. 
## Website's purpose
In Storm Tracker, users receive the latest updates on ongoing storms worldwide, along with detailed storm information such as wind speed, affected countries, and severity of damages. Additionally, information about past storms is also available on the website.
## Future goal
In the future, with Kestra, we aim to expand our project so that the users can receive the latest announments and updates from according governments about the storm.  

