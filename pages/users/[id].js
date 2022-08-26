import { useRouter } from "next/router"
import fetch from 'isomorphic-fetch'
import Container from '../../components/Container'

const UserProfile = ({user}) => {
	const router = useRouter(); 
	const {id} = router.query;
	return(
		<Container>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-header text-center">
							<img style={{ borderRadius: '50%' }} src={user.avatar} />
						</div>
						<div className="card-body text-center">
							<h3>
								{user.id}. {user.first_name} {user.last_name}
							</h3>
								<p>Email: {user.email}</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

UserProfile.getInitialProps = async (ctx) => {
	const response = await fetch('https://reqres.in/api/users/'+ctx.query.id)
	const res = await response.json();
	return { user: res.data}
}

export default UserProfile