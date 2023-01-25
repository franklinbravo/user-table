import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const UserDetails = ({ onHide, user }) => {
	return (
		<Modal size="lg" centered show={!!user} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>User Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="row">
					<div className="col-4">
						<h5>Photo:</h5>
					</div>
					<div className="col-8">
						<img height={100} width={100} src={user.image} alt={user.username} />
					</div>
					<div className="col-4">
						<h5>First Name:</h5>
					</div>
					<div className="col-8">
						<p>{user.firstName}</p>
					</div>
					<div className="col-4">
						<h5>Last Name:</h5>
					</div>
					<div className="col-8">
						<p>{user.lastName}</p>
					</div>
					<div className="col-4">
						<h5>Maiden Name:</h5>
					</div>
					<div className="col-8">
						<p>{user.maidenName}</p>
					</div>
					<div className="col-4">
						<h5>Age:</h5>
					</div>
					<div className="col-8">
						<p>{user.age}</p>
					</div>
					<div className="col-4">
						<h5>Username:</h5>
					</div>
					<div className="col-8">
						<p>{user.username}</p>
					</div>
					<div className="col-4">
						<h5>Gender:</h5>
					</div>
					<div className="col-8">
						<p>{user.gender}</p>
					</div>
					<div className="col-4">
						<h5>Email:</h5>
					</div>
					<div className="col-8">
						<p>{user.email}</p>
					</div>
					<div className="col-4">
						<h5>Phone:</h5>
					</div>
					<div className="col-8">
						<p>{user.phone}</p>
					</div>
					<div className="col-4">
						<h5>Birth Date:</h5>
					</div>
					<div className="col-8">
						<p>{user.birthDate}</p>
					</div>
					<div className="col-4">
						<h5>Blood Group:</h5>
					</div>
					<div className="col-8">
						<p>{user.bloodGroup}</p>
					</div>
					<div className="col-4">
						<h5>Height:</h5>
					</div>
					<div className="col-8">
						<p>{user.height}</p>
					</div>
					<div className="col-4">
						<h5>Weight:</h5>
					</div>
					<div className="col-8">
						<p>{user.weight}</p>
					</div>
					<div className="col-4">
						<h5>Eye Color:</h5>
					</div>
					<div className="col-8">
						<p>{user.eyeColor}</p>
					</div>
					<div className="col-4">
						<h5>Hair:</h5>
					</div>
					<div className="col-8">
						<p>
							{user.hair.type} {user.hair.color}
						</p>
					</div>
					<div className="col-4">
						<h5>Address:</h5>
					</div>
					<div className="col-8">
						<p>
							{user.address.address} {user.address.city}, {user.address.state}{' '}
							{user.address.postalCode}
						</p>
					</div>
					<div className="col-4">
						<h5>Mac Address:</h5>
					</div>
					<div className="col-8">
						<p>{user.macAddress}</p>
					</div>
					<div className="col-4">
						<h5>University:</h5>
					</div>
					<div className="col-8">
						<p>{user.university}</p>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default UserDetails;
