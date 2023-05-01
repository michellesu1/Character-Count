# Character-Count
 
This web app allows users to check the character count of a paragraph. The frontend uses FastAPI and the backend uses React.

## How to Run the App
Note: I am unable to upload one of the node_module folders in the frontend to Github due to its large size, so to run this project, you must create your own project and then replace some files with this project's files.

1. Clone or download this repository.
2. Create a new directory with frontend and backend folders.
3. Replace the backend folder in your own project with the backend folder from this repository.
2. Go to your own project directory. Install the required packages and start the backend server by pasting the commands below into your terminal. Your backend will now be complete.
   ``` shell
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip3 install fastapi uvicorn
   cd ./app
   uvicorn main:app --reload
   ```
3. Install Node.js.
4. In a new terminal window, install the required packages for the frontend server and create a React App.
   ```shell
   cd frontend
   npm install axios react
   npx create-react-app myapp
   ```
5. Replace the following two files with the corresponding files from this repository:
      frontend/myapp/src/App.js and frontend/myapp/src/App.css
6. Start the frontend.
   ```
   cd myapp
   npm start
   ````

<img width="1393" alt="image" src="https://user-images.githubusercontent.com/127628127/235374868-b03d7f5a-b07c-429e-89d4-ba11af508664.png">
