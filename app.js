<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
<script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD80lE73my48MjoSe-OftEgHpob-Dk-i6I",
        authDomain: "la-vendimia-682ba.firebaseapp.com",
        databaseURL: "https://la-vendimia-682ba.firebaseio.com",
        projectId: "la-vendimia-682ba",
        storageBucket: "la-vendimia-682ba.appspot.com",
        messagingSenderId: "733938493184"
    };
    firebase.initializeApp(config);

    var tablita = document.getElementById('reynaldo');

    var dbRef = firebase.database().ref().child('Clientes');

    dbRef.on('value', snap =>
        some(snap.val())
    );
</script>
