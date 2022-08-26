import Head from 'next/head'
import Container from "../components/Container";
import Users from "../components/Users";
import fetch from 'isomorphic-fetch'

const Index = (props) =>{
	return(
		<Container>
		<Head>
			<title>Next.js - Home</title>
		</Head>
			<h1>Hola index</h1>
			<Users users={props.users} />
		</Container>
	)
}
Index.getInitialProps = async (ctx) => {
	const response = await fetch('https://reqres.in/api/users')
	const resJSON = await response.json()
	// console.log('datitos', data)
	return { users: resJSON.data }
}

export default Index