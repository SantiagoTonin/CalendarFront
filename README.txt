Khronora

Descripción:
    Este proyecto fue creado como un calendario en el cual se puede guardar inforación e 
    imagenes que puede ser utilizado como un recordatorio, en su versión beta (en desarrollo)
    permitirá a los distintos usuarios registrados interactuar entre sí. 

Características:
    Registrarse como usuario e ingresar con cuenta propia.
    Crear entradas en el calendario propio, agregando textos e imágenes.
    Ver tus datos de usuario y editarlos.
    Ver el listado de usuarios al loguearse como administrador.
    Administrar la lista de usuarios registrados al loguearse como Super administrador.

Instalación:
    1-Clona este repositorio en tu máquina local.
        bash: git clone https://github.com/tu-usuario/tu-repositorio.git
    
    2-Navega al directorio del proyecto.
        bash: cd CalendarFront-react
    
    3-Instala las dependencias del proyecto.
        npm install
    
    4-Inicia la aplicación.
        npm start

Tecnologías utilizadas:
    React
    HTML
    CSS
    JavaScript

Estructura de archivos:
*public
    calendarLogo.png
    index.html
    manifest.json
*src
    api
        axiosApi.js

    assets
        fonts
        images
            aboutUs
            error404
            landing
            profile
            underConstruction
            profileBackground.png
            profileBackgroundLight2.png

    components
        abmTable
            table
                usersTable.css
                UsersTable.js

            usersModals
                CreateUsersModal.js
                DeleteUsersModal.js
                EditUsersModal.js
                usersModals.css

        addPublications
            addPublications.css
            AddPublications.js
            addPublications.module.css

        cellContent
            cell.css
            Cell.js

        dropdownMenu
            dropdownMenu.css
            DropdownMenu.js

        footer
            footer.css
            Footer.js
        
        header
            header.css
            Header.js

        loading
            loading.css
            loading.jsx
        
        loginForm
            login.css
            LoginForm.js
        
        passRecoveryForm
            ChangePassword.js
            passRecovery.css
            PassRecoveryForm.js
        
        post
            post.css
            Post.js
        
        profileForm
            profileForm.css
            ProfileForm.js
        
        ProfileLetter
            ProfileLetter.css
            ProfileLetter.js
        
        registerForm
            register.css
            RegisterForm.js
        
        sidebar
            sidebar.css
            Sidebar.js
        
        themeButton
            themeButton.css
            ThemeButton.js

    config
        axiosInit.js

    constants
        constants.js

    context
        ThemeContext.js

    helpers
        Navigate.js

    pages
        aboutUs
           aboutUs.css
           AboutUs.js 

        dashboard
            Abm.js
            abm.css

        error404
            Error404.js
            error404.css

        home
            Home.js
            home.css
            calendar.css

        landingPage
            Landing.js
            landingPage.css

        login
            Login.js

        passRecovery
            PassRecovery.js
            ChangePasswordPage.js

        publications
            Publications.js

        register
            Register.js

        underConstructionPage
            UnderConstruction.js
            underConstruction.css

        userProfile
            UserProfile.js
    
    routes
        myRoutes.js

    security
        ProtectedRoutes.js
        ValidRoutes.js
    
    styles
        buttonStyles.css

    App.js

    index.css

    index.js

*README

Autores:
    -Santiago Tonin Elias
    -Alexia Tonin Elias 

Licencia:
    Todos los derechos de autor de los recursos utilizados en este proyecto, como imágenes,
    logotipos y marcas registradas, pertenecen a sus respectivos dueños. 
    Estos recursos se utilizan únicamente con fines ilustrativos y para mejorar la 
    experiencia del usuario. Si crees que se han infringido tus derechos de autor, 
    por favor contáctanos y tomaremos las medidas correspondientes.

Recursos adicionales:
    Repositorio Backend: https://github.com/SantiagoTonin/CalendarBack