
// function con của Main() component 
function Header(){
    return (
        <div class="header">
            <div class="logo">
                <img src="images/logoNCC.png" alt=""></img>
            </div>
        </div>
    )
}
function Introduce(){
    return (
        <div class="introduce">
            <strong>Lorem ipsum dolor sit asmet?</strong>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, 
                eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, 
                sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. 
                Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
            </p>
        </div>
    )
}
function Courses(props){
    const courses = [ 
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/css-icon.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.' 
        },
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/html-icon.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.' 
        },
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/url-icon.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.' 
        }
    ]
    return(
        <div class="courses">
            {courses.map((course) => (
                <div class="course">
                    <h3>{course.title}</h3>
                    <img src={course.src} alt=""></img>
                    <p>{course.description}</p>
                </div>
            ))}
            
        </div>
    )
}
function Footer(){
    return(
        <div class="footer">
            <p>Copyright © 2021</p>
        </div>
    )
}
//function con của App() component
function Menu(props){
    const items = ['Home', 'Services', 'News', 'Blog', 'Contact']
    return (
        <div class="menu">  
            <ul>
               {items.map((item, index) => ( <li key={index}><a href={props.href}>{item}</a></li>))}
            </ul>
        </div>
    )
}

function Main(){
    return(
        <div class='main'>
            <Header/>
            <Introduce/>
            <Courses/>
            <Footer/>
        </div>
    )
}
// App()component
function App(){
    return (
        <div id='app'>
            <Menu
                href = "#"
            />
            <Main/>
        </div>
    )
}
ReactDOM.render(App(),document.getElementById('root'))