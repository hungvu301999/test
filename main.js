
// function con của Main() component 
function Header(){
    return (
        <div class="header">
            <div class="logo">
                <img src="images/icon.png" alt=""></img>
                <h1>NCC</h1>
            </div>
            <p>We do <span>it</span> with passion</p>
        </div>
    )
}
function Introduce(){
    return (
        <div class="introduce">
            <strong>Chúng tôi là ai?</strong>
            <p>
                NCC là một công ty chuyên cung cấp dịch vụ gia công phần mềm công nghệ thông tin. 
                Được thành lập từ năm 2014 và chúng tôi đã nhanh chóng khẳng định vị thế của mình trên thị trường, 
                hiện đang là một trong những doanh nghiệp công nghệ thông tin uy tín tại Việt Nam.
            </p>
        </div>
    )
}
function Courses(props){
    const courses = [ 
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/icon_css.avif',
        description: 'HTML là từ viết tắt của Hypertext Markup Language, là sự kết hợp của Hypertext và Markup, hay còn được gọi là ngôn ngữ siêu văn bản. HTML có chức năng giúp người dùng xây dựng và cấu trúc các phần trong trang web hoặc ứng dụng, thường được sử dụng trong phân chia các đoạn văn, heading, link, blockquotes,…' 
        },
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/icon_css.avif',
        description: 'HTML là từ viết tắt của Hypertext Markup Language, là sự kết hợp của Hypertext và Markup, hay còn được gọi là ngôn ngữ siêu văn bản. HTML có chức năng giúp người dùng xây dựng và cấu trúc các phần trong trang web hoặc ứng dụng, thường được sử dụng trong phân chia các đoạn văn, heading, link, blockquotes,…' 
        },
        {
        title:'Lorem ipsum dolor sit amet',
        src:'../images/icon_css.avif',
        description: 'HTML là từ viết tắt của Hypertext Markup Language, là sự kết hợp của Hypertext và Markup, hay còn được gọi là ngôn ngữ siêu văn bản. HTML có chức năng giúp người dùng xây dựng và cấu trúc các phần trong trang web hoặc ứng dụng, thường được sử dụng trong phân chia các đoạn văn, heading, link, blockquotes,…' 
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
            <p>Copyright 2021</p>
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