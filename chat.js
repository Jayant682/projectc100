// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy0AnFWwsv1YczSX6r3KaItJRlJNn4PcU",
    authDomain: "classtest-5fae6.firebaseapp.com",
    projectId: "classtest-5fae6",
    storageBucket: "classtest-5fae6.appspot.com",
    messagingSenderId: "505677396802",
    appId: "1:505677396802:web:1554916e958756a97f26db"
  };
//ADD YOUR FIREBASE LINKS HERE
firebase.initalizeApp(firebaseConfig);



function addUser()
   {
       user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
           purpose : "adding user"
       });
       
       localStorage.setItem("user_name", user_name);
   
       window.location = "chat_room.html";
       
   }
   





