import Header from '../components/header'

export default function Home(){
    return (
        <main>
            <Header />
            <div>
                <p>Hello World.</p>
                <div style={{width: "80%"}}>
                    <img src="vercel.svg" />
                </div>
            </div>
        </main>
    )
}