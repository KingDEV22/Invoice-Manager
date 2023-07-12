# Invoice-Manager
Invoice Manager is a web-based application designed to help manage and track invoices efficiently. 
It provides a user-friendly interface for performing various operations such as adding, deleting, updating, viewing, sorting, and searching invoices. 
Additionally, it offers a prediction feature to estimate the due dates of invoices based on historical data.

## Features
The Invoice Manager project is divided into three main parts:

### Frontend/UI: 
The user interface is built using React, HTML, and CSS. It offers a seamless and intuitive experience for managing invoices. The following features are available:

Add: Users can create new invoices and input relevant details such as invoice number, amount, due date, etc.

Delete: Invoices can be easily removed from the system when they are no longer needed.

Update: Users can modify existing invoices and update any relevant information.

View: The application provides a clear overview of all invoices, allowing users to see the details at a glance.

Sort: Invoices can be sorted based on different criteria, such as invoice number, amount, or due date.

Search: Users can search for specific invoices using keywords, making it convenient to find relevant information.

Prediction: The system uses historical invoice data to predict the expected payment dates for outstanding invoices. This prediction helps companies estimate when they are likely to receive payment for pending invoices.

### Backend: 
The backend is developed using Spring Boot, a Java-based framework. 
It provides the necessary APIs and supports CRUD (Create, Read, Update, Delete) operations for managing invoices. 
The backend handles data storage, retrieval, and manipulation, ensuring seamless communication between the frontend and the database.

### Flask Backend: 
The Flask backend is responsible for predicting the due dates of invoices. 
By analyzing historical invoice data, it leverages machine learning algorithms to forecast the expected payment dates for outstanding invoices. 
This prediction feature enhances the efficiency of invoice management by providing insights into the estimated time of payment.
