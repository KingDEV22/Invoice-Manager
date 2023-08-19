# Invoice-Manager
Invoice Manager: Streamline invoice management with a user-friendly web app. Perform tasks like adding, deleting, updating, viewing, sorting, and searching invoices effortlessly. Also, leverage predictive capabilities for estimating due dates using historical data.

## Features
The Invoice Manager project is divided into three main parts:

### Frontend/UI: 
The user interface is built using React and CSS.The following features are available:

Add: Users can create new invoices.

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
