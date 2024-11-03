import { useState } from "react"
import styled from "styled-components"

const Companies = () =>{

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [studentData, setStudentData] = useState([]);

    console.log(studentData)
    const postData = (e)=>{
        e.preventDefault()
        let testData =studentData;
        testData.push({ userName,bio,email});

        setStudentData(testData)
        setUserName("")
        setEmail("")
        setBio("")


        
    }


    return (
        <div>
            <h1>Teadev Group of schools</h1>
            <h3>Student Info Entry</h3>

            <form action="" onSubmit={postData}>
                <input type="text" placeholder="Enter your name" value={userName} onChange={(e)=>{setUserName(e.target.value)}} required /> <br/> <br/>
                
                <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>  <br/> <br/>
                
                <textarea name="" id="" placeholder="Enter your Bio" value={bio} onChange={(e)=>{setBio(e.target.value)}} required></textarea><br/> <br/>
                
                <button>Submit info</button>

                <section>
                    <Card>
                        <h2>Name: {userName}</h2>
                        <i>email: {email}</i>
                        <p>Bio: {bio}</p>
                    </Card>
                </section>
            </form>
        </div>
    )
}

export default Companies

const Card = styled.div`
    min-height: 200px;
    min-width: 200px;
    background-color: orange;
`