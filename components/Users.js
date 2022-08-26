import Router from 'next/router'

const Users = (props) => {
	console.log('usuaritos', props)
	return (
		<div>
			<h3>Users:</h3>
			<ul>
				{
					props.users && props.users.map(user => (
						<li onClick={ e => Router.push('/users/[id]', '/users/'+user.id) } className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}>
							<div>
								<h5>{user.first_name} {user.last_name}</h5>
								<p>{user.email}</p>
							</div>
							<img style={{ borderRadius: '50%'}} src={user.avatar}></img>
						</li>
					))
				}
			</ul>
		</div>

	)
}
export default Users